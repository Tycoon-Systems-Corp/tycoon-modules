function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,o=arguments[t];for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}import React from"react";import ChatStyles from"./Chat.module.scss";import MessagingStyles from"@tycoonsystems/tycoon-modules/social/messaging/Messaging.module.scss";import{CreditCard}from"@tycoonsystems/tycoon-modules/payment";import apiReq from"@tycoonsystems/tycoon-modules/utility/api/apiReq";import{resolveRegionBasedPrice}from"@tycoonsystems/tycoon-modules/utility/ecommerce";import ChatPrompts from"./ChatPrompts";import ChatCommandBar from"/layout/chat/ChatCommandBar";const DEFAULT_PROMPT_STATE={message:"",value:null,amount:"",highlight:"",showing:!1},DEFAULT_POST_FETCH_STATUS={state:"",showing:!1},DEFAULT_FETCH_STATUS={state:""},Module=i=>{const[c,l]=React.useState(!1),[t,T]=React.useState(DEFAULT_FETCH_STATUS),[a,m]=React.useState(DEFAULT_POST_FETCH_STATUS),[d,u]=React.useState(DEFAULT_PROMPT_STATE),g=React.useRef(),h=React.useRef(),_=resolveRegionBasedPrice(i),S=async()=>{let t;try{var a,o,n,r,s;console.log(d),0<d?.value&&!c&&i?.watchMeta?.donateTo&&(t=setTimeout(()=>{l(!1),T({state:""})},35e3),l(!0),T({state:"Sending Donation"}),a=d?.donateTo??i?.watchMeta?.donateTo,o=d?.value,n=d?.offer??i?.offer,r=d?.forLive??i?.watchMeta?.id,console.log(a,o,_),a&&o&&(s=await apiReq("/ecommerce/donate",{identifier:i._loggedIn.identifier,hash:i._loggedIn.hash,donateTo:a,amount:o,offer:n,location:_,options:{extra:{type:i?.regionsData[_.code].payment},forLive:r}}))&&"success"===s.status?(clearTimeout(t),l(!1),m({state:`${_?.symbol??""}${s.data?.totals?.total} ${s.data?.currency} donated to `+(s.data?.meta?.donateToUser??""),header:"Donation sent",href:`https://${i?.domainUrl}/r?o=`+s.data.id,message:"View receipt here",showing:!0}),u(DEFAULT_PROMPT_STATE),setTimeout(()=>{m(DEFAULT_POST_FETCH_STATUS)},1e4),T(DEFAULT_FETCH_STATUS),console.log(s),s?.data?.donation&&e?.currentTarget?.getAttribute("action")&&fireGlobalEvent({action:"donate_complete",donateTo:a,amount:o,offer:n},i._LocalEventEmitter)):(clearTimeout(t),l(!1),T(DEFAULT_FETCH_STATUS)))}catch(e){console.log(e),t&&(clearTimeout(t),l(!1),T(DEFAULT_FETCH_STATUS))}};React.useEffect(()=>{i._validCc&&d?.header?.match("Credit Card required")&&u(DEFAULT_PROMPT_STATE)},[i._validCc]);var o=React.useCallback(e=>{var t,a,o,n,r,s;i?._loggedIn?i?._validCc?(r="customDonate"===e?.currentTarget?.getAttribute("modif")?g?.current?.value:e?.currentTarget?.getAttribute("value")??e?.currentTarget?.value,s=_?.symbol+` ${r} `+_?.currency,t=" to "+(i?.watchMeta?.authorData?.username??"User"),a=i?.watchMeta?.donateTo,o=i?.offer,n=i?.watchMeta?.id,u({header:"Send Donation",message:"Confirm Donation of",value:Number(r),amount:s,highlight:t,showing:!0,confirm:S,donateTo:a,offer:o,forLive:n})):(i._toggleSingleOpenMenu(e,"cart",!0),u({header:"Valid Credit Card required",message:"Please add a Credit Card to send a donation",showing:!0}),h?.current&&clearTimeout(h.current),r=setTimeout(()=>{u(DEFAULT_PROMPT_STATE),h.current=null},5e3),h.current=r):(i._LocalEventEmitter.dispatch("attemptInitializeGoogle",{}),e&&i?._toggleSingleOpenMenu&&i._toggleSingleOpenMenu(e,"main_settings"),u({header:"Sign In",message:"Please register or sign in to send a donation",showing:!0}),h?.current&&clearTimeout(h.current),s=setTimeout(()=>{u(DEFAULT_PROMPT_STATE),h.current=null},5e3),h.current=s)}),n=React.useCallback(e=>{u(DEFAULT_PROMPT_STATE),m(DEFAULT_POST_FETCH_STATUS)});return React.createElement("div",{className:ChatStyles.chatActionBar+" Chat_chatActionBar "+("direct_message"===i?.messageType?""+MessagingStyles.chatActionBar:null),style:{background:"#161616"}},i?._validCc?null:React.createElement("div",{style:{display:"none"}},React.createElement(CreditCard,i)),React.createElement(ChatPrompts,_extends({},i,{prompt:d,postFetchStatus:a,fetchStatus:t,fetchBusy:c,handlePromptClose:n,handleFireDonate:S})),React.createElement(ChatCommandBar,_extends({},i,{promptDonate:o,customDonate:g})))};export default Module;