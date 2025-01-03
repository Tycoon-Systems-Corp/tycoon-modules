function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import Script from"next/script";import{checkPlayerIsPlaying,checkAuthorization}from"tycoon-modules/utility/streaming";import{v4 as uuidv4}from"uuid";import{ensureAutoPlay}from"tycoon-modules/video/player/utility";import Player from"tycoon-modules/streaming/watch/Player";import{initializePlayer,disposePlayer}from"tycoon-modules/streaming/watch/runtime/initialize";const Module=t=>{const[e,a]=React.useState(!1),[r,c]=React.useState(null),[l,i]=React.useState(null),[n,s]=React.useState(!1),[o,u]=React.useState(!1),[d,p]=React.useState({});var[,,]=React.useState(null);const[y,m]=React.useState(!1),[h,v]=React.useState(!1);let f=React.useRef();const w=t?.useWatchDataPreview??null;try{window.isAuthorized||(window.isAuthorized=!0)}catch(e){}t._LocalEventEmitter.unsubscribe(r),t._LocalEventEmitter.subscribe(r,e=>{if(e&&"loadDefault"===e.dispatch&&f?.current&&!h){e=checkPlayerIsPlaying(f)&&!f.current.paused();if(w&&(!n||!e||y)){e=checkAuthorization(w,null,t,null);if(e&&w?.meta?.channel?.playbackUrl)if(s(e),e)if(console.log(w.meta.channel.playbackUrl),!(f?.current?.tech_?.hasStarted_&&2<f?.current?.readyState)){f.current.src({src:w.meta.channel.playbackUrl,type:"application/x-mpegURL"});try{f.current.muted(!0),f.current.play(),ensureAutoPlay(f.current.play,f.current),m(!1)}catch(e){console.log("err",e)}}}}}),t._LocalEventEmitter.unsubscribe("preview"),t._LocalEventEmitter.subscribe("preview",e=>{e&&"destroy"===e?.dispatch&&(disposePlayer("preview-player-"+r),f.current=null,v(!0))});const E=()=>{a((new Date).getTime());var e=uuidv4();c(e);const t="preview-player-"+e;i(t);e=Object.assign(d,{autoplay:!0,playerName:t,id:e,type:"preview"});p(e),setTimeout(()=>{try{P(d,t)}catch(e){}},150)},b=(React.useEffect(()=>{!e&&window?.videojs&&E()},[e,f.current,window?.videojs]),e=>{t._LocalEventEmitter.dispatch(r,{dispatch:"loadDefault"}),setInterval(()=>{t._LocalEventEmitter.dispatch(r,{dispatch:"loadDefault"})},7500)}),P=e=>{try{var t;window.videojs&&(t=window.videojs.players)&&Object.keys(t).length&&t[e.playerName]&&t[e.playerName].dispose()}catch(e){}};return React.useEffect(()=>{!o&&d?.playerName&&document.getElementById(l)&&(f.current=initializePlayer(t,w,null,d?.playerName,d,f,[],null,null,u,b,null))},[o,l,d]),React.useEffect(()=>()=>{t._LocalEventEmitter.dispatch("preview",{dispatch:"destroy"})},[]),React.createElement("div",null,React.createElement(Script,{src:"https://d2zsu4v7czjhvo.cloudfront.net/all/videojs/8.9.0/video.min.js",onLoad:E}),React.createElement("div",{className:"Watch_PreviewExternalContainer"},React.createElement("h4",{className:"Watch_PreviewLabel",style:{display:t?.hideLabel?"none":"block"}},"Preview"),l?React.createElement(Player,_extends({},t,{className:"Watch_PreviewContainer",playerName:l,playerInitialized:o,usePlayerHeight:t?.usePlayerHeight??"auto",playerVisible:!0})):null))};export default Module;