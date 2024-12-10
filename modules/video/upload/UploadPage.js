function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,s=arguments[t];for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}import React from"react";import{useRouter}from"next/router";import apiReq from"/modules/utility/api/apiReq";import{v4 as uuidv4}from"uuid";import{setAndPlay}from"/modules/video/player/utility";import{initializePlayer,disposePlayer}from"/modules/streaming/watch/runtime/initialize";import{checkiOS,debounce,resolveNestedProperty}from"/modules/util";import Upload from"/modules/video/upload/class/Upload";import{fetchVideos}from"/modules/video/upload/tools";import UploadVideo from"/layout/upload/UploadVideo";const ASSOCIATE_RECORDS=["product","video","article"],ASSOCIATION_METHODS=["authorize","related"],Module=o=>{useRouter();const[e,t]=React.useState(null),[a,s]=React.useState(!1),[c,r]=React.useState(null),[i,l]=React.useState(null),[d,n]=React.useState(null),[u,p]=React.useState(!1),[m,R]=React.useState(!1),[g,f]=React.useState(!1),[S,z]=React.useState(!1),[h,v]=React.useState(null),[y,L]=React.useState(20),[k,N]=React.useState(!1);var[q,F]=React.useState(ASSOCIATE_RECORDS[0]);const[E,H]=React.useState(10);var[j,$]=React.useState(ASSOCIATION_METHODS[0]);const[b,A]=React.useState([]),[B,O]=React.useState(null),[P,_]=React.useState(!1),[W,Y]=React.useState({message:""}),[C,G]=React.useState({action:"page_loaded",trying:"play_video",src:""}),I=React.useRef(),T=React.useRef();var J=React.useRef(),K=React.useRef();React.useEffect(()=>{var e;a||(e=uuidv4(),r(e),s(!0))},[a,c,g]),o._LocalEventEmitter.unsubscribe(c),o._LocalEventEmitter.subscribe(c,e=>{var t;e&&("fetchVideos"===e.dispatch?y<100&&(t=y+20,L(t),D(0,t)):"initializeVideosHandler"===e.dispatch&&X())});const Q=React.useCallback(debounce(e=>{e?.target&&e.target.scrollLeft+e.target.offsetWidth>e.target.scrollWidth-300&&!S&&o._LocalEventEmitter.dispatch(c,{dispatch:"fetchVideos"})},500),[y,S,h]),X=()=>{T?.current&&!k&&(N(!0),T.current.addEventListener("scroll",Q))},D=(React.useEffect(()=>{!o._loggedIn||S||h||(D(0,y),x(ASSOCIATE_RECORDS[0],E))},[o?._loggedIn,S,y]),async(e,t)=>{e=await fetchVideos(o,e,t,z,S,c);e&&v(e)});var Z=React.useCallback(e=>{t(null)});const w=(e,t)=>{var a=t??i;const s=checkiOS()?"hls":"mpd";if(t&&t[s]){const r=o.cdn.static+"/video/"+a[s];I.current?setAndPlay(r,s,I.current):setTimeout(()=>{setAndPlay(r,s,I.current)},5e3)}},U=i=>{let e=i;i instanceof Upload?l(i):(e=new Upload(o._loggedIn.identifier,i),l(e)),e.player||(e.player=I),i?.id&&i.id,n(e.getInstance()),setTimeout(()=>{e?.usePayload&&Object.entries(e.usePayload).map(t=>{var a,s,r=document.querySelector(`[selectelement="${c}-${t[0]}"]`);if(r){let e=resolveNestedProperty(i,t[1].path);"date"===t[1].type&&(t=new Date(Number(e)))&&(a=(t.getMonth()+1).toString(),s=t.getDate().toString(),e=`${t.getFullYear()}-${a.padStart(2,"0")}-`+s.padStart(2,"0")),r.value=e}})},150)},V=(e,t,a="player-"+c)=>{var s,r;U(e),i?.updatedFields&&!t&&(i.updatedFields={}),c&&(g?w(I.current,e):(t=w,e=e,a=a,r=checkiOS()?"hls":"mpd",e&&e[r]&&(r=o.cdn.static+"/video/"+e[r],(s={...C}).src=r,G(s),I.current=initializePlayer(o,e,C,a?"player-"+c:null,{},I,[],null,null,f,t))))};o._LocalEventEmitter.unsubscribe("uploadUpdate"),o._LocalEventEmitter.subscribe("uploadUpdate",e=>{e?.message&&(-1<["Ready to watch","Began processing video"].indexOf(e.message)&&D(0,y),Y({message:e.message})),(e?.record?.id&&i?.getInstance()?.id&&e.record.id===i.getInstance().id||-1<["Video queued for processing","Began processing video"].indexOf(e.message))&&V(e.record)}),o._LocalEventEmitter.unsubscribe("uploadProgressUpdate"),o._LocalEventEmitter.subscribe("uploadProgressUpdate",e=>{console.log("Upload Progress",e),e?.totalProgress&&(P||_(!0),O(e.totalProgress),.99<=e.totalProgress)&&setTimeout(()=>{_(!1),setTimeout(()=>{O(null)},2500)},5e3)});var ee=React.useCallback(e=>{if(e?.currentTarget?.getAttribute("item")){const t=e.currentTarget.getAttribute("item");if(t){const a=h.find(e=>e.id===t);a&&new Promise((e,t)=>{e(R(!0))}).then(()=>{V(a)})}}}),te=React.useCallback(e=>{R(!1),U(null),i?.updatedFields&&(i.updatedFields={}),p(!1)},[i]);React.useEffect(()=>{!m&&I?.current?.pause&&I.current.pause()},[m,I?.current]);const M=async(e,t)=>{let a;var s=[...h],t=t??i;return e&&("publish"===e?a=await t.setPublish(o,!0):"unpublish"===e?a=await t.setPublish(o,!1):"private"===e?a=await t.setPrivate(o,!0):"unprivate"===e?a=await t.setPrivate(o,!1):"update"===e&&(a=await t.setUpdate(o))),a?.id&&(U(a),-1<(e=s.findIndex(e=>e.id===a.id))&&(s[e]=a),v(s)),{video:a,videos:s}};var ae=React.useCallback(e=>{e=e?.currentTarget?.getAttribute("modif");M(e)},[i]);const x=async(e,t)=>{var a=e+"Req",e=(H(t),"product"===e||"article"===e?"created":"creation"),t=await apiReq("/fetch/fetchhandler",{handlerArgs:[{[a]:[{author:o?._loggedIn.identifier,limit:t,offset:0,sortField:e,sort:"desc"}]}]});"success"===t?.status&&t?.data?.fetchedData&&t.data.fetchedData[0]&&t.data.fetchedData[0][a]&&t.data.fetchedData[0][a][0]&&(e=t.data.fetchedData[0][a][0],A(e))};console.log(o,i,g,C,h,b);var se=0<h?.length?h:Array(20).fill().map(()=>{});return React.createElement("div",null,React.createElement(UploadVideo,_extends({},o,{ASSOCIATE_RECORDS:ASSOCIATE_RECORDS,ASSOCIATION_METHODS:ASSOCIATION_METHODS,handleClearError:Z,setPageError:t,pageError:e,setProcessing:p,processing:u,uploadTranscodeProgress:B,showingTranscodeProgress:P,handlingMeta:m,setHandlingMetaProxy:e=>{R(e),g||setTimeout(()=>{I.current=initializePlayer(o,null,C,"player-"+c,{},I,[],null,null,f,null)},250)},setVideoDocumentProxy:U,fetchBusy:S,useVideos:se,videosContainerRef:T,loadVideo:ee,status:W,componentId:c,initialized:g,setInitialized:f,videoDocumentRasterized:d,clipStartRef:J,clipDescriptionRef:K,currentAssociation:q,currentAssociationMethod:j,associateRecords:b,videoDocument:i,handlePublish:ae,handleStartUpload:te,setVideoDocumentRasterized:n,setCurrentAssociation:F,setCurrentAssociationMethod:$,getAssociateAttributes:x,currentAssociationLimit:E,setAssociateRecords:A,loadRecord:V,handleDisposePlayer:e=>{disposePlayer(e??"player-"+c),f(!1)},publish:M,noAds:!0})))};export default Module;