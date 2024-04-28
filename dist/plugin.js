(()=>{"use strict";var e={156:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},s=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function l(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,l)}u((n=n.apply(e,t||[])).next())}))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.info=t.exit=t.init=void 0;const u=r(237),a=l(r(549)),c=i(r(857)),f=i(r(928)),d=i(r(896)),p=new u.Chalk,h="[SillyTavern-YouTube-Player]";function b(e){return s(this,void 0,void 0,(function*(){e.post("/probe",((e,t)=>t.sendStatus(204))),e.get("/play/:url(*)",((e,t)=>s(this,void 0,void 0,(function*(){try{if(!e.query.url&&!e.params.url)return t.status(400).send("Bad Request");const r=e.params.url||e.query.url,n=yield function(e){return s(this,void 0,void 0,(function*(){console.log(p.green(h),"Getting YouTube video:",e);const t="yt-dlp"+("win32"===c.platform()?".exe":""),r=f.join(__dirname,t);d.existsSync(r)||(console.log(p.green(h),"Downloading yt-dlp"),yield a.default.downloadFromGithub(r));const n=new a.default(r),o=yield n.getVideoInfo(e),i=null==o?void 0:o.url;if(!i)throw new Error("Failed to get video URL");return console.log(p.green(h),"Video URL:",i),i}))}(r);return t.location(n).sendStatus(302)}catch(e){return console.error(p.red(h),"Download failed",e),t.status(500).send("Internal Server Error")}})))),console.log(p.green(h),"Plugin loaded!")}))}function g(){return s(this,void 0,void 0,(function*(){console.log(p.yellow(h),"Plugin exited")}))}t.init=b,t.exit=g,t.info={id:"youtube",name:"YouTube Player",description:"Extract a direct video URL to a YouTube video."};const v={init:b,exit:g,info:t.info};t.default=v},549:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function l(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,l)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=r(434),l=r(317),u=i(r(896)),a=i(r(692)),c=i(r(857)),f=r(203),d="yt-dlp",p=/\[download\] *(.*) of ([^ ]*)(:? *at *([^ ]*))?(:? *ETA *([^ ]*))?/,h=function(){function e(e){void 0===e&&(e=d),this.binaryPath=e}return e.prototype.getBinaryPath=function(){return this.binaryPath},e.prototype.setBinaryPath=function(e){this.binaryPath=e},e.createGetMessage=function(e){return new Promise((function(t,r){a.default.get(e,(function(e){e.on("error",(function(e){return r(e)})),t(e)}))}))},e.processMessageToFile=function(e,t){var r=u.default.createWriteStream(t);return new Promise((function(t,n){e.pipe(r),e.on("error",(function(e){return n(e)})),r.on("finish",(function(){return 200==e.statusCode?t(e):n(e)}))}))},e.downloadFile=function(t,r){return n(this,void 0,void 0,(function(){var n,i;return o(this,(function(o){switch(o.label){case 0:n=t,o.label=1;case 1:return n?[4,e.createGetMessage(n)]:[3,6];case 2:return(i=o.sent()).headers.location?(n=i.headers.location,[3,5]):[3,3];case 3:return[4,e.processMessageToFile(i,r)];case 4:return[2,o.sent()];case 5:return[3,1];case 6:return[2]}}))}))},e.getGithubReleases=function(e,t){return void 0===e&&(e=1),void 0===t&&(t=1),new Promise((function(r,n){var o="https://api.github.com/repos/yt-dlp/yt-dlp/releases?page="+e+"&per_page="+t;a.default.get(o,{headers:{"User-Agent":"node"}},(function(e){var t="";e.setEncoding("utf8"),e.on("data",(function(e){return t+=e})),e.on("error",(function(e){return n(e)})),e.on("end",(function(){return 200==e.statusCode?r(JSON.parse(t)):n(e)}))}))}))},e.downloadFromGithub=function(t,r,i){return void 0===i&&(i=c.default.platform()),n(this,void 0,void 0,(function(){var n,s,l;return o(this,(function(o){switch(o.label){case 0:return n="win32"==i,s="".concat(d).concat(n?".exe":""),r?[3,2]:[4,e.getGithubReleases(1,1)];case 1:r=o.sent()[0].tag_name,o.label=2;case 2:return t||(t="./"+s),l="https://github.com/yt-dlp/yt-dlp/releases/download/"+r+"/"+s,[4,e.downloadFile(l,t)];case 3:return o.sent(),!n&&u.default.chmodSync(t,"777"),[2]}}))}))},e.prototype.exec=function(t,r,n){void 0===t&&(t=[]),void 0===r&&(r={}),void 0===n&&(n=null),r=e.setDefaultOptions(r);var o=new s.EventEmitter,i=(0,l.spawn)(this.binaryPath,t,r);o.ytDlpProcess=i,e.bindAbortSignal(n,i);var u,a="";return i.stdout.on("data",(function(t){return e.emitYoutubeDlEvents(t.toString(),o)})),i.stderr.on("data",(function(e){return a+=e.toString()})),i.on("error",(function(e){return u=e})),i.on("close",(function(t){0===t||i.killed?o.emit("close",t):o.emit("error",e.createError(t,u,a))})),o},e.prototype.execPromise=function(t,r,n){var o,i=this;void 0===t&&(t=[]),void 0===r&&(r={}),void 0===n&&(n=null);var s=new Promise((function(s,u){r=e.setDefaultOptions(r),o=(0,l.execFile)(i.binaryPath,t,r,(function(t,r,n){t&&u(e.createError(t,null,n)),s(r)})),e.bindAbortSignal(n,o)}));return s.ytDlpProcess=o,s},e.prototype.execStream=function(t,r,n){void 0===t&&(t=[]),void 0===r&&(r={}),void 0===n&&(n=null);var o=new f.Readable({read:function(e){}});r=e.setDefaultOptions(r),t=t.concat(["-o","-"]);var i=(0,l.spawn)(this.binaryPath,t,r);o.ytDlpProcess=i,e.bindAbortSignal(n,i);var s,u="";return i.stdout.on("data",(function(e){return o.push(e)})),i.stderr.on("data",(function(t){var r=t.toString();e.emitYoutubeDlEvents(r,o),u+=r})),i.on("error",(function(e){return s=e})),i.on("close",(function(t){if(0===t||i.killed)o.emit("close"),o.destroy(),o.emit("end");else{var r=e.createError(t,s,u);o.emit("error",r),o.destroy(r)}})),o},e.prototype.getExtractors=function(){return n(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.execPromise(["--list-extractors"])];case 1:return[2,e.sent().split("\n")]}}))}))},e.prototype.getExtractorDescriptions=function(){return n(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.execPromise(["--extractor-descriptions"])];case 1:return[2,e.sent().split("\n")]}}))}))},e.prototype.getHelp=function(){return n(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.execPromise(["--help"])];case 1:return[2,e.sent()]}}))}))},e.prototype.getUserAgent=function(){return n(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.execPromise(["--dump-user-agent"])];case 1:return[2,e.sent()]}}))}))},e.prototype.getVersion=function(){return n(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.execPromise(["--version"])];case 1:return[2,e.sent()]}}))}))},e.prototype.getVideoInfo=function(e){return n(this,void 0,void 0,(function(){var t;return o(this,(function(r){switch(r.label){case 0:return"string"==typeof e&&(e=[e]),e.includes("-f")||e.includes("--format")||(e=e.concat(["-f","best"])),[4,this.execPromise(e.concat(["--dump-json"]))];case 1:t=r.sent();try{return[2,JSON.parse(t)]}catch(e){return[2,JSON.parse("["+t.replace(/\n/g,",").slice(0,-1)+"]")]}return[2]}}))}))},e.bindAbortSignal=function(e,t){null==e||e.addEventListener("abort",(function(){try{"win32"===c.default.platform()?(0,l.execSync)("taskkill /pid ".concat(t.pid," /T /F")):(0,l.execSync)("pgrep -P ".concat(t.pid," | xargs -L 1 kill"))}catch(e){}finally{t.kill()}}))},e.setDefaultOptions=function(e){return e.maxBuffer||(e.maxBuffer=1073741824),e},e.createError=function(e,t,r){var n="\nError code: "+e;return t&&(n+="\n\nProcess error:\n"+t),r&&(n+="\n\nStderr:\n"+r),new Error(n)},e.emitYoutubeDlEvents=function(e,t){for(var r=0,n=e.split(/\r|\n/g).filter(Boolean);r<n.length;r++){var o=n[r];if("["==o[0]){var i=o.match(p);if(i){var s={};s.percent=parseFloat(i[1].replace("%","")),s.totalSize=i[2].replace("~",""),s.currentSpeed=i[4],s.eta=i[6],t.emit("progress",s)}var l=o.split(" ")[0].replace("[","").replace("]",""),u=o.substring(o.indexOf(" "),o.length);t.emit("ytDlpEvent",l,u)}}},e}();t.default=h},317:e=>{e.exports=require("child_process")},434:e=>{e.exports=require("events")},896:e=>{e.exports=require("fs")},692:e=>{e.exports=require("https")},857:e=>{e.exports=require("os")},928:e=>{e.exports=require("path")},203:e=>{e.exports=require("stream")},237:(e,t,r)=>{r.r(t),r.d(t,{Chalk:()=>S,backgroundColorNames:()=>a,backgroundColors:()=>a,chalkStderr:()=>Y,colorNames:()=>c,colors:()=>c,default:()=>F,foregroundColorNames:()=>u,foregroundColors:()=>u,modifierNames:()=>l,modifiers:()=>l,supportsColor:()=>w,supportsColorStderr:()=>T});const n=(e=0)=>t=>`[${t+e}m`,o=(e=0)=>t=>`[${38+e};5;${t}m`,i=(e=0)=>(t,r,n)=>`[${38+e};2;${t};${r};${n}m`,s={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}},l=Object.keys(s.modifier),u=Object.keys(s.color),a=Object.keys(s.bgColor),c=[...u,...a];const f=function(){const e=new Map;for(const[t,r]of Object.entries(s)){for(const[t,n]of Object.entries(r))s[t]={open:`[${n[0]}m`,close:`[${n[1]}m`},r[t]=s[t],e.set(n[0],n[1]);Object.defineProperty(s,t,{value:r,enumerable:!1})}return Object.defineProperty(s,"codes",{value:e,enumerable:!1}),s.color.close="[39m",s.bgColor.close="[49m",s.color.ansi=n(),s.color.ansi256=o(),s.color.ansi16m=i(),s.bgColor.ansi=n(10),s.bgColor.ansi256=o(10),s.bgColor.ansi16m=i(10),Object.defineProperties(s,{rgbToAnsi256:{value:(e,t,r)=>e===t&&t===r?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(r/255*5),enumerable:!1},hexToRgb:{value(e){const t=/[a-f\d]{6}|[a-f\d]{3}/i.exec(e.toString(16));if(!t)return[0,0,0];let[r]=t;3===r.length&&(r=[...r].map((e=>e+e)).join(""));const n=Number.parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},enumerable:!1},hexToAnsi256:{value:e=>s.rgbToAnsi256(...s.hexToRgb(e)),enumerable:!1},ansi256ToAnsi:{value(e){if(e<8)return 30+e;if(e<16)return e-8+90;let t,r,n;if(e>=232)t=(10*(e-232)+8)/255,r=t,n=t;else{const o=(e-=16)%36;t=Math.floor(e/36)/5,r=Math.floor(o/6)/5,n=o%6/5}const o=2*Math.max(t,r,n);if(0===o)return 30;let i=30+(Math.round(n)<<2|Math.round(r)<<1|Math.round(t));return 2===o&&(i+=60),i},enumerable:!1},rgbToAnsi:{value:(e,t,r)=>s.ansi256ToAnsi(s.rgbToAnsi256(e,t,r)),enumerable:!1},hexToAnsi:{value:e=>s.ansi256ToAnsi(s.hexToAnsi256(e)),enumerable:!1}}),s}(),d=require("node:process"),p=require("node:os"),h=require("node:tty");function b(e,t=(globalThis.Deno?globalThis.Deno.args:d.argv)){const r=e.startsWith("-")?"":1===e.length?"-":"--",n=t.indexOf(r+e),o=t.indexOf("--");return-1!==n&&(-1===o||n<o)}const{env:g}=d;let v;function y(e,{streamIsTTY:t,sniffFlags:r=!0}={}){const n=function(){if("FORCE_COLOR"in g)return"true"===g.FORCE_COLOR?1:"false"===g.FORCE_COLOR?0:0===g.FORCE_COLOR.length?1:Math.min(Number.parseInt(g.FORCE_COLOR,10),3)}();void 0!==n&&(v=n);const o=r?v:n;if(0===o)return 0;if(r){if(b("color=16m")||b("color=full")||b("color=truecolor"))return 3;if(b("color=256"))return 2}if("TF_BUILD"in g&&"AGENT_NAME"in g)return 1;if(e&&!t&&void 0===o)return 0;const i=o||0;if("dumb"===g.TERM)return i;if("win32"===d.platform){const e=p.release().split(".");return Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in g)return"GITHUB_ACTIONS"in g||"GITEA_ACTIONS"in g?3:["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","BUILDKITE","DRONE"].some((e=>e in g))||"codeship"===g.CI_NAME?1:i;if("TEAMCITY_VERSION"in g)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(g.TEAMCITY_VERSION)?1:0;if("truecolor"===g.COLORTERM)return 3;if("xterm-kitty"===g.TERM)return 3;if("TERM_PROGRAM"in g){const e=Number.parseInt((g.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(g.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(g.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(g.TERM)||"COLORTERM"in g?1:i}function m(e,t={}){return function(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}(y(e,{streamIsTTY:e&&e.isTTY,...t}))}b("no-color")||b("no-colors")||b("color=false")||b("color=never")?v=0:(b("color")||b("colors")||b("color=true")||b("color=always"))&&(v=1);const O={stdout:m({isTTY:h.isatty(1)}),stderr:m({isTTY:h.isatty(2)})};function x(e,t,r){let n=e.indexOf(t);if(-1===n)return e;const o=t.length;let i=0,s="";do{s+=e.slice(i,n)+t+r,i=n+o,n=e.indexOf(t,i)}while(-1!==n);return s+=e.slice(i),s}const{stdout:w,stderr:T}=O,_=Symbol("GENERATOR"),P=Symbol("STYLER"),E=Symbol("IS_EMPTY"),R=["ansi","ansi","ansi256","ansi16m"],M=Object.create(null);class S{constructor(e){return C(e)}}const C=e=>{const t=(...e)=>e.join(" ");return((e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const r=w?w.level:0;e.level=void 0===t.level?r:t.level})(t,e),Object.setPrototypeOf(t,A.prototype),t};function A(e){return C(e)}Object.setPrototypeOf(A.prototype,Function.prototype);for(const[e,t]of Object.entries(f))M[e]={get(){const r=N(this,k(t.open,t.close,this[P]),this[E]);return Object.defineProperty(this,e,{value:r}),r}};M.visible={get(){const e=N(this,this[P],!0);return Object.defineProperty(this,"visible",{value:e}),e}};const j=(e,t,r,...n)=>"rgb"===e?"ansi16m"===t?f[r].ansi16m(...n):"ansi256"===t?f[r].ansi256(f.rgbToAnsi256(...n)):f[r].ansi(f.rgbToAnsi(...n)):"hex"===e?j("rgb",t,r,...f.hexToRgb(...n)):f[r][e](...n),B=["rgb","hex","ansi256"];for(const e of B){M[e]={get(){const{level:t}=this;return function(...r){const n=k(j(e,R[t],"color",...r),f.color.close,this[P]);return N(this,n,this[E])}}};M["bg"+e[0].toUpperCase()+e.slice(1)]={get(){const{level:t}=this;return function(...r){const n=k(j(e,R[t],"bgColor",...r),f.bgColor.close,this[P]);return N(this,n,this[E])}}}}const I=Object.defineProperties((()=>{}),{...M,level:{enumerable:!0,get(){return this[_].level},set(e){this[_].level=e}}}),k=(e,t,r)=>{let n,o;return void 0===r?(n=e,o=t):(n=r.openAll+e,o=t+r.closeAll),{open:e,close:t,openAll:n,closeAll:o,parent:r}},N=(e,t,r)=>{const n=(...e)=>D(n,1===e.length?""+e[0]:e.join(" "));return Object.setPrototypeOf(n,I),n[_]=e,n[P]=t,n[E]=r,n},D=(e,t)=>{if(e.level<=0||!t)return e[E]?"":t;let r=e[P];if(void 0===r)return t;const{openAll:n,closeAll:o}=r;if(t.includes(""))for(;void 0!==r;)t=x(t,r.close,r.open),r=r.parent;const i=t.indexOf("\n");return-1!==i&&(t=function(e,t,r,n){let o=0,i="";do{const s="\r"===e[n-1];i+=e.slice(o,s?n-1:n)+t+(s?"\r\n":"\n")+r,o=n+1,n=e.indexOf("\n",o)}while(-1!==n);return i+=e.slice(o),i}(t,o,n,i)),n+t+o};Object.defineProperties(A.prototype,M);const G=A(),Y=A({level:T?T.level:0}),F=G}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n=r(156),o=exports,i=n.default;for(var s in i)o[s]=i[s];i.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();