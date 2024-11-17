function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o,n=arguments[t];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}import React from"react";import{useRouter}from"next/router";import{v4 as uuidv4}from"uuid";import{checkSignedIn}from"/modules/utility/onboarding";import{fetchPost}from"/modules/utility/fetch";import{SignIn,Username}from"/modules/onboarding/signin";const Module=a=>{const o=useRouter(),[n,s]=React.useState(!1),[e,r]=React.useState(null);let[i,c]=React.useState(!1);const[t,u]=React.useState(!1),[,l]=React.useState(!1),[d,g]=React.useState(!1),[m,f]=React.useState(null),h=(a._LocalEventEmitter.unsubscribe(e),a._LocalEventEmitter.subscribe(e,e=>{e&&"loadDefault"===e.dispatch&&h()}),React.useEffect(()=>{if(!n){const t=uuidv4();r(t),s(!0),p(250);var e=setInterval(()=>{a._LocalEventEmitter.dispatch(t,{dispatch:"loadDefault"})},2500);f(e)}},[n]),React.useEffect(()=>{a?._loggedIn?.identifier&&!t&&m&&h()},[a?._loggedIn?.identifier,t,m]),async()=>{m&&clearInterval(m),u(!0),l(!0);var e,t={hash:a._loggedIn.hash,identifier:a._loggedIn.identifier,customer:o?.query?.cus,foruser:o?.query?.foruser,enforceNoCustomer:a?.enforceNoCustomer},t=await fetchPost(a.apiUrl+"/a/checkexistingcustomer",null,null,t);return l(!1),!!t&&(t.hasOwnProperty("status")?"disauthenticated"==t.status?(logout(),"disauthenticated"):"failed"==t.status?(a?.setAdminAuth&&a.setAdminAuth({}),!1):"success"==t.status?(!t?.authorized&&o.query.foruser?"success"===(e=await fetchPost(a.apiUrl+"/a/askauthtouser",null,null,{hash:a._loggedIn.hash,identifier:a._loggedIn.identifier,foruser:o?.query?.foruser}))?.status&&e?.data&&g(e.data):a?.setAdminAuth&&t?.data&&a.setAdminAuth({data:t.data,user:t.user,authorized:t.authorized}),t):void 0:void 0)}),p=(e,t,o=0)=>{try{if(console.log("Trying load",e,o),!i||t){const n={theme:"outline",size:"medium",logo_alignment:"center"};setTimeout(()=>{try{var e=checkSignedIn();e?a._setLoggedIn(e):(google.accounts.id.renderButton(googleSignIn.current,n),c(!0),google.accounts.id.prompt(e=>{console.log("on prompt notification",e)}))}catch(e){setTimeout(()=>{try{var e=checkSignedIn();e?a._setLoggedIn(e):(google.accounts.id.renderButton(googleSignIn.current,n),c(!0),google.accounts.id.prompt(e=>{console.log("on prompt notification",e)}))}catch(e){console.log(e)}},1e4)}},e)}else o<5&&setTimeout(()=>{p(e,t,o+1)},e)}catch(e){console.log(e)}};return console.log("asasa",d),React.createElement("div",{className:""+(a.className??"")},React.createElement("style",null,`

                `),React.createElement("div",null,d?React.createElement("div",null,React.createElement("h3",null,"You asked for authorization to ",d,"'s content delivery tools")):null,React.createElement("div",{className:"simpleCenter"},a?._loggedIn?a._loggedIn&&!a._loggedIn?.username?React.createElement(Username,a):null:React.createElement(SignIn,_extends({},a,{googleSignInRendered:i})))))};export default Module;