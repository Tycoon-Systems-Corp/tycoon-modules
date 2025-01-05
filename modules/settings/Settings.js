function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,l=arguments[t];for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}import React from"react";import Link from"next/link";import{useRouter}from"next/router";import Styles from"./Settings.module.scss";import{CreditCard}from"../payment";import{v4 as uuidv4}from"uuid";import Close from"@mui/icons-material/Close";import{checkSignedIn,requestSettingsUpdate}from"../utility/onboarding";import{getOrders}from"../utility/utility/orders";import{OrderInternal}from"../ecommerce/receipt";import apiReq from"@tycoonsystems/tycoon-modules/utility/api/apiReq";import RegisterVendor from"@tycoonsystems/tycoon-modules/ecommerce/vendor/RegisterVendor";import{resolveImage}from"@tycoonsystems/tycoon-modules/utility/utility/image";const Module=r=>{const t=useRouter()["query"],[a,l]=React.useState(!1),[n,s]=React.useState(null),[e,c]=React.useState(null),[i,o]=React.useState(0),[m,u]=React.useState({}),[d,g]=React.useState(!1),[y,p]=React.useState(null),[R,f]=React.useState(!1),[_,S]=React.useState(!1),v=React.useRef(),E=r?.settingsConfig??{},N=(React.useEffect(()=>{var e;a||(t?.t&&-1<(e=E.tabs.findIndex(e=>e?.label.toLowerCase()===t?.t))&&o(e),e=uuidv4(),s(e),l(!0))},[a,i]),React.useEffect(()=>{!y&&E?.tabs&&E?.tabs[i]&&E.tabs[i]?.items&&!R&&r._loggedIn&&-1<E.tabs[i].items.findIndex(e=>e.type&&"orders"===e.type)&&(async()=>{var e=checkSignedIn(),e=await getOrders(r.apiUrl,r.domainKey,e,"creation","desc",0,50);e?.data?p({received:(new Date).getTime(),orders:e.data}):p({})})()},[y,E?.tab,i,R]),e=>{e=e?.currentTarget.getAttribute("modif");e&&u({...m,[e]:!0})}),b=async t=>{var a=t?.currentTarget.getAttribute("modif");if(a){let e;c(null),"username"===a?(console.log(t),t=document.getElementById(`Settings_${n}_Username_Input`)?.value,console.log(t),t&&(e=await requestSettingsUpdate(r.apiUrl,r.domainKey,{username:t},r,f,R)),h()):"firstName"===a||"lastName"===a?(t={firstName:document.getElementById(`Settings_${n}_firstName_Input`)?.value??r?._loggedIn?.meta?.firstName,lastName:document.getElementById(`Settings_${n}_lastName_Input`)?.value??r?._loggedIn?.meta?.lastName},e=await requestSettingsUpdate(r.apiUrl,r.domainKey,{fullName:t},r,f,R),u({...m,firstName:!1}),u({...m,lastName:!1})):"keepSubscriptionsPrivate"===a&&document.getElementById(`Settings_${n}_keepSubscriptionsPrivate_Input`)&&(t=document.getElementById(`Settings_${n}_keepSubscriptionsPrivate_Input`)?.checked,e=await requestSettingsUpdate(r.apiUrl,r.domainKey,{keepSubscriptionsPrivate:t},r,f,R)),"success"!==e?.status&&e.message&&c(e.message),u({...m,[a]:!1})}},h=()=>{d?g(!1):g(!0)};const I=()=>{u({...m,closeAccount:!1})};const C=r?.regionsData&&r?._loggedIn?.meta?.locationMeta?.country&&r.regionsData[r._loggedIn.meta.locationMeta.country]&&r.regionsData[r._loggedIn.meta.locationMeta.country].name?r.regionsData[r._loggedIn.meta.locationMeta.country].name:r?._loggedIn?.meta?.locationMeta?.country??null,k=React.useCallback(e=>{const t=e?.currentTarget?.getAttribute("modif");t&&o(E.tabs.findIndex(e=>e.label===t))});var x=React.useCallback(e=>{v?.current&&v.current.click()}),P=r?._loggedIn?.meta?.firstName&&r?._loggedIn?.meta?.lastName&&0<r._loggedIn.meta.firstName.length&&0<r._loggedIn.meta.lastName.length?r._loggedIn.meta.firstName.charAt(0)+r._loggedIn.meta.lastName.charAt(0):"AV";return React.createElement(React.Fragment,null,React.createElement("div",{className:R?"fetchNotBusy fetchBusy":"fetchNotBusy"}),React.createElement("div",{className:""+Styles.Settings_Container,style:{margin:"0 auto",width:"70vw",display:"flex"}},React.createElement("div",{className:""+Styles.Settings_InternalContainer},React.createElement("div",{className:""+Styles.Settings_Menu},E?.tabs?E.tabs.map(e=>React.createElement(React.Fragment,null,React.createElement("div",{className:Styles.tab+" "+(E?.tabs&&E.tabs[i]&&E.tabs[i].label===e?.label?Styles.currentTab:""),onClick:k,modif:e?.label},e?.label??""))):null),React.createElement("div",{className:""+Styles.Settings_Data},E?.tabs&&E?.tabs[i]?.avatar?React.createElement("div",{style:{placeItems:"center"}},React.createElement("div",{className:Styles.Settings_Profile_Picture+" Settings_ProfilePicture",style:{background:`url(${resolveImage(r,null,r?._loggedIn?.icon??null)}) no-repeat center center / cover`,height:"fit-content"}},r?._loggedIn?.icon?null:React.createElement("span",{className:""+Styles.Avatar_Placeholder_Text},P)),React.createElement("div",{className:Styles.ChangeProfilePicture+" Settings_ChangeProfilePicture"},React.createElement("input",{style:{fontSize:"1rem",display:"none"},type:"file",name:"avatarFileToUpload",id:"avatarFileToUpload",ref:v,onChange:async()=>{try{if(!_&&v?.current?.files&&r?._loggedIn?.identifier){S(!0);var e=setTimeout(()=>{S(!1)},15e3),t=new FormData,a=v.current.files,l=(t.append("image",a[0]),t.append("identifier",r._loggedIn.identifier),await apiReq("/p/changeprofilepicture",t,{formData:!0}));if(S(!1),clearTimeout(e),!l)return!1;if(l.hasOwnProperty("status")){if("disauthenticated"==l.status)return logout(),"disauthenticated";if("failed"==l.status)return!1;if("success"==l.status){if(r._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}),l?.data?.icon){var n=structuredClone(r._loggedIn);n.icon=l.data.icon,r._setLoggedIn(n);const s=document.getElementById("settings_upload_note");console.log(s),s.innerHTML="It may take a few minutes for your image to update everywhere",setTimeout(()=>{s.innerHTML=""},3e4)}return l}}}}catch(e){console.log(e),S(!1)}}}),React.createElement("button",{className:Styles.ChangeProfilePictureButton+" Settings_ChangeProfilePictureButton",onClick:x},"Change Avatar"),React.createElement("div",{id:"settings_upload_note",style:{fontSize:".75rem",maxWidth:"125px",marginTop:".5rem",color:"#bdbdbd"}}))):null,React.createElement("div",{className:""+Styles.settingsItemContainer},e?React.createElement("p",{className:"error",style:{marginTop:".5rem"},onClick:()=>{c(null)}},e):null,E?.tabs&&null!==i&&E.tabs[i]&&E.tabs[i]?.items&&Array.isArray(E.tabs[i]?.items)?E.tabs[i].items.map(e=>{return React.createElement("div",{key:e.type},"firstNameLastName"===(e=e.type)?React.createElement(React.Fragment,null,React.createElement("div",{className:""+Styles.FirstName_LastName_Container},React.createElement("div",{style:{maxWidth:"100%",width:"100%"}},r?._loggedIn?React.createElement(React.Fragment,null,React.createElement("label",{className:""+Styles.label},"First Name"),m.firstName?React.createElement(React.Fragment,null,React.createElement("input",{type:"text",placeholder:"First Name",className:""+Styles.input,id:`Settings_${n}_firstName_Input`}),React.createElement("button",{className:""+Styles.Save_Button,modif:"firstName",onClick:b},"Save")):React.createElement("div",{className:""+Styles.hoverHighlight,modif:"firstName",onClick:N},r?._loggedIn?.meta?.firstName&&""!==r?._loggedIn?.meta?.firstName?r._loggedIn.meta.firstName:r?._loggedIn?"Add First Name":"")):null),React.createElement("div",{style:{maxWidth:"100%",width:"100%"}},r?._loggedIn?React.createElement(React.Fragment,null,React.createElement("label",{className:""+Styles.label},"Last Name"),m.lastName?React.createElement(React.Fragment,null,React.createElement("input",{type:"text",placeholder:"Last Name",className:""+Styles.input,id:`Settings_${n}_lastName_Input`}),React.createElement("button",{className:""+Styles.Save_Button,modif:"lastName",onClick:b},"Save")):React.createElement("div",{className:""+Styles.hoverHighlight,modif:"lastName",onClick:N},r?._loggedIn?.meta?.lastName&&""!==r?._loggedIn?.meta?.lastName?r._loggedIn.meta.lastName:r?._loggedIn?"Add Last Name":"")):null))):"username"===e?React.createElement("div",null,r?._loggedIn?React.createElement(React.Fragment,null,React.createElement("label",{className:Styles.label+" "+Styles.fullWidth},"Username"),d?React.createElement(React.Fragment,null,React.createElement("div",{className:""+Styles.ItemsFlex},React.createElement("input",{type:"text",placeholder:"Username",className:""+Styles.input,modif:"username",id:`Settings_${n}_Username_Input`,onChange:N}),React.createElement(Close,{className:""+Styles.Close,onClick:h})),m.username?React.createElement("button",{className:""+Styles.Save_Button,modif:"username",onClick:b},"Save"):null):React.createElement("div",{className:""+Styles.ItemsFlex},React.createElement("div",null,r?._loggedIn?.username??null),React.createElement("button",{className:""+Styles.LowProfileButton,onClick:h},"Get New Username"))):null):"handleCreditCard"===e?React.createElement(React.Fragment,null,React.createElement("label",{className:Styles.label+" "+Styles.fullWidth},"Payment"),React.createElement(CreditCard,r)):"location"===e?React.createElement("div",null,React.createElement("label",{className:""+Styles.Read_Only_Label},"Location"),React.createElement("div",{className:""+Styles.Read_Only_Field},React.createElement("span",null,r?._loggedIn?.meta?.locationMeta?.city??null),React.createElement("span",null,C?", ":null),React.createElement("span",null,C))):"keepSubscriptionsPrivate"===e?React.createElement(React.Fragment,null,React.createElement("div",{className:""+Styles.Settings_Checkbox_Container},React.createElement("input",{type:"checkbox",name:"keepSubscriptionsPrivate",className:""+Styles.Settings_Checkbox,id:`Settings_${n}_keepSubscriptionsPrivate_Input`,modif:"keepSubscriptionsPrivate",onChange:b,defaultChecked:r?._loggedIn?.meta?.keepSubscriptionsPrivate}),React.createElement("label",{htmlFor:"keepSubscriptionsPrivate",className:""+Styles.Checkbox_Label},"Keep Subscriptions Private"))):"closeAccount"===e?React.createElement("div",null,React.createElement("div",{className:""+Styles.Close_Account_Button_Container},m.closeAccount?React.createElement("div",{style:{textAlign:"center",marginTop:"1rem"}},React.createElement("div",{style:{fontWeight:"600"}},"Are you sure you want to close your ",r?.siteTitle," account?"),React.createElement("div",{style:{fontSize:".8rem",marginTop:".5rem"}},"This action is not reversible. All your data will be deleted and forgotten."),React.createElement("div",{style:{display:"flex",justifyContent:"center",gap:"10rem",marginTop:"1rem"}},React.createElement("button",{className:""+Styles.Save_Button,style:{fontWeight:"600"}},"Yes"),React.createElement("button",{className:""+Styles.Save_Button,onClick:I,style:{fontWeight:"600"}},"No"))):React.createElement("button",{className:""+Styles.Warning_Button,modif:"closeAccount",onClick:N},"Close Account"))):"orders"===e?React.createElement("div",null,r?._loggedIn?React.createElement(React.Fragment,null,React.createElement("label",{className:Styles.label+" "+Styles.fullWidth},"Orders"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},y?.orders?.map?y.orders.map((e,t)=>React.createElement(OrderInternal,_extends({order:e},r))):null)):null):"vendor"===e?React.createElement("div",null,r?._loggedIn?React.createElement(React.Fragment,null,React.createElement("label",{className:Styles.label+" "+Styles.fullWidth},"Vendor"),React.createElement(RegisterVendor,_extends({},r,{refreshUrl:(r?.devLocal?"http://":"https://")+r?.domainUrl+"/settings?load=vendor",returnUrl:(r?.devLocal?"http://":"https://")+r?.domainUrl+"/settings?load=vendor"}))):null):React.createElement("div",null,e))}):null)))))};export default Module;