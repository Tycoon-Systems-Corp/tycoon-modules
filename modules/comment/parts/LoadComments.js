function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i,a=arguments[t];for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}import React from"react";import{v4 as uuidv4}from"uuid";import apiReq from"tycoon-modules/utility/api/apiReq";import WatchPageStyles from"tycoon-modules/streaming/watch/WatchPage.module.scss";import{ReadComment}from".";import{submitPost}from"tycoon-modules/utility/utility/comment";const Module=r=>{const[e,i]=React.useState(!1),[,t]=React.useState(!1),[a,o]=React.useState(null),[l,c]=React.useState(!1),[,d]=React.useState(-1),[s,n]=React.useState(null),[m,p]=React.useState([]),[u,f]=React.useState(0),[h,g]=React.useState(null),[w,R]=React.useState(null),[v,y]=React.useState(!1),_=r?.useId??r?.commentUseParent,E=(r?.pipe&&(r._LocalEventEmitter.unsubscribe(r.pipe),r._LocalEventEmitter.subscribe(r.pipe,i=>{if(i)if("comment_published"===i.dispatch){if(i?.comment){var e,t,a,s=[...m];const o=i?.comment?.meta?.opId;o?-1<(e=m.findIndex(e=>e.id===o))&&(s[e].replies||(s[e].replies=[]),(t=[...s[e].replies]).push(i.comment),(a={...s[e]}).replies=t,s[e]=a):s.unshift(i.comment),i.comment?.meta?.opId&&r._LocalEventEmitter.dispatch(i.comment.meta.opId,{dispatch:"comment_published",comment:i.comment}),p(s)}}else if("refetch"===i.dispatch&&i?.index){var n=[...m];for(let t=0;t<n.length;t++){if(n?.[t]?.id===i.index){delete n[t].liked,delete n[t].disliked,i?.status&&(n[t][i.status+"d"]=!0);break}if(n[t]?.replies)for(let e=0;e<n[t].replies.length;e++)if(n[t].replies?.[e]?.reply_id===i.index){delete n[t].replies[e].liked,delete n[t].replies[e].disliked,i?.status&&(n[t].replies[e][i.status+"d"]=!0),r._LocalEventEmitter.dispatch(i.index,{dispatch:"comment_update",reply_id:i.index,replies:n[t].replies});break}}p(n)}})),r._LocalEventEmitter.unsubscribe(s),r._LocalEventEmitter.subscribe(s,e=>{if(e&&"scroll_window"===e.dispatch){var t,e=document.body,i=document.documentElement,a=e?.scrollHeight??0,e=e?.offsetHeight??0,s=i?.clientHeight??0,n=i?.scrollHeight??0,i=i?.offsetHeight??0,o=window?.scrollY+window?.innerHeight,a=Math.max(a,e,s,n,i);if(!l)try{a-(window?.innerHeight<450?window.innerHeight/2:600)<o&&(null===w||w?.scrollY>window?.scrollY+50||w?.scrollY<window?.scrollY-50)&&(R({scrollX:window?.scrollX,scrollY:window?.scrollY}),t=u+25,f(t),c(!0),E(_,t))}catch(e){}}}),React.useEffect(()=>{if(!e){const t=uuidv4();try{window.addEventListener("scroll_window",function(e){r._LocalEventEmitter.dispatch(t,{dispatch:"scroll_window"})})}catch(e){}R({scrollX:window?.scrollX,scrollY:window?.scrollY}),n(t),i(!0)}},[e]),React.useEffect(()=>{l||(_&&_!==a||!v&&r?._loggedIn?.identifier)&&(r?._loggedIn?.identifier&&!v&&y(!0),c(!0),t(!0),E(_,u))},[_,l,a,r?._loggedIn?.identifier,v]),async(e,t,i,a)=>{try{o(e);var s,n=await apiReq("/p/getposts",{apiUrl:r?.apiUrl,id:e,offset:t,par:i,parentOffset:a,orderDir:r?.orderDir??null,identifier:r?._loggedIn?.identifier,hash:r?._loggedIn?.hash});n?.data?(d((new Date).getTime()),c(!1),0<t&&!i&&!a?(s=[...m].concat(n.data),p(s)):p(n.data)):(c(!1),g({dispatch:"error",message:n?.message??"Failed to get posts"}))}catch(e){c(!1)}});var b=React.useCallback(e=>{g(null)});const C=React.useCallback((e,t,i,a,s,n)=>{console.log("Handle Post",e,t);var o=r?.commentUseParent??"",l=r?.commentUseParentType??"";submitPost(e,r,t,i,o,l,a,s,n)});var S=React.useMemo(()=>m.map((e,t)=>React.createElement("div",{key:t},React.createElement(ReadComment,_extends({},r,{commentData:e,i:t,handlePost:C,sub:e})))),[m]);return React.createElement("div",{className:r.className+" AddComment_Container"},m?.map?React.createElement("div",{className:`${WatchPageStyles.readCommentsListContainer} ${WatchPageStyles.readCommentsListContainerOp} Post_ReadCommentsListContainer`},S):null,React.createElement("div",{className:`spinner spinnerBig ${l?"opacity1":"opacity0 spinnerHide"} spinnerRelative`,style:{marginTop:l?"1rem":0}}),h?React.createElement("div",{className:"error CommentForceNoBlur",style:{margin:".25rem",marginBottom:"0"},onClick:b},h.message):null)};export default Module;