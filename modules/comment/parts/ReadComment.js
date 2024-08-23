function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,n=arguments[t];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}import React from"react";import{v4 as uuidv4}from"uuid";import WatchPageStyles from"/modules/streaming/watch/WatchPage.module.scss";import Link from"next/link";import{createMarkup}from"/modules/article/utility";import{AddComment}from".";import{getPostChildren}from"/modules/utility/utility/comment";const Module=n=>{const[e,a]=React.useState(!1),[t,s]=React.useState(null),[r,l]=React.useState(null),[o,c]=React.useState(!1),[i,m]=React.useState(-1),[u,d]=React.useState(null),[p,h]=React.useState(null),[R,g]=React.useState(0);var[P,,]=React.useState(!0);const[S,y]=React.useState(!1),[C,_]=React.useState(!1),[f,E]=React.useState({}),v=React.useRef(),{commentData:L,i:k}=n;n._LocalEventEmitter.unsubscribe(t),n._LocalEventEmitter.subscribe(t,e=>{e&&"resize_window"===e.dispatch&&("short"===(e=w(!0))&&v?.current?.classList?.remove&&v?.current?.classList?.contains("Post_PostMarkupContainerInternalShowLess")?(v.current.classList.remove("Post_PostMarkupContainerInternalShowLess"),c(!1)):"long"===e&&v?.current?.classList?.add&&!v?.current?.classList?.contains("Post_PostMarkupContainerInternalShowLess")&&v.current.classList.add("Post_PostMarkupContainerInternalShowLess"))}),React.useEffect(()=>{if(!e){const t=uuidv4();window.addEventListener("resize_window",function(e){n._LocalEventEmitter.dispatch(t,{dispatch:"resize_window"})}),s(t),a(!0)}},[e]);var b=React.useCallback(e=>{if(e){if(o)return c(!1),v?.current?.classList.contains("Post_PostMarkupContainerInternalShowLess")||v.current.classList.add("Post_PostMarkupContainerInternalShowLess"),!0;c(!0),v?.current?.classList.contains("Post_PostMarkupContainerInternalShowLess")&&v.current.classList.remove("Post_PostMarkupContainerInternalShowLess")}});const w=e=>{if((-1===i||i<(new Date).getTime()-2500)&&v?.current&&(!o||e)){e=!o&&"short"===r&&50<v.current.clientHeight?50:v.current.clientHeight;if(v.current.scrollHeight-2.5>e){if("long"!==r)return l("long"),m((new Date).getTime()),"long"}else if("short"!==r)return l("short"),m((new Date).getTime()),"short"}return r};var M=React.useCallback(e=>{d(!1),setTimeout(()=>{d(!0)},25)},[u]);const N=React.useCallback(e=>{d(!1)}),W=(React.useEffect(()=>{w()},[o,v?.current,r]),React.useEffect(()=>{0<L?.replies?.length&&!p&&(h(L.replies.length),g(3<L.replies.length?3:L.replies.length))},[L,p]),e=>{_(!0),n?.notifyNewComment&&n.notifyNewComment(e)});var I=React.useMemo(()=>React.createElement("div",null,u?React.createElement("div",{className:WatchPageStyles.commentReplyExternalContainer+" Post_ReplyExternalContainer"},React.createElement(AddComment,_extends({},n,{addComment:!0,opId:n?.opId??L?.id??null,opIdType:"comment",handleCancelReply:N,sub:n?.sub,defaultWriting:!0,notifyNewComment:W}))):null),[u]);var x=React.useCallback(e=>{(async e=>{if(!S){y(!0);var t={...f},a=t?.limit?t.limit+15:30,e=await getPostChildren(e,n,L?.id,"comment",a);if(y(!1),console.log(e),e?.replies){if(void 0!==t?.replies?.length&&e.replies.length===t.replies.length)return;t.limit=e?.limit??a,t.replies=e.replies,E(t)}}})(e)}),B=React.useCallback(e=>{C||_(!0)}),T=(L?.id&&(n._LocalEventEmitter.unsubscribe(L?.id),n._LocalEventEmitter.subscribe(L?.id,e=>{var t;e&&"comment_published"===e.dispatch&&f?.replies&&((t={...f}).replies.push(e.comment),E(t))})),f?.replies??L?.replies??[]);return React.createElement("div",{className:n.className+" ReadComment_Container"},L?React.createElement("div",{className:WatchPageStyles.metaAuthorMetaContainer+" gap-p10",comment:L?.id},React.createElement(Link,{href:"/p?u="+L?.author_data?.id,style:{display:"block"}},React.createElement("img",{className:""+WatchPageStyles.watchIcon,src:""+(L?.author_data?.icon??"img/default/greyIcon.png")})),React.createElement("div",{className:WatchPageStyles.commentDataContainer+" Post_CommentDataContainer",style:{width:"100%"}},React.createElement(Link,{href:"/p?u="+L?.author_data?.id,style:{display:"block",maxWidth:"fit-content"}},React.createElement("h5",{className:""+WatchPageStyles.username},""+(L?.author_data?.username??""))),React.createElement("div",{className:WatchPageStyles?.PostMarkupContainer+" Post_MarkupContainer"},React.createElement("div",{className:WatchPageStyles?.PostMarkupContainerInternal+" Post_MarkupContainerInternal Post_PostMarkupContainerInternalShowLess "+k,dangerouslySetInnerHTML:{__html:createMarkup(L.contents)},ref:v})),"long"===r?o?React.createElement("button",{onClick:b,className:WatchPageStyles.PostShowLess+" Post_ShowLess"},"Show less"):React.createElement("button",{onClick:b,className:WatchPageStyles.PostReadMore+" Post_ReadMore"},"Read More"):null,React.createElement("div",{className:WatchPageStyles.commentActionPalleteContainer+" Post_CommentActionPalleteContainer"},React.createElement("button",{onClick:M,className:`${WatchPageStyles.SimpleButton} ${WatchPageStyles.ReplyButton} Post_SimpleButton`,style:{display:n?.preventReply||u?"none":"block"}},"Reply")),0<R&&L?.replies?.map?C?React.createElement("div",{className:`${WatchPageStyles.commentSubReplies} Post_CommentSubReplies ${WatchPageStyles.readCommentsListContainer} Post_ReadCommentsListContainer`},T.map((e,t)=>React.createElement("div",{key:t},React.createElement(Module,_extends({},n,{commentData:e,j:t,opId:L?.id,sub:e,notifyNewComment:W}))))):0<L?.replies?.length?React.createElement("div",{onClick:B,className:WatchPageStyles.SimpleButton+" Post_SimpleButton flex gap-p2 Post_BeginLoadMoreContainer",style:{cursor:"pointer",marginTop:".5rem",maxWidth:"fit-content"}},React.createElement("div",{className:"material-icons"},"expand_more"),React.createElement("button",{className:WatchPageStyles.LoadReplies+" Post_LoadReplies"},L.replies.length," ",1===L?.replies?.length?"reply":"replies")):null:null,C&&0<R&&0<L?.replies?.length&&P?S?React.createElement("div",{className:"spinner spinnerBig 'opacity1 spinnerRelative"}):React.createElement("div",{className:WatchPageStyles.SimpleButton+" Post_SimpleButton flex gap-p2 Post_LoadMoreContainer",onClick:x,style:{cursor:"pointer",marginTop:".5rem",maxWidth:"fit-content"}},React.createElement("div",{className:"material-icons"},"expand_more"),React.createElement("button",{className:WatchPageStyles.SimpleButton+" Post_LoadMore",style:{margin:0,padding:".125rem .5rem",borderRadius:"1rem"}},"Load more")):null,I)):null)};export default Module;