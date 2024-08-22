function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}import React from"react";import io from"socket.io-client";import{SocketContainer}from"/modules/socket";import{resolveVariables}from"/app.config";import{checkSignedIn,checkUserData,updateLocalLoginSession}from"/modules/utility/onboarding/SignIn";import{_LocalEventEmitter}from"/modules/events/LocalEventEmitter";import{debounce,handleRouteChange,registerCheckLocalStorageSize,registerCheckMobile,registerProxyConsoleLog}from"/modules/util";import{useRouter}from"next/router";import{forceUpdateProps,handleCheckUserData,handleGlobalEvent,handleSetCart,handleSetLoggedIn,registerSocket,toggleSingleOpenMenu}from"/modules/utility/_app";import{UseMiddleware}from"../../customModules/middleware";import{DeveloperHelp}from".";import{GoogleGsiClient,GoogleSignInRegister}from"/modules/internal/localImports";import Heartbeat from"/modules/internal/heartbeat/Heartbeat";import{handleEventMail}from"../utility/mail";const DEFAULT_SOLUTION={payment:"stripe"},CHECK_HANDLE_USER_DATA_THRESHOLD=18e5,Internal=e=>{const[t,n]=React.useState(!1),[o,a]=React.useState(!1);var[i,r]=React.useState(!1);const[l,s]=React.useState(!1);var[c,d]=React.useState(null);const[g,u]=React.useState({}),[m,_]=React.useState({}),[p,E]=React.useState(!1);var[h,v]=React.useState({});const[b,f]=React.useState(!1),[S,w]=React.useState(!1),[R,C]=React.useState(null);var[L,I]=React.useState(!1),[y,k]=React.useState(!1);const[O,T]=React.useState(-1);var[G,j]=React.useState(DEFAULT_SOLUTION),[z,N]=React.useState(!1);const D=React.useRef();let M=Object.assign({},e);const U=useRouter();try{registerCheckLocalStorageSize(window),registerCheckMobile(window),registerProxyConsoleLog(window)}catch(e){}const P=React.useCallback(debounce(e=>{var t=window?.innerWidth,n=window.innerHeight;window.dispatchEvent(new CustomEvent("resize_window",{detail:Object.assign({},e),width:t,height:n}))},2500),[]),B=React.useCallback(debounce(e=>{var t=window?.scrollY,n=window.scrollX;window.dispatchEvent(new CustomEvent("scroll_window",{detail:Object.assign({},e),scrollY:t,scrollX:n}))},500),[]),V=(React.useEffect(()=>{var e;t?(e=window.mobileCheck(),f(e),window?.addEventListener("resize",e=>{P()}),window.addEventListener("scroll",e=>{B()})):(n(!0),e=new Heartbeat(1e3),D.current=e,D.current.createEvent("checkDeviceState",()=>{_LocalEventEmitter.dispatch("checkDeviceState",{})},2e3))},[t]),React.useEffect(()=>{document.addEventListener("mute-login-error",()=>{s(null)},{once:!0})},[]),async()=>{handleSetLoggedIn(M,checkSignedIn,a);var e=await handleCheckUserData(M,o);M&&o&&O<(new Date).getTime()-CHECK_HANDLE_USER_DATA_THRESHOLD&&e&&(T((new Date).getTime()),(async(e,t)=>{e=await checkUserData(e,t);if(e){t=Object.assign({},o);if(console.log("Check User Data",e,t),e.identifier&&e.username&&e.hash)return t.username=e.username,t.hash=e.hash,t.identifier=e.identifier,t.ip=e.ip,t.meta||(t.meta={}),e.ip&&(t.meta.ip=e.ip),e.location&&(t.meta.location=e.location),e.locationMeta&&(t.meta.locationMeta=e.locationMeta),console.log(t),updateLocalLoginSession(t),!a(t)}})(M,e))});React.useEffect(()=>{V()},[o,M._loggedIn]);React.useEffect(()=>{handleSetCart(o,_)},[o]),_LocalEventEmitter.unsubscribe("checkDeviceState"),_LocalEventEmitter.subscribe("checkDeviceState",async e=>{var t=document?.activeElement,n=t?.tagName?.toLocaleLowerCase();t?.type&&-1<["textarea","input"].indexOf(n)?"textarea"===t.type||"input"===n&&-1<["text","password","email","number","tel","url","search"].indexOf(t.type)?S||w(!0):S&&w(!1):w(!1)}),M._LocalEventEmitter=_LocalEventEmitter,M._loggedIn=o,M._setLoggedIn=a,M._stripeSecret=i,M._setStripeSecret=r,M._loginError=l,M._setLoginError=s,M._pageError=c,M._setPageError=d,M._toggleSingleOpenMenu=(e,t,n)=>{toggleSingleOpenMenu(e,t,g,u,n)},M._openMenu=g,M._setOpenMenu=u,M._cart=m,M._rooms=h,M._isMobile=b,M._hasInputFocus=S,M._adminAuth=R,M._setAdminAuth=C,M._managerOpen=L,M._setManagerOpen=I,M._currentlyStreaming=y,M._setCurrentlyStreaming=k,M._solution=G,M._setSolution=j,M._validCc=z,M._setValidCc=N,M.fetchBusy=p,M.setFetchBusy=E;e=resolveVariables();M._configVariables=e,M=Object.assign(resolveVariables(),M),_LocalEventEmitter.unsubscribe("scheduleMail"),_LocalEventEmitter.subscribe("scheduleMail",async e=>{handleEventMail(e,M)}),_LocalEventEmitter.unsubscribe("forceUpdateProps"),_LocalEventEmitter.subscribe("forceUpdateProps",e=>{forceUpdateProps(e,_)}),_LocalEventEmitter.unsubscribe("global_event"),_LocalEventEmitter.subscribe("global_event",async e=>{handleGlobalEvent(e,M,p,E);try{window&&window.dispatchEvent(new CustomEvent("global_event",{detail:Object.assign({},e)}))}catch(e){}}),_LocalEventEmitter.unsubscribe("attemptInitializeGoogle"),_LocalEventEmitter.subscribe("attemptInitializeGoogle",async e=>{A()});const F=e=>{e=new CustomEvent("thirdparty-signin",{detail:e});document.dispatchEvent(e)},A=(t=250)=>{try{return(!window||window&&!window.googleInitialized)&&M.googleClientId&&(google.accounts.id.initialize({client_id:M.googleClientId,callback:F,use_fedcm_for_prompt:!0}),window.googleInitialized=!0,console.log("Google Loaded")),!0}catch(e){setTimeout(()=>{A(2*t)},t)}},[H,K]=(React.useEffect(()=>{M?._loggedIn?.admin&&!R&&M?.dborigin&&M?._loggedIn?.admin.origin&&M.dborigin===M._loggedIn.admin.origin&&M._loggedIn.admin?.userid&&M?._loggedIn?.identifier&&M._loggedIn.admin.userid===M._loggedIn.identifier?C(M._loggedIn.admin):(!R?.userid||!M?._loggedIn||M?._loggedIn&&!M._loggedIn.identifier||R?.userid&&M?._loggedIn?.identifier&&R.userid!==M._loggedIn.identifier||!M?._adminAuth?.origin||!M?.dborigin||M?._adminAuth?.origin&&M.dborigin&&M._adminAuth.origin!==M.dborigin)&&C(null)},[M._loggedIn,R]),React.useState(null)),[x,X]=React.useState(null);return React.useEffect(()=>{registerSocket(io,H,K,x,M,X)},[H,x]),React.useEffect(()=>{const e=(e,t)=>{handleRouteChange(M,e,t)};return U.events.on("routeChangeComplete",e),()=>{U.events.off("routeChangeComplete",e)}},[U.events,M._loggedIn,M.apiUrl,M.domainKey]),M._socket=H,console.log("Socket",H,M),React.createElement("div",null,React.createElement("div",{version:"0.6.95",system:"Tycoon Systems Corp.",style:{display:"none"}}),M?.googleClientId?React.createElement("div",null,GoogleGsiClient,GoogleSignInRegister(M.googleClientId)):null,React.createElement(SocketContainer,_extends({_socket:H,setRooms:v},M)),React.createElement("div",{className:p?"fetchNotBusy fetchBusy":"fetchNotBusy"}),React.createElement(UseMiddleware,_extends({},M,{_socket:H})),M?.dev?React.createElement(DeveloperHelp,M):null)};export default Internal;