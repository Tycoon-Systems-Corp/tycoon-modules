function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import Script from"next/script";import{useRouter}from"next/router";import{v4 as uuidv4}from"uuid";import Tooltip from"@mui/material/Tooltip";import Close from"@mui/icons-material/Close";import apiReq from"@tycoonsystems/tycoon-modules/utility/api/apiReq";import{beginStream,endStream,updateStreamConfigRequest,requestStreamingPermissions}from"@tycoonsystems/tycoon-modules/utility/streaming";import{CurrentlyStreaming,PermissionsModule,StreamUpdateSettings,TerminateStream,NowStreaming,StreamSettings,StreamTitleInput,UpcomingStreams}from"@tycoonsystems/tycoon-modules/streaming/manager/parts";import menuStyle from"@tycoonsystems/tycoon-modules/menu/Menu.module.scss";import{selectThisText}from"@tycoonsystems/tycoon-modules/utility/utility/event";import Preview from"@tycoonsystems/tycoon-modules/streaming/watch/preview/Preview";const generateBackground=(e={})=>{var t=e?.palette??["#39e662","#71d1ff","#f371ff","#ee5252","#9a74ff","#4defc9"],a=Math.floor(Math.random()*t.length);let r=0;for(;a==(r=Math.floor(Math.random()*t.length)););return`linear-gradient(${Math.floor(360*Math.random())}deg, ${t[a]} 0%, ${t[r]} 100%)`},useAuthUsersHtml=`window.tycoonUserAuth = &#123;
    email: '&lt;users@email.domain&gt;', /* User's email */
    identifier: '&lt;users-unique-id&gt;', /* (Optional) User's id. We will create an id using users email if missing */
    hash: '&lt;unique-hash-or-token&gt;', /* (Optional) Improves security. Unique hash of a user's id. You can use bcrypt or some other alternative. Example: $2b$10$mvMD0m6.Pqzo... */
    username: '&lt;username&gt;' /* (Optional) User's username */
&#125`,Module=i=>{const c=useRouter(),[t,$]=React.useState(!1),[e,U]=React.useState(null),[a,I]=React.useState(!1),[r,M]=React.useState(!1),[s,n]=React.useState(!1),[,m]=React.useState(!1),[o,l]=React.useState(!1),[d,j]=React.useState(null),[F,V]=React.useState(null),[L,D]=React.useState([]),[O,K]=React.useState(Array.from(Array(100).keys()).map(e=>generateBackground(i))),[u,H]=React.useState(!1),[Y,p]=React.useState(!1),[J,G]=React.useState(!1),[,g]=React.useState(!1),[R,h]=React.useState(!1),[Q,v]=React.useState(null),[X,E]=React.useState(null),[y,Z]=React.useState(null),[f,b]=React.useState([]),[_,ee]=React.useState([]),[S,N]=React.useState({password:null,private:!1,dates:[],tags:[],input:[]}),[w,te]=React.useState(null),k=React.useRef();var ae=React.useRef();const re=React.useRef(),x=React.useRef(),T=React.useRef(),C=React.useRef(),A=React.useRef();var le=React.useRef(),ie=React.useRef(),ce=(i._LocalEventEmitter.unsubscribe(e),i._LocalEventEmitter.subscribe(e,e=>{e&&"loadDefault"===e.dispatch&&P()}),i._LocalEventEmitter.unsubscribe("incoming_authorization_ask"),i._LocalEventEmitter.subscribe("incoming_authorization_ask",t=>{if(t&&t?.r?.user){const e=f;e?.find(e=>e.user?.id===t.r?.user?.id)||e.push(t.r),b([]),setTimeout(()=>{b(e)},1)}}),React.useEffect(()=>{var e;!t&&i?._loggedIn?.identifier&&(e=uuidv4(),U(e),P(),$(!0))},[t,i?._loggedIn?.identifier]),React.useState(()=>{!i?.adminAuth||r||s||P()},[i?.adminAuth,r,s]),React.useCallback(e=>{B()},[d,o]));async function B(e=!1,t=!1){try{var a,r,l;I(!0),s||(n(!0),m(!0),k.current=setTimeout(()=>{n(!1),m(!1)},1e4),a={stripeSecret:i._stripeSecret,dontForce:e,streamSettings:S,streamingFor:d?.id??null,record:o,admin:i?.adminAuth,askEmbed:i?.askEmbed,customer:c?.query?.cus,foruser:c?.query?.foruser},r=await beginStream(i.apiUrl,i.domainKey,a),k.current&&clearTimeout(k.current),m(!1),n(!1),r?"disauthenticated"==r?logout():"success"==r.status&&(console.log(r),H(r.canStream),r?.canStreamEmbed?Z(r.canStreamEmbed):Z(null),r.askStream&&G(!0),r.upcomingEvents&&(D(r.upcomingEvents),K(r.upcomingEvents.map(e=>generateBackground(i)))),r?.waitingAuth&&b(r.waitingAuth),r?.data?.streamForProduct?V(r.data.streamForProduct):V(null),t?i._LocalEventEmitter&&i._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}):r.data&&"streaming"==r.data.status&&r.data.stream&&(h(r.data.stream),i?._setCurrentlyStreaming&&i._setCurrentlyStreaming(r.data.stream),se(r.data.stream),r.data.key&&v(r.data.key),r.data.streamTo&&E(""+r.data.streamTo),r.data.stream.meta&&r.data.stream.meta.streamSettings&&(l=r.data.stream.meta.streamSettings,N(l)),i._LocalEventEmitter)&&i._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}),ge()):e||i._setPageError("Failed to save begin stream"))}catch(e){console.log(e),k.current&&clearTimeout(k.current),n(!1),m(!1)}}const se=e=>{try{e&&(T.current.value=e.title,C.current.value=e.description,A.current.value=e.tags)}catch(e){}};function P(){M(!0),B(!0)}var z=React.useCallback(e=>{if(e.currentTarget.getAttribute("modif"))if("yes"==e.currentTarget.getAttribute("modif"))try{(async()=>{var e;s||(n(!0),k.current=setTimeout(()=>{n(!1)},1e4),e={stream:R.id,customer:c?.query?.cus,foruser:c?.query?.foruser},e=await endStream(i.apiUrl,i.domainKey,e),k.current&&clearTimeout(k.current),p(!1),n(!1),e?"disauthenticated"==e?logout():"success"==e.status&&(h(!1),i?._setCurrentlyStreaming&&i._setCurrentlyStreaming(!1),v(null),E(null),N({password:null,private:!1,dates:[],tags:[],input:[]}),B(!0),i._LocalEventEmitter)&&i._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}):i._setPageError("Failed to end stream"))})()}catch(e){p(!1),k.current&&clearTimeout(k.current),n(!1)}else p(!1);else Y||p(!0)}),ne=React.useCallback(e=>{e?.currentTarget?.checked?l(!0):l(!1)}),me=React.useCallback(e=>{var t={...S};t.private=e.currentTarget.checked,N(t)}),oe=React.useCallback(e=>{var t={...S};t.password=e.currentTarget.value,N(t)}),de=React.useCallback(e=>{var t,a=e?.currentTarget?.getAttribute("modif")??"";a&&((t=S)[a]=e.currentTarget.value,N(t))});const ue=e=>{T?.current&&e.title&&(T.current.value=e?.title),C?.current&&e?.description&&(C.current.value=e.description),A?.current&&(e?.input?.join&&0<e.input.length?A.current.value=e.input.join(" "):e?.tags?.join&&e.dates?.join&&(A.current.value=e.tags.join(" ")+" "+e.dates.join(" ")),e.streamForProduct)&&!A?.current?.value.match(e.streamForProduct)&&(A.current.value+=" "+e.streamForProduct),x?.current&&e.password&&(x.current.value=e.password)};var pe=React.useCallback(e=>{const t=e?.currentTarget?.getAttribute("modif")??null;var a;t&&(e=L.find(e=>e.id===t))&&((a=JSON.parse(JSON.stringify(S))).private=!0,N(a),re.current.checked=!0,j(e),e={title:e?.name,description:e?.detailmeta?.description},N(Object.assign(a,e)))}),W=(React.useMemo(()=>{ue(S)},[S,T?.current,C?.current,A?.current,s]),React.useCallback(e=>{const t=e?.currentTarget?.getAttribute("modif");t&&(["collab","admin","share","embed"].filter(e=>e!==t).map(e=>document.getElementById("modal_"+e)?.classList?.remove("simple_modal_visible")),(e=document.getElementById("modal_"+t))&&!e?.classList?.contains("simple_modal_visible")?e.classList.add("simple_modal_visible"):e?.classList.remove("simple_modal_visible"))}));const ge=async()=>{var e=await apiReq("/p/getadmins",{hash:i._loggedIn.hash,identifier:i._loggedIn.identifier,customer:c?.query?.cus,foruser:c?.query?.foruser});e?.data&&(ee(e.data?.currentAuthRes??[]),b(e.data?.waitingAuthRes??[]))},q=React.useCallback(e=>{var t=e?.currentTarget?.getAttribute("user"),e=e?.currentTarget?.getAttribute("modif");t&&e&&(async(t,e)=>{var a;console.log(t,e),s||(n(!0),t&&e&&(a=[].concat(f,_).find(e=>t===e.id),console.log(a),a?.id&&(a.field="id",a.value=a.id),"allow"===e&&(a.status="good",delete a.meta.asking),await apiReq("/p/updaterelationship",{hash:i._loggedIn.hash,identifier:i._loggedIn.identifier,customer:c?.query?.cus,foruser:c?.query?.foruser,method:"allow"===e?"set":"del",spec:a}),ge()),n(!1))})(t,e)});var Re=React.useMemo(()=>React.createElement(React.Fragment,null,f?.map?f.filter(e=>e?.username??e?.id).map((e,t)=>React.createElement("div",{key:t,className:"simple_item_selector simple_item_selector_active flex gap-p5",style:{width:"100%"}},React.createElement("div",null,e?.user?.username??e?.username??e?.id),React.createElement("div",{className:"flex gap-p5",style:{width:"100%"}},React.createElement("button",{style:{width:"100%"},onClick:q,modif:"allow",user:e?.id},"Allow"),React.createElement("button",{style:{width:"100%"},onClick:q,modif:"deny",user:e?.id},"Deny")))):null),[f,_]),he=React.useMemo(()=>React.createElement(React.Fragment,null,_?.map?_.filter(e=>e?.username??e?.id).map((e,t)=>React.createElement("div",{key:t,className:"simple_item_selector simple_item_selector_active flex gap-p5",style:{width:"100%",justifyContent:"space-between"}},React.createElement("div",null,e?.user?.username??e?.username??e?.id),React.createElement("div",{className:"flex gap-p5"},React.createElement("button",{onClick:q,modif:"deny",user:e?.id},"Remove")))):null),[f,_]),ve=React.useCallback(e=>{w?te(!1):te(!0)}),Ee=`<script>
    window.tycoonEmbedConfig = {
        apiUrl: '${i?.apiUrl}',
        socketUrl: '${i?.socketUrl}',
        socketPath: '${i?.socketpath}',
        socketPort: '${i?.socketPort}',
        dborigin: '${i?.adminAuth?.data?.userid??""}',
        domainKey: '${i?.adminAuth?.data?.meta?.key}'
    }
</script>
<script prerender type="module" src="https://d2zsu4v7czjhvo.cloudfront.net/embed/live/0.1.0/bundle.js"></script>
<link rel="stylesheet" href="https://d2zsu4v7czjhvo.cloudfront.net/embed/live/0.1.0/main.css" />`;return console.log(R,u,a,i.adminAuth,i,f,_,"askdjaksjd"),React.createElement("div",{className:""+(i.className??"")},React.createElement("style",null,`
.container1 {
    max-width: 400px;
}
.WatchPage_VideoPlayer {
    outline: 1px solid grey !important;
    outline-offset: 1px;
}
.Watch_PreviewContainer .Watch_FloatingCoverPlayer .WatchPage_VideoPlayer, .Watch_PreviewContainer .Watch_FloatingCoverPlayer .WatchPage_VideoPlayer video {
    height: 225px;
}
.timer {
    font-size: 1rem;
}

.simple_modal {
    top: 25vh;
    height: 50vh;
    width: 60vw;
    left: 20vw;
    overflow-y: auto;
    max-height: 50vh;
}

.simple_modal2 {
    top: 10vh;
    height: 80vh;
    max-height: 80vh;
}

.simple_collapse {
    > div {
        width: 50%;
    }
}

@media (max-width: 720px) {
    .simple_collapse {
        flex-direction: column;
        > div {
            width: 100%;
        }
    }
}

.minifiedwindow {
    .simple_modal {
        left: 1rem;
        width: calc(100% - 2rem);
        top: 10vh;
    }
    .simple_collapse {
        flex-direction: column;
        > div {
            width: 100%;
        }
    }
}
                `),React.createElement("div",{className:i?.minifiedwindow?"minifiedwindow":""},React.createElement("div",{className:"modal_container"},React.createElement("div",{id:"modal_collab",className:"simple_modal",style:{background:"black",padding:"1rem",borderRadius:"1rem",border:"1px solid grey",height:"min-content"}},React.createElement(Close,{className:"close pointer",style:{position:"sticky",right:"0",top:"0",float:"right",margin:"0rem 0"},onClick:W,modif:"collab"}),React.createElement("div",{className:"flex gap-p5 al-cen",style:{marginBottom:"1rem"}},React.createElement("h3",{className:"header1",modif:"collab",style:{fontWeight:600,margin:0}},"Collaborate"),React.createElement("div",{className:"material-icons"},"work")),React.createElement("div",null,React.createElement("p",{style:{fontSize:"1rem",marginBottom:".5rem"}},"Share this link with collaborators to control and manage your content"),React.createElement("div",null,React.createElement("div",{className:"selectThisText"},React.createElement("div",{onClick:selectThisText,selectValue:(i?.devAddress?i.devAddress+"/":`https://${i.domainUrl}/`)+(i?.askEmbed?`${i?.adminPage?"admin/embed":"embed/admin"}?foruser=${i?._loggedIn?.identifier}&cus=`+i?.adminAuth?.data?.userid:"p?a=openbeginstream&foruser="+i?._loggedIn?.identifier),style:{marginBottom:"1rem"},selectdir:"bottom"},React.createElement("input",{type:"text",value:"***********************************************",style:{fontSize:"1rem",width:"100%",background:"white",borderRadius:".25rem",padding:".25rem .5rem",borderWidth:0}})),React.createElement("div",{className:"flex gap-p10 simple_collapse",style:{marginBottom:"1rem"}},React.createElement("div",null,React.createElement("p",{className:"header1",style:{fontSize:"1rem",fontWeight:600,color:"grey",marginBottom:".5rem"}},"People with this link can:"),React.createElement("div",{className:"simple_item_selector simple_item_selector_active",style:{width:"100%"}},React.createElement("div",{style:{display:"block"}},React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Start and stop your livestreams")),React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Moderate your live chat via bans and quarantines")),React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Present information and products")),React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Update stream timelines")),React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Update realtime stream feeds")),React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Configure stream meta data and paywall options"))))),React.createElement("div",null,React.createElement("p",{style:{fontSize:".9rem",marginBottom:"1rem"}},"Only recipients of this link will be given the ability to request control of your sharable content."),React.createElement("div",{className:"importantPrompt Manager_NowStreamingButton",style:{marginBottom:".5rem"}},React.createElement("span",null,"This will apply to current and future livestreams")),React.createElement("div",null,React.createElement("p",{style:{fontSize:".9rem",fontWeight:600,color:"grey",marginBottom:".5rem"}},"Incoming Requests:"),Re))),React.createElement("div",null,React.createElement("div",{className:"flex gap-p5 al-cen selectThisText",style:{justifyContent:"flex-end"}},React.createElement("p",{style:{fontSize:".9rem"}},"Keep your team synchronized"),React.createElement("div",{className:"simple_item_selector simple_item_selector_active pointer",onClick:selectThisText,selectValue:(i?.devAddress?i.devAddress+"/":`https://${i.domainUrl}/`)+(i?.askEmbed?`${i?.adminPage?"admin/embed":"embed/admin"}?foruser=${i?._loggedIn?.identifier}&cus=`+i?.adminAuth?.data?.userid:"p?foruser="+i?._loggedIn?.identifier),selectdir:"top"},React.createElement("div",null,React.createElement("p",{className:"header1"},"Copy"),React.createElement("div",{className:"material-icons"},"content_copy")))))))))),React.createElement("div",{className:"modal_container"},React.createElement("div",{id:"modal_admin",className:"simple_modal",style:{background:"black",padding:"1rem",borderRadius:"1rem",border:"1px solid grey",height:"min-content"}},React.createElement(Close,{className:"close pointer",style:{position:"sticky",right:"0",top:"0",float:"right",margin:"0rem 0"},onClick:W,modif:"admin"}),React.createElement("div",{className:"flex gap-p5 al-cen",style:{marginBottom:"1rem"}},React.createElement("h3",{className:"header1",modif:"admin",style:{fontWeight:600,margin:0}},"Admin"),React.createElement("div",{className:"material-icons"},"perm_identity")),React.createElement("div",{className:"selectThisText"},React.createElement("p",{style:{fontSize:"1rem",marginBottom:".5rem"}},"Share this link with collaborators to control and manage your content"),React.createElement("div",{onClick:selectThisText,selectValue:(i?.devAddress?i.devAddress+"/":`https://${i.domainUrl}/`)+(i?.askEmbed?`${i?.adminPage?"admin/embed":"embed/admin"}?foruser=${i?._loggedIn?.identifier}&cus=`+i?.adminAuth?.data?.userid:"p?a=openbeginstream&foruser="+i?._loggedIn?.identifier),style:{marginBottom:"1rem"},selectdir:"bottom"},React.createElement("input",{type:"text",value:"***********************************************",style:{fontSize:"1rem",width:"100%",background:"white",borderRadius:".25rem",padding:".25rem .5rem",borderWidth:0}})),React.createElement("div",{className:"flex gap-p10 simple_collapse",style:{marginBottom:"1rem"}},React.createElement("div",null,React.createElement("div",null,React.createElement("p",{style:{fontSize:".9rem",fontWeight:600,color:"grey",marginBottom:".5rem"}},"Existing Admins:"),React.createElement("div",null,he))),React.createElement("div",null,React.createElement("div",null,React.createElement("p",{style:{fontSize:".9rem",fontWeight:600,color:"grey",marginBottom:".5rem"}},"Incoming Requests:"),React.createElement("div",null,Re))))))),React.createElement("div",{className:"modal_container"},React.createElement("div",{id:"modal_share",className:"simple_modal",style:{background:"black",padding:"1rem",borderRadius:"1rem",border:"1px solid grey",height:"min-content"}},React.createElement(Close,{className:"close pointer",style:{position:"sticky",right:"0",top:"0",float:"right",margin:"0rem 0",zIndex:"50"},onClick:W,modif:"share"}),React.createElement("div",{className:"flex gap-p5 al-cen",style:{marginBottom:"1rem"}},React.createElement("h3",{className:"header1",modif:"share",style:{fontWeight:600,margin:0}},"Share"),React.createElement("div",{className:"material-icons"},"tv")),React.createElement("div",{className:"flex gap-p10",style:{marginBottom:"1rem"}},React.createElement("div",{className:"selectThisText"},React.createElement("div",null,React.createElement("p",{style:{fontSize:".9rem",fontWeight:600,color:"grey",marginBottom:".5rem"}},"Share your stream with the world",i?.siteTitle?" on "+i.siteTitle:""),React.createElement("div",null,React.createElement("div",{onClick:selectThisText,selectValue:`${i?.devAddress?i.devAddress+"/":`https://${i.domainUrl}/`}w?v=`+R?.id},`${i?.devAddress?i.devAddress+"/":`https://${i.domainUrl}/`}w?v=`+R?.id))))))),React.createElement("div",{className:"modal_container"},React.createElement("div",{id:"modal_embed",className:"simple_modal simple_modal2",style:{background:"black",padding:"1rem",borderRadius:"1rem",border:"1px solid grey",height:"min-content"}},React.createElement(Close,{className:"close pointer",style:{position:"sticky",right:"0",top:"0",float:"right",margin:"0rem 0",zIndex:"50"},onClick:W,modif:"embed"}),React.createElement("div",{className:"flex gap-p5 al-cen",style:{marginBottom:"1rem"}},React.createElement("h3",{className:"header1",modif:"embed",style:{fontWeight:600,margin:0}},"Embed"),React.createElement("div",{className:"material-icons"},"folder")),React.createElement("div",{className:"flex gap-p10",style:{marginBottom:"1rem"}},React.createElement("div",null,React.createElement("div",null,React.createElement("p",{style:{fontSize:".9rem",fontWeight:600,color:"grey",marginBottom:".5rem"}},"Embed your stream for playback on your website"),React.createElement("div",null,React.createElement("div",{className:"selectThisText"},React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement("p",{className:"header1",style:{fontSize:"1rem",fontWeight:600,marginBottom:".25rem"}},"1. Url"),React.createElement("div",{style:{color:"lightgrey",lineHeight:"1.35rem"}},React.createElement("span",null,"Include the query parameter ?","getfrom="+i.dborigin,"&v=",R?.id??"<yourstreamid>"," in your embed webpage to ensure the player picks up the current stream  "),React.createElement("button",{onClick:ve},w?"I have no extra query parameters":"I have my own query parameters"))),React.createElement("div",{className:"simple_item_selector simple_item_selector_active",style:{width:"100%",marginBottom:".5rem"}},React.createElement("div",{style:{display:"block",textAlign:"left"},onClick:selectThisText,selectValue:`${i?.adminAuth?.data?.meta?.website??"www.yourwebsite.com"}/?${w?"param=otherparamvalue&":""}${"getfrom="+i.dborigin}&v=`+(R?.id??"<yourstreamid>"),selectdir:"bottom"},React.createElement("div",null,React.createElement("span",null,i?.adminAuth?.data?.meta?.website??"www.yourwebsite.com","/"),React.createElement("span",{style:{color:"#2ef02e",fontWeight:600}},"<yourEmbedPagePath>"),React.createElement("span",{style:{color:"rgb(255, 238, 171)",fontWeight:600}},"?",React.createElement("span",{style:{color:"#2ef02e"}},w?"param=otherparamvalue&":""),"getfrom="+i.dborigin,"&v=",R?.id??"<yourstreamid>")))),React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement("p",{className:"header1",style:{fontSize:"1rem",fontWeight:600,marginBottom:".25rem"}},"2. Video Element"),React.createElement("div",{style:{color:"lightgrey"}},"Add this element to your page where you want your video player to load. Your video player will go here")),React.createElement("div",{className:"simple_item_selector simple_item_selector_active",style:{width:"100%",marginBottom:".5rem"}},React.createElement("div",{style:{display:"block",textAlign:"left"}},React.createElement("div",null,React.createElement("span",{style:{color:"rgb(255, 238, 171)",fontWeight:600},onClick:selectThisText,selectValue:`<div id="tycoon-embed-video" business="${i?.adminAuth?.data?.meta?.businessName??y} Embed: Video" origin="${y}"></div>`,selectdir:"bottom"},'<div id="tycoon-embed-video" business="',i?.adminAuth?.data?.meta?.businessName??y,' Embed: Video" origin="',y,'"></div>')))),React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement("p",{className:"header1",style:{fontSize:"1rem",fontWeight:600,marginBottom:".25rem"}},"3. Embed Script"),React.createElement("div",{style:{color:"lightgrey"}},"Add the script below after the previous script to the page you want to embed your livestream")),React.createElement("div",{className:"simple_item_selector simple_item_selector_active",style:{width:"100%",marginBottom:".5rem"}},React.createElement("div",{style:{display:"block",textAlign:"left"}},React.createElement("div",null,React.createElement("span",{style:{color:"rgb(255, 238, 171)",fontWeight:600},onClick:selectThisText,selectValue:Ee},"**********************************************************")))),React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement("p",{className:"header1",style:{fontSize:"1rem",fontWeight:600,marginBottom:".25rem"}},"4. Authenticate Users"),React.createElement("div",{style:{color:"lightgrey"}},"At any point during the runtime of your website make sure to authenticate users when they're signed in like so")),React.createElement("div",{className:"simple_item_selector simple_item_selector_active",style:{width:"100%",marginBottom:".5rem"}},React.createElement("div",{style:{display:"block",textAlign:"left"}},React.createElement("div",{style:{color:"rgb(255, 238, 171)",fontWeight:600},onClick:selectThisText,selectValue:useAuthUsersHtml,selectdir:"top"},React.createElement("pre",{style:{margin:0}},React.createElement("code",{class:"language-js"},React.createElement("div",{dangerouslySetInnerHTML:{__html:useAuthUsersHtml}}))))))))))))),"Controller"===i?.currentView?React.createElement("div",null,React.createElement("div",{className:"container1"},React.createElement("div",{className:"flex gap-p5",style:{marginBottom:".5rem"}},i?.askEmbed&&y?React.createElement(Tooltip,{title:"Copy embed link for your website",placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer"},React.createElement("div",null,React.createElement("p",{className:"header1",onClick:W,modif:"embed"},"Embed"),React.createElement("div",{className:"material-icons"},"folder")))):null,R?React.createElement(React.Fragment,null,React.createElement(Tooltip,{title:"Share player page",placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer"},React.createElement("div",null,React.createElement("p",{className:"header1",onClick:W,modif:"share"},"Share"),React.createElement("div",{className:"material-icons"},"tv"))))):null,React.createElement(Tooltip,{title:"Collaborate with others",placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer"},React.createElement("div",null,React.createElement("p",{className:"header1",onClick:W,modif:"collab"},"Collaborate"),React.createElement("div",{className:"material-icons"},"work")))),React.createElement(Tooltip,{title:"See existing admins",placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer"},React.createElement("div",null,React.createElement("p",{className:"header1",onClick:W,modif:"admin"},"Admin"),React.createElement("div",{className:"material-icons"},"perm_identity"))))),React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement(NowStreaming,_extends({},i,{currentlyStreaming:R})),React.createElement(Preview,_extends({},i,{useWatchDataPreview:R,noAds:!0,usePoster:"/img/default/videoposter-blank.png"}))),React.createElement("div",{className:"flex al-cen gap-p5",style:{marginBottom:".5rem"}},R?React.createElement(Tooltip,{title:"Stream is currently playing",placement:"bottom"},React.createElement("div",{className:"simple_item_selector simple_item_selector_active pointer"},React.createElement("div",null,React.createElement("p",{className:"header1"},"Playing"),React.createElement("div",{className:"material-icons"},"play_arrow")))):React.createElement(Tooltip,{title:u?"Start Stream":"Permissions required to stream",placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer greenHover",onClick:ce},React.createElement("div",null,React.createElement("p",{className:"header1"},u?"Start Stream":"Cannot Stream"),React.createElement("div",{className:"material-icons"},"play_arrow")))),React.createElement("div",{className:"timer",ref:ae},"0:00:00.0")),React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement(CurrentlyStreaming,_extends({},i,{currentlyStreaming:R,ongoingStreamFor:F,streamTo:X,streamKey:Q}))),React.createElement("div",null,u?null:React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement(PermissionsModule,_extends({},i,{handleAskForStreamingPermissions:()=>{try{(async()=>{var e;s||(n(!0),k.current=setTimeout(()=>{n(!1)},1e4),e=await requestStreamingPermissions(i.apiUrl,i.domainKey),k.current&&clearTimeout(k.current),console.log(e),e?"disauthenticated"==e?logout():"success"==e.status&&(n(!1),e?.data?.created&&G(!0),i._LocalEventEmitter)&&i._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}):n(!1))})()}catch(e){k.current&&clearTimeout(k.current),n(!1)}},canStream:u,didCheckStream:a,didAskStream:J,fetchBusy:s})))),React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement("div",{style:{marginBottom:".25rem"}},React.createElement("div",{style:{marginBottom:".25rem"}},React.createElement("label",{style:{fontWeight:600}},"Stream")),React.createElement("div",{className:"Manager_SettingsContainer flex gap-p5"},React.createElement(StreamTitleInput,_extends({},i,{fetchBusy:s,streamSettings:S,updateStreamData:de,titleRef:T})))),React.createElement("div",{className:"Manager_MoreSettingsContainer ",ref:ie},React.createElement("div",{className:"Manager_MoreSettingsInternalContainer",note:"This controls height of open settings"},React.createElement(StreamSettings,_extends({},i,i,{fetchBusy:s,descriptionRef:C,myTagsRef:A,updateStreamData:de,updateTags:e=>{if(e){var t={...S},e=e.currentTarget.value.split(" ");const a=[],r=[];e.map(e=>{isNaN(new Date(e))?r.push(e):a.push(new Date(e))}),t.dates=a,t.tags=r,t.input=e,N(t)}},setPrivate:me,privateRef:re,streamSettings:S,setPassword:oe,passwordRef:x,currentlyStreaming:R,recordStream:o,recordStreamRef:le,handleSetRecordingStream:ne})))),React.createElement("div",null,React.createElement(UpcomingStreams,_extends({},i,{backgrounds:O,fetchBusy:s,currentlyStreaming:R,upcomingStreams:L,setNextStream:pe})))),React.createElement("div",{style:{marginBottom:".5rem"}},R?Y?React.createElement(TerminateStream,_extends({},i,{handleAskEndStream:z})):React.createElement("div",{className:"flex gap-p5"},React.createElement("div",null,React.createElement(StreamUpdateSettings,_extends({},i,{currentlyStreaming:R,updateStreamConfigFn:async()=>{try{if(!s){n(!0),g(!0),k.current=setTimeout(()=>{n(!1),g(!1)},1e4);var e={title:T.current&&T.current.value?T.current.value:null,description:C.current&&C.current.value?C.current.value:null,tags:A.current&&A.current.value?A.current.value:null},t={stream:R.id,streamData:e,streamSettings:S,customer:c?.query?.cus,foruser:c?.query?.foruser},a=await updateStreamConfigRequest(i.apiUrl,i.domainKey,t);if(k.current&&clearTimeout(k.current),n(!1),g(!1),a){if("disauthenticated"==a)logout();else if("success"==a.status&&a.data&&"streaming"==a.data.status&&(h(a.data.stream),i?._setCurrentlyStreaming&&i._setCurrentlyStreaming(a.data.stream),a.data.key&&v(a.data.key),a.data.streamTo&&E(a.data.streamTo),a.data.stream)&&a.data.stream.meta&&a.data.stream.meta.streamSettings){const r=a.data.stream.meta.streamSettings;N(r),setTimeout(()=>{ue(r)},150)}}else i._setPageError("Failed to save begin stream")}}catch(e){console.log(e),k.current&&clearTimeout(k.current),n(!1),g(!1)}}}))),React.createElement(Tooltip,{title:"End stream",placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer red_button",onClick:z},React.createElement("div",null,React.createElement("p",{className:"header1"},"End Stream"),React.createElement("div",{className:"material-icons"},"stop"))))):null),i?.adminAuth?.authorized&&i?.adminAuth?.data?.userid!==i?.dborigin?R?React.createElement(Tooltip,{title:"You are currently streaming to platform origin "+i.adminAuth.data.userid,placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer",onClick:z},React.createElement("div",null,React.createElement("p",{className:"header1",style:{fontSize:".75rem"}},"Streaming to platform ",i.adminAuth.data.userid),React.createElement("div",{className:"material-icons"},"business")))):React.createElement(Tooltip,{title:"When you start a stream it will run under platform "+i.adminAuth.data.userid,placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer",onClick:z},React.createElement("div",null,React.createElement("p",{className:"header1",style:{fontSize:".75rem"}},"Streaming platform ",i.adminAuth.data.userid),React.createElement("div",{className:"material-icons"},"business")))):null)):"Viewer"===i?.currentView?React.createElement("div",null,React.createElement("h3",null,"Viewer")):"Feed"===i?.currentView?React.createElement("div",null,React.createElement("h3",null,"Feed")):"Moderator"===i?.currentView?React.createElement("div",null,React.createElement("h3",null,"Moderator")):null),React.createElement(Script,{src:"https://d2zsu4v7czjhvo.cloudfront.net/all/prism/1.29.0/prism.js"}),React.createElement("link",{href:"https://d2zsu4v7czjhvo.cloudfront.net/all/prism/1.29.0/prism.css",rel:"stylesheet"}))};export default Module;