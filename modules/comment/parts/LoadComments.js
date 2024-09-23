function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,s=arguments[t];for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}import React from"react";import{v4 as uuidv4}from"uuid";import apiReq from"/modules/utility/api/apiReq";import WatchPageStyles from"/modules/streaming/watch/WatchPage.module.scss";import{ReadComment}from".";import{submitPost}from"/modules/utility/utility/comment";const Module=l=>{const[e,a]=React.useState(!1),[,t]=React.useState(!1),[s,i]=React.useState(null),[c,r]=React.useState(!1),[,m]=React.useState(-1),[o,n]=React.useState(null),[d,u]=React.useState([]),[p,w]=React.useState(0),[h,R]=React.useState(null),[f,g]=React.useState(null),v=(l?.pipe&&(l._LocalEventEmitter.unsubscribe(l.pipe),l._LocalEventEmitter.subscribe(l.pipe,e=>{if(e&&"comment_published"===e.dispatch&&e?.comment){var t,a,s,o=[...d];const n=e?.comment?.meta?.opId;n?-1<(t=d.findIndex(e=>e.id===n))&&(o[t].replies||(o[t].replies=[]),(a=[...o[t].replies]).push(e.comment),(s={...o[t]}).replies=a,o[t]=s):o.unshift(e.comment),e.comment?.meta?.opId&&l._LocalEventEmitter.dispatch(e.comment.meta.opId,{dispatch:"comment_published",comment:e.comment}),u(o)}})),l._LocalEventEmitter.unsubscribe(o),l._LocalEventEmitter.subscribe(o,e=>{var t,a,s,o,n;e&&"scroll_window"===e.dispatch&&(e=document.body,s=document.documentElement,n=e?.scrollHeight??0,e=e?.offsetHeight??0,t=s?.clientHeight??0,a=s?.scrollHeight??0,s=s?.offsetHeight??0,o=window?.scrollY+window?.innerHeight,n=Math.max(n,e,t,a,s),c||n-(window?.innerHeight<450?window.innerHeight/2:600)<o&&(null===f||f?.scrollY>window?.scrollY+50||f?.scrollY<window?.scrollY-50)&&(g({scrollX:window?.scrollX,scrollY:window?.scrollY}),e=p+25,w(e),r(!0),v(l.watchData.id,e)))}),React.useEffect(()=>{if(!e){const t=uuidv4();window.addEventListener("scroll_window",function(e){l._LocalEventEmitter.dispatch(t,{dispatch:"scroll_window"})}),g({scrollX:window?.scrollX,scrollY:window?.scrollY}),n(t),a(!0)}},[e]),React.useEffect(()=>{c||l?.watchData?.id&&l.watchData.id!==s&&(r(!0),t(!0),v(l.watchData.id,p))},[l?.watchData?.id,c,s]),async(e,t,a,s)=>{try{i(e);var o,n=await apiReq("/p/getposts",{apiUrl:l?.apiUrl,id:e,offset:t,par:a,parentOffset:s});n?.data?(m((new Date).getTime()),r(!1),0<t&&!a&&!s?(o=[...d].concat(n.data),u(o)):u(n.data)):(r(!1),R({dispatch:"error",message:n?.message??"Failed to get posts"}))}catch(e){r(!1)}});var E=React.useCallback(e=>{R(null)});const b=React.useCallback((e,t,a,s,o,n)=>{console.log("Handle Post",e,t);var i=l?.commentUseParent??"",c=l?.commentUseParentType??"";submitPost(e,l,t,a,i,c,s,o,n)});var y=React.useMemo(()=>d.map((e,t)=>React.createElement("div",{key:t},React.createElement(ReadComment,_extends({},l,{commentData:e,i:t,handlePost:b,sub:e})))),[d]);return React.createElement("div",{className:l.className+" AddComment_Container"},d?.map?React.createElement("div",{className:`${WatchPageStyles.readCommentsListContainer} ${WatchPageStyles.readCommentsListContainerOp} Post_ReadCommentsListContainer`},y):null,React.createElement("div",{className:"spinner spinnerBig "+(c?"opacity1 spinnerRelative":"opacity0 spinnerHide"),style:{marginTop:c?"1rem":0}}),h?React.createElement("div",{className:"error CommentForceNoBlur",style:{margin:".25rem",marginBottom:"0"},onClick:E},h.message):null)};export default Module;