function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,l=arguments[t];for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}import React from"react";import Link from"next/link";import{useRouter}from"next/router";import Styles from"./Settings.module.scss";import{CreditCard}from"../payment";import{v4 as uuidv4}from"uuid";import Close from"@mui/icons-material/Close";import{checkSignedIn,requestSettingsUpdate}from"../utility/onboarding";import{getOrders}from"../utility/utility/orders";import{OrderInternal}from"../ecommerce/receipt";import RegisterVendor from"/modules/ecommerce/vendor/RegisterVendor";const Module=l=>{const t=useRouter()["query"],[a,n]=React.useState(!1),[s,c]=React.useState(null),[e,r]=React.useState(null),[m,i]=React.useState(0),[o,u]=React.useState({}),[d,g]=React.useState(!1),[y,R]=React.useState(null),[p,S]=React.useState(!1),_=l?.settingsConfig??{},N=(React.useEffect(()=>{var e;a||(t?.t&&-1<(e=_.tabs.findIndex(e=>(console.log(e.label.toLowerCase(),t.t),e?.label.toLowerCase()===t?.t)))&&i(e),e=uuidv4(),c(e),n(!0))},[a,m]),React.useEffect(()=>{!y&&_?.tabs&&_?.tabs[m]&&_.tabs[m]?.items&&!p&&l._loggedIn&&-1<_.tabs[m].items.findIndex(e=>e.type&&"orders"===e.type)&&(async()=>{var e=checkSignedIn(),e=await getOrders(l.apiUrl,l.domainKey,e,"creation","desc",0,50);e?.data?R({received:(new Date).getTime(),orders:e.data}):R({})})()},[y,_?.tab,m,p]),e=>{e=e?.currentTarget.getAttribute("modif");e&&u({...o,[e]:!0})}),b=async t=>{var a=t?.currentTarget.getAttribute("modif");if(a){let e;r(null),"username"===a?(console.log(t),t=document.getElementById(`Settings_${s}_Username_Input`)?.value,console.log(t),t&&(e=await requestSettingsUpdate(l.apiUrl,l.domainKey,{username:t},l,S,p)),E()):"firstName"===a||"lastName"===a?(t={firstName:document.getElementById(`Settings_${s}_firstName_Input`)?.value??l?._loggedIn?.meta?.firstName,lastName:document.getElementById(`Settings_${s}_lastName_Input`)?.value??l?._loggedIn?.meta?.lastName},e=await requestSettingsUpdate(l.apiUrl,l.domainKey,{fullName:t},l,S,p),u({...o,firstName:!1}),u({...o,lastName:!1})):"keepSubscriptionsPrivate"===a&&document.getElementById(`Settings_${s}_keepSubscriptionsPrivate_Input`)&&(t=document.getElementById(`Settings_${s}_keepSubscriptionsPrivate_Input`)?.checked,e=await requestSettingsUpdate(l.apiUrl,l.domainKey,{keepSubscriptionsPrivate:t},l,S,p)),"success"!==e?.status&&e.message&&r(e.message),u({...o,[a]:!1})}},E=()=>{d?g(!1):g(!0)};const f=()=>{u({...o,closeAccount:!1})};const v=l?.regionsData&&l?._loggedIn?.meta?.locationMeta?.country&&l.regionsData[l._loggedIn.meta.locationMeta.country]&&l.regionsData[l._loggedIn.meta.locationMeta.country].name?l.regionsData[l._loggedIn.meta.locationMeta.country].name:l?._loggedIn?.meta?.locationMeta?.country??null,I=React.useCallback(e=>{const t=e?.currentTarget?.getAttribute("modif");t&&i(_.tabs.findIndex(e=>e.label===t))});var h=l?._loggedIn?.meta?.firstName&&l?._loggedIn?.meta?.lastName&&0<l._loggedIn.meta.firstName.length&&0<l._loggedIn.meta.lastName.length?l._loggedIn.meta.firstName.charAt(0)+l._loggedIn.meta.lastName.charAt(0):"AV";return React.createElement(React.Fragment,null,React.createElement("div",{className:p?"fetchNotBusy fetchBusy":"fetchNotBusy"}),React.createElement("div",{className:""+Styles.Settings_Container,style:{margin:"0 auto",width:"70vw",display:"flex"}},React.createElement("div",{className:""+Styles.Settings_InternalContainer},React.createElement("div",{className:""+Styles.Settings_Menu},_?.tabs?_.tabs.map(e=>React.createElement(React.Fragment,null,React.createElement("div",{className:Styles.tab+" "+(_?.tabs&&_.tabs[m]&&_.tabs[m].label===e?.label?Styles.currentTab:""),onClick:I,modif:e?.label},e?.label??""))):null),React.createElement("div",{className:""+Styles.Settings_Data},_?.tabs&&_?.tabs[m]?.avatar?React.createElement("div",{className:""+Styles.Settings_Profile_Picture,style:{background:`url(${l?._loggedIn?.icon??null})`,backgroundSize:"contain"}},l?._loggedIn?.icon?null:React.createElement("span",{className:""+Styles.Avatar_Placeholder_Text},h)):null,React.createElement("div",{className:""+Styles.settingsItemContainer},e?React.createElement("p",{className:"error",style:{marginTop:".5rem"},onClick:()=>{r(null)}},e):null,_?.tabs&&null!==m&&_.tabs[m]&&_.tabs[m]?.items&&Array.isArray(_.tabs[m]?.items)?_.tabs[m].items.map(e=>{_.tabs[m].avatar;return React.createElement("div",{key:e.type},"firstNameLastName"===(e=e.type)?React.createElement(React.Fragment,null,React.createElement("div",{className:""+Styles.FirstName_LastName_Container},React.createElement("div",{style:{maxWidth:"100%",width:"100%"}},l?._loggedIn?React.createElement(React.Fragment,null,React.createElement("label",{className:""+Styles.label},"First Name"),o.firstName?React.createElement(React.Fragment,null,React.createElement("input",{type:"text",placeholder:"First Name",className:""+Styles.input,id:`Settings_${s}_firstName_Input`}),React.createElement("button",{className:""+Styles.Save_Button,modif:"firstName",onClick:b},"Save")):React.createElement("div",{className:""+Styles.hoverHighlight,modif:"firstName",onClick:N},l?._loggedIn?.meta?.firstName&&""!==l?._loggedIn?.meta?.firstName?l._loggedIn.meta.firstName:l?._loggedIn?"Add First Name":"")):null),React.createElement("div",{style:{maxWidth:"100%",width:"100%"}},l?._loggedIn?React.createElement(React.Fragment,null,React.createElement("label",{className:""+Styles.label},"Last Name"),o.lastName?React.createElement(React.Fragment,null,React.createElement("input",{type:"text",placeholder:"Last Name",className:""+Styles.input,id:`Settings_${s}_lastName_Input`}),React.createElement("button",{className:""+Styles.Save_Button,modif:"lastName",onClick:b},"Save")):React.createElement("div",{className:""+Styles.hoverHighlight,modif:"lastName",onClick:N},l?._loggedIn?.meta?.lastName&&""!==l?._loggedIn?.meta?.lastName?l._loggedIn.meta.lastName:l?._loggedIn?"Add Last Name":"")):null))):"username"===e?React.createElement("div",null,l?._loggedIn?React.createElement(React.Fragment,null,React.createElement("label",{className:Styles.label+" "+Styles.fullWidth},"Username"),d?React.createElement(React.Fragment,null,React.createElement("div",{className:""+Styles.ItemsFlex},React.createElement("input",{type:"text",placeholder:"Username",className:""+Styles.input,modif:"username",id:`Settings_${s}_Username_Input`,onChange:N}),React.createElement(Close,{className:""+Styles.Close,onClick:E})),o.username?React.createElement("button",{className:""+Styles.Save_Button,modif:"username",onClick:b},"Save"):null):React.createElement("div",{className:""+Styles.ItemsFlex},React.createElement("div",null,l?._loggedIn?.username??null),React.createElement("button",{className:""+Styles.LowProfileButton,onClick:E},"Get New Username"))):null):"handleCreditCard"===e?React.createElement(React.Fragment,null,React.createElement("label",{className:Styles.label+" "+Styles.fullWidth},"Payment"),React.createElement(CreditCard,l)):"location"===e?React.createElement("div",null,React.createElement("label",{className:""+Styles.Read_Only_Label},"Location"),React.createElement("div",{className:""+Styles.Read_Only_Field},React.createElement("span",null,l?._loggedIn?.meta?.locationMeta?.city??null),React.createElement("span",null,v?", ":null),React.createElement("span",null,v))):"keepSubscriptionsPrivate"===e?React.createElement(React.Fragment,null,React.createElement("div",{className:""+Styles.Settings_Checkbox_Container},React.createElement("input",{type:"checkbox",name:"keepSubscriptionsPrivate",className:""+Styles.Settings_Checkbox,id:`Settings_${s}_keepSubscriptionsPrivate_Input`,modif:"keepSubscriptionsPrivate",onChange:b,defaultChecked:l?._loggedIn?.meta?.keepSubscriptionsPrivate}),React.createElement("label",{htmlFor:"keepSubscriptionsPrivate",className:""+Styles.Checkbox_Label},"Keep Subscriptions Private"))):"closeAccount"===e?React.createElement("div",null,React.createElement("div",{className:""+Styles.Close_Account_Button_Container},o.closeAccount?React.createElement("div",{style:{textAlign:"center",marginTop:"1rem"}},React.createElement("div",{style:{fontWeight:"600"}},"Are you sure you want to close your ",l?.siteTitle," account?"),React.createElement("div",{style:{fontSize:".8rem",marginTop:".5rem"}},"This action is not reversible. All your data will be deleted and forgotten."),React.createElement("div",{style:{display:"flex",justifyContent:"center",gap:"10rem",marginTop:"1rem"}},React.createElement("button",{className:""+Styles.Save_Button,style:{fontWeight:"600"}},"Yes"),React.createElement("button",{className:""+Styles.Save_Button,onClick:f,style:{fontWeight:"600"}},"No"))):React.createElement("button",{className:""+Styles.Warning_Button,modif:"closeAccount",onClick:N},"Close Account"))):"orders"===e?React.createElement("div",null,l?._loggedIn?React.createElement(React.Fragment,null,React.createElement("label",{className:Styles.label+" "+Styles.fullWidth},"Orders"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},y?.orders?.map?y.orders.map((e,t)=>React.createElement(OrderInternal,_extends({order:e},l))):null)):null):"vendor"===e?React.createElement("div",null,l?._loggedIn?React.createElement(React.Fragment,null,React.createElement("label",{className:Styles.label+" "+Styles.fullWidth},"Vendor"),React.createElement(RegisterVendor,_extends({},l,{refreshUrl:l?.domainUrl+"/settings?load=vendor",returnUrl:l?.domainUrl+"/settings?load=vendor"}))):null):React.createElement("div",null,e))}):null)))))};export default Module;