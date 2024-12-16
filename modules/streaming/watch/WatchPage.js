function _extends(){return(_extends=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a,c=arguments[e];for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a])}return t}).apply(this,arguments)}import React from"react";import dynamic from"next/dynamic";import WatchPageStyles from"./WatchPage.module.scss";import{useRouter}from"next/router";import{checkSignedIn}from"../../utility/onboarding";import{doFetchAuthForStream,checkAuthorization}from"../../utility/streaming";import{ensureAutoPlay,ensureSetSource}from"../../video/player/utility";import{v4 as uuidv4}from"uuid";import{handleInteractMedia,isObjectEmpty}from"../../util";import{initializePlayer,disposePlayer}from"/modules/streaming/watch/runtime/initialize";import{checkiOS}from"/modules/util";import{resolveContentDate}from"../../utility/utility/date";import{timelineItemIsExpired}from"./utility";import{buildChapters}from"/modules/streaming/watch/utility";import{resolveRegionBasedPrice,westernMoneyFormat}from"/modules/utility/ecommerce";const Watch=dynamic(()=>import("/layout/Watch"),{ssr:!1}),defaultPoster="img/internal/videoposter.png";let options={autoplay:!0,html5:{vhs:{lowLatency:!0,minPlaylistRefreshIntervalMs:1500}}};const setWindowAuthOnResource=(t,e)=>{try{var a=e||t;console.log("Is Auth",a),window.isAuthorized!==a&&(window.isAuthorized=a)}catch(t){console.log(t)}},defaultOverlayMatrix={q1:[],q2:[],q3:[],q4:[],n:[],s:[],w:[],e:[],np:[],sp:[],wp:[],ep:[],cp:[]},ERROR_ORDER=["src","auth","prompt"],Module=h=>{const r=useRouter()["query"],[m,p]=React.useState(!1),[y,,]=React.useState("main-player"),[a,z]=React.useState(!1),[g,j]=React.useState({action:"page_loaded",trying:"play_video",src:""}),[t,N]=React.useState(""),[e,F]=React.useState(!1),[c,s]=React.useState(void 0),[v,H]=React.useState({}),[w,W]=React.useState({});var[,,]=React.useState(null);const[f,B]=React.useState({}),[R,b]=React.useState(defaultPoster),[i,o]=React.useState(!1),[q,n]=React.useState(!1),[E,_]=React.useState(!1),[l,D]=React.useState(!1),[k,S]=React.useState(!1);var[,,]=React.useState([]);const[V,P]=React.useState(!1),[L,A]=React.useState(null),[O,J]=React.useState(!1),[$,K]=React.useState({}),[T,Y]=React.useState(structuredClone(defaultOverlayMatrix)),[G,Q]=React.useState({offset:0});let x=React.useRef();React.useRef(),React.useRef(),React.useRef();const I=void 0!==c?c:e,M=(console.log(c),setWindowAuthOnResource(null,I),h.watchData),X=()=>{h._LocalEventEmitter.dispatch("video_set_chat_state",{})},[Z,tt]=React.useState([{innerHTML:"chat",className:"material-icons VideoPlayer_ChatBtn",id:"player-btn-chat",btnEvent:X}]),et=(React.useEffect(()=>{let t=[{innerHTML:"chat",className:"material-icons VideoPlayer_ChatBtn",id:"player-btn-chat",btnEvent:X}];t=h?.appendButtons?t.push(h.appendButtons):h.overrideButtons??t,tt(t)},[h?.appendButtons,h?.overrideButtons]),t=>{Y(t);var e="overlay-"+(y?"player-"+y:null);console.log("Channel",e,t),h._LocalEventEmitter.dispatch(e,{dispatch:"update",data:t})}),C=(h._LocalEventEmitter.unsubscribe("watch_overlay_events"),h._LocalEventEmitter.subscribe("watch_overlay_events",a=>{if("update"===a?.dispatch){let e=structuredClone(T);if("set"===a.operation&&a?.where&&a?.data?.section){let t;e[a.data.section]&&-1<(c=e[a.data.section].findIndex(t=>t[a.where]==a.value))&&(t=!0,e[a.data.section][c]=a.data),t||e[a.data.section].push(a.data)}else{var c;"del"===a.operation&&a?.where&&a?.data?.section?e[a.data.section]&&-1<(c=e[a.data.section].findIndex(t=>t[a.where]==a.value))&&e[a.data.section].splice(c,1):"reset"===a.operation&&(e=structuredClone(defaultOverlayMatrix))}et(e)}}),t=>{W(t),console.log("Prompt",t);var e=h?.useMatrixSection??"np";h._LocalEventEmitter.dispatch("watch_overlay_events",{dispatch:"update",operation:isObjectEmpty(t)?"del":"set",data:Object.assign({section:e,domain:"streamLeadPrompt",sectionType:"text"},t),where:"domain",value:"streamLeadPrompt"})}),U=(y&&(h._LocalEventEmitter.unsubscribe(y),h._LocalEventEmitter.subscribe(y,t=>{if(t&&t.dispatch){try{"function"==typeof x?.current?.muted&&x?.current?.muted()!==O&&J(x.current.muted())}catch(t){}if("refetchAuth"===t.dispatch)console.log("Refetch Auth!"),h._LocalEventEmitter.dispatch("watch_overlay_events",{dispatch:"update",operation:"reset"}),s(void 0),it(!0,!0);else if("processError"===t.dispatch)console.log("Handle Process Error",t),"no_video"===t?.event?w.lead&&"No video"===w?.lead||x?.current&&x.current.src&&C(t.prompt):"progress_good"===t?.event&&w?.type&&-1<["src"].indexOf(w.type)&&C({});else if("updateAuth"===t.dispatch){if(lt(),!h?.watchData||isObjectEmpty(h.watchData))return null;!I&&x?.current?(u={type:"auth",lead:"Not Authorized",description:"You have not been authorized to watch the stream"},console.log("auth req",v,f),x.current.pause(),f?.products?.[0]&&(d={product:f.products[0],section:"cp",type:"display",sectionType:"product",domain:"authProduct",lead:`Purchase ticket to watch "${h?.watchData?.title??"Stream"}"`,description:""+h?.watchData?.description,ticketLead:""+(f.products[0]?.name??"Ticket"),ticketDescription:f.products[0]?.detailmeta?.description??null,media:f.products[0]?.images?.[0]?.name?h.cdn.static+"/"+f.products[0].images[0].name:"",price:resolveRegionBasedPrice(h,f.products[0]?.styles?.[0]??null)},h._LocalEventEmitter.dispatch("watch_overlay_events",{dispatch:"update",operation:"set",data:d,where:"domain",value:"authProduct"})),v&&(v.password&&(u.password="The stream requires a password"),v.tags)&&v.dates&&(0<v.tags.length||0<v.dates.length)&&(u.tags="The stream has tags that authorize viewership of the stream. Please purchase tickets from the users shop to watch",u.tagsList=v.tags.map(t=>t)+" "+v.dates.map(t=>t)),(!w?.type||w?.type&&ERROR_ORDER.indexOf(w.type)>ERROR_ORDER.indexOf(u.type))&&C(u)):I||C({})}else if("attemptAutoPlay"===t.dispatch){if(I&&x?.current&&""!==x?.current.src()){console.log("Attempt Play",x.current,g,"Authorized",I);try{window?.userInteracted||x.current.muted(!0)}catch(t){}window?.imaPlaying||x.current.play().catch(t=>{console.log(t,t.message)})}}else if("ensurePosterUpdated"===t.dispatch)h?.watchData&&h?.watchData?.thumbtrack&&h?.watchData?.thumbtrack[0]&&h?.cdn?.static&&(d=h.cdn.static+"/thumbtrack/"+h.watchData.thumbtrack[0],R!==d)&&b(d);else if("playerHealth"===t.dispatch)console.log("Player Health",h.cdn,x.current,x.current?.paused(),L),!window?.imaAdManagerDidLoad&&h?.noAds||(L?.message?.match("Playback cannot continue")&&x?.current?.paused()||x?.current?.errorDisplay?.el()?.innerHTML.match("Playback cannot continue")||x?.current?.errorDisplay?.el()?.innerHTML.match("The media could not be loaded")&&k?(A(null),x.current.src({}),ensureSetSource(x.current,g,M,h.cdn.static,!0,()=>{try{window?.userInteracted||x.current.muted(!0)}catch(t){}!window?.imaPlaying&&I&&(console.log("Attempting to play! Player Health Check"),x.current.play())})):x?.current&&h?.cdn?.static?ensureSetSource(x.current,g,M,h.cdn.static):x.current||V||((u=U("player-"+y))?(_(!0),x.current=u):(disposePlayer("player-"+y),P(!0),setTimeout(()=>{console.log("Fire Reload"),h._LocalEventEmitter.dispatch(y,{dispatch:"rebuildPlayer"})},50))));else if("rebuildPlayer"===t.dispatch)console.log("Reload Player"),P(!1),st();else if("timelineHealth"===t.dispatch){var e,a,c,i,o,n,l,d=x?.current?.tech_?.hasStarted_&&2<x?.current?.readyState,u=(console.log(x?.current,d),m&&!E&&y&&h?.cdn?.static&&window?.videojs&&(window?.imaAdManagerDidLoad||!h?.noAds)&&!d&&(D(!0),x.current=initializePlayer(h,h.watchData,g,"player-"+y,options,x,Z,at,ct,_,ot,S,k,rt)),structuredClone(G));(!u?.lastUpdate||u.lastUpdate&&u.lastUpdate<(new Date).getTime()-15e3)&&(u.lastUpdate=(new Date).getTime(),u.offset=null==u.offset?u.offset=0:u.offset+1,Q(u));const p=U("player-"+y)?.currentTime();let r=structuredClone(T),s=!1;p&&(Object.entries(u).map(a=>{a?.[1]?.map&&a[1].map((t,e)=>{timelineItemIsExpired(t,p)&&(s=!0,r[a[0]].splice(e,1))})}),h?.watchData?.timeline?.map)&&buildChapters(h.watchData).map(e=>{var t,a=e,a=("clip"===a.type&&(a.sectionType="img",a.media=h?.cdn?.static+"/thumbtrack/"+a.media,a.expiry=a.startOffset+10),timelineItemIsExpired(a,p)),c=e.section;c&&(t=r[c].findIndex(t=>t.id===e.id),a&&-1<t?(s=!0,r[c].splice(t,1)):a||-1!==t||(s=!0,r[c].push(e)))}),s&&et(r),"Live"===M?.__typename&&(t=U("player-"+y),d=document.getElementById(`player-${y}_html5_api`),console.log(d),t)&&(u=structuredClone($),console.log("P",t),console.log("Tech",t.tech(),"Vhs",t.tech().vhs),e=t?.currentTime(),(!u.lastTime||e&&u?.lastTime&&u.lastTime!=e)&&(u.lastTime=e),a=t.tech().vhs,c=(t?.tech()?.vhs?.playlists?.media_)?.segments,Array.isArray(c)&&(o=(i=c.reduce((t,e)=>e?.end??t+(e?.duration??0),0))<e+8,n=i<e+4,l=c?.[2]?.end&&e<c[2].end-22,console.log("Current Time",e,"Near End",o,"Near End Critical",n,"Falling Behind",l,"Available Segment",i,"Playback Rate",d?.playbackRate,"Segments",c),d)&&(o?n?(.8<d.playbackRate&&(console.log("Slowing down critical playback rate",d.playbackRate),d.playbackRate=d.playbackRate-.05),(!u.lastFetch||u?.lastFetch&&u.lastFetch+3<(new Date).getTime())&&(console.log("Fetching more stream",a,t,t.seekable()),u.lastFetch=(new Date).getTime())):.9<d.playbackRate&&(console.log("Slowing down playback rate",d.playbackRate),d.playbackRate=d.playbackRate-.05):(d.playbackRate<1&&(console.log("Speeding up playback rate",d.playbackRate),d.playbackRate=d.playbackRate+.025),l?d.playbackRate<1.25&&(d.playbackRate=d.playbackRate+.025):1<d.playbackRate&&(d.playbackRate=d.playbackRate-.025)),1!==d.playbackRate)&&.98<d.playbackRate&&d.playbackRate<1.02&&(d.playbackRate=1),K(u))}}})),t=>{try{if(window?.videojs?.players[t])return window.videojs.players[t]}catch(t){}return null}),at=(t,e,a)=>{"update"===e?"progress"!==a||t?.target?.player?.error_&&null!=t?.target?.player?.error_&&t?.target?.player?.error_?.message||h._LocalEventEmitter.dispatch(y,{dispatch:"processError",event:"progress_good",prompt:{}}):t?.target?.player?.error_&&(console.log("Incoming error state",t.target.player.error_,w),t.target.player.error_?.message.match(/No compatible source/))&&h._LocalEventEmitter.dispatch(y,{dispatch:"processError",event:"no_video",prompt:{type:"src",lead:"No video",description:"This stream is unavailable right now"}}),A({time:(new Date).getTime(),message:t?.message??""})},ct=t=>{console.log("Ended",t)},rt=t=>{console.log("Played",t)},st=t=>{t=Object.assign(options,{force:t,html5:{vhs:{lowLatency:!0,minPlaylistRefreshIntervalMs:1500}}});!window?.imaAdManagerDidLoad&&h?.noAds||(x.current=initializePlayer(h,h.watchData,g,"player-"+y,t,x,Z,at,ct,_,ot,S,k,rt))},it=(React.useEffect(()=>{h?._LocalEventEmitter&&(h._LocalEventEmitter.unsubscribe("video_set_chat_state"),h._LocalEventEmitter.subscribe("video_set_chat_state",t=>{console.log("Open",i),o(!i)}))},[h._LocalEventEmitter,i]),async(t,e)=>{a&&!t||h?.watchData?.id&&(t||!f.stream||f.stream&&f.stream!==h.watchData.id)&&(z(!0),t=await doFetchAuthForStream(h.apiUrl,h.domainKey,h.watchData.id,checkSignedIn),console.log("do fetch auth",t),t)&&(B({stream:h.watchData.id,allowed:t.allowed||!1,meta:t.meta,products:t?.products??[]}),e)&&setTimeout(()=>{x?.current&&x.current.play()},250)}),ot=(React.useEffect(()=>{it()},[h.watchData,f,a]),async(t,e)=>{var a,c;I&&(c={},r?.time&&(c.time=r.time),c?.time&&t?.currentTime&&t.currentTime(c.time),a="live"==(e="Live"==(c=e??h?.watchData)?.__typename?"live":"static")||checkiOS()?"hls":"mpd",c)&&h?.cdn?.static&&(e="static"==e?h.cdn.static+"/video/"+c[a]:""+c?.meta?.channel?.playbackUrl)&&(t.src({src:e,type:"hls"==a?"application/x-mpegURL":"application/dash+xml"}),await ensureAutoPlay(t.play,t),setTimeout(()=>{h._LocalEventEmitter.dispatch(y,{dispatch:"attemptAutoPlay"})},1))});let d=y;React.useEffect(()=>{console.log("did mount",m,E,y,window.videojs);try{disposePlayer("player-"+y)}catch(t){}const t=d;let e=[setInterval(()=>{h._LocalEventEmitter.dispatch(t,{dispatch:"updateAuth"})},2e3),setInterval(()=>{h._LocalEventEmitter.dispatch(t,{dispatch:"playerHealth"})},15e3),setInterval(()=>{h._LocalEventEmitter.dispatch(t,{dispatch:"timelineHealth"})},1500)];return()=>{e.forEach(clearInterval)}},[]),React.useEffect(()=>{m||p((new Date).getTime())},[m]);const nt=()=>{w?.type&&-1<["prompt","auth"].indexOf(w.type)&&(console.log("Reset prompt"),C({}))},lt=(React.useEffect(()=>{let t;var e;"Live"==M?.__typename&&M?.id?(o(!0),M?.meta?.channel?.playbackUrl&&g.src!==M.meta.channel.playbackUrl&&(t=M.meta.channel.playbackUrl)):"Video"==M?.__typename&&(o(!1),e=checkiOS()?"hls":"mpd",M)&&M[e]&&h?.cdn?.static&&(e=h.cdn.static+"/video/"+M[e],g.src!==e)&&(t=e),t&&g.src!==t&&((e={...g}).src=t,j(e),handleInteractMedia(h,h.watchData,e.trying))},[h.watchData,x.current,g?.src,M]),React.useEffect(()=>{g?.src&&t!==g.src&&N(g.src)},[x?.current,g?.src,I,e,t,M,w]),x?.current&&x?.current.src()!==g?.src&&M&&(u="live"==("Live"==M?.__typename?"live":"static")||checkiOS()?"hls":"mpd",x.current.src({src:t,type:"hls"==u?"application/x-mpegURL":"application/dash+xml"})),()=>{var t,e,a;h.watchData&&(t=checkAuthorization(h.watchData,f,h,nt,I),console.log("Auth!",t),(e=h?.watchData?.meta?.streamSettings??h?.watchData?.meta)&&JSON.stringify(e)!==JSON.stringify(v)&&H(e),console.log("Auth",t,"Is Auth",I,c),I!==t)&&(void 0===c||!1!==c)&&(e=h.watchData?.meta?.channel&&h.watchData.meta?.channel?.playbackUrl&&g?.src===h.watchData.meta.channel.playbackUrl,a=h?.watchData?.hls||h?.watchData?.mpd,e||a)&&(F(t),t&&nt(),setWindowAuthOnResource(t,I),console.log("Auth",t))});React.useEffect(()=>{lt()},[g,I,e,h?.watchData,x?.current,f,h?._loggedIn?.identifier]);React.useEffect(()=>{var t;h?.watchData&&h?.watchData?.thumbtrack&&h?.watchData?.thumbtrack[0]&&h?.cdn?.static&&(t=h.cdn.static+"/thumbtrack/"+h.watchData.thumbtrack[0],R!==t)&&(b(t),setTimeout(()=>{h?._LocalEventEmitter&&h._LocalEventEmitter.dispatch(y,{dispatch:"ensurePosterUpdated"})},250))},[h?.watchData,h?.cdn?.static,y,R]);var u={id:h?.watchData?.id,authorData:h?.watchData?.authorData??{},donateTo:h?.watchData?.author??"",date:h?.watchData?.publish?resolveContentDate(h.watchData.publish):"",title:h?.watchData?.title??"",description:h?.watchData?.description??"",tags:h?.watchData?.tags??[],relevantTicket:f},dt=(x?.current&&(E||_(!0),l||D(!0)),h.menuConfig&&h.menuConfig.height?h.menuConfig.height+2+"px":"35px");return console.log("WatchPage",x?.current,I,g,"Relevant Data",h.watchData,f,T,w),React.createElement("div",{className:h.className+" WatchPage_Container"},React.createElement(Watch,_extends({},h,{chatState:i,handleSetMobileStyleConfigs:t=>{q!==t&&n(t)},menuHeight:dt,currentPoster:R,streamLeadPrompt:w,WatchPageStyles:WatchPageStyles,watchMeta:u,playerInitialized:E,playerVisible:l,playerName:d?"player-"+d:null,setMobileStyleConfigs:n,enforceAuth:c,setEnforceAuth:s,muted:O,handleSetMuted:t=>{x?.current?.muted&&(t=!!t,x.current.muted(t),J(t))},intent:g,overlayMatrix:T,overlayMatrixState:G,isAuthorized:I})))};export default Module;