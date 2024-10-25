import React from"react";import resolveConfig,{resolveVariables}from"/app.config";import{WatchPage}from"./streaming/watch";import{SignIn,SignInPage,Username}from"./onboarding/signin/index";import{ProfilePage}from"./profile/index";import{ReceiptPage}from"./ecommerce/receipt";import{CreditCard}from"./payment/index";import{Manager}from"./streaming/manager";import{Feature}from"./search/feature";import{WideFeature}from"./search/wideFeature";import{SliderBasic}from"./indexing";import{fetchPost,FetchHandler}from"./utility/fetch";import{checkSignedIn}from"./utility/onboarding";import{isObjectEmpty}from"./util";import{Settings}from"./settings";import{Survey}from"./survey";import CustomModules from"/customModules";import PresentationModules from"./presentation";import{EventPage}from"./presentation/events.js/eventPage";import{ArticlePage}from"./article";import{ProductPage}from"./ecommerce/product";import{ChatPage}from"./streaming/chat";import{SearchPage}from"./presentation/search";const IGNORE_PAINT_PROPS_TYPES=["h1","h2","h3","h4","h5","p","label","input","img","title"],resolveComponent=e=>{let r;if(e.type)switch(e.type){case"WatchPage":return React.createElement(WatchPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"SignIn":return React.createElement(SignIn,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"SignInPage":return React.createElement(SignInPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"ProfilePage":return React.createElement(ProfilePage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"ProductPage":return React.createElement(ProductPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"EventPage":return React.createElement(EventPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"ReceiptPage":return React.createElement(ReceiptPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"ArticlePage":return React.createElement(ArticlePage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"CreditCard":return React.createElement(CreditCard,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"Streaming_Manager":return React.createElement(Manager,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"Onboarding_SignIn_Username":return React.createElement(Username,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"Feature":return React.createElement(Feature,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"WideFeature":return React.createElement(WideFeature,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"SliderBasic":return React.createElement(SliderBasic,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"FetchHandler":return React.createElement(FetchHandler,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"Survey":return React.createElement(Survey,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"Settings":return React.createElement(Settings,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"ChatPage":return React.createElement(ChatPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"SearchPage":return React.createElement(SearchPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"CustomModule":if(r="customModule",e?.props&&e.props[r]&&CustomModules&&Object.prototype.hasOwnProperty.call(CustomModules,e.props[r])){var a=CustomModules[e.props[r]];if(a)return React.createElement(a,e.props,e.children&&e.children.map?e.children.map(generateComponent):null)}case"Presentation":if(r="module",e?.props&&e.props[r]&&PresentationModules&&Object.prototype.hasOwnProperty.call(PresentationModules,e.props[r])){a=PresentationModules[e.props[r]];if(a)return React.createElement(a,e.props,e.children&&e.children.map?e.children.map(generateComponent):null)}default:return null}return null},resolvePage=(e,a)=>{return e?.platform.pages?e.platform.pages.find(e=>{var r=e.url,r=new RegExp(`^\\${r}(?:\\?.*)?$`);return!!(a&&a==e.url||r.test(a))||!!(global&&global.location&&global.location.pathname&&e.url===global.location.pathname||global&&global.location&&global.location.pathname&&r.test(global.location.pathname))})||{url:a}:null},resolvePageName=e=>"/"!==e?e?.replace?e.replace("/",""):"":"index";function generateComponent(e){if(e){var{type:r,props:a,children:t}=e;if(a?.childrenBefore&&(n=a.childrenBefore&&a.childrenBefore.map(generateComponent),e.props.childrenBefore=[React.createElement(r,a,...n)]),a?.childrenAfter&&(n=a.childrenAfter&&a.childrenAfter.map(generateComponent),e.props.childrenAfter=[React.createElement(r,a,...n)]),"string"==typeof r){var n=resolveComponent(e);if(n)return a["data-renderer"]?React.createElement("div",{"data-renderer":a["data-renderer"]},n):n;if(t&&t.map)return n=t&&t.map(generateComponent),React.createElement(r,a,...n)}if(r)return a["data-renderer"]?React.createElement("div",{"data-renderer":a["data-renderer"]},r):r}return e?.props&&e.props["data-renderer"]?React.createElement("div",{"data-renderer":e.props["data-renderer"]},e):e}const resolveDefaults=async(e,r,a,t,n,o,l,i)=>{o(!0);let p=!1,c={},m={};if(t&&!isObjectEmpty(t)&&(m=t),console.log("Query",m,r),!m.u){let e=null!==r?._loggedIn?.username?r?._loggedIn.username:r?._loggedIn?.identifier??null;e||(o=checkSignedIn(),e=o?.username&&null!==o?.username?o?.username:o?.identifier??null),m.u=e}t={url:n,params:m,domainKey:a.domainKey};if("/p"===e&&(!r.profileData||l)||"/p"===i?(p=!0,t.profileReq=!0,t.shopProfileReq=!0,t.videoReq=!0):"/w"==e&&(!r.watchData||l)||"/w"===i?(p=!0,t.watchReq=!0,t.shopProfileReq=!0):"/r"==e?(p=!0,t.profileReq=!0,t.receiptReq=!0,(o=checkSignedIn())&&o.identifier&&o.hash&&(t.identifier=o.identifier,t.hash=o.hash)):"/e"===e?(p=!0,t.profileReq=!0,t.eventReq=!0):"/a"===e||"/a"===i?(p=!0,t.profileReq=!0,t.articleReq=!0):"/pr"===e?(p=!0,t.productReq=!0):"/s"===e?(p=!0,t.searchReq=!0):"/admin"===e&&(p=!0),r.regionsData||(p=!0,t.regionsReq=!0),!0===p){a.domainKey&&(t.domainKey=a.domainKey),t.from="resolveDefaults";const s=await fetchPost(a.apiUrl+"/m/pagedefaults",null,null,t);s&&s.data&&(c=Object.keys(s.data).reduce((e,r)=>(e[r]=s.data[r],e),c))}return c._loggedIn=checkSignedIn(),c},handlePropsPriority=(e,r)=>{var a,t=isObjectEmpty(e)?r:e;for(const n in t)n.startsWith("_")&&(a=Object.getOwnPropertyDescriptor(t,n))&&a.writable&&(t[n]=r[n]);return t},basicError={error:"failed",code:404},getServerSidePropsDefault=async(e,r,a={},t)=>{var n={props:{data:{},profileData:null,params:{},resolvedDefinition:null,path:null,log:"",error:""}},o=resolveVariables(),l=resolveConfig(o),l=resolvePage(l,e.req.url);n.props.path=e.req.url;const i={url:e.req.url,params:e.query,domainKey:o.domainKey,serverReq:!0};let p=!1;if(console.log(l,i),l&&"/p"===l.url?(p=!0,i.profileReq=!0,i.shopProfileReq=!0,i.videoReq=!0):l&&"/w"===l.url?(p=!0,i.watchReq=!0,i.shopProfileReq=!0):l&&"/e"===l.url?(p=!0,i.profileReq=!0,i.eventReq=!0):l&&"/a"===l.url?(p=!0,i.profileReq=!0,i.articleReq=!0):l&&"/pr"===l.url?(p=!0,i.productReq=!0):l&&"/admin"===l.url?p=!0:l&&l.url.match("/documentation")?(p=!0,i.documentationReq=!0):l&&"/s"===l.url&&(p=!0,i.searchReq=!0),l&&l.data&&(n.props.resolvedDefinition=l.data),r)for(let e=0;e<r.length;e++)p=!0,i[r[e]+"Req"]=!0;t&&(p=!0);let c;return Object.entries(a).map(e=>{i.params[e[0]]=e[1]}),p&&(o.domainKey&&(i.domainKey=o.domainKey),i.from="getServerSidePropsDefault",c=await fetchPost(o.apiUrl+"/m/pagedefaults",null,null,i))&&c.data&&(n.props=Object.keys(c.data).reduce((e,r)=>(e[r]=c.data[r],e),n.props)),e&&e.query&&(n.props.params=e.query),p&&(!c||c&&"failed"===c.status)&&(n.props.error=basicError),n},getPropDefaults=async(e,r,a,t={})=>{var n=resolveVariables();resolveConfig(n);if(Array.isArray(a)&&0<a.length){var o={url:r.req.url,params:Object.assign(r.query,t),domainKey:n.domainKey,serverReq:!0};for(let e=0;e<a.length;e++)o[a[e]+"Req"]=!0;o.from="getPropDefaults";const l=await fetchPost(n.apiUrl+"/m/pagedefaults",null,null,o);return l&&l.data&&(e.props=Object.keys(l.data).reduce((e,r)=>(e[r]=l.data[r],e),e.props)),e}return{}},extractAccurateQueryParams=e=>{var r,a,e=e.split("?")[1],t={};for([r,a]of new URLSearchParams(e))t[r]=a;return t};export{basicError,extractAccurateQueryParams,generateComponent,getServerSidePropsDefault,getPropDefaults,handlePropsPriority,resolveComponent,resolveDefaults,resolvePage,resolvePageName};