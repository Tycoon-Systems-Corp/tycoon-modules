function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import{v4 as uuidv4}from"uuid";import{AppConfigLayout,PageContainer}from"/modules/internal";import{getServerSidePropsDefault}from"/modules/utility.js";import{Menu}from"/modules/menu/";import styles from"../Admin.module.scss";import simulatorTools from"/modules/admin/tools/simulator";const Module=s=>{const[t,a]=React.useState(!1),[,r]=React.useState(null);var[e,,]=React.useState(null);const[l,n]=React.useState(null),[o,u]=React.useState(null),[i,m]=React.useState(!1),{schema:c,simulatedPage:p,simulatedPageName:d,simulatedUrl:f}=s;let S=o?JSON.parse(JSON.stringify(o)):s;if(s._LocalEventEmitter.unsubscribe("simulator_wrapper"),s._LocalEventEmitter.subscribe("simulator_wrapper",e=>{e&&("resetSchema"===e.dispatch?n(null):"resetServerProps"===e.dispatch&&(n(null),u(null),S=s,m(!0),setTimeout(()=>{m(!1)},250)))}),o){Object.entries(s).map(e=>{o[e[0]]?S[e[0]]=o[e[0]]:S[e[0]]=e[1]});try{Object.entries(o).map(e=>{-1===["data","log","error","params"].indexOf(e[0])&&(S[e[0]]=e[1])})}catch(e){}}React.useEffect(()=>{(async()=>{var e,t,a=new URL(s.simulatedUrl,"https://"+s.domainUrl),r=new URLSearchParams(a.search),a=a?.pathname?.split("/")?"/"+a.pathname.split("/")[2]:"/",l={};for([e,t]of r.entries())l[e]=t;r=await getServerSidePropsDefault({req:{url:a},query:l});return r?.props&&u(r.props),r})()},[s?.currentSimulated,s?.simulatedUrl]),React.useEffect(()=>{var e;t||(e=uuidv4(),r(e),a(!0))},[t]);const R=React.useMemo(()=>{return l||(c?simulatorTools.replaceSchemaVariables(c,S,"identify"):null)},[s,c,l]);!l&&R&&n(R),console.log("Pre",R,l);var g=React.useMemo(()=>{return c?simulatorTools.replaceSchemaVariables(R,S,"render"):null},[s]);return React.createElement("div",{className:s.className+" Simulator_Container"},e?React.createElement("p",{className:"error",style:{marginTop:".5rem"},onClick:handleCloseError},e):null,React.createElement("div",null,React.createElement("div",{className:styles.simulatorIsolatedContainer+" Simulator_SimulatorIsolatedContainer"},i?null:React.createElement(PageContainer,_extends({},S,{schema:l??c,renderSchema:g,pageName:d,simulating:!0,simulatedUrl:f,simulatedPage:p}),React.createElement(Menu,null),React.createElement(AppConfigLayout,null)))))};export default Module;