function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}import React from"react";import io from"socket.io-client";import{SocketContainer}from"/modules/socket";import{resolveVariables}from"/app.config";import{checkSignedIn,checkUserData,updateLocalLoginSession}from"/modules/utility/onboarding/SignIn";import{_LocalEventEmitter}from"/modules/events/LocalEventEmitter";import{debounce,handleRouteChange,registerCheckLocalStorageSize,registerCheckMobile,registerProxyConsoleLog}from"/modules/util";import{useRouter}from"next/router";import{forceUpdateProps,handleCheckUserData,handleGlobalEvent,handleSetCart,handleSetLoggedIn,registerSocket,toggleSingleOpenMenu}from"/modules/utility/_app";import{UseMiddleware}from"../../customModules/middleware";import{DeveloperHelp}from".";import{GoogleGsiClient,GoogleSignInRegister,GoogleImaSdkLoader}from"/modules/internal/localImports";import Heartbeat from"/modules/internal/heartbeat/Heartbeat";import{handleEventMail}from"../utility/mail";const DEFAULT_SOLUTION={payment:"stripe"},CHECK_HANDLE_USER_DATA_THRESHOLD=18e5,Internal=e=>{const[a,i]=React.useState(!1),[n,o]=React.useState(!1);var[t,r]=React.useState(!1);const[c,s]=React.useState(!1);var[l,d]=React.useState(null);const[u,g]=React.useState({}),[m,_]=React.useState({}),[E,h]=React.useState(!1);var[p,v]=React.useState({});const[w,f]=React.useState(!1),[S,b]=React.useState(!1),[L,I]=React.useState(null);var[R,C]=React.useState(!1),[y,H]=React.useState(!1);const[A,x]=React.useState(-1);var[P,j]=React.useState(DEFAULT_SOLUTION),[z,B]=React.useState(!1);const[X,k]=React.useState({}),O=React.useRef();let D=Object.assign({},e);const U=useRouter();try{registerCheckLocalStorageSize(window),registerCheckMobile(window),registerProxyConsoleLog(window)}catch(e){console.log(e)}const V=React.useCallback(debounce(e=>{try{var t,n;window&&(t=window?.innerWidth,n=window?.innerHeight,k({width:t,height:n}),window.dispatchEvent(new CustomEvent("resize_window",{detail:Object.assign({},e),width:t,height:n})))}catch(e){}},2500),[]),F=React.useCallback(debounce(e=>{try{var t=window?.scrollY,n=window.scrollX;window.dispatchEvent(new CustomEvent("scroll_window",{detail:Object.assign({},e),scrollY:t,scrollX:n}))}catch(e){}},500),[]);function G(){try{window?.userInteracted||(window.userInteracted=!0)}catch(e){}}React.useEffect(()=>{if(a)try{var e=window.mobileCheck();f(e),window?.addEventListener("resize",e=>{V()}),window.addEventListener("scroll",e=>{F(),G()}),window.addEventListener("click",G),window.addEventListener("keypress",G),window.addEventListener("touchstart",G)}catch(e){}else try{i(!0);var t=new Heartbeat(1e3),n=(O.current=t,O.current.createEvent("checkDeviceState",()=>{_LocalEventEmitter.dispatch("checkDeviceState",{})},2e3),window?.innerWidth),o=window?.innerHeight;k({width:n,height:o})}catch(e){}},[a]),React.useEffect(()=>{document.addEventListener("mute-login-error",()=>{s(null)},{once:!0})},[]);const K=async()=>{handleSetLoggedIn(D,checkSignedIn,o);var e=await handleCheckUserData(D,n);D&&n&&A<(new Date).getTime()-CHECK_HANDLE_USER_DATA_THRESHOLD&&e&&(x((new Date).getTime()),(async(e,t)=>{e=await checkUserData(e,t);if(e){t=Object.assign({},n);if(console.log("Check User Data",e,t),e.identifier&&e.username&&e.hash)return t.username=e.username,t.hash=e.hash,t.identifier=e.identifier,t.ip=e.ip,t.meta||(t.meta={}),e.ip&&(t.meta.ip=e.ip),e.location&&(t.meta.location=e.location),e.locationMeta&&(t.meta.locationMeta=e.locationMeta),console.log(t),updateLocalLoginSession(t),!o(t)}})(D,e))};React.useEffect(()=>{K()},[n,D._loggedIn]);React.useEffect(()=>{handleSetCart(n,_)},[n]),_LocalEventEmitter.unsubscribe("checkDeviceState"),_LocalEventEmitter.subscribe("checkDeviceState",async e=>{var t=document?.activeElement,n=t?.tagName?.toLocaleLowerCase();t?.type&&-1<["textarea","input"].indexOf(n)?"textarea"===t.type||"input"===n&&-1<["text","password","email","number","tel","url","search"].indexOf(t.type)?S||b(!0):S&&b(!1):b(!1)}),D._LocalEventEmitter=_LocalEventEmitter,D._loggedIn=n,D._setLoggedIn=o,D._stripeSecret=t,D._setStripeSecret=r,D._loginError=c,D._setLoginError=s,D._pageError=l,D._setPageError=d,D._toggleSingleOpenMenu=(e,t,n)=>{toggleSingleOpenMenu(e,t,u,g,n)},D._openMenu=u,D._setOpenMenu=g,D._cart=m,D._rooms=p,D._isMobile=w,D._hasInputFocus=S,D._adminAuth=L,D._setAdminAuth=I,D._managerOpen=R,D._setManagerOpen=C,D._currentlyStreaming=y,D._setCurrentlyStreaming=H,D._solution=P,D._setSolution=j,D._pageDimensions=X,D._validCc=z,D._setValidCc=B,D.fetchBusy=E,D.setFetchBusy=h;e=resolveVariables();D._configVariables=e,D=Object.assign(resolveVariables(),D),_LocalEventEmitter.unsubscribe("scheduleMail"),_LocalEventEmitter.subscribe("scheduleMail",async e=>{handleEventMail(e,D)}),_LocalEventEmitter.unsubscribe("forceUpdateProps"),_LocalEventEmitter.subscribe("forceUpdateProps",e=>{forceUpdateProps(e,_)}),_LocalEventEmitter.unsubscribe("global_event"),_LocalEventEmitter.subscribe("global_event",async e=>{handleGlobalEvent(e,D,E,h);try{window&&window.dispatchEvent(new CustomEvent("global_event",{detail:Object.assign({},e)}))}catch(e){}}),_LocalEventEmitter.unsubscribe("attemptInitializeGoogle"),_LocalEventEmitter.subscribe("attemptInitializeGoogle",async e=>{T()});const W=e=>{e=new CustomEvent("thirdparty-signin",{detail:e});document.dispatchEvent(e)},T=(t=250)=>{try{if((!window||window&&!window.googleInitialized)&&process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID){google.accounts.id.initialize({client_id:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,callback:W,use_fedcm_for_prompt:!0});try{window.googleInitialized=!0}catch(e){}console.log("Google Loaded")}return!0}catch(e){setTimeout(()=>{T(2*t)},t)}},[M,Y]=(React.useEffect(()=>{D?._loggedIn?.admin&&!L&&D?.dborigin&&D?._loggedIn?.admin.origin&&D.dborigin===D._loggedIn.admin.origin&&D._loggedIn.admin?.userid&&D?._loggedIn?.identifier&&D._loggedIn.admin.userid===D._loggedIn.identifier?I(D._loggedIn.admin):(!L?.userid||!D?._loggedIn||D?._loggedIn&&!D._loggedIn.identifier||L?.userid&&D?._loggedIn?.identifier&&L.userid!==D._loggedIn.identifier||!D?._adminAuth?.origin||!D?.dborigin||D?._adminAuth?.origin&&D.dborigin&&D._adminAuth.origin!==D.dborigin)&&I(null)},[D._loggedIn,L]),React.useState(null)),[N,q]=React.useState(null);return React.useEffect(()=>{registerSocket(io,M,Y,N,D,q)},[M,N]),React.useEffect(()=>{const e=(e,t)=>{handleRouteChange(D,e,t)};return U.events.on("routeChangeComplete",e),()=>{U.events.off("routeChangeComplete",e)}},[U.events,D._loggedIn,D.apiUrl,D.domainKey]),D._socket=M,console.log("Socket",M,D),React.createElement("div",null,React.createElement("div",{version:"0.8.71",system:"Tycoon Systems Corp.",style:{display:"none"}}),process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID?React.createElement("div",null,GoogleGsiClient,GoogleSignInRegister(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID),GoogleImaSdkLoader):null,React.createElement(SocketContainer,_extends({_socket:M,setRooms:v},D)),React.createElement("div",{className:E?"fetchNotBusy fetchBusy":"fetchNotBusy"}),React.createElement(UseMiddleware,_extends({},D,{_socket:M})),D?.dev?React.createElement(DeveloperHelp,D):null)};export default Internal;