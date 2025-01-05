import React from"react";import Tooltip from"@mui/material/Tooltip";import{resolveRegionBasedPrice,westernMoneyFormat}from"@tycoonsystems/tycoon-modules/utility/ecommerce";const Module=n=>{const{backgrounds:m,fetchBusy:e,currentlyStreaming:t,upcomingStreams:a,setNextStream:c}=n;console.log(a);return React.createElement(React.Fragment,null,e||t?null:React.createElement("div",{className:"Manager_UpcomingStreamsExternalContainer",style:{marginBottom:".5rem"}},React.createElement(Tooltip,{title:"Paywall your stream behind one of your products",placement:"right"},React.createElement("h4",{className:"Manager_UpcomingStreamsLabel",style:{fontWeight:600,margin:".5rem 0"}},"Your Tickets")),a?.map?React.createElement("div",{className:"Manager_UpcomingStreamsContainer"},a.map((e,t)=>{const a=e?.styles?.[0]??null;var r=React.useMemo(()=>resolveRegionBasedPrice(n,a),[n.product,a,"$"]);return React.createElement("div",{className:"Manager_UpcomingStreamContainer",key:t,onClick:c,modif:e.id},React.createElement("div",{className:"Manager_UpcomingStream",style:{background:""+(n?.cdn?.static&&e?.images[0]&&e?.images[0].name?`url(${n.cdn.static}/${e.images[0].name}) no-repeat center center / contain, #131313`:m[t]??""),minWidth:"100%"}}),React.createElement("label",{className:"Manager_UpcomingStreamLabel"},e.name),React.createElement("div",{className:"flex gap-p2",style:{margin:".125rem 0"}},React.createElement("div",{style:{fontSize:"1rem",fontWeight:600}},React.createElement("span",null,r?.symbol??null),React.createElement("span",null,westernMoneyFormat.format(r?.price)??"0")),React.createElement("div",{className:"Product_CurrencyLabel",style:{fontSize:".8rem",fontWeight:600,background:"rgba(150, 150, 150, .5)",padding:".075rem",borderRadius:".25rem"}},r?.currency??"USD")))})):null))};export default Module;