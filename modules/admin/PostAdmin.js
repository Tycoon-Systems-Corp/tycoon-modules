function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,l=arguments[t];for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}import React from"react";import Link from"next/link";import{v4 as uuidv4}from"uuid";import TextareaAutosize from"react-textarea-autosize";import StorageAdmin from"./StorageAdmin";import AdminStyles from"./Admin.module.scss";import{logout}from"@tycoonsystems/tycoon-modules/utility/onboarding/SignIn";import{fetchPost}from"@tycoonsystems/tycoon-modules/utility/fetch";import{throttleFunctionCall}from"@tycoonsystems/tycoon-modules/util";import{loadArticle,publishArticle,deleteArticle}from"./article/utility";import{selectThisText}from"@tycoonsystems/tycoon-modules/utility/utility/event";import toolbarOptions from"./editor/toolbarOptions";const moduleName="PostAdmin",editorElementId="admin_editor_element",defaultText="Let's start a conversation.",useToolbarOptions=toolbarOptions,Module=t=>{const[a,l]=React.useState(!1),[,r]=React.useState(null),[e,n]=React.useState(!1),[c,i]=React.useState(0);var[,,]=React.useState("admin");const[o,s]=React.useState([]),[m,d]=React.useState([]),[u,g]=React.useState(!1),[p,R]=React.useState({}),[f,h]=React.useState([]),[v,E]=React.useState(!1),[y,b]=React.useState([]),[S,,]=React.useState(0),[U,x]=React.useState(!0),N=React.useRef(),A=React.useRef(),T=React.useRef(),I=React.useRef(),k=React.useRef(),w=React.useRef();var P=React.useRef();const C=defaultText,_=(t._LocalEventEmitter.unsubscribe(moduleName),t._LocalEventEmitter.subscribe(moduleName,e=>{var t,a;e&&"loadDefault"!==e.dispatch&&"save"===e.dispatch&&localStorage&&A?.current&&(e=A.current.getText(),t=A.current.getContents(),a=_(t).flat(100).filter(Boolean),h(a),e.length>C.length+25)&&(u||t&&localStorage.setItem("cached_post_admin",JSON.stringify({title:N?.current?.value,content:t,groups:o,tags:m})))}),e=>Object.entries(e).map(e=>"object"==typeof e[1]?_(e[1]):"image"===e[0]?e[1]:void 0)),L=(React.useEffect(()=>{var e;a||(e=uuidv4(),r(e),setInterval(()=>{t._LocalEventEmitter.dispatch(moduleName,{dispatch:"save"})},7500),L(),l(!0))},[a]),async()=>{var e={domainKey:t.domainKey,hash:t._loggedIn.hash,identifier:t._loggedIn.identifier,postOffset:100*S},e=await fetchPost(t.apiUrl+"/a/recentarticles",null,null,e);return!!e&&(e.hasOwnProperty("status")?"disauthenticated"==e.status?(logout(),"disauthenticated"):"failed"!=e.status&&("success"==e.status?(e?.data&&b(e.data),e):void 0):void 0)}),j=()=>{var e,t=c;t+=1,i(t);try{e=new window.Quill("#"+editorElementId,{modules:{toolbar:useToolbarOptions},theme:"snow"})}catch(e){}e&&(e.getModule&&e.getModule("toolbar").addHandler("image",z),A.current=e,localStorage&&A.current&&(t=JSON.parse(localStorage.getItem("cached_post_admin")))&&(t.content&&A.current.setContents(t.content),t.title&&(N.current.value=t.title),t.groups&&(console.log(t.groups),T.current.value=t.groups.join(" "),s(t.groups)),t.tags)&&(I.current.value=t.tags.join(" "),d(t.tags)),n(!0))};function z(){console.log(document.getElementById(editorElementId));var e=this.quill.getSelection(),t=prompt("Image URL:");t&&this.quill.insertEmbed(e.index,"image",t,Quill.sources.USER)}React.useEffect(()=>{window?.Quill&&!e&&c<3&&document.getElementById(editorElementId)&&throttleFunctionCall(t._LocalEventEmitter,"_initializeEditor",1e3,j,[])},[e,c]);try{if(document.getElementsByClassName("ql-toolbar")){var O=document.getElementsByClassName("ql-toolbar");if(1<O.length)for(let e=0;e<O.length-1;e++)O[e]&&O[e].remove&&O[e].remove()}}catch(e){}var W=React.useCallback(e=>{var t;e?.currentTarget?.getAttribute&&e.currentTarget.getAttribute("modif")&&(t=e.currentTarget.getAttribute("modif"),e=e?.currentTarget?.value?.split?e.currentTarget.value.split(" "):[],"groups"===t?s(e):"tags"===t&&d(e))}),B=React.useCallback(e=>{publishArticle(t,u,N,o,m,d,s,I,T,A,p,E,g,L,C,U,x,k,f)}),D=React.useCallback(e=>{deleteArticle(t,u,N,d,s,I,T,A,g,L,C)});const $=React.useCallback(e=>{e?.currentTarget?.getAttribute&&(e=e.currentTarget.getAttribute("article"))&&loadArticle(t,e,A,N,T,I,s,d,g,x,k,R,h)});var M=React.useCallback(e=>{e?.currentTarget&&x(e.currentTarget.checked)}),q=React.useCallback(e=>{var t;e?.currentTarget&&((t=p).featuredImg=e.currentTarget.value,R(t),w?.current)&&(w.current.style.backgroundImage=`url(${t.featuredImg})`)});return React.createElement("div",{className:`${t.className} ${moduleName}_Container`},React.createElement("h3",null,"Post"),React.createElement("div",{className:""+AdminStyles.containerTwoSmallRight},React.createElement("div",{className:"Editor_Container Editor_MaxWidth"},React.createElement("div",null,React.createElement(TextareaAutosize,{className:""+AdminStyles.millerText,type:"text",placeholder:"Title",style:{fontStyle:"italic",width:"100%",fontSize:"2rem",fontWeight:"700"},ref:N})),React.createElement("div",{style:{fontSize:"1.125rem",marginBottom:".25rem",color:"#cccccc",fontWeight:"600"}},React.createElement("div",{className:""+AdminStyles.millerText,style:{fontStyle:"italic"}},React.createElement(Link,{href:"/p?u="+(u?.authorUsername??t?._loggedIn?.username??""),style:{alignSelf:"center"}},React.createElement("span",null,"by: "),React.createElement("span",null,u?.authorUsername??t?._loggedIn?.username??"")))),React.createElement("div",null,u?.title?React.createElement("div",{style:{background:"rgba(55, 55, 55, 1)",borderRadius:".5rem",padding:".25rem",width:"100%",textAlign:"center",marginBottom:".25rem"}},React.createElement("span",null,"Read "),React.createElement(Link,{href:t.devLocal?t.devAddress+"/a?p="+u?.id:`https://${t.domainUrl}/a?p=`+u?.id},'"',u?.title,'"'),React.createElement("span",null," at "),React.createElement("span",{selectValue:t.devLocal?t.devAddress+"/a?p="+u?.id:`https://${t.domainUrl}/a?p=`+u?.id,onClick:selectThisText},t.devLocal?t.devAddress+"/a?p="+u?.id:t.domainUrl+"/a?p="+u?.id)):null),React.createElement("div",{id:""+editorElementId,className:"Editor_Platform",style:{marginBottom:".25rem"}},React.createElement("p",null,C)),React.createElement("div",{className:AdminStyles.metaContainer+" flex gap-p2",style:{marginBottom:".25rem"}},React.createElement("div",{className:"flex gap-p2",style:{flexDirection:"column"}},React.createElement("div",{style:{minWidth:"200px"}},React.createElement("div",{style:{whiteSpace:"nowrap"}},"Featured Image"),React.createElement("input",{type:"text",placeholder:"Featured Image Url",style:{width:"100%",fontWeight:"600"},defaultValue:""+(p?.featuredImg??""),onChange:q,ref:P})),React.createElement("img",{style:{backgroundImage:"url("+(p?.featuredImg??null),height:"100px",width:"100%",minWidth:"100px",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},selectValue:""+(p?.featuredImg??null),onClick:selectThisText,ref:w})),React.createElement("div",{className:"flex gap-p2",style:{width:"100%"}},React.createElement("div",{style:{width:"100%"}},React.createElement("div",{className:"flex gap-p2"},React.createElement("div",null,"Groups"),React.createElement("input",{type:"text",id:moduleName+"_groupingInput",placeholder:"Post Groups",style:{width:"100%",fontWeight:"600"},onInput:W,modif:"groups",ref:T})),0<o?.length?React.createElement("div",{className:"tagContainer",style:{marginTop:".25rem"}},o.map(e=>""!==e?React.createElement("div",{className:"tagItem"},e):React.createElement("div",null))):null),React.createElement("div",{style:{width:"100%"}},React.createElement("div",{className:"flex gap-p2"},React.createElement("div",null,"Tags"),React.createElement("input",{type:"text",id:moduleName+"_useTagsInput",placeholder:"Tags",style:{width:"100%",fontWeight:"600"},onInput:W,modif:"tags",ref:I})),0<m?.length?React.createElement("div",{className:"tagContainer",style:{marginTop:".25rem"}},m.map(e=>""!==e?React.createElement("div",{className:"tagItem"},e):React.createElement("div",null))):null))),React.createElement("div",{className:AdminStyles.forceSafeBreak+" flex gap-p2"},u?React.createElement("div",{className:"flex gap-p2"},React.createElement("button",{style:{minWidth:"200px",maxWidth:"90%"},onClick:B},"Update"),React.createElement("button",{style:{minWidth:"200px",maxWidth:"90%"},onClick:D},"Delete")):React.createElement("button",{className:""+AdminStyles.actionButton,onClick:B},"Post"),React.createElement("div",{className:"flex gap-p2",style:{background:"rgb(55, 55, 55)",borderRadius:"1rem",padding:"0 2rem",justifyContent:"center"}},React.createElement("label",null,"Approved"),React.createElement("input",{type:"checkbox",ref:k,defaultChecked:!0,onChange:M}))),v&&u?.id?React.createElement("div",{style:{marginTop:".5rem"}},React.createElement("div",{style:{background:"rgba(55, 55, 55, 1)",borderRadius:".5rem",padding:".25rem",width:"100%",textAlign:"center"}},"Your post was made successsfully. View at ",React.createElement(Link,{href:t.devLocal?t.devAddress+"/a?p="+u?.id:`https://${t.domainUrl}/a?p=`+u?.id},t.devLocal?t.devAddress+"/a?p="+u?.id:t.domainUrl+"/a?p="+u?.id))):null),React.createElement("div",null,React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement("h4",{style:{fontWeight:"600"}},"Recent Articles"),React.createElement("div",{className:AdminStyles.simpleList+" "+AdminStyles.simpleListShortText,style:{maxHeight:"200px",overflow:"auto"}},0<y?.length?y.map((e,t)=>React.createElement("div",{style:{background:"rgb(53, 53, 53)"}},React.createElement("span",{style:{cursor:"pointer"},article:e?.id,onClick:$},e.title),React.createElement("span",null,!e.publish||isNaN(Number(e.publish))||isNaN(new Date(Number(e.publish)))?"":" - "+new Date(Number(e.publish)).toDateString()))):null)),React.createElement("div",null,React.createElement(StorageAdmin,_extends({},t,{vert:!0}))))))};export default Module;