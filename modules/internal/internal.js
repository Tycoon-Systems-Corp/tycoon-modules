function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o,n=arguments[t];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}import React from"react";import io from"socket.io-client";import{SocketContainer}from"/modules/socket";import{resolveVariables}from"/app.config";import{checkSignedIn,checkUserData,updateLocalLoginSession}from"/modules/utility/onboarding/SignIn";import{_LocalEventEmitter}from"/modules/events/LocalEventEmitter";import{handleRouteChange,registerCheckLocalStorageSize,registerCheckMobile,registerProxyConsoleLog}from"/modules/util";import{useRouter}from"next/router";import{forceUpdateProps,handleCheckUserData,handleGlobalEvent,handleSetCart,handleSetLoggedIn,registerSocket,toggleSingleOpenMenu}from"/modules/utility/_app";import{UseMiddleware}from"../../customModules/middleware";import{DeveloperHelp}from".";import{GoogleGsiClient,GoogleSignInRegister}from"/modules/internal/localImports";import Heartbeat from"/modules/internal/heartbeat/Heartbeat";const DEFAULT_SOLUTION={payment:"stripe"},CHECK_HANDLE_USER_DATA_THRESHOLD=18e5,Internal=e=>{const[t,o]=React.useState(!1),[n,a]=React.useState(!1);var[i,r]=React.useState(!1);const[c,s]=React.useState(!1);var[l,g]=React.useState(null);const[d,u]=React.useState({}),[m,_]=React.useState({}),[p,E]=React.useState(!1);var[f,h]=React.useState({});const[S,v]=React.useState(!1),[b,R]=React.useState(!1),[I,C]=React.useState(null);var[L,w]=React.useState(!1),[y,k]=React.useState(!1);const[O,T]=React.useState(-1);var[G,N]=React.useState(DEFAULT_SOLUTION),[P,j]=React.useState(!1);const D=React.useRef();let U=Object.assign({},e);const M=useRouter();try{registerCheckLocalStorageSize(window),registerCheckMobile(window),registerProxyConsoleLog(window)}catch(e){}React.useEffect(()=>{var e;t?(e=window.mobileCheck(),v(e)):(o(!0),e=new Heartbeat(1e3),D.current=e,D.current.createEvent("checkDeviceState",()=>{_LocalEventEmitter.dispatch("checkDeviceState",{})},2e3))},[t]),React.useEffect(()=>{document.addEventListener("mute-login-error",()=>{s(null)},{once:!0})},[]);const z=async()=>{handleSetLoggedIn(U,checkSignedIn,a);var e=await handleCheckUserData(U,n);U&&n&&O<(new Date).getTime()-CHECK_HANDLE_USER_DATA_THRESHOLD&&e&&(T((new Date).getTime()),(async(e,t)=>{e=await checkUserData(e,t);if(e){t=Object.assign({},n);if(console.log("Check User Data",e,t),e.identifier&&e.username&&e.hash)return t.username=e.username,t.hash=e.hash,t.identifier=e.identifier,t.ip=e.ip,t.meta||(t.meta={}),e.ip&&(t.meta.ip=e.ip),e.location&&(t.meta.location=e.location),e.locationMeta&&(t.meta.locationMeta=e.locationMeta),console.log(t),updateLocalLoginSession(t),!a(t)}})(U,e))};React.useEffect(()=>{z()},[n,U._loggedIn]);React.useEffect(()=>{handleSetCart(n,_)},[n]),_LocalEventEmitter.unsubscribe("checkDeviceState"),_LocalEventEmitter.subscribe("checkDeviceState",async e=>{var t=document?.activeElement,o=t?.tagName?.toLocaleLowerCase();t?.type&&-1<["textarea","input"].indexOf(o)?"textarea"===t.type||"input"===o&&-1<["text","password","email","number","tel","url","search"].indexOf(t.type)?b||R(!0):b&&R(!1):R(!1)}),U._LocalEventEmitter=_LocalEventEmitter,U._loggedIn=n,U._setLoggedIn=a,U._stripeSecret=i,U._setStripeSecret=r,U._loginError=c,U._setLoginError=s,U._pageError=l,U._setPageError=g,U._toggleSingleOpenMenu=(e,t,o)=>{toggleSingleOpenMenu(e,t,d,u,o)},U._openMenu=d,U._setOpenMenu=u,U._cart=m,U._rooms=f,U._isMobile=S,U._hasInputFocus=b,U._adminAuth=I,U._setAdminAuth=C,U._managerOpen=L,U._setManagerOpen=w,U._currentlyStreaming=y,U._setCurrentlyStreaming=k,U._solution=G,U._setSolution=N,U._validCc=P,U._setValidCc=j,U.fetchBusy=p,U.setFetchBusy=E;e=resolveVariables();U._configVariables=e,U=Object.assign(resolveVariables(),U),_LocalEventEmitter.unsubscribe("forceUpdateProps"),_LocalEventEmitter.subscribe("forceUpdateProps",e=>{forceUpdateProps(e,_)}),_LocalEventEmitter.unsubscribe("global_event"),_LocalEventEmitter.subscribe("global_event",async e=>{handleGlobalEvent(e,U,p,E);try{window&&window.dispatchEvent(new CustomEvent("global_event",{detail:Object.assign({},e)}))}catch(e){}}),_LocalEventEmitter.unsubscribe("attemptInitializeGoogle"),_LocalEventEmitter.subscribe("attemptInitializeGoogle",async e=>{A()});const B=e=>{e=new CustomEvent("thirdparty-signin",{detail:e});document.dispatchEvent(e)},A=(t=250)=>{try{return(!window||window&&!window.googleInitialized)&&U.googleClientId&&(google.accounts.id.initialize({client_id:U.googleClientId,callback:B,use_fedcm_for_prompt:!0}),window.googleInitialized=!0,console.log("Google Loaded")),!0}catch(e){setTimeout(()=>{A(2*t)},t)}},[x,V]=(React.useEffect(()=>{console.log,U?._loggedIn?.admin&&!I&&U?.dborigin&&U?._loggedIn?.admin.origin&&U.dborigin===U._loggedIn.admin.origin&&U._loggedIn.admin?.userid&&U?._loggedIn?.identifier&&U._loggedIn.admin.userid===U._loggedIn.identifier?C(U._loggedIn.admin):(!I?.userid||!U?._loggedIn||U?._loggedIn&&!U._loggedIn.identifier||I?.userid&&U?._loggedIn?.identifier&&I.userid!==U._loggedIn.identifier||!U?._adminAuth?.origin||!U?.dborigin||U?._adminAuth?.origin&&U.dborigin&&U._adminAuth.origin!==U.dborigin)&&C(null)},[U._loggedIn,I]),React.useState(null)),[H,F]=React.useState(null);return React.useEffect(()=>{registerSocket(io,x,V,H,U,F)},[x,H]),React.useEffect(()=>{const e=(e,t)=>{handleRouteChange(U,e,t)};return M.events.on("routeChangeComplete",e),()=>{M.events.off("routeChangeComplete",e)}},[M.events,U._loggedIn,U.apiUrl,U.domainKey]),U._socket=x,console.log("Socket",x,U),React.createElement("div",null,React.createElement("div",{version:"0.6.74",system:"Tycoon Systems Corp.",style:{display:"none"}}),U?.googleClientId?React.createElement("div",null,GoogleGsiClient,GoogleSignInRegister(U.googleClientId)):null,React.createElement(SocketContainer,_extends({_socket:x,setRooms:h},U)),React.createElement("div",{className:p?"fetchNotBusy fetchBusy":"fetchNotBusy"}),React.createElement(UseMiddleware,_extends({},U,{_socket:x})),U?.dev?React.createElement(DeveloperHelp,U):null)};export default Internal;