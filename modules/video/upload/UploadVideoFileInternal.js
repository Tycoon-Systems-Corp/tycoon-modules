function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import{logout}from"@tycoonsystems/tycoon-modules/utility/onboarding/SignIn";import axios from"axios";import dynamic from"next/dynamic";const UploadVideoFile=dynamic(()=>import("/layout/upload/UploadVideoFile"),{ssr:!1,loading:()=>React.createElement("p",null)}),MAX_UPLOAD_TIME=36e5,Module=o=>{const[t,i]=React.useState(!1),[e,d]=React.useState(null),[a,r]=React.useState(!1),[l,c]=React.useState(-1),u=React.useRef(),g=React.useRef(),p=React.useRef();var s=React.useCallback(e=>{d(null)}),n=React.useCallback(e=>{g?.current&&g.current.click()}),f=React.useCallback(e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy",a||r(!0)}),m=React.useCallback(e=>{e.preventDefault(),e.stopPropagation(),a&&r(!1),-1!==l||o.currentVideo||o.processing||e?.dataTransfer?.files&&e.dataTransfer.files&&(e=e.dataTransfer.files,g.current.files=e,h())}),P=React.useCallback(e=>{a&&r(!1)});const h=()=>{if(p?.current&&clearTimeout(p.current),!t){if(!o._loggedIn||o._loggedIn&&!o?._loggedIn?.username)return d({message:"Please sign in to upload videos"}),!1;if(i(!0),g?.current?.files&&g.current.files[0]){if(-1===l&&!o.currentVideo&&!o.processing){const n=g.current.files[0];var e=new FormData;let t,a,r;var s=n.name.match(/\.([a-zA-Z0-9]*)$/)[1],s=(e.append("extension",s),e.append("video",n),e.append("dborigin",o.dborigin),e.append("domainKey",o.domainKey),e.append("identifier",o._loggedIn.identifier),e.append("hash",o._loggedIn.hash),e.append("socket",o._loggedIn.identifier+"-"+o.dborigin),{onUploadProgress:e=>{console.log("Progress",e),!o?.processing&&o?.setProcessing&&o.setProcessing(!0),t=e.loaded/1e6,a=n.size/1e6,r=Math.floor(t/a*100),console.log(r,a,t),c(r),o.updateTrackFileProgress&&o.updateTrackFileProgress(r),99.9999<=r&&o?.setHandlingMeta&&o.setHandlingMeta(!0),u.current.style.width=r+"%"},headers:{"Content-Type":"multipart/form-data"},withCredentials:!0,timeout:o?.MAX_UPLOAD_TIME??MAX_UPLOAD_TIME});p.current=setTimeout(()=>{i(!1)},o?.MAX_UPLOAD_TIME??MAX_UPLOAD_TIME),axios.post(o.apiUrl+"/m/uploadvideo",e,s).then(async e=>{e&&200==response.status&&(o?.setProcessing&&o.setProcessing(!0),d(null),e.data)&&e.data.job&&o?.setVideoDocumentProxy&&o.setVideoDocumentProxy(e.data.job)}).catch((e,t)=>{u?.current&&(u.current.style.width=0),c(-1),i(!1),o?.setProcessing&&o.setProcessing(!1),g?.current&&(g.current.value=null),o?.setProcessing&&o.setProcessing(!1),e.res&&e.res.data&&e.res.data.message?(this.setState({pageError:e.res.data.message}),"disauthenticated"==e.res.data.message&&logout()):d({message:"Something went wrong during video upload"})})}}else i(!1),d({message:"Please choose a video to upload"})}};return React.useEffect(()=>{99.9999<=l&&o?.setHandlingMeta&&o.setHandlingMeta(!0)},[l]),React.createElement("div",null,React.createElement(UploadVideoFile,_extends({},o,{dropHandler:m,dropHandlerOver:f,dropHandlerEnd:P,draggingOver:a,fileInput:g,doUpload:h,beginUpload:n,pageError:e,handleClearError:s,loadingBar:u,processing:o.processing,currentVideo:o.currentVideo,fileProgress:l,fetchBusy:t})))};export default Module;