function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n,a=arguments[t];for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}import React from"react";import Link from"next/link";import Image from"next/image";import menuStyle from"./Menu.module.scss";import Tooltip from"@mui/material/Tooltip";import{DropMenu}from"/layout/index.js";import{checkSignedInAndPrompt,logout}from"@tycoonsystems/tycoon-modules/utility/onboarding/SignIn.js";const SubMenu=t=>{let{type:e,small:n,className:a,href:l,name:c,muiIcon:m,src:i,width:o,height:r,local:s}=t;var u=React.useCallback(e=>{logout(),t._toggleSingleOpenMenu(e,"main_settings"),setTimeout(()=>{t._LocalEventEmitter.dispatch("showSignIn",{})},4e3)}),g=React.useCallback(e=>{e&&t&&t._toggleSingleOpenMenu&&t._toggleSingleOpenMenu(e,"main_settings")},[t._openMenu]),d=React.useCallback(e=>{t._toggleSingleOpenMenu(e,"main_settings"),checkSignedInAndPrompt()}),S=React.useCallback(e=>{e&&t&&t._toggleSingleOpenMenu&&t._toggleSingleOpenMenu(e,"cart")}),y=React.useCallback(e=>{e&&t&&t._toggleSingleOpenMenu&&t._toggleSingleOpenMenu(e,"notifications")}),p=React.useCallback(e=>{e&&t&&t._toggleSingleOpenMenu&&t._toggleSingleOpenMenu(e,"feedback")}),h=React.useCallback(e=>{e&&t&&t._toggleSingleOpenMenu&&t._toggleSingleOpenMenu(e,"bugReport")}),k=React.useCallback(e=>{t._LocalEventEmitter.dispatch("toggleHelpOpen",{toggle:!0})}),R=React.useCallback(e=>{t._toggleSingleOpenMenu(null,{},!0),t._LocalEventEmitter.dispatch("toggleHelpOpen",{state:!1})}),v=t?.regionsData&&t?._loggedIn?.meta?.locationMeta?.country&&t.regionsData[t._loggedIn.meta.locationMeta.country]&&t.regionsData[t._loggedIn.meta.locationMeta.country].name?t.regionsData[t._loggedIn.meta.locationMeta.country].name:t?._loggedIn?.meta?.locationMeta?.country??null;return React.createElement(React.Fragment,null,e?"user"===e?React.createElement(DropMenu,_extends({},t,{resolvedCountry:v,handleToggleSettings:g,handleLogout:u,fireHelp:k,fireShareFeedback:p,fireShareBug:h,fireShowSignIn:d})):"cart"===e?React.createElement("div",{className:a+" "+(n?""+menuStyle.smallUntilHover:null)},React.createElement(Tooltip,{title:"Cart",placement:"bottom"},React.createElement("li",{className:menuStyle.menuLink+" darkMenuLink menuLinkSelector",onClick:S,style:{alignSelf:"center"}},React.createElement("span",{className:""+menuStyle.menuLinkText},React.createElement("div",{className:""+menuStyle.menuText},"Cart"),React.createElement("div",{className:`${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} cart material-icons`},"shopping_cart")),React.createElement("div",{className:`${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} cart material-icons`},"shopping_cart")))):"stream"===e&&l?React.createElement(Link,{href:l,className:`menuLinkSelector ${a} `+(n?""+menuStyle.smallUntilHover:null),style:{alignSelf:"center"}},React.createElement(Tooltip,{title:"Livestream Now",placement:"bottom"},React.createElement("li",{className:menuStyle.menuLink+" darkMenuLink menuLinkSelector "+a,style:{alignSelf:"center"},onClick:R},React.createElement("span",{className:""+menuStyle.menuLinkText},React.createElement("div",{className:""+menuStyle.menuText},"Stream"),React.createElement("div",{className:`${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} live_tv material-icons`},"live_tv")),React.createElement("div",{className:`${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} live_tv material-icons`},"live_tv")))):"notifications"===e?React.createElement("div",{className:`menuLinkSelector ${a} `+(n?""+menuStyle.smallUntilHover:null),style:{alignSelf:"center"}},React.createElement(Tooltip,{title:"Notifications",placement:"bottom"},React.createElement("li",{className:menuStyle.menuLink+" darkMenuLink menuLinkSelector "+a,style:{alignSelf:"center"},onClick:y},React.createElement("span",{className:""+menuStyle.menuLinkText},React.createElement("div",{className:""+menuStyle.menuText},"Notifications"),React.createElement("div",{className:`${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} live_tv material-icons`},"notifications")),React.createElement("div",{className:`${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} live_tv material-icons`},"notifications")))):"home"===e?React.createElement(Link,{href:"/",style:{alignSelf:"center"},className:"menuLinkSelector "+a,onClick:R??null},React.createElement("span",{href:"/",className:menuStyle.subMenuItemContainer+" darkModeHoverEnforce",alt:"Home",title:"Home"},React.createElement("div",{className:menuStyle.itemName+" home_itemName"},"Home"),React.createElement("div",{className:`${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} home material-icons`},"home"))):"watch"===e?React.createElement(Link,{href:"/w",className:menuStyle.menuLink+" menuLinkSelector "+a,style:{alignSelf:"center"},onClick:R??null},React.createElement("span",{href:"/w",className:menuStyle.subMenuItemContainer+" darkModeHoverEnforce",alt:"Watch",title:"Watch"},React.createElement("div",{className:menuStyle.itemName+" home_itemName"},"Watch"),React.createElement("div",{className:`${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} tv material-icons`},"tv"))):"img"===e?React.createElement("div",{className:"img_control menuLinkSelector "+a,style:{width:o?o+"px":"40px",height:r?r+"px":"20px",alignSelf:"center"}},l?React.createElement(Link,{href:l,onClick:R??null},React.createElement(Image,{style:{width:o+"px"},loader:()=>i.match(/greythumb/)||s?""+i:t.cdn&&t.cdn.static&&0<t.cdn.static.length?t.cdn.static+"/"+i:void 0,src:i&&t.cdn&&t.cdn.static?i:"img/default/greythumb.jpg",alt:c||"",width:o??"80",height:r??"40",layout:"responsive"})):React.createElement(Image,{loader:()=>i.match(/greythumb/)||s?""+i:t.cdn&&t.cdn.static&&0<t.cdn.static.length?t.cdn.static+"/"+i:void 0,src:i&&t.cdn&&t.cdn.static?i:"img/default/greythumb.jpg",alt:c||"",width:o??"80",height:r??"40",style:{width:o+"px"},layout:"responsive"})):"link"===e&&l?React.createElement(Link,{href:l,className:menuStyle.menuLink+" menuLinkSelector "+a,style:{alignSelf:"center"},onClick:R??null},React.createElement("span",{href:l,className:menuStyle.subMenuItemContainer+" darkModeHoverEnforce",alt:c,title:c},React.createElement("div",{className:menuStyle.itemName+" home_itemName"},c),React.createElement("div",{className:`${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} material-icons`},m))):null:null)};export default SubMenu;