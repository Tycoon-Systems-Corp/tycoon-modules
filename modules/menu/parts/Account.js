import React from"react";import Link from"next/link";import menuStyle from"../Menu.module.scss";const Module=e=>React.createElement(React.Fragment,null,e._loggedIn?React.createElement(React.Fragment,null,React.createElement(Link,{href:"/p",className:"menuLinkSelector",onClick:e?.handleToggleSettings,style:{position:"relative",alignSelf:"center"}},React.createElement("li",{style:{padding:".75rem"}},React.createElement("img",{className:""+menuStyle.profileIcon,src:e?._loggedIn?.icon??""}),React.createElement("div",{className:""+menuStyle.profileItemDataContainer},React.createElement("div",{style:{fontWeight:"700"}},"@",e._loggedIn.username),React.createElement("a",{href:"/p",className:"a",style:{alignItems:"center",display:"flex",gap:".25rem"}},React.createElement("div",{className:"material-icons"},"account_box"),React.createElement("div",null,"View Your Profile")))))):null);export default Module;