function _extends(){return(_extends=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a,r=arguments[e];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}import React from"react";import dynamic from"next/dynamic";import WatchPageStyles from"./WatchPage.module.scss";import{useRouter}from"next/router";import{checkSignedIn}from"../../utility/onboarding";import{doFetchAuthForStream,checkAuthorization}from"../../utility/streaming";import{ensureAutoPlay,ensureSetSource}from"../../video/player/utility";import{v4 as uuidv4}from"uuid";import{handleInteractMedia,isObjectEmpty}from"../../util";import{initializePlayer,disposePlayer}from"/modules/streaming/watch/runtime/initialize";import{checkiOS}from"/modules/util";import{resolveContentDate}from"../../utility/utility/date";import{timelineItemIsExpired}from"./utility";import{buildChapters}from"/modules/streaming/watch/utility";const Watch=dynamic(()=>import("/layout/Watch"),{ssr:!1}),defaultPoster="img/internal/videoposter.png";let options={autoplay:!0,html5:{vhs:{lowLatency:!0,minPlaylistRefreshIntervalMs:1500}}};const defaultOverlayMatrix={q1:[],q2:[],q3:[],q4:[],n:[],s:[],w:[],e:[],np:[],sp:[],wp:[],ep:[]},ERROR_ORDER=["src","auth","prompt"],Module=h=>{const c=useRouter()["query"],[m,U]=React.useState(!1),[y,,]=React.useState("main-player"),[e,j]=React.useState(!1),[g,N]=React.useState({action:"page_loaded",trying:"play_video",src:""}),[t,H]=React.useState(""),[a,F]=React.useState(!1);var[r,z]=React.useState(!1);const[s,B]=React.useState({}),[v,W]=React.useState({});var[,,]=React.useState(null);const[i,q]=React.useState({}),[w,R]=React.useState(defaultPoster),[n,o]=React.useState(!1),[V,l]=React.useState(!1),[f,b]=React.useState(!1),[d,E]=React.useState(!1),[_,D]=React.useState(!1);var[,,]=React.useState([]);const[J,S]=React.useState(!1),[k,P]=React.useState(null),[L,x]=React.useState(!1),[K,Y]=React.useState({}),[O,$]=React.useState(defaultOverlayMatrix),[G,Q]=React.useState({offset:0});let T=React.useRef();React.useRef(),React.useRef(),React.useRef();const X=React.useRef(),A=a||r,I=h.watchData,Z=()=>{h._LocalEventEmitter.dispatch("video_set_chat_state",{})},[tt,et]=React.useState([{innerHTML:"chat",className:"material-icons VideoPlayer_ChatBtn",id:"player-btn-chat",btnEvent:Z}]),at=(React.useEffect(()=>{let t=[{innerHTML:"chat",className:"material-icons VideoPlayer_ChatBtn",id:"player-btn-chat",btnEvent:Z}];t=h?.appendButtons?t.push(h.appendButtons):h.overrideButtons??t,et(t)},[h?.appendButtons,h?.overrideButtons]),t=>{$(t);var e="overlay-"+(y?"player-"+y:null);console.log("Channel",e),h._LocalEventEmitter.dispatch(e,{dispatch:"update",data:t})}),M=(h._LocalEventEmitter.unsubscribe("watch_overlay_events"),h._LocalEventEmitter.subscribe("watch_overlay_events",a=>{if("update"===a?.dispatch&&a?.data?.section){let e=O;if("set"===a.operation&&a?.where){let t;e[a.data.section]&&-1<(r=e[a.data.section].findIndex(t=>t[a.where]==a.value))&&(t=!0,e[a.data.section][r]=a.data),t||e[a.data.section].push(a.data)}else{var r;"del"===a.operation&&a?.where?e[a.data.section]&&-1<(r=e[a.data.section].findIndex(t=>t[a.where]==a.value))&&e[a.data.section].splice(r,1):"reset"===a.operation&&(e=defaultOverlayMatrix)}at(e)}}),t=>{W(t),console.log("Prompt",t);var e=h?.useMatrixSection??"np";h._LocalEventEmitter.dispatch("watch_overlay_events",{dispatch:"update",operation:isObjectEmpty(t)?"del":"set",data:Object.assign({section:e,domain:"streamLeadPrompt",sectionType:"text"},t),where:"domain",value:"streamLeadPrompt"})}),C=(y&&(h._LocalEventEmitter.unsubscribe(y),h._LocalEventEmitter.subscribe(y,t=>{if(t&&t.dispatch)if(T?.current?.muted&&T?.current?.muted()!==L&&x(T.current.muted()),"processError"===t.dispatch)console.log("Handle Process Error",t),"no_video"===t?.event?v.lead&&"No video"===v?.lead||T?.current&&T.current.src&&M(t.prompt):"progress_good"===t?.event&&v?.type&&-1<["src"].indexOf(v.type)&&M({});else if("updateAuth"===t.dispatch){if(lt(),!h?.watchData||isObjectEmpty(h.watchData))return null;!A&&X?.current&&T?.current?(p={type:"auth",lead:"Not Authorized",description:"You have not been authorized to watch the stream"},console.log("auth req",s),T?.current?.src&&(T.current.src({src:"",type:"application/x-mpegURL"}),T.current.pause()),s&&(s.password&&(p.password="The stream requires a password"),s.tags)&&s.dates&&(0<s.tags.length||0<s.dates.length)&&(p.tags="The stream has tags that authorize viewership of the stream. Please purchase tickets from the users shop to watch",p.tagsList=s.tags.map(t=>t)+" "+s.dates.map(t=>t)),(!v?.type||v?.type&&ERROR_ORDER.indexOf(v.type)>ERROR_ORDER.indexOf(p.type))&&M(p)):A||M({})}else if("attemptAutoPlay"===t.dispatch){if(T?.current&&""!==T?.current.src()){console.log("Attempt Play",T.current,g);try{window?.userInteracted||T.current.muted(!0)}catch(t){}window?.imaPlaying||T.current.play().catch(t=>{console.log(t,t.message)})}}else if("ensurePosterUpdated"===t.dispatch)h?.watchData&&h?.watchData?.thumbtrack&&h?.watchData?.thumbtrack[0]&&h?.cdn?.static&&(p=h.cdn.static+"/thumbtrack/"+h.watchData.thumbtrack[0],w!==p)&&R(p);else if("playerHealth"===t.dispatch)console.log("Player Health",h.cdn,T.current,T.current?.paused(),k),!window?.imaAdManagerDidLoad&&h?.noAds||(k?.message?.match("Playback cannot continue")&&T?.current?.paused()||T?.current?.errorDisplay?.el()?.innerHTML.match("Playback cannot continue")||T?.current?.errorDisplay?.el()?.innerHTML.match("The media could not be loaded")&&_?(P(null),T.current.src({}),ensureSetSource(T.current,g,I,h.cdn.static,!0,()=>{try{window?.userInteracted||T.current.muted(!0)}catch(t){}window?.imaPlaying||(console.log("Attempting to play! Player Health Check"),T.current.play())})):T?.current&&h?.cdn?.static?ensureSetSource(T.current,g,I,h.cdn.static):T.current||J||((p=C("player-"+y))?(b(!0),T.current=p):(disposePlayer("player-"+y),S(!0),setTimeout(()=>{console.log("Fire Reload"),h._LocalEventEmitter.dispatch(y,{dispatch:"rebuildPlayer"})},50))));else if("rebuildPlayer"===t.dispatch)console.log("Reload Player"),S(!1),it();else if("timelineHealth"===t.dispatch){var e,a,r,i,n,o,l,d,p=T?.current?.tech_?.hasStarted_&&2<T?.current?.readyState,t=(console.log(T?.current,p),m&&!f&&y&&h?.cdn?.static&&window?.videojs&&(window?.imaAdManagerDidLoad||!h?.noAds)&&!p&&(E(!0),T.current=initializePlayer(h,h.watchData,g,"player-"+y,options,T,tt,rt,ct,b,nt,D,_,st)),G);(!t?.lastUpdate||t.lastUpdate&&t.lastUpdate<(new Date).getTime()-15e3)&&(t.lastUpdate=(new Date).getTime(),t.offset=null==t.offset?t.offset=0:t.offset+1,Q(t));const u=C("player-"+y)?.currentTime();let c=O,s=!1;u&&(Object.entries(t).map(a=>{a?.[1]?.map&&a[1].map((t,e)=>{timelineItemIsExpired(t,u)&&(s=!0,c[a[0]].splice(e,1))})}),h?.watchData?.timeline?.map)&&buildChapters(h.watchData).map(e=>{var t,a=e,a=("clip"===a.type&&(a.sectionType="img",a.media=h?.cdn?.static+"/thumbtrack/"+a.media,a.expiry=a.startOffset+10),timelineItemIsExpired(a,u)),r=e.section;r&&(t=c[r].findIndex(t=>t.id===e.id),a&&-1<t?(s=!0,c[r].splice(t,1)):a||-1!==t||(s=!0,c[r].push(e)))}),s&&at(c),"Live"===I?.__typename&&(p=C("player-"+y),t=document.getElementById(`player-${y}_html5_api`),console.log(t),p)&&(e=structuredClone(K),console.log("P",p),console.log("Tech",p.tech(),"Vhs",p.tech().vhs),a=p?.currentTime(),(!e.lastTime||a&&e?.lastTime&&e.lastTime!=a)&&(e.lastTime=a),r=p.tech().vhs,i=(p?.tech()?.vhs?.playlists?.media_)?.segments,Array.isArray(i)&&(o=(n=i.reduce((t,e)=>e?.end??t+(e?.duration??0),0))<a+8,l=n<a+4,d=i?.[2]?.end&&a<i[2].end-22,console.log("Current Time",a,"Near End",o,"Near End Critical",l,"Falling Behind",d,"Available Segment",n,"Playback Rate",t?.playbackRate,"Segments",i),t)&&(o?l?(.8<t.playbackRate&&(console.log("Slowing down critical playback rate",t.playbackRate),t.playbackRate=t.playbackRate-.05),(!e.lastFetch||e?.lastFetch&&e.lastFetch+3<(new Date).getTime())&&(console.log("Fetching more stream",r,p,p.seekable()),e.lastFetch=(new Date).getTime())):.9<t.playbackRate&&(console.log("Slowing down playback rate",t.playbackRate),t.playbackRate=t.playbackRate-.05):(t.playbackRate<1&&(console.log("Speeding up playback rate",t.playbackRate),t.playbackRate=t.playbackRate+.025),d?t.playbackRate<1.25&&(t.playbackRate=t.playbackRate+.025):1<t.playbackRate&&(t.playbackRate=t.playbackRate-.025)),1!==t.playbackRate)&&.98<t.playbackRate&&t.playbackRate<1.02&&(t.playbackRate=1),Y(e))}})),t=>{try{if(window?.videojs?.players[t])return window.videojs.players[t]}catch(t){}return null}),rt=(t,e,a)=>{"update"===e?"progress"!==a||t?.target?.player?.error_&&null!=t?.target?.player?.error_&&t?.target?.player?.error_?.message||h._LocalEventEmitter.dispatch(y,{dispatch:"processError",event:"progress_good",prompt:{}}):t?.target?.player?.error_&&(console.log("Incoming error state",t.target.player.error_,v),t.target.player.error_?.message.match(/No compatible source/))&&h._LocalEventEmitter.dispatch(y,{dispatch:"processError",event:"no_video",prompt:{type:"src",lead:"No video",description:"This stream is unavailable right now"}}),P({time:(new Date).getTime(),message:t?.message??""})},ct=t=>{console.log("Ended",t)},st=t=>{console.log("Played",t)},it=t=>{t=Object.assign(options,{force:t,html5:{vhs:{lowLatency:!0,minPlaylistRefreshIntervalMs:1500}}});!window?.imaAdManagerDidLoad&&h?.noAds||(T.current=initializePlayer(h,h.watchData,g,"player-"+y,t,T,tt,rt,ct,b,nt,D,_,st))},nt=(React.useEffect(()=>{h?._LocalEventEmitter&&(h._LocalEventEmitter.unsubscribe("video_set_chat_state"),h._LocalEventEmitter.subscribe("video_set_chat_state",t=>{console.log("Open",n),o(!n)}))},[h._LocalEventEmitter,n]),React.useEffect(()=>{(async()=>{var t;e||h.watchData&&h.watchData.id&&(!i.stream||i.stream&&i.stream!==h.watchData.id)&&(j(!0),t=await doFetchAuthForStream(h.apiUrl,h.domainKey,h.watchData.id,checkSignedIn),console.log("do fetch auth",t),t)&&q({stream:h.watchData.id,allowed:t.allowed||!1,meta:t.meta,products:t?.products??[]})})()},[h.watchData,i,e]),async(t,e)=>{var a,r;A&&(r={},c?.time&&(r.time=c.time),r?.time&&t?.currentTime&&t.currentTime(r.time),a="live"==(e="Live"==(r=e??h?.watchData)?.__typename?"live":"static")||checkiOS()?"hls":"mpd",r)&&h?.cdn?.static&&(e="static"==e?h.cdn.static+"/video/"+r[a]:""+r?.meta?.channel?.playbackUrl)&&(t.src({src:e,type:"hls"==a?"application/x-mpegURL":"application/dash+xml"}),await ensureAutoPlay(t.play,t),setTimeout(()=>{h._LocalEventEmitter.dispatch(y,{dispatch:"attemptAutoPlay"})},1))});let p=y;React.useEffect(()=>{console.log("did mount",m,f,y,window.videojs);try{disposePlayer("player-"+y)}catch(t){}const t=p;let e=[setInterval(()=>{h._LocalEventEmitter.dispatch(t,{dispatch:"updateAuth"})},2e3),setInterval(()=>{h._LocalEventEmitter.dispatch(t,{dispatch:"playerHealth"})},15e3),setInterval(()=>{h._LocalEventEmitter.dispatch(t,{dispatch:"timelineHealth"})},1500)];return()=>{e.forEach(clearInterval)}},[]),React.useEffect(()=>{m||U((new Date).getTime())},[m]);const ot=()=>{v?.type&&-1<["prompt","auth"].indexOf(v.type)&&(console.log("Reset prompt"),M({}))},lt=(React.useEffect(()=>{let t;var e;"Live"==I?.__typename&&I?.id?(o(!0),I?.meta?.channel?.playbackUrl&&g.src!==I.meta.channel.playbackUrl&&(t=I.meta.channel.playbackUrl)):"Video"==I?.__typename&&(o(!1),e=checkiOS()?"hls":"mpd",I)&&I[e]&&h?.cdn?.static&&(e=h.cdn.static+"/video/"+I[e],g.src!==e)&&(t=e),t&&g.src!==t&&((e={...g}).src=t,N(e),handleInteractMedia(h,h.watchData,e.trying))},[h.watchData,T.current,g?.src,I]),React.useEffect(()=>{g?.src&&t!==g.src&&H(g.src)},[T?.current,g?.src,A,a,t,I,v]),T?.current&&T?.current.src()!==g?.src&&I&&(u="live"==("Live"==I?.__typename?"live":"static")||checkiOS()?"hls":"mpd",T.current.src({src:t,type:"hls"==u?"application/x-mpegURL":"application/dash+xml"})),()=>{var t,e,a;h.watchData&&(t=checkAuthorization(h.watchData,i,h,ot,A),h.watchData.meta&&h.watchData.meta.streamSettings&&JSON.stringify(h.watchData.meta.streamSettings)!==JSON.stringify(s)&&B(h.watchData.meta.streamSettings),A!==t)&&(e=h.watchData?.meta?.channel&&h.watchData.meta?.channel?.playbackUrl&&g?.src===h.watchData.meta.channel.playbackUrl,a=h?.watchData?.hls||h?.watchData?.mpd,e||a)&&(F(t),t&&ot(),console.log("Auth",t))});React.useEffect(()=>{lt()},[g,A,a,h?.watchData,T?.current,i,h?._loggedIn?.identifier]);React.useEffect(()=>{var t;h?.watchData&&h?.watchData?.thumbtrack&&h?.watchData?.thumbtrack[0]&&h?.cdn?.static&&(t=h.cdn.static+"/thumbtrack/"+h.watchData.thumbtrack[0],w!==t)&&(R(t),setTimeout(()=>{h?._LocalEventEmitter&&h._LocalEventEmitter.dispatch(y,{dispatch:"ensurePosterUpdated"})},250))},[h?.watchData,h?.cdn?.static,y,w]);var u={id:h?.watchData?.id,authorData:h?.watchData?.authorData??{},donateTo:h?.watchData?.author??"",date:h?.watchData?.publish?resolveContentDate(h.watchData.publish):"",title:h?.watchData?.title??"",description:h?.watchData?.description??"",tags:h?.watchData?.tags??[],relevantTicket:i},dt=(T?.current&&(f||b(!0),d||E(!0)),h.menuConfig&&h.menuConfig.height?h.menuConfig.height+2+"px":"35px");return console.log(T?.current,A,g,"Relevant Data",h.watchData,i,O,v),React.createElement("div",{className:h.className+" WatchPage_Container"},React.createElement(Watch,_extends({},h,{chatState:n,handleSetMobileStyleConfigs:t=>{V!==t&&l(t)},menuHeight:dt,currentPoster:w,streamLeadPrompt:v,authContainer:X,WatchPageStyles:WatchPageStyles,watchMeta:u,playerInitialized:f,playerVisible:d,playerName:p?"player-"+p:null,setMobileStyleConfigs:l,enforceAuth:r,setEnforceAuth:z,muted:L,handleSetMuted:t=>{T?.current?.muted&&(t=!!t,T.current.muted(t),x(t))},intent:g,overlayMatrix:O,overlayMatrixState:G})))};export default Module;