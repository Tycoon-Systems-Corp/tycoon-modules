function _extends(){return(_extends=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a,r=arguments[e];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}import React from"react";import{useRouter}from"next/router";import{v4 as uuidv4}from"uuid";import ArticleStyles from"./Article.module.scss";import templates from"./templates";import{createMarkup}from"./utility";import{handleAnalyticsRequest,throttleFunctionCall}from"@tycoonsystems/tycoon-modules/util";import dynamic from"next/dynamic";const Article=dynamic(()=>import("/layout/").then(t=>t.Article),{ssr:!1,loading:()=>React.createElement("p",null)}),Module=e=>{const t=useRouter()["query"],[a,r]=React.useState(!1),[l,c]=React.useState(null),[i,s]=React.useState(null),[n,o]=React.useState(null),[u,m]=React.useState("basic");var p=React.useRef();e._LocalEventEmitter.unsubscribe(l),e._LocalEventEmitter.subscribe(l,t=>{t&&"loadDefault"!==t.dispatch&&t.dispatch}),React.useEffect(()=>{var t;a?d():(t=uuidv4(),c(t),r(!0))},[a]);const d=()=>{try{window&&t?.p&&throttleFunctionCall(window,"_onRead_analytics_read",1500,handleAnalyticsRequest,[e,"article","read",t.p])}catch(t){}};React.useEffect(()=>{i?.meta?.template?m(i.meta.template):e?.selectTemplate&&m(e.selectTemplate)},[e?.selectTemplate,i]),React.useEffect(()=>{var t;e?.articleData&&(!i||i?.id&&e?.articleData?.id&&i.id!==e.articleData.id)&&(s(e.articleData),e.articleData.contents)&&(t=JSON.parse(e.articleData.contents))&&o(t)},[e?.articleData,i]);var f=Object.assign(templates,e?.articleTemplates??{}),R=u&&f&&f[u];return React.createElement(React.Fragment,null,React.createElement(Article,_extends({},e,{useTemplates:f,template:R,articleHtml:n,articleData:i,createMarkup:createMarkup,htmlRef:p,ArticleStyles:ArticleStyles})))};export default Module;