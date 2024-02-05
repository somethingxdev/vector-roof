import{r as s,R as g,e as se}from"./index.Nkt9jjly.js";import{r as $t}from"./index.Hbs-fNTC.js";import{j as I}from"./jsx-runtime.XGodtQ4D.js";import{u as xt,_ as Xe}from"./index.YV3eq1v5.js";var Lt=Object.defineProperty,Pt=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t,n)=>(Pt(e,typeof t!="symbol"?t+"":t,n),n);let Ft=class{constructor(){Ce(this,"current",this.detect()),Ce(this,"handoffState","pending"),Ce(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},k=new Ft,C=(e,t)=>{k.isServer?s.useEffect(e,t):s.useLayoutEffect(e,t)};function j(e){let t=s.useRef(e);return C(()=>{t.current=e},[e]),t}let w=function(e){let t=j(e);return g.useCallback((...n)=>t.current(...n),[t])};function Se(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function z(){let e=[],t={addEventListener(n,r,o,i){return n.addEventListener(r,o,i),t.add(()=>n.removeEventListener(r,o,i))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Se(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let i=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:i})})},group(n){let r=z();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}function qe(){let[e]=s.useState(z);return s.useEffect(()=>()=>e.dispose(),[e]),e}function Ct(){let e=typeof document>"u";return"useSyncExternalStore"in se?(t=>t.useSyncExternalStore)(se)(()=>()=>{},()=>!1,()=>!e):!1}function ee(){let e=Ct(),[t,n]=s.useState(k.isHandoffComplete);return t&&k.isHandoffComplete===!1&&n(!1),s.useEffect(()=>{t!==!0&&n(!0)},[t]),s.useEffect(()=>k.handoff(),[]),e?!1:t}var ze;let te=(ze=g.useId)!=null?ze:function(){let e=ee(),[t,n]=g.useState(e?()=>k.nextId():null);return C(()=>{t===null&&n(k.nextId())},[t]),t!=null?""+t:void 0};function T(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,T),r}function et(e){return k.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Me=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var G=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(G||{}),tt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(tt||{}),Nt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Nt||{});function Ot(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Me)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var nt=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(nt||{});function Rt(e,t=0){var n;return e===((n=et(e))==null?void 0:n.body)?!1:T(t,{0(){return e.matches(Me)},1(){let r=e;for(;r!==null;){if(r.matches(Me))return!0;r=r.parentElement}return!1}})}var Dt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Dt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function X(e){e?.focus({preventScroll:!0})}let At=["textarea","input"].join(",");function Mt(e){var t,n;return(n=(t=e?.matches)==null?void 0:t.call(e,At))!=null?n:!1}function kt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),i=t(r);if(o===null||i===null)return 0;let l=o.compareDocumentPosition(i);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ee(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?kt(e):e:Ot(e);o.length>0&&l.length>1&&(l=l.filter(p=>!o.includes(p))),r=r??i.activeElement;let a=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=l.length,E;do{if(c>=f||c+f<=0)return 0;let p=u+c;if(t&16)p=(p+f)%f;else{if(p<0)return 3;if(p>=f)return 1}E=l[p],E?.focus(d),c+=a}while(E!==i.activeElement);return t&6&&Mt(E)&&E.select(),2}function rt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function jt(){return/Android/gi.test(window.navigator.userAgent)}function Ht(){return rt()||jt()}function he(e,t,n){let r=j(t);s.useEffect(()=>{function o(i){r.current(i)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function ot(e,t,n){let r=j(t);s.useEffect(()=>{function o(i){r.current(i)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function It(e,t,n=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,a){if(!r.current||l.defaultPrevented)return;let u=a(l);if(u===null||!u.getRootNode().contains(u)||!u.isConnected)return;let d=function c(f){return typeof f=="function"?c(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let c of d){if(c===null)continue;let f=c instanceof HTMLElement?c:c.current;if(f!=null&&f.contains(u)||l.composed&&l.composedPath().includes(f))return}return!Rt(u,nt.Loose)&&u.tabIndex!==-1&&l.preventDefault(),t(l,u)}let i=s.useRef(null);he("pointerdown",l=>{var a,u;r.current&&(i.current=((u=(a=l.composedPath)==null?void 0:a.call(l))==null?void 0:u[0])||l.target)},!0),he("mousedown",l=>{var a,u;r.current&&(i.current=((u=(a=l.composedPath)==null?void 0:a.call(l))==null?void 0:u[0])||l.target)},!0),he("click",l=>{Ht()||i.current&&(o(l,()=>i.current),i.current=null)},!0),he("touchend",l=>o(l,()=>l.target instanceof HTMLElement?l.target:null),!0),ot("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ce(...e){return s.useMemo(()=>et(...e),[...e])}let lt=Symbol();function Bt(e,t=!0){return Object.assign(e,{[lt]:t})}function O(...e){let t=s.useRef(e);s.useEffect(()=>{t.current=e},[e]);let n=w(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||r?.[lt])?void 0:n}function _e(e,t){let n=s.useRef([]),r=w(e);s.useEffect(()=>{let o=[...n.current];for(let[i,l]of t.entries())if(n.current[i]!==l){let a=r(t,o);return n.current=t,a}},[r,...t])}function be(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var we=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(we||{}),q=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(q||{});function N({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:l,mergeRefs:a}){a=a??Ut;let u=it(t,e);if(i)return ge(u,n,r,l,a);let d=o??0;if(d&2){let{static:c=!1,...f}=u;if(c)return ge(f,n,r,l,a)}if(d&1){let{unmount:c=!0,...f}=u;return T(c?0:1,{0(){return null},1(){return ge({...f,hidden:!0,style:{display:"none"}},n,r,l,a)}})}return ge(u,n,r,l,a)}function ge(e,t={},n,r,o){let{as:i=n,children:l,refName:a="ref",...u}=Ne(e,["unmount","static"]),d=e.ref!==void 0?{[a]:e.ref}:{},c=typeof l=="function"?l(t):l;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(t));let f={};if(t){let E=!1,p=[];for(let[v,h]of Object.entries(t))typeof h=="boolean"&&(E=!0),h===!0&&p.push(v);E&&(f["data-headlessui-state"]=p.join(" "))}if(i===s.Fragment&&Object.keys(Je(u)).length>0){if(!s.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let E=c.props,p=typeof E?.className=="function"?(...h)=>be(E?.className(...h),u.className):be(E?.className,u.className),v=p?{className:p}:{};return s.cloneElement(c,Object.assign({},it(c.props,Je(Ne(u,["ref"]))),f,d,{ref:o(c.ref,d.ref)},v))}return s.createElement(i,Object.assign({},Ne(u,["ref"]),i!==s.Fragment&&d,i!==s.Fragment&&f),c)}function Ut(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function it(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...i){let l=n[r];for(let a of l){if((o instanceof Event||o?.nativeEvent instanceof Event)&&o.defaultPrevented)return;a(o,...i)}}});return t}function L(e){var t;return Object.assign(s.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Je(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Ne(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let qt="div";var ye=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ye||{});function _t(e,t){var n;let{features:r=1,...o}=e,i={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return N({ourProps:i,theirProps:o,slot:{},defaultTag:qt,name:"Hidden"})}let ke=L(_t),We=s.createContext(null);We.displayName="OpenClosedContext";var x=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(x||{});function Ve(){return s.useContext(We)}function Wt({value:e,children:t}){return g.createElement(We.Provider,{value:e},t)}function Vt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let U=[];Vt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&U[0]!==t.target&&(U.unshift(t.target),U=U.filter(n=>n!=null&&n.isConnected),U.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Yt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=t?.getAttribute("disabled")==="";return r&&Gt(n)?!1:r}function Gt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var at=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(at||{});function ut(e,t,n,r){let o=j(n);s.useEffect(()=>{e=e??window;function i(l){o.current(l)}return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i,r)},[e,t,r])}function de(){let e=s.useRef(!1);return C(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function st(e){let t=w(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,Se(()=>{n.current&&t()})}),[t])}var ue=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ue||{});function Kt(){let e=s.useRef(0);return ot("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function ct(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Xt="div";var dt=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(dt||{});function zt(e,t){let n=s.useRef(null),r=O(n,t),{initialFocus:o,containers:i,features:l=30,...a}=e;ee()||(l=1);let u=ce(n);Zt({ownerDocument:u},!!(l&16));let d=en({ownerDocument:u,container:n,initialFocus:o},!!(l&2));tn({ownerDocument:u,container:n,containers:i,previousActiveElement:d},!!(l&8));let c=Kt(),f=w(h=>{let m=n.current;m&&(S=>S())(()=>{T(c.current,{[ue.Forwards]:()=>{Ee(m,G.First,{skipElements:[h.relatedTarget]})},[ue.Backwards]:()=>{Ee(m,G.Last,{skipElements:[h.relatedTarget]})}})})}),E=qe(),p=s.useRef(!1),v={ref:r,onKeyDown(h){h.key=="Tab"&&(p.current=!0,E.requestAnimationFrame(()=>{p.current=!1}))},onBlur(h){let m=ct(i);n.current instanceof HTMLElement&&m.add(n.current);let S=h.relatedTarget;S instanceof HTMLElement&&S.dataset.headlessuiFocusGuard!=="true"&&(ft(m,S)||(p.current?Ee(n.current,T(c.current,{[ue.Forwards]:()=>G.Next,[ue.Backwards]:()=>G.Previous})|G.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&X(h.target)))}};return g.createElement(g.Fragment,null,!!(l&4)&&g.createElement(ke,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:ye.Focusable}),N({ourProps:v,theirProps:a,defaultTag:Xt,name:"FocusTrap"}),!!(l&4)&&g.createElement(ke,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:ye.Focusable}))}let Jt=L(zt),ie=Object.assign(Jt,{features:dt});function Qt(e=!0){let t=s.useRef(U.slice());return _e(([n],[r])=>{r===!0&&n===!1&&Se(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=U.slice())},[e,U,t]),w(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Zt({ownerDocument:e},t){let n=Qt(t);_e(()=>{t||e?.activeElement===e?.body&&X(n())},[t]),st(()=>{t&&X(n())})}function en({ownerDocument:e,container:t,initialFocus:n},r){let o=s.useRef(null),i=de();return _e(()=>{if(!r)return;let l=t.current;l&&Se(()=>{if(!i.current)return;let a=e?.activeElement;if(n!=null&&n.current){if(n?.current===a){o.current=a;return}}else if(l.contains(a)){o.current=a;return}n!=null&&n.current?X(n.current):Ee(l,G.First)===tt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e?.activeElement})},[r]),o}function tn({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let i=de();ut(e?.defaultView,"focus",l=>{if(!o||!i.current)return;let a=ct(n);t.current instanceof HTMLElement&&a.add(t.current);let u=r.current;if(!u)return;let d=l.target;d&&d instanceof HTMLElement?ft(a,d)?(r.current=d,X(d)):(l.preventDefault(),l.stopPropagation(),X(u)):X(r.current)},!0)}function ft(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let mt=s.createContext(!1);function nn(){return s.useContext(mt)}function je(e){return g.createElement(mt.Provider,{value:e.force},e.children)}function rn(e){let t=nn(),n=s.useContext(pt),r=ce(e),[o,i]=s.useState(()=>{if(!t&&n!==null||k.isServer)return null;let l=r?.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&i(n.current)},[n,i,t]),o}let on=s.Fragment;function ln(e,t){let n=e,r=s.useRef(null),o=O(Bt(c=>{r.current=c}),t),i=ce(r),l=rn(r),[a]=s.useState(()=>{var c;return k.isServer?null:(c=i?.createElement("div"))!=null?c:null}),u=s.useContext(He),d=ee();return C(()=>{!l||!a||l.contains(a)||(a.setAttribute("data-headlessui-portal",""),l.appendChild(a))},[l,a]),C(()=>{if(a&&u)return u.register(a)},[u,a]),st(()=>{var c;!l||!a||(a instanceof Node&&l.contains(a)&&l.removeChild(a),l.childNodes.length<=0&&((c=l.parentElement)==null||c.removeChild(l)))}),d?!l||!a?null:$t.createPortal(N({ourProps:{ref:o},theirProps:n,defaultTag:on,name:"Portal"}),a):null}let an=s.Fragment,pt=s.createContext(null);function un(e,t){let{target:n,...r}=e,o={ref:O(t)};return g.createElement(pt.Provider,{value:n},N({ourProps:o,theirProps:r,defaultTag:an,name:"Popover.Group"}))}let He=s.createContext(null);function sn(){let e=s.useContext(He),t=s.useRef([]),n=w(i=>(t.current.push(i),e&&e.register(i),()=>r(i))),r=w(i=>{let l=t.current.indexOf(i);l!==-1&&t.current.splice(l,1),e&&e.unregister(i)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:i}){return g.createElement(He.Provider,{value:o},i)},[o])]}let cn=L(ln),dn=L(un),Ie=Object.assign(cn,{Group:dn});function fn(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const mn=typeof Object.is=="function"?Object.is:fn,{useState:pn,useEffect:vn,useLayoutEffect:hn,useDebugValue:gn}=se;function En(e,t,n){const r=t(),[{inst:o},i]=pn({inst:{value:r,getSnapshot:t}});return hn(()=>{o.value=r,o.getSnapshot=t,Oe(o)&&i({inst:o})},[e,r,t]),vn(()=>(Oe(o)&&i({inst:o}),e(()=>{Oe(o)&&i({inst:o})})),[e]),gn(r),r}function Oe(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!mn(n,r)}catch{return!0}}function bn(e,t,n){return t()}const wn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yn=!wn,Tn=yn?bn:En,Sn="useSyncExternalStore"in se?(e=>e.useSyncExternalStore)(se):Tn;function $n(e){return Sn(e.subscribe,e.getSnapshot,e.getSnapshot)}function xn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...i){let l=t[o].call(n,...i);l&&(n=l,r.forEach(a=>a()))}}}function Ln(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,i=e-o;n.style(r,"paddingRight",`${i}px`)}}}function Pn(){return rt()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(i=>i()).some(i=>i.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=z();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let i=(o=window.scrollY)!=null?o:window.pageYOffset,l=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let u=a.target.closest("a");if(!u)return;let{hash:d}=new URL(u.href),c=e.querySelector(d);c&&!r(c)&&(l=c)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let u=a.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let u=a.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()},{passive:!1}),t.add(()=>{var a;let u=(a=window.scrollY)!=null?a:window.pageYOffset;i!==u&&window.scrollTo(0,i),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{}}function Fn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Cn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let K=xn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:z(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Cn(n)},o=[Pn(),Ln(),Fn()];o.forEach(({before:i})=>i?.(r)),o.forEach(({after:i})=>i?.(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});K.subscribe(()=>{let e=K.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&K.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&K.dispatch("TEARDOWN",n)}});function Nn(e,t,n){let r=$n(K),o=e?r.get(e):void 0,i=o?o.count>0:!1;return C(()=>{if(!(!e||!t))return K.dispatch("PUSH",e,n),()=>K.dispatch("POP",e,n)},[t,e]),i}let Re=new Map,ae=new Map;function Qe(e,t=!0){C(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var l;if(!r)return;let a=(l=ae.get(r))!=null?l:1;if(a===1?ae.delete(r):ae.set(r,a-1),a!==1)return;let u=Re.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,Re.delete(r))}let i=(n=ae.get(r))!=null?n:0;return ae.set(r,i+1),i!==0||(Re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function On({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=s.useRef((r=n?.current)!=null?r:null),i=ce(o),l=w(()=>{var a,u,d;let c=[];for(let f of e)f!==null&&(f instanceof HTMLElement?c.push(f):"current"in f&&f.current instanceof HTMLElement&&c.push(f.current));if(t!=null&&t.current)for(let f of t.current)c.push(f);for(let f of(a=i?.querySelectorAll("html > *, body > *"))!=null?a:[])f!==document.body&&f!==document.head&&f instanceof HTMLElement&&f.id!=="headlessui-portal-root"&&(f.contains(o.current)||f.contains((d=(u=o.current)==null?void 0:u.getRootNode())==null?void 0:d.host)||c.some(E=>f.contains(E))||c.push(f));return c});return{resolveContainers:l,contains:w(a=>l().some(u=>u.contains(a))),mainTreeNodeRef:o,MainTreeNode:s.useMemo(()=>function(){return n!=null?null:g.createElement(ke,{features:ye.Hidden,ref:o})},[o,n])}}let Ye=s.createContext(()=>{});Ye.displayName="StackContext";var Be=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Be||{});function Rn(){return s.useContext(Ye)}function Dn({children:e,onUpdate:t,type:n,element:r,enabled:o}){let i=Rn(),l=w((...a)=>{t?.(...a),i(...a)});return C(()=>{let a=o===void 0||o===!0;return a&&l(0,n,r),()=>{a&&l(1,n,r)}},[l,n,r,o]),g.createElement(Ye.Provider,{value:l},e)}let vt=s.createContext(null);function ht(){let e=s.useContext(vt);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,ht),t}return e}function An(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=w(i=>(t(l=>[...l,i]),()=>t(l=>{let a=l.slice(),u=a.indexOf(i);return u!==-1&&a.splice(u,1),a}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return g.createElement(vt.Provider,{value:o},n.children)},[t])]}let Mn="p";function kn(e,t){let n=te(),{id:r=`headlessui-description-${n}`,...o}=e,i=ht(),l=O(t);C(()=>i.register(r),[r,i.register]);let a={ref:l,...i.props,id:r};return N({ourProps:a,theirProps:o,slot:i.slot||{},defaultTag:Mn,name:i.name||"Description"})}let jn=L(kn),Hn=Object.assign(jn,{});var In=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(In||{}),Bn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Bn||{});let Un={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Te=s.createContext(null);Te.displayName="DialogContext";function fe(e){let t=s.useContext(Te);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,fe),n}return t}function qn(e,t,n=()=>[document.body]){Nn(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function _n(e,t){return T(t.type,Un,e,t)}let Wn="div",Vn=we.RenderStrategy|we.Static;function Yn(e,t){let n=te(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:i,initialFocus:l,role:a="dialog",__demoMode:u=!1,...d}=e,[c,f]=s.useState(0),E=s.useRef(!1);a=function(){return a==="dialog"||a==="alertdialog"?a:(E.current||(E.current=!0,console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let p=Ve();o===void 0&&p!==null&&(o=(p&x.Open)===x.Open);let v=s.useRef(null),h=O(v,t),m=ce(v),S=e.hasOwnProperty("open")||p!==null,D=e.hasOwnProperty("onClose");if(!S&&!D)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!S)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!D)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof i!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);let b=o?0:1,[P,me]=s.useReducer(_n,{titleId:null,descriptionId:null,panelRef:s.createRef()}),$=w(()=>i(!1)),J=w(y=>me({type:0,id:y})),_=ee()?u?!1:b===0:!1,A=c>1,W=s.useContext(Te)!==null,[ne,Q]=sn(),re={get current(){var y;return(y=P.panelRef.current)!=null?y:v.current}},{resolveContainers:oe,mainTreeNodeRef:V,MainTreeNode:Pe}=On({portals:ne,defaultContainers:[re]}),Y=A?"parent":"leaf",pe=p!==null?(p&x.Closing)===x.Closing:!1,Fe=W||pe?!1:_,Z=s.useCallback(()=>{var y,M;return(M=Array.from((y=m?.querySelectorAll("body > *"))!=null?y:[]).find(F=>F.id==="headlessui-portal-root"?!1:F.contains(V.current)&&F instanceof HTMLElement))!=null?M:null},[V]);Qe(Z,Fe);let le=A?!0:_,H=s.useCallback(()=>{var y,M;return(M=Array.from((y=m?.querySelectorAll("[data-headlessui-portal]"))!=null?y:[]).find(F=>F.contains(V.current)&&F instanceof HTMLElement))!=null?M:null},[V]);Qe(H,le),It(oe,$,!(!_||A));let R=!(A||b!==0);ut(m?.defaultView,"keydown",y=>{R&&(y.defaultPrevented||y.key===at.Escape&&(y.preventDefault(),y.stopPropagation(),$()))}),qn(m,!(pe||b!==0||W),oe),s.useEffect(()=>{if(b!==0||!v.current)return;let y=new ResizeObserver(M=>{for(let F of M){let ve=F.target.getBoundingClientRect();ve.x===0&&ve.y===0&&ve.width===0&&ve.height===0&&$()}});return y.observe(v.current),()=>y.disconnect()},[b,v,$]);let[wt,yt]=An(),Tt=s.useMemo(()=>[{dialogState:b,close:$,setTitleId:J},P],[b,P,$,J]),Ke=s.useMemo(()=>({open:b===0}),[b]),St={ref:h,id:r,role:a,"aria-modal":b===0?!0:void 0,"aria-labelledby":P.titleId,"aria-describedby":wt};return g.createElement(Dn,{type:"Dialog",enabled:b===0,element:v,onUpdate:w((y,M)=>{M==="Dialog"&&T(y,{[Be.Add]:()=>f(F=>F+1),[Be.Remove]:()=>f(F=>F-1)})})},g.createElement(je,{force:!0},g.createElement(Ie,null,g.createElement(Te.Provider,{value:Tt},g.createElement(Ie.Group,{target:v},g.createElement(je,{force:!1},g.createElement(yt,{slot:Ke,name:"Dialog.Description"},g.createElement(ie,{initialFocus:l,containers:oe,features:_?T(Y,{parent:ie.features.RestoreFocus,leaf:ie.features.All&~ie.features.FocusLock}):ie.features.None},g.createElement(Q,null,N({ourProps:St,theirProps:d,slot:Ke,defaultTag:Wn,features:Vn,visible:b===0,name:"Dialog"}))))))))),g.createElement(Pe,null))}let Gn="div";function Kn(e,t){let n=te(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:i,close:l}]=fe("Dialog.Overlay"),a=O(t),u=w(c=>{if(c.target===c.currentTarget){if(Yt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),l()}}),d=s.useMemo(()=>({open:i===0}),[i]);return N({ourProps:{ref:a,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:d,defaultTag:Gn,name:"Dialog.Overlay"})}let Xn="div";function zn(e,t){let n=te(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:i},l]=fe("Dialog.Backdrop"),a=O(t);s.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let u=s.useMemo(()=>({open:i===0}),[i]);return g.createElement(je,{force:!0},g.createElement(Ie,null,N({ourProps:{ref:a,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:Xn,name:"Dialog.Backdrop"})))}let Jn="div";function Qn(e,t){let n=te(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:i},l]=fe("Dialog.Panel"),a=O(t,l.panelRef),u=s.useMemo(()=>({open:i===0}),[i]),d=w(c=>{c.stopPropagation()});return N({ourProps:{ref:a,id:r,onClick:d},theirProps:o,slot:u,defaultTag:Jn,name:"Dialog.Panel"})}let Zn="h2";function er(e,t){let n=te(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:i,setTitleId:l}]=fe("Dialog.Title"),a=O(t);s.useEffect(()=>(l(r),()=>l(null)),[r,l]);let u=s.useMemo(()=>({open:i===0}),[i]);return N({ourProps:{ref:a,id:r},theirProps:o,slot:u,defaultTag:Zn,name:"Dialog.Title"})}let tr=L(Yn),nr=L(zn),rr=L(Qn),or=L(Kn),lr=L(er),Fr=Object.assign(tr,{Backdrop:nr,Panel:rr,Overlay:or,Title:lr,Description:Hn});function ir(e=0){let[t,n]=s.useState(e),r=de(),o=s.useCallback(u=>{r.current&&n(d=>d|u)},[t,r]),i=s.useCallback(u=>!!(t&u),[t]),l=s.useCallback(u=>{r.current&&n(d=>d&~u)},[n,r]),a=s.useCallback(u=>{r.current&&n(d=>d^u)},[n]);return{flags:t,addFlag:o,hasFlag:i,removeFlag:l,toggleFlag:a}}function ar(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function De(e,...t){e&&t.length>0&&e.classList.add(...t)}function Ae(e,...t){e&&t.length>0&&e.classList.remove(...t)}function ur(e,t){let n=z();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[i,l]=[r,o].map(u=>{let[d=0]=u.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,f)=>f-c);return d}),a=i+l;if(a!==0){n.group(d=>{d.setTimeout(()=>{t(),d.dispose()},a),d.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&d.dispose()})});let u=n.addEventListener(e,"transitionend",d=>{d.target===d.currentTarget&&(t(),u())})}else t();return n.add(()=>t()),n.dispose}function sr(e,t,n,r){let o=n?"enter":"leave",i=z(),l=r!==void 0?ar(r):()=>{};o==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let a=T(o,{enter:()=>t.enter,leave:()=>t.leave}),u=T(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),d=T(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return Ae(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),De(e,...t.base,...a,...d),i.nextFrame(()=>{Ae(e,...t.base,...a,...d),De(e,...t.base,...a,...u),ur(e,()=>(Ae(e,...t.base,...a),De(e,...t.base,...t.entered),l()))}),i.dispose}function cr({immediate:e,container:t,direction:n,classes:r,onStart:o,onStop:i}){let l=de(),a=qe(),u=j(n);C(()=>{e&&(u.current="enter")},[e]),C(()=>{let d=z();a.add(d.dispose);let c=t.current;if(c&&u.current!=="idle"&&l.current)return d.dispose(),o.current(u.current),d.add(sr(c,r.current,u.current==="enter",()=>{d.dispose(),i.current(u.current)})),d.dispose},[n])}function B(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let $e=s.createContext(null);$e.displayName="TransitionContext";var dr=(e=>(e.Visible="visible",e.Hidden="hidden",e))(dr||{});function fr(){let e=s.useContext($e);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function mr(){let e=s.useContext(xe);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let xe=s.createContext(null);xe.displayName="NestingContext";function Le(e){return"children"in e?Le(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function gt(e,t){let n=j(e),r=s.useRef([]),o=de(),i=qe(),l=w((p,v=q.Hidden)=>{let h=r.current.findIndex(({el:m})=>m===p);h!==-1&&(T(v,{[q.Unmount](){r.current.splice(h,1)},[q.Hidden](){r.current[h].state="hidden"}}),i.microTask(()=>{var m;!Le(r)&&o.current&&((m=n.current)==null||m.call(n))}))}),a=w(p=>{let v=r.current.find(({el:h})=>h===p);return v?v.state!=="visible"&&(v.state="visible"):r.current.push({el:p,state:"visible"}),()=>l(p,q.Unmount)}),u=s.useRef([]),d=s.useRef(Promise.resolve()),c=s.useRef({enter:[],leave:[],idle:[]}),f=w((p,v,h)=>{u.current.splice(0),t&&(t.chains.current[v]=t.chains.current[v].filter(([m])=>m!==p)),t?.chains.current[v].push([p,new Promise(m=>{u.current.push(m)})]),t?.chains.current[v].push([p,new Promise(m=>{Promise.all(c.current[v].map(([S,D])=>D)).then(()=>m())})]),v==="enter"?d.current=d.current.then(()=>t?.wait.current).then(()=>h(v)):h(v)}),E=w((p,v,h)=>{Promise.all(c.current[v].splice(0).map(([m,S])=>S)).then(()=>{var m;(m=u.current.shift())==null||m()}).then(()=>h(v))});return s.useMemo(()=>({children:r,register:a,unregister:l,onStart:f,onStop:E,wait:d,chains:c}),[a,l,r,f,E,c,d])}function pr(){}let vr=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Ze(e){var t;let n={};for(let r of vr)n[r]=(t=e[r])!=null?t:pr;return n}function hr(e){let t=s.useRef(Ze(e));return s.useEffect(()=>{t.current=Ze(e)},[e]),t}let gr="div",Et=we.RenderStrategy;function Er(e,t){var n,r;let{beforeEnter:o,afterEnter:i,beforeLeave:l,afterLeave:a,enter:u,enterFrom:d,enterTo:c,entered:f,leave:E,leaveFrom:p,leaveTo:v,...h}=e,m=s.useRef(null),S=O(m,t),D=(n=h.unmount)==null||n?q.Unmount:q.Hidden,{show:b,appear:P,initial:me}=fr(),[$,J]=s.useState(b?"visible":"hidden"),_=mr(),{register:A,unregister:W}=_;s.useEffect(()=>A(m),[A,m]),s.useEffect(()=>{if(D===q.Hidden&&m.current){if(b&&$!=="visible"){J("visible");return}return T($,{hidden:()=>W(m),visible:()=>A(m)})}},[$,m,A,W,b,D]);let ne=j({base:B(h.className),enter:B(u),enterFrom:B(d),enterTo:B(c),entered:B(f),leave:B(E),leaveFrom:B(p),leaveTo:B(v)}),Q=hr({beforeEnter:o,afterEnter:i,beforeLeave:l,afterLeave:a}),re=ee();s.useEffect(()=>{if(re&&$==="visible"&&m.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[m,$,re]);let oe=me&&!P,V=P&&b&&me,Pe=!re||oe?"idle":b?"enter":"leave",Y=ir(0),pe=w(R=>T(R,{enter:()=>{Y.addFlag(x.Opening),Q.current.beforeEnter()},leave:()=>{Y.addFlag(x.Closing),Q.current.beforeLeave()},idle:()=>{}})),Fe=w(R=>T(R,{enter:()=>{Y.removeFlag(x.Opening),Q.current.afterEnter()},leave:()=>{Y.removeFlag(x.Closing),Q.current.afterLeave()},idle:()=>{}})),Z=gt(()=>{J("hidden"),W(m)},_),le=s.useRef(!1);cr({immediate:V,container:m,classes:ne,direction:Pe,onStart:j(R=>{le.current=!0,Z.onStart(m,R,pe)}),onStop:j(R=>{le.current=!1,Z.onStop(m,R,Fe),R==="leave"&&!Le(Z)&&(J("hidden"),W(m))})});let H=h,Ge={ref:S};return V?H={...H,className:be(h.className,...ne.current.enter,...ne.current.enterFrom)}:le.current&&(H.className=be(h.className,(r=m.current)==null?void 0:r.className),H.className===""&&delete H.className),g.createElement(xe.Provider,{value:Z},g.createElement(Wt,{value:T($,{visible:x.Open,hidden:x.Closed})|Y.flags},N({ourProps:Ge,theirProps:H,defaultTag:gr,features:Et,visible:$==="visible",name:"Transition.Child"})))}function br(e,t){let{show:n,appear:r=!1,unmount:o=!0,...i}=e,l=s.useRef(null),a=O(l,t);ee();let u=Ve();if(n===void 0&&u!==null&&(n=(u&x.Open)===x.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,c]=s.useState(n?"visible":"hidden"),f=gt(()=>{c("hidden")}),[E,p]=s.useState(!0),v=s.useRef([n]);C(()=>{E!==!1&&v.current[v.current.length-1]!==n&&(v.current.push(n),p(!1))},[v,n]);let h=s.useMemo(()=>({show:n,appear:r,initial:E}),[n,r,E]);s.useEffect(()=>{if(n)c("visible");else if(!Le(f))c("hidden");else{let b=l.current;if(!b)return;let P=b.getBoundingClientRect();P.x===0&&P.y===0&&P.width===0&&P.height===0&&c("hidden")}},[n,f]);let m={unmount:o},S=w(()=>{var b;E&&p(!1),(b=e.beforeEnter)==null||b.call(e)}),D=w(()=>{var b;E&&p(!1),(b=e.beforeLeave)==null||b.call(e)});return g.createElement(xe.Provider,{value:f},g.createElement($e.Provider,{value:h},N({ourProps:{...m,as:s.Fragment,children:g.createElement(bt,{ref:a,...m,...i,beforeEnter:S,beforeLeave:D})},theirProps:{},defaultTag:s.Fragment,features:Et,visible:d==="visible",name:"Transition"})))}function wr(e,t){let n=s.useContext($e)!==null,r=Ve()!==null;return g.createElement(g.Fragment,null,!n&&r?g.createElement(Ue,{ref:t,...e}):g.createElement(bt,{ref:t,...e}))}let Ue=L(br),bt=L(Er),yr=L(wr),Cr=Object.assign(Ue,{Child:yr,Root:Ue});const Nr=()=>{const{register:e,handleSubmit:t,formState:{isSubmitting:n},reset:r}=xt();async function o(i,l){try{l.preventDefault(),(await fetch("/api/sendEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i.name,email:i.email,message:"Подана заявка с формы"})})).ok?Xe.success("Письмо успешно отправлено!",{duration:3e3,position:"bottom-center"}):Xe.error("Упс, что-то пошло не так Попробуйте ещё раз",{duration:3e3,position:"bottom-center"})}catch(a){console.log(a)}r()}return I.jsxs("form",{onSubmit:t(o),children:[I.jsxs("fieldset",{className:"flex flex-col w-full gap-4 mb-5",children:[I.jsx("input",{required:!0,type:"text",...e("name",{required:!0,maxLength:30}),placeholder:"Имя",className:"input h-[52px] lg:h-[44px] focus:ring-1 focus:ring-[#7AD9A0] rounded border-none w-full"}),I.jsx("input",{required:!0,type:"email",...e("email",{required:!0,pattern:{value:/\S+@\S+\.\S+/,message:"Entered value does not match email format"}}),placeholder:"Email",className:"input h-[52px] lg:h-[44px] focus:ring-1 focus:ring-[#7AD9A0] rounded border-none w-full"}),I.jsx("button",{className:"button font-semibold  disabled:bg-gray-500 lg:py-2.5 lg:px-4 w-full lg:w-auto",disabled:n,children:"Оставить заявку"})]}),I.jsxs("label",{className:"flex items-center text-[#2E3037] gap-2 cursor-pointer",children:[I.jsx("input",{type:"checkbox",required:!0,className:"form-checkbox rounded focus:ring-0 border-gray-300 text-primary"}),I.jsx("span",{className:"text-[12px] sm:text-sm",children:"Я согласен с политикой конфиденциальности"})]})]})};export{Nr as S,Fr as _,Cr as q};