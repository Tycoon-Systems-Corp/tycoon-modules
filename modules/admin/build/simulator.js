function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import{v4 as uuidv4}from"uuid";import{AppConfigLayout,PageContainer}from"@tycoonsystems/tycoon-modules/internal";import{getServerSidePropsDefault}from"@tycoonsystems/tycoon-modules/utility.js";import{Menu}from"@tycoonsystems/tycoon-modules/menu/";import styles from"@tycoonsystems/tycoon-modules/admin/Admin.module.scss";import simulatorTools from"@tycoonsystems/tycoon-modules/admin/tools/simulator";const Module=o=>{const[t,a]=React.useState(!1),[,r]=React.useState(null);var[e,,]=React.useState(null);const[s,l]=React.useState(null),[n,m]=React.useState(null),[u,i]=React.useState(!1),{schema:c,simulatedPage:p,simulatedPageName:d,simulatedUrl:y}=o;let f=n?JSON.parse(JSON.stringify(n)):o;if(o._LocalEventEmitter.unsubscribe("simulator_wrapper"),o._LocalEventEmitter.subscribe("simulator_wrapper",e=>{e&&("resetSchema"===e.dispatch?l(null):"resetServerProps"===e.dispatch&&(l(null),m(null),f=o,i(!0),setTimeout(()=>{i(!1)},250)))}),n){Object.entries(o).map(e=>{n[e[0]]?f[e[0]]=n[e[0]]:f[e[0]]=e[1]});try{Object.entries(n).map(e=>{-1===["data","log","error","params"].indexOf(e[0])&&(f[e[0]]=e[1])})}catch(e){}}React.useEffect(()=>{(async()=>{var e,t,a=new URL(o.simulatedUrl,"https://"+o.domainUrl),r=new URLSearchParams(a.search),a=a?.pathname?.split("/")?"/"+a.pathname.split("/")[2]:"/",s={};for([e,t]of r.entries())s[e]=t;r=await getServerSidePropsDefault({req:{url:a},query:s});return r?.props&&m(r.props),r})()},[o?.currentSimulated,o?.simulatedUrl]),React.useEffect(()=>{var e;t||(e=uuidv4(),r(e),a(!0))},[t]);const S=React.useMemo(()=>{return s||(c?simulatorTools.replaceSchemaVariables(c,f,"identify"):null)},[o,c,s]);!s&&S&&l(S),console.log("Pre",S,s);var R=React.useMemo(()=>{return c?simulatorTools.replaceSchemaVariables(S,f,"render"):null},[o]);return React.createElement("div",{className:o.className+" Simulator_Container"},e?React.createElement("p",{className:"error",style:{marginTop:".5rem"},onClick:handleCloseError},e):null,React.createElement("div",null,React.createElement("div",{className:styles.simulatorIsolatedContainer+" Simulator_SimulatorIsolatedContainer"},u?null:React.createElement(PageContainer,_extends({},f,{schema:s??c,renderSchema:R,pageName:d,simulating:!0,simulatedUrl:y,simulatedPage:p}),React.createElement(Menu,null),React.createElement(AppConfigLayout,null)))))};export default Module;