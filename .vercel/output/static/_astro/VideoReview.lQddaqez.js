import{j as re}from"./jsx-runtime.XGodtQ4D.js";import{r as q,a as Ye,c as V,g as qe}from"./index.Nkt9jjly.js";const Je="modulepreload",Ze=function(e){return"/"+e},ae={},v=function(t,r,a){let n=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link");n=Promise.all(r.map(i=>{if(i=Ze(i),i in ae)return;ae[i]=!0;const s=i.endsWith(".css"),f=s?'[rel="stylesheet"]':"";if(!!a)for(let O=o.length-1;O>=0;O--){const D=o[O];if(D.href===i&&(!s||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${f}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Je,s||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),s)return new Promise((O,D)=>{c.addEventListener("load",O),c.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${i}`)))})}))}return n.then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};var Qe=function(t,r,a){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&Ge(o,r.attrs),r.text&&(o.text=""+r.text);var i="onload"in o?ne:et;i(o,a),o.onload||ne(o,a),n.appendChild(o)};function Ge(e,t){for(var r in t)e.setAttribute(r,t[r])}function ne(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function et(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var tt=function(t){return rt(t)&&!at(t)};function rt(e){return!!e&&typeof e=="object"}function at(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||it(e)}var nt=typeof Symbol=="function"&&Symbol.for,ot=nt?Symbol.for("react.element"):60103;function it(e){return e.$$typeof===ot}function st(e){return Array.isArray(e)?[]:{}}function I(e,t){return t.clone!==!1&&t.isMergeableObject(e)?S(st(e),e,t):e}function lt(e,t,r){return e.concat(t).map(function(a){return I(a,r)})}function ut(e,t){if(!t.customMerge)return S;var r=t.customMerge(e);return typeof r=="function"?r:S}function ct(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function oe(e){return Object.keys(e).concat(ct(e))}function pe(e,t){try{return t in e}catch{return!1}}function pt(e,t){return pe(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function ft(e,t,r){var a={};return r.isMergeableObject(e)&&oe(e).forEach(function(n){a[n]=I(e[n],r)}),oe(t).forEach(function(n){pt(e,n)||(pe(e,n)&&r.isMergeableObject(t[n])?a[n]=ut(n,r)(e[n],t[n],r):a[n]=I(t[n],r))}),a}function S(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||lt,r.isMergeableObject=r.isMergeableObject||tt,r.cloneUnlessOtherwiseSpecified=I;var a=Array.isArray(t),n=Array.isArray(e),o=a===n;return o?a?r.arrayMerge(e,t,r):ft(e,t,r):I(t,r)}S.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return S(a,n,r)},{})};var yt=S,fe=yt,dt=Object.create,N=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,_t=Object.getOwnPropertyNames,mt=Object.getPrototypeOf,Pt=Object.prototype.hasOwnProperty,vt=(e,t)=>{for(var r in t)N(e,r,{get:t[r],enumerable:!0})},ye=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of _t(t))!Pt.call(e,n)&&n!==r&&N(e,n,{get:()=>t[n],enumerable:!(a=ht(t,n))||a.enumerable});return e},J=(e,t,r)=>(r=e!=null?dt(mt(e)):{},ye(t||!e||!e.__esModule?N(r,"default",{value:e,enumerable:!0}):r,e)),gt=e=>ye(N({},"__esModule",{value:!0}),e),de={};vt(de,{callPlayer:()=>Nt,getConfig:()=>Dt,getSDK:()=>Lt,isBlobUrl:()=>kt,isMediaStream:()=>Ut,lazy:()=>Et,omit:()=>jt,parseEndTime:()=>It,parseStartTime:()=>Ct,queryString:()=>$t,randomString:()=>Mt,supportsWebKitPresentationMode:()=>xt});var U=gt(de),Ot=J(q),bt=J(Qe),wt=J(fe);const Et=e=>Ot.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),Tt=/[?&#](?:start|t)=([0-9hms]+)/,St=/[?&#]end=([0-9hms]+)/,W=/(\d+)(h|m|s)/g,At=/^\d+$/;function he(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const a=r[1];if(a.match(W))return Rt(a);if(At.test(a))return parseInt(a)}}function Rt(e){let t=0,r=W.exec(e);for(;r!==null;){const[,a,n]=r;n==="h"&&(t+=parseInt(a,10)*60*60),n==="m"&&(t+=parseInt(a,10)*60),n==="s"&&(t+=parseInt(a,10)),r=W.exec(e)}return t}function Ct(e){return he(e,Tt)}function It(e){return he(e,St)}function Mt(){return Math.random().toString(36).substr(2,5)}function $t(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function z(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const w={},Lt=function(t,r,a=null,n=()=>!0,o=bt.default){const i=z(r);return i&&n(i)?Promise.resolve(i):new Promise((s,f)=>{if(w[t]){w[t].push({resolve:s,reject:f});return}w[t]=[{resolve:s,reject:f}];const b=c=>{w[t].forEach(O=>O.resolve(c))};if(a){const c=window[a];window[a]=function(){c&&c(),b(z(r))}}o(t,c=>{c?(w[t].forEach(O=>O.reject(c)),w[t]=null):a||b(z(r))})})};function Dt(e,t){return(0,wt.default)(t.config,e.config)}function jt(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const o of n)r.indexOf(o)===-1&&(a[o]=e[o]);return a}function Nt(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function Ut(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function kt(e){return/^blob:/.test(e)}function xt(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var Z=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Vt=Object.getOwnPropertyNames,zt=Object.prototype.hasOwnProperty,Bt=(e,t)=>{for(var r in t)Z(e,r,{get:t[r],enumerable:!0})},Ft=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Vt(t))!zt.call(e,n)&&n!==r&&Z(e,n,{get:()=>t[n],enumerable:!(a=Ht(t,n))||a.enumerable});return e},Wt=e=>Ft(Z({},"__esModule",{value:!0}),e),_e={};Bt(_e,{AUDIO_EXTENSIONS:()=>Q,DASH_EXTENSIONS:()=>Ce,FLV_EXTENSIONS:()=>Ie,HLS_EXTENSIONS:()=>ee,MATCH_URL_DAILYMOTION:()=>Te,MATCH_URL_FACEBOOK:()=>ve,MATCH_URL_FACEBOOK_WATCH:()=>ge,MATCH_URL_KALTURA:()=>Re,MATCH_URL_MIXCLOUD:()=>Se,MATCH_URL_SOUNDCLOUD:()=>me,MATCH_URL_STREAMABLE:()=>Oe,MATCH_URL_TWITCH_CHANNEL:()=>Ee,MATCH_URL_TWITCH_VIDEO:()=>we,MATCH_URL_VIDYARD:()=>Ae,MATCH_URL_VIMEO:()=>Pe,MATCH_URL_WISTIA:()=>be,MATCH_URL_YOUTUBE:()=>K,VIDEO_EXTENSIONS:()=>G,canPlay:()=>Xt});var Kt=Wt(_e),ie=U;const K=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,me=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,Pe=/vimeo\.com\/(?!progressive_redirect).+/,ve=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,ge=/^https?:\/\/fb\.watch\/.+$/,Oe=/streamable\.com\/([a-z0-9]+)$/,be=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,we=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,Ee=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,Te=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Se=/mixcloud\.com\/([^/]+\/[^/]+)/,Ae=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Re=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,Q=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,G=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ee=/\.(m3u8)($|\?)/i,Ce=/\.(mpd)($|\?)/i,Ie=/\.(flv)($|\?)/i,X=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&X(t)||X(t.src))return!0;return!1}return(0,ie.isMediaStream)(e)||(0,ie.isBlobUrl)(e)?!0:Q.test(e)||G.test(e)||ee.test(e)||Ce.test(e)||Ie.test(e)},Xt={youtube:e=>e instanceof Array?e.every(t=>K.test(t)):K.test(e),soundcloud:e=>me.test(e)&&!Q.test(e),vimeo:e=>Pe.test(e)&&!G.test(e)&&!ee.test(e),facebook:e=>ve.test(e)||ge.test(e),streamable:e=>Oe.test(e),wistia:e=>be.test(e),twitch:e=>we.test(e)||Ee.test(e),dailymotion:e=>Te.test(e),mixcloud:e=>Se.test(e),vidyard:e=>Ae.test(e),kaltura:e=>Re.test(e),file:X};var te=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,qt=Object.getOwnPropertyNames,Jt=Object.prototype.hasOwnProperty,Zt=(e,t)=>{for(var r in t)te(e,r,{get:t[r],enumerable:!0})},Qt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of qt(t))!Jt.call(e,n)&&n!==r&&te(e,n,{get:()=>t[n],enumerable:!(a=Yt(t,n))||a.enumerable});return e},Gt=e=>Qt(te({},"__esModule",{value:!0}),e),Me={};Zt(Me,{default:()=>tr});var er=Gt(Me),P=U,m=Kt,tr=[{key:"youtube",name:"YouTube",canPlay:m.canPlay.youtube,lazyPlayer:(0,P.lazy)(()=>v(()=>import("./YouTube.bSyO8u2l.js").then(e=>e.Y),__vite__mapDeps([0,1])))},{key:"soundcloud",name:"SoundCloud",canPlay:m.canPlay.soundcloud,lazyPlayer:(0,P.lazy)(()=>v(()=>import("./SoundCloud.Kj-38m7a.js").then(e=>e.S),__vite__mapDeps([2,1])))},{key:"vimeo",name:"Vimeo",canPlay:m.canPlay.vimeo,lazyPlayer:(0,P.lazy)(()=>v(()=>import("./Vimeo.l72VDXja.js").then(e=>e.V),__vite__mapDeps([3,1])))},{key:"facebook",name:"Facebook",canPlay:m.canPlay.facebook,lazyPlayer:(0,P.lazy)(()=>v(()=>import("./Facebook.LI-8PXZP.js").then(e=>e.F),__vite__mapDeps([4,1])))},{key:"streamable",name:"Streamable",canPlay:m.canPlay.streamable,lazyPlayer:(0,P.lazy)(()=>v(()=>import("./Streamable.jNwcLLnc.js").then(e=>e.S),__vite__mapDeps([5,1])))},{key:"wistia",name:"Wistia",canPlay:m.canPlay.wistia,lazyPlayer:(0,P.lazy)(()=>v(()=>import("./Wistia.8SpwLycR.js").then(e=>e.W),__vite__mapDeps([6,1])))},{key:"twitch",name:"Twitch",canPlay:m.canPlay.twitch,lazyPlayer:(0,P.lazy)(()=>v(()=>import("./Twitch.KBMOCzmd.js").then(e=>e.T),__vite__mapDeps([7,1])))},{key:"dailymotion",name:"DailyMotion",canPlay:m.canPlay.dailymotion,lazyPlayer:(0,P.lazy)(()=>v(()=>import("./DailyMotion.WHeXlOxi.js").then(e=>e.D),__vite__mapDeps([8,1])))},{key:"mixcloud",name:"Mixcloud",canPlay:m.canPlay.mixcloud,lazyPlayer:(0,P.lazy)(()=>v(()=>import("./Mixcloud.Ynomo_gD.js").then(e=>e.M),__vite__mapDeps([9,1])))},{key:"vidyard",name:"Vidyard",canPlay:m.canPlay.vidyard,lazyPlayer:(0,P.lazy)(()=>v(()=>import("./Vidyard.ZQ2C3RtM.js").then(e=>e.V),__vite__mapDeps([10,1])))},{key:"kaltura",name:"Kaltura",canPlay:m.canPlay.kaltura,lazyPlayer:(0,P.lazy)(()=>v(()=>import("./Kaltura.V_liy6lA.js").then(e=>e.K),__vite__mapDeps([11,1])))},{key:"file",name:"FilePlayer",canPlay:m.canPlay.file,canEnablePIP:e=>m.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,P.supportsWebKitPresentationMode)())&&!m.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,P.lazy)(()=>v(()=>import("./FilePlayer.ssU8FFJM.js").then(e=>e.F),__vite__mapDeps([12,1])))}],se=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function rr(e,t){return!!(e===t||se(e)&&se(t))}function ar(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!rr(e[r],t[r]))return!1;return!0}function nr(e,t){t===void 0&&(t=ar);var r,a=[],n,o=!1;function i(){for(var s=[],f=0;f<arguments.length;f++)s[f]=arguments[f];return o&&r===this&&t(s,a)||(n=e.apply(this,s),o=!0,r=this,a=s),n}return i}const or=Object.freeze(Object.defineProperty({__proto__:null,default:nr},Symbol.toStringTag,{value:"Module"})),ir=Ye(or);var sr=typeof Element<"u",lr=typeof Map=="function",ur=typeof Set=="function",cr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function j(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!j(e[a],t[a]))return!1;return!0}var o;if(lr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;for(o=e.entries();!(a=o.next()).done;)if(!j(a.value[1],t.get(a.value[0])))return!1;return!0}if(ur&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(cr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[a]))return!1;if(sr&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((n[a]==="_owner"||n[a]==="__v"||n[a]==="__o")&&e.$$typeof)&&!j(e[n[a]],t[n[a]]))return!1;return!0}return e!==e&&t!==t}var $e=function(t,r){try{return j(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},Le={exports:{}},pr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fr=pr,yr=fr;function De(){}function je(){}je.resetWarningCache=De;var dr=function(){function e(a,n,o,i,s,f){if(f!==yr){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:je,resetWarningCache:De};return r.PropTypes=r,r};Le.exports=dr();var hr=Le.exports,_r=Object.create,k=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,Pr=Object.getOwnPropertyNames,vr=Object.getPrototypeOf,gr=Object.prototype.hasOwnProperty,Or=(e,t)=>{for(var r in t)k(e,r,{get:t[r],enumerable:!0})},Ne=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Pr(t))!gr.call(e,n)&&n!==r&&k(e,n,{get:()=>t[n],enumerable:!(a=mr(t,n))||a.enumerable});return e},br=(e,t,r)=>(r=e!=null?_r(vr(e)):{},Ne(t||!e||!e.__esModule?k(r,"default",{value:e,enumerable:!0}):r,e)),wr=e=>Ne(k({},"__esModule",{value:!0}),e),Ue={};Or(Ue,{defaultProps:()=>Sr,propTypes:()=>Tr});var ke=wr(Ue),Er=br(hr);const{string:d,bool:h,number:E,array:B,oneOfType:A,shape:g,object:_,func:p,node:le}=Er.default,Tr={url:A([d,B,_]),playing:h,loop:h,controls:h,volume:E,muted:h,playbackRate:E,width:A([d,E]),height:A([d,E]),style:_,progressInterval:E,playsinline:h,pip:h,stopOnUnmount:h,light:A([h,d,_]),playIcon:le,previewTabIndex:E,fallback:le,oEmbedUrl:d,wrapper:A([d,p,g({render:p.isRequired})]),config:g({soundcloud:g({options:_}),youtube:g({playerVars:_,embedOptions:_,onUnstarted:p}),facebook:g({appId:d,version:d,playerId:d,attributes:_}),dailymotion:g({params:_}),vimeo:g({playerOptions:_,title:d}),file:g({attributes:_,tracks:B,forceVideo:h,forceAudio:h,forceHLS:h,forceSafariHLS:h,forceDisableHls:h,forceDASH:h,forceFLV:h,hlsOptions:_,hlsVersion:d,dashVersion:d,flvVersion:d}),wistia:g({options:_,playerId:d,customControls:B}),mixcloud:g({options:_}),twitch:g({options:_,playerId:d}),vidyard:g({options:_})}),onReady:p,onStart:p,onPlay:p,onPause:p,onBuffer:p,onBufferEnd:p,onEnded:p,onError:p,onDuration:p,onSeek:p,onPlaybackRateChange:p,onPlaybackQualityChange:p,onProgress:p,onClickPreview:p,onEnablePIP:p,onDisablePIP:p},y=()=>{},Sr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:y},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:y,onStart:y,onPlay:y,onPause:y,onBuffer:y,onBufferEnd:y,onEnded:y,onError:y,onDuration:y,onSeek:y,onPlaybackRateChange:y,onPlaybackQualityChange:y,onProgress:y,onClickPreview:y,onEnablePIP:y,onDisablePIP:y};var Ar=Object.create,M=Object.defineProperty,Rr=Object.getOwnPropertyDescriptor,Cr=Object.getOwnPropertyNames,Ir=Object.getPrototypeOf,Mr=Object.prototype.hasOwnProperty,$r=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Lr=(e,t)=>{for(var r in t)M(e,r,{get:t[r],enumerable:!0})},xe=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Cr(t))!Mr.call(e,n)&&n!==r&&M(e,n,{get:()=>t[n],enumerable:!(a=Rr(t,n))||a.enumerable});return e},He=(e,t,r)=>(r=e!=null?Ar(Ir(e)):{},xe(t||!e||!e.__esModule?M(r,"default",{value:e,enumerable:!0}):r,e)),Dr=e=>xe(M({},"__esModule",{value:!0}),e),u=(e,t,r)=>($r(e,typeof t!="symbol"?t+"":t,r),r),Ve={};Lr(Ve,{default:()=>x});var jr=Dr(Ve),ue=He(q),Nr=He($e),ze=ke,Ur=U;const kr=5e3;class x extends ue.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"isReady",!1),u(this,"isPlaying",!1),u(this,"isLoading",!0),u(this,"loadOnReady",null),u(this,"startOnPlay",!0),u(this,"seekOnPlay",null),u(this,"onDurationCalled",!1),u(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),u(this,"getInternalPlayer",t=>this.player?this.player[t]:null),u(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const n={playedSeconds:t,played:t/a};r!==null&&(n.loadedSeconds=r,n.loaded=r/a),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),u(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:a,muted:n}=this.props;t(),!n&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),u(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),u(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),u(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:a}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),u(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),u(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),u(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:a,volume:n,muted:o,playbackRate:i,pip:s,loop:f,activePlayer:b,disableDeferredLoading:c}=this.props;if(!(0,Nr.default)(t.url,r)){if(this.isLoading&&!b.forceLoad&&!c&&!(0,Ur.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&s&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!s&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==i&&this.player.setPlaybackRate&&this.player.setPlaybackRate(i),t.loop!==f&&this.player.setLoop&&this.player.setLoop(f)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},kr));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?ue.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}u(x,"displayName","Player");u(x,"propTypes",ze.propTypes);u(x,"defaultProps",ze.defaultProps);var xr=Object.create,$=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Vr=Object.getOwnPropertyNames,zr=Object.getPrototypeOf,Br=Object.prototype.hasOwnProperty,Fr=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Wr=(e,t)=>{for(var r in t)$(e,r,{get:t[r],enumerable:!0})},Be=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Vr(t))!Br.call(e,n)&&n!==r&&$(e,n,{get:()=>t[n],enumerable:!(a=Hr(t,n))||a.enumerable});return e},L=(e,t,r)=>(r=e!=null?xr(zr(e)):{},Be(t||!e||!e.__esModule?$(r,"default",{value:e,enumerable:!0}):r,e)),Kr=e=>Be($({},"__esModule",{value:!0}),e),l=(e,t,r)=>(Fr(e,typeof t!="symbol"?t+"":t,r),r),Fe={};Wr(Fe,{createReactPlayer:()=>ta});var Xr=Kr(Fe),T=L(q),Yr=L(fe),F=L(ir),ce=L($e),C=ke,We=U,qr=L(jr);const Jr=(0,We.lazy)(()=>v(()=>import("./Preview.obu8yYP-.js").then(e=>e.P),__vite__mapDeps([13,1]))),Zr=typeof window<"u"&&window.document,Qr=typeof V<"u"&&V.window&&V.window.document,Gr=Object.keys(C.propTypes),ea=Zr||Qr?T.Suspense:()=>null,R=[],ta=(e,t)=>{var r;return r=class extends T.Component{constructor(){super(...arguments),l(this,"state",{showPreview:!!this.props.light}),l(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),l(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),l(this,"showPreview",()=>{this.setState({showPreview:!0})}),l(this,"getDuration",()=>this.player?this.player.getDuration():null),l(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),l(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),l(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),l(this,"seekTo",(a,n,o)=>{if(!this.player)return null;this.player.seekTo(a,n,o)}),l(this,"handleReady",()=>{this.props.onReady(this)}),l(this,"getActivePlayer",(0,F.default)(a=>{for(const n of[...R,...e])if(n.canPlay(a))return n;return t||null})),l(this,"getConfig",(0,F.default)((a,n)=>{const{config:o}=this.props;return Yr.default.all([C.defaultProps.config,C.defaultProps.config[n]||{},o,o[n]||{}])})),l(this,"getAttributes",(0,F.default)(a=>(0,We.omit)(this.props,Gr))),l(this,"renderActivePlayer",a=>{if(!a)return null;const n=this.getActivePlayer(a);if(!n)return null;const o=this.getConfig(a,n.key);return T.default.createElement(qr.default,{...this.props,key:n.key,ref:this.references.player,config:o,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(a,n){return!(0,ce.default)(this.props,a)||!(0,ce.default)(this.state,n)}componentDidUpdate(a){const{light:n}=this.props;!a.light&&n&&this.setState({showPreview:!0}),a.light&&!n&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:n,playIcon:o,previewTabIndex:i,oEmbedUrl:s}=this.props;return T.default.createElement(Jr,{url:a,light:n,playIcon:o,previewTabIndex:i,oEmbedUrl:s,onClick:this.handleClickPreview})}render(){const{url:a,style:n,width:o,height:i,fallback:s,wrapper:f}=this.props,{showPreview:b}=this.state,c=this.getAttributes(a),O=typeof f=="string"?this.references.wrapper:void 0;return T.default.createElement(f,{ref:O,style:{...n,width:o,height:i},...c},T.default.createElement(ea,{fallback:s},b?this.renderPreview(a):this.renderActivePlayer(a)))}},l(r,"displayName","ReactPlayer"),l(r,"propTypes",C.propTypes),l(r,"defaultProps",C.defaultProps),l(r,"addCustomPlayer",a=>{R.push(a)}),l(r,"removeCustomPlayers",()=>{R.length=0}),l(r,"canPlay",a=>{for(const n of[...R,...e])if(n.canPlay(a))return!0;return!1}),l(r,"canEnablePIP",a=>{for(const n of[...R,...e])if(n.canEnablePIP&&n.canEnablePIP(a))return!0;return!1}),r};var ra=Object.create,H=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,na=Object.getOwnPropertyNames,oa=Object.getPrototypeOf,ia=Object.prototype.hasOwnProperty,sa=(e,t)=>{for(var r in t)H(e,r,{get:t[r],enumerable:!0})},Ke=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of na(t))!ia.call(e,n)&&n!==r&&H(e,n,{get:()=>t[n],enumerable:!(a=aa(t,n))||a.enumerable});return e},la=(e,t,r)=>(r=e!=null?ra(oa(e)):{},Ke(t||!e||!e.__esModule?H(r,"default",{value:e,enumerable:!0}):r,e)),ua=e=>Ke(H({},"__esModule",{value:!0}),e),Xe={};sa(Xe,{default:()=>ya});var ca=ua(Xe),Y=la(er),pa=Xr;const fa=Y.default[Y.default.length-1];var ya=(0,pa.createReactPlayer)(Y.default,fa);const da=qe(ca),ma=({url:e})=>re.jsx("div",{className:"player-wrapper h-full w-full rounded-lg",children:re.jsx(da,{className:"react-player",url:e,width:"100%",height:"100%",light:"/company-poster.png",playing:!0,controls:!0,config:{youtube:{playerVars:{showinfo:1}}}})});export{ma as V,Kt as p,U as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/YouTube.bSyO8u2l.js","_astro/index.Nkt9jjly.js","_astro/SoundCloud.Kj-38m7a.js","_astro/Vimeo.l72VDXja.js","_astro/Facebook.LI-8PXZP.js","_astro/Streamable.jNwcLLnc.js","_astro/Wistia.8SpwLycR.js","_astro/Twitch.KBMOCzmd.js","_astro/DailyMotion.WHeXlOxi.js","_astro/Mixcloud.Ynomo_gD.js","_astro/Vidyard.ZQ2C3RtM.js","_astro/Kaltura.V_liy6lA.js","_astro/FilePlayer.ssU8FFJM.js","_astro/Preview.obu8yYP-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}