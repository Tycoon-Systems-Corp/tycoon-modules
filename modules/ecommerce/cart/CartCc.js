function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o,r=arguments[t];for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}import React from"react";import{CreditCard}from"../../payment";const Module=e=>React.createElement("div",{className:`Ecommerce_Credit_Card_Module_Container ${e?.validCc?"slide_hide slide_hide_do_full_show":"slide_hide slide_hide_visible"} `+(e.forceShowCc||e._isMobile?"slide_hide_do_force_show":""),style:{marginBottom:".25rem"}},e?.showContent?e?.validCc&&e._loggedIn?React.createElement("div",{className:`hover_show ${e.forceShowCc||e._isMobile?"hover_show_Cc_force":""} Ecommerce_Credit_Card_Label`,style:{textAlign:"center"}},"Credit Card"):0<e?.cart?.items?.length?React.createElement("div",{style:{fontSize:".75rem"}},e?.free?"":"Add a Credit Card to fulfill Purchase"):null:null,e._loggedIn?null:React.createElement("button",{onClick:e?.handleToggleSettings,style:{fontSize:".75rem",width:"100%"}},"Please Sign In"),React.createElement(CreditCard,_extends({},e,{stagger:500,validCc:e?.validCc,setValidCc:e?.setValidCc,setShowContent:e?.setShowContent,setSolution:e?.setSolution,sx:{marginBottom:".5rem",marginTop:".25rem"},children:e.ccChildren})));export default Module;