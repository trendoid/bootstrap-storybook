import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="modulepreload",p=function(_,i){return new URL(_,i).href},O={},o=function(i,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,l),r in O)return;O[r]=!0;const u=r.endsWith(".css"),E=u?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const c=t[a];if(c.href===r&&(!u||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${E}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":d,u||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),u)return new Promise((a,c)=>{n.addEventListener("load",a),n.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,m=R({page:"preview"});f.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./stories/Button.stories.ts":async()=>o(()=>import("./Button.stories-FBPjh-FV.js"),__vite__mapDeps([0,1,2]),import.meta.url),"./stories/Configure.mdx":async()=>o(()=>import("./Configure-f5SXFLX-.js"),__vite__mapDeps([3,4,5,6,7,8,9]),import.meta.url),"./stories/Header.stories.ts":async()=>o(()=>import("./Header.stories-ikwZJJBf.js"),__vite__mapDeps([10,11,1,2,12]),import.meta.url),"./stories/Page.stories.ts":async()=>o(()=>import("./Page.stories-G25fMP6C.js"),__vite__mapDeps([13,11,1,2,12,14]),import.meta.url)};async function T(_){return P[_]()}const{composeConfigs:w,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-8lgUVhYG.js"),__vite__mapDeps([15,8]),import.meta.url),o(()=>import("./entry-preview-docs-9MJIY5Re.js"),__vite__mapDeps([16,7,5]),import.meta.url),o(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([17,6]),import.meta.url),o(()=>import("./preview-HG8VtAdw.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([18,8]),import.meta.url),o(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([19,8]),import.meta.url),o(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([20,8]),import.meta.url),o(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([21,5]),import.meta.url),o(()=>import("./preview-bicOdALM.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-qt2sqPxX.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-mEb2NEJf.js"),__vite__mapDeps([]),import.meta.url)]);return w(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:v});export{o as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories-FBPjh-FV.js","./Button-tc1dtBBr.js","./Button-EPdcuW55.css","./Configure-f5SXFLX-.js","./index-wkPkNedk.js","./_commonjsHelpers-5-cIlDoe.js","./index-ogXoivrg.js","./index-8LwkIDqE.js","./index-PPLHz8o0.js","./index-HQzBsOQt.js","./Header.stories-ikwZJJBf.js","./Header-yyCrHXpe.js","./Header-6-vRj5Lu.css","./Page.stories-G25fMP6C.js","./Page-fZ7a-HXz.css","./entry-preview-8lgUVhYG.js","./entry-preview-docs-9MJIY5Re.js","./preview-VI2eoWmp.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-37XjEtlT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
