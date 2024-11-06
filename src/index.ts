import { Router } from 'express';
import { Chalk } from 'chalk';
import YTDlpWrap from 'yt-dlp-wrap';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';

interface PluginInfo {
    id: string;
    name: string;
    description: string;
}

interface Plugin {
    init: (router: Router) => Promise<void>;
    exit: () => Promise<void>;
    info: PluginInfo;
}

interface VideoInfo {
    id: string;
    title: string;
    url: string;
    thumbnail: string;
    duration: number;
    description: string;
    uploader: string;
    view_count: number;
    upload_date: string;
    subtitles?: string; // Add a field to store the subtitles.
}

const chalk = new Chalk();
const MODULE_NAME = '[SillyTavern-YouTube-Videos-Server]';
const INFO_CACHE = new Map<string, VideoInfo>();

/**
 * Get the YouTube video ID from a YouTube URL.
 * @param url YouTube URL
 * @returns YouTube video ID or null
 */
function getYouTubeId(url: string): string | null {
    let regex = /(http:\/\/|https:\/\/)?(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    let match = regex.exec(url);
    if (match) {
        return match[4];
    }
    return null;
}

async function getYoutubeVideoUrl(url: string): Promise<string> {
    const videoInfo = await getVideoInfo(url, false);
    const videoUrl = videoInfo?.url;

    if (!videoUrl) {
        throw new Error('Failed to get video URL');
    }

    console.log(chalk.green(MODULE_NAME), 'Video URL:', videoUrl);
    return videoUrl;
}

async function getVideoInfo(url: string, useCache: boolean): Promise<VideoInfo> {
    const videoId = getYouTubeId(url);
    if (useCache && videoId && INFO_CACHE.has(videoId)) {
        const cachedInfo = INFO_CACHE.get(videoId);
        if (cachedInfo) {
            return cachedInfo;
        }
    }

    if (!videoId) {
        console.warn(chalk.yellow(MODULE_NAME), 'Unrecognized URL format. It might not be a YouTube video.', url);
    }

    console.log(chalk.green(MODULE_NAME), 'Getting YouTube video:', videoId);
    const fileName = 'yt-dlp' + (os.platform() === 'win32' ? '.exe' : '');
    const filePath = path.join(__dirname, fileName);
    if (!fs.existsSync(filePath)) {
        console.log(chalk.green(MODULE_NAME), 'Downloading yt-dlp');
        await YTDlpWrap.downloadFromGithub(filePath);
    }
    const ytDlpWrap = new YTDlpWrap(filePath);

    // Extract video info along with subtitles
    const options = [
        '--skip-download',       // Don't download the video itself
        '--write-auto-sub',      // Write automatic subtitles (if available)
        '--sub-lang', 'en',      // Specify the language as English
        '--print-json'           // Get video info as JSON
    ];

    const videoInfoRaw = await ytDlpWrap.execPromise([url, ...options]);
    const videoInfoJson = JSON.parse(videoInfoRaw);
    
    const videoInfo: VideoInfo = {
        id: videoId ?? '',
        title: videoInfoJson.title,
        url: videoInfoJson.url,
        thumbnail: videoInfoJson.thumbnail,
        duration: videoInfoJson.duration,
        description: videoInfoJson.description,
        uploader: videoInfoJson.uploader,
        view_count: videoInfoJson.view_count,
        upload_date: videoInfoJson.upload_date,
        subtitles: videoInfoJson.subtitles ? videoInfoJson.subtitles[0]?.url : null, // Extract subtitles URL if available.
    };

    if (videoId) {
        INFO_CACHE.set(videoId, videoInfo);
    }
    return videoInfo;
}

async function getYoutubeTranscript(url: string): Promise<string> {
    const videoInfo = await getVideoInfo(url, true);
    const subtitleUrl = videoInfo?.subtitles;

    if (!subtitleUrl) {
        throw new Error('Transcript not available for this video');
    }

    console.log(chalk.green(MODULE_NAME), 'Fetching transcript from:', subtitleUrl);

    // Fetch the subtitles (transcript) content
    const response = await fetch(subtitleUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch transcript');
    }

    const transcript = await response.text();
    return transcript;
}

/**
 * Initialize the plugin.
 * @param router Express Router
 */
export async function init(router: Router): Promise<void> {
    router.post('/probe', (_req, res) => {
        return res.sendStatus(204);
    });

    router.get('/play/:url(*)', async (req, res) => {
        try {
            if (!req.query.url && !req.params.url) {
                return res.status(400).send('Bad Request');
            }
            const url = (req.params.url || req.query.url) as string;
            const videoUrl = await getYoutubeVideoUrl(url);
            return res.location(videoUrl).sendStatus(302);
        } catch (error) {
            console.error(chalk.red(MODULE_NAME), 'Download failed', error);
            return res.status(500).send('Internal Server Error');
        }
    });

    router.get('/info/:url(*)', async (req, res) => {
        try {
            if (!req.query.url && !req.params.url) {
                return res.status(400).send('Bad Request');
            }
            const url = (req.params.url || req.query.url) as string;
            const videoInfo = await getVideoInfo(url, true);
            return res.send(videoInfo);
        } catch (error) {
            console.error(chalk.red(MODULE_NAME), 'Failed to get video info', error);
            return res.status(500).send('Internal Server Error');
        }
    });

    // Add a new route to get the transcript
    router.get('/transcript/:url(*)', async (req, res) => {
        try {
            if (!req.query.url && !req.params.url) {
                return res.status(400).send('Bad Request');
            }
            const url = (req.params.url || req.query.url) as string;
            const transcript = await getYoutubeTranscript(url);
            return res.send({ transcript });
        } catch (error) {
            console.error(chalk.red(MODULE_NAME), 'Failed to get transcript', error);
            return res.status(500).send('Internal Server Error');
        }
    });

    console.log(chalk.green(MODULE_NAME), 'Plugin loaded!');
}

export async function exit(): Promise<void> {
    console.log(chalk.yellow(MODULE_NAME), 'Plugin exited');
}

export const info: PluginInfo = {
    id: 'youtube',
    name: 'YouTube Videos',
    description: 'Extract a direct video URL to a YouTube video, along with transcript fetching.',
};

const plugin: Plugin = {
    init,
    exit,
    info,
};

export default plugin;
