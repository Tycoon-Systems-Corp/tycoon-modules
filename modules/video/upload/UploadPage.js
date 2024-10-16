function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,i=arguments[t];for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}import React from"react";import apiReq from"/modules/utility/api/apiReq";import{v4 as uuidv4}from"uuid";import{setAndPlay}from"/modules/video/player/utility";import{initializePlayer,disposePlayer}from"/modules/streaming/watch/runtime/initialize";import{checkiOS,debounce,resolveNestedProperty}from"/modules/util";import Upload from"/modules/video/upload/class/Upload";import{fetchVideos}from"/modules/video/upload/tools";import UploadVideo from"/layout/upload/UploadVideo";const ASSOCIATE_RECORDS=["product","video","article"],ASSOCIATION_METHODS=["authorize","related"],Module=o=>{const[e,t]=React.useState(null),[a,i]=React.useState(!1),[c,s]=React.useState(null),[r,l]=React.useState(null),[d,n]=React.useState(null),[u,p]=React.useState(!1),[m,R]=React.useState(!1),[f,S]=React.useState(!1),[g,h]=React.useState(!1),[v,y]=React.useState(null),[A,E]=React.useState(20),[O,b]=React.useState(!1);var[x,k]=React.useState(ASSOCIATE_RECORDS[0]);const[P,L]=React.useState(10);var[N,q]=React.useState(ASSOCIATION_METHODS[0]);const[C,I]=React.useState([]),[F,H]=React.useState({message:""}),[_,j]=React.useState({action:"page_loaded",trying:"play_video",src:""}),D=React.useRef(),T=React.useRef();var $=React.useRef(),B=React.useRef();React.useEffect(()=>{var e;a||(e=uuidv4(),s(e),i(!0))},[a,c,f]),o._LocalEventEmitter.unsubscribe(c),o._LocalEventEmitter.subscribe(c,e=>{var t;e&&("fetchVideos"===e.dispatch?A<100&&(t=A+20,E(t),w(0,t)):"initializeVideosHandler"===e.dispatch&&Y())});const W=React.useCallback(debounce(e=>{e?.target&&e.target.scrollLeft+e.target.offsetWidth>e.target.scrollWidth-300&&!g&&o._LocalEventEmitter.dispatch(c,{dispatch:"fetchVideos"})},500),[A,g,v]),Y=()=>{T?.current&&!O&&(b(!0),T.current.addEventListener("scroll",W))},w=(React.useEffect(()=>{!o._loggedIn||g||v||(w(0,A),z(ASSOCIATE_RECORDS[0],P))},[o?._loggedIn,g,A]),async(e,t)=>{e=await fetchVideos(o,e,t,h,g,c);e&&y(e)});var G=React.useCallback(e=>{t(null)});const V=(e,t)=>{var a=t??r;const i=checkiOS()?"hls":"mpd";if(t&&t[i]){const s=o.cdn.static+"/video/"+a[i];D.current?setAndPlay(s,i,D.current):setTimeout(()=>{setAndPlay(s,i,D.current)},5e3)}},M=r=>{let e=r;r instanceof Upload?l(r):(e=new Upload(o._loggedIn.identifier,r),l(e)),e.player||(e.player=D),n(e.getInstance()),setTimeout(()=>{e?.usePayload&&Object.entries(e.usePayload).map(t=>{var a,i,s=document.querySelector(`[selectelement="${c}-${t[0]}"]`);if(s){let e=resolveNestedProperty(r,t[1].path);"date"===t[1].type&&(t=new Date(Number(e)))&&(a=(t.getMonth()+1).toString(),i=t.getDate().toString(),e=`${t.getFullYear()}-${a.padStart(2,"0")}-`+i.padStart(2,"0")),s.value=e}})},150)},U=(e,t,a="player-"+c)=>{var i,s;M(e),r?.updatedFields&&!t&&(r.updatedFields={}),c&&(f?V(D.current,e):(t=V,e=e,a=a,s=checkiOS()?"hls":"mpd",e&&e[s]&&(s=o.cdn.static+"/video/"+e[s],(i={..._}).src=s,j(i),D.current=initializePlayer(o,e,_,a?"player-"+c:null,{},D,[],null,null,S,t))))};o._LocalEventEmitter.unsubscribe("uploadUpdate"),o._LocalEventEmitter.subscribe("uploadUpdate",e=>{e?.message&&(-1<["Ready to watch","Began processing video"].indexOf(e.message)&&w(0,A),H({message:e.message})),(e?.record?.id&&r?.getInstance()?.id&&e.record.id===r.getInstance().id||-1<["Video queued for processing","Began processing video"].indexOf(e.message))&&U(e.record)});var J=React.useCallback(e=>{if(e?.currentTarget?.getAttribute("item")){const t=e.currentTarget.getAttribute("item");if(t){const a=v.find(e=>e.id===t);a&&new Promise((e,t)=>{e(R(!0))}).then(()=>{console.log("f",a),U(a)})}}}),K=React.useCallback(e=>{R(!1),M(null),r?.updatedFields&&(r.updatedFields={}),p(!1)},[r]);React.useEffect(()=>{!m&&D?.current&&D.current.pause()},[m,D?.current]);var Q=React.useCallback(e=>{(async e=>{let t;var a;e&&("publish"===e?t=await r.setPublish(o,!0):"unpublish"===e?t=await r.setPublish(o,!1):"private"===e?t=await r.setPrivate(o,!0):"unprivate"===e?t=await r.setPrivate(o,!1):"update"===e&&(t=await r.setUpdate(o))),t?.id&&(M(t),-1<(a=(e=[...v]).findIndex(e=>e.id===t.id))&&(e[a]=t),y(e))})(e?.currentTarget?.getAttribute("modif"))},[r]);const z=async(e,t)=>{var a=e+"Req",e=(L(t),"product"===e||"article"===e?"created":"creation"),t=await apiReq("/fetch/fetchhandler",{handlerArgs:[{[a]:[{author:o?._loggedIn.identifier,limit:t,offset:0,sortField:e,sort:"desc"}]}]});"success"===t?.status&&t?.data?.fetchedData&&t.data.fetchedData[0]&&t.data.fetchedData[0][a]&&t.data.fetchedData[0][a][0]&&(e=t.data.fetchedData[0][a][0],I(e))};console.log(o,r,f,_,v,C);var X=0<v?.length?v:Array(20).fill().map(()=>{});return React.createElement("div",null,React.createElement(UploadVideo,_extends({},o,{ASSOCIATE_RECORDS:ASSOCIATE_RECORDS,ASSOCIATION_METHODS:ASSOCIATION_METHODS,handleClearError:G,setPageError:t,pageError:e,setProcessing:p,processing:u,handlingMeta:m,setHandlingMetaProxy:e=>{R(e),f||setTimeout(()=>{D.current=initializePlayer(o,null,_,"player-"+c,{},D,[],null,null,S,null)},250)},setVideoDocumentProxy:M,fetchBusy:g,useVideos:X,videosContainerRef:T,loadVideo:J,status:F,componentId:c,initialized:f,setInitialized:S,videoDocumentRasterized:d,clipStartRef:$,clipDescriptionRef:B,currentAssociation:x,currentAssociationMethod:N,associateRecords:C,videoDocument:r,handlePublish:Q,handleStartUpload:K,setVideoDocumentRasterized:n,setCurrentAssociation:k,setCurrentAssociationMethod:q,getAssociateAttributes:z,currentAssociationLimit:P,setAssociateRecords:I,loadRecord:U,handleDisposePlayer:e=>{disposePlayer(e??"player-"+c),S(!1)}})))};export default Module;