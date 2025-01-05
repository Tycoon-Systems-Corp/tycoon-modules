function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,n=arguments[t];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}import React from"react";import{v4 as uuidv4}from"uuid";import{attemptBanUserChat,joinChat,requestBanTable,sendChat}from"../../utility/socket";import{isObjectEmpty}from"../../util";import{handleKeyPressChat,scrollChatDown}from"./utility";import dynamic from"next/dynamic";const Chat=dynamic(()=>import("/layout/chat").then(e=>e.Chat),{ssr:!1,loading:()=>React.createElement("p",null)}),DonationsLedger=dynamic(()=>import("/layout/chat").then(e=>e.DonationsLedger),{ssr:!1,loading:()=>React.createElement("p",null)}),CONNECT_THRESHOLD=12500,ADHOC_BLOCK_CHAT=1500,RECENT_CHAT_THRESHOLD=2e4,RECENT_CHAT_TIMEOUT=1e4,MAX_RECENT_CHATS=9,Module=r=>{const[t,N]=React.useState(!1),[a,j]=React.useState(null),[n,i]=React.useState(!1),[o,e]=React.useState(!1),[s,B]=React.useState({}),[l,U]=React.useState(!1),[c,P]=React.useState(null),[g,u]=React.useState(!1),[m,d]=React.useState(!1),[K,h]=React.useState(!1),[,q]=React.useState(-1),[_,F]=React.useState([]),[p,b]=React.useState(null),[T,V]=React.useState({}),[E,f]=React.useState(null),[y,X]=React.useState(null),[C,$]=React.useState(-1),[R,v]=React.useState(null),[S,A]=React.useState(null),[z,G]=React.useState([]),[W,J]=React.useState(null),[Q,Y]=React.useState(-1),[L,Z]=React.useState(!1),[D,ee]=React.useState([]),w=React.useRef(),O=React.useRef(),H=React.useRef(),I=(r?.messsageType,r?.useRoom??""),x=r?.watchData?.status;console.log("Chat For",r.messageType,I),React.useEffect(()=>{if(!t){const e=uuidv4();j(e),setInterval(()=>{r._LocalEventEmitter.dispatch(e,{dispatch:"calculate_donations_ledger"})},5e3),N(!0)}},[t]);var te=r?._pageDimensions?.width??0;"direct_message"===r?.messageType&&(r._LocalEventEmitter.unsubscribe("chat_event_listener"),r._LocalEventEmitter.subscribe("chat_event_listener",e=>{"force_initialize"===e?.dispatch&&(e=""+I,M(e,"chat"),ae(),k())}));React.useEffect(()=>{r._LocalEventEmitter&&(r._LocalEventEmitter.unsubscribe("receive_chat"+(r?.messageType?"_"+r.messageType:"")),r._LocalEventEmitter.subscribe("receive_chat"+(r?.messageType?"_"+r.messageType:""),e=>{if(e){var t=Object.entries(e);console.log("E",e,t,l);for(let e=0;e<t.length;e++)if(t[e][0]&&t[e][0]===l&&t[e][1]){console.log(t[e][1],c);const a=!c||c.length<50,n=c?.length?t[e][1].length-c.length:0;setTimeout(()=>{(ne(n)||a)&&scrollChatDown(O,c?"smooth":"instant")},50),P(t[e][1]);break}}}),r._LocalEventEmitter.unsubscribe(a),r._LocalEventEmitter.subscribe(a,e=>{if(e&&"calculate_donations_ledger"===e.dispatch&&c&&Array.isArray(c)){const n=[...D];n.map((e,t)=>{e.expiryMs<(new Date).getTime()-1e4&&n.splice(t,1)}),c.slice(75<c.length?c.length-75:0,c.length).map(t=>{var e,a;"donation"===t?.type&&-1===D.findIndex(e=>e.id===t.id)&&t?.time&&(e=t?.expiry?Number(t.expiry):12e4,(a=new Date(Number(t.time)).getTime()+e)>(new Date).getTime())&&n.unshift(Object.assign(t,{expiry:e,expiryMs:a}))}),ee(n)}}))},[a,r._LocalEventEmitter,r.chatConfig,l,O.current,H.current,c,D,r?.messageType]),r?.messageType||r._LocalEventEmitter&&(r._LocalEventEmitter.unsubscribe("receive_ban_table"),r._LocalEventEmitter.subscribe("receive_ban_table",e=>{if(console.log(e),e){var t=Object.entries(e);for(let e=0;e<Object.entries(t).length;e++){var a=I+"-chat-"+r.dborigin;if(t[e][0]&&t[e][0]===a){console.log("Setting ban table",t[e][1]),X(t[e][1]??{});break}}}})),React.useEffect(()=>{r._LocalEventEmitter&&(r._LocalEventEmitter.unsubscribe("join_chat_waiting"+(r?.messageType?"_"+r.messageType:"")),r._LocalEventEmitter.subscribe("join_chat_waiting"+(r?.messageType?"_"+r.messageType:""),e=>{var t=""+I;M(t,"chat")}))},[n,r._socket,r.dborigin,r._rooms,I,r._loggedIn,r.dborigin,o,s,l,r?.messageType]),React.useEffect(()=>{r?.useRoom||x&&r?._loggedIn?.identifier&&r?._loggedIn?.hash&&I&&-1<["live"].indexOf(x)?e(!0):e(!1)},[r._loggedIn,I,x,o]);const k=e=>{var t=_;e&&t.push({chat:e,time:(new Date).getTime()});for(let e=0;e<t.length;e++)t[e].time<(new Date).getTime()-RECENT_CHAT_THRESHOLD&&t.splice(e,1);F(t),re(t)},M=(React.useEffect(()=>{var e=""+I;M(e,"chat"),ae(),k()},[n,r._socket,r.dborigin,r._rooms,I,r._loggedIn,r.dborigin,o,s,l,k,r?.messageType]),(e,t)=>{try{l&&I+"-chat-"+r.dborigin===l&&c||!n&&r._rooms&&o&&(!r._rooms.rooms||r._rooms.rooms.indexOf(e+"-"+r.dborigin)<0||!c)&&(isObjectEmpty(s)||s.time<(new Date).getTime()-CONNECT_THRESHOLD&&s.attempt<5)&&(i(!0),setTimeout(()=>{i(!1),setTimeout(()=>{r._LocalEventEmitter.dispatch("join_chat_waiting"+(r?.messageType?"_"+r.messageType:""),{})},500)},(s.attempt??1)*CONNECT_THRESHOLD),joinChat(r._socket,r._loggedIn,r.dborigin,e,t,s.attempt??1),B({time:(new Date).getTime(),attempt:s.attempt?s.attempt+1:2}),setTimeout(()=>{r._LocalEventEmitter.dispatch(a,{dispatch:"calculate_donations_ledger"})},1500))}catch(e){}}),ae=()=>{var e;I&&(e=I+"-chat",r.dborigin)&&-1<r?._rooms?.rooms?.indexOf(e+"-"+r.dborigin)&&l!==e+"-"+r.dborigin&&U(e+"-"+r.dborigin)};const ne=(e=0)=>{if(O?.current&&H?.current){var t=e*(r?.chatConfig?.chatItemHeight??17.5),e=(console.log(O.current.scrollTop,H.current.clientHeight-O.current.clientHeight,e,t,O.current.scrollTop+t),O.current.clientHeight+100);if(console.log(O.current.scrollTop+t,H.current.clientHeight-e),O.current.scrollTop+t>H.current.clientHeight-e)return!0}return!1},re=e=>{(e??_).length>MAX_RECENT_CHATS&&!p&&(u(!0),h(!0),e=setTimeout(()=>{u(!1),h(!1),b(null)},RECENT_CHAT_TIMEOUT),p?.r&&clearTimeout(p.r),b({r:e,time:(new Date).getTime()+RECENT_CHAT_TIMEOUT}))};React.useEffect(()=>{var e,t=T;let a=!1;r?.watchData?.author!==r._loggedIn?.identifier||T.canBan||(a=!0,t.canBan=!0,!y&&C<(new Date).getTime()-10&&($((new Date).getTime()),e=I+"-chat",requestBanTable(r._socket,r._loggedIn,r.dborigin,e))),a&&V(t)},[r.watchData,r._loggedIn,T,y,I,r._socket,r.dborigin,C]);const ie=()=>{if(t&&r?._isMobile)if(document?.activeElement!==w?.current||L)document&&document.activeElement&&document?.activeElement===w?.current||!L||(Z(!1),r?.setMobileStyleConfigs&&r.setMobileStyleConfigs(!1));else{Z(!0);try{window&&setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},250)}catch(e){}r?.setMobileStyleConfigs&&r.setMobileStyleConfigs(!0)}};const oe=e=>{var t=(new Date).getTime(),a=(e.expiryMs-t)/1e3,n=e.expiry/1e3,r=n-a,i=a/n,o=1-i;return console.log(e,r,n,t,e.expiryMs),console.log(r,n,i,a,o),{"--animation-duration":`${0<a?a:0}s`,"--gradient-scale":0<i?i:0}};var se=React.useMemo(()=>React.createElement(DonationsLedger,_extends({},r,{donationsLedger:D,calculateAnimationStyles:oe})),[D]),le=(ie(),r?.chatConfig?.menuThreadOffset??2.85),ce=r?.chatConfig?.replyOff;return console.log("Chat Log",c,Array.isArray(c),r.className,_,r,E,y,le,m,g,I),React.createElement(React.Fragment,null,React.createElement(Chat,_extends({},r,{renderDonations:se,replyOff:ce,mobileStyleConfigs:L,scrollChatRef:O,scrollChatInnerRef:H,chatLog:c,handleSetUserDisplay:e=>{var t;e?.target?.getAttribute("username")&&e?.target?.getAttribute("author")&&(t=e.target.getAttribute("username"),e=e.target.getAttribute("author"),f({user:t,id:e}),ne())&&scrollChatDown(O,"instant")},handleGoToPost:e=>{var t=e?.target.getAttribute("logid")?e.target:e.target.parentElement,t=e?.target.getAttribute("logid")?e.target:e.target.parentElement;console.log(t),t.getAttribute("logid")&&(e=t.getAttribute("logid"),t=document.querySelector(`div[logid='${e}']`),console.log(t),t?.scrollIntoView)&&(J(e),-1<Q&&clearTimeout(Q),e=setTimeout(()=>{J(null)},1e4),Y(e),t.scrollIntoView({behavior:"smooth",block:"center"}))},handleReplyTo:e=>{var t=e?.target.getAttribute("logid")?e.target:e.target.parentElement;if((t=e?.target.getAttribute("logid")?e.target:e.target.parentElement).getAttribute("logid")&&t.getAttribute("username")&&t.getAttribute("author")){const n=t.getAttribute("logid");e=t.getAttribute("username"),t=t.getAttribute("author");if(n&&e&&t){v(n),A(e);t=c.find(e=>e.id===n);if(t?.content&&t?.username){const r=[];r.push({id:n,username:t.username,content:t.content,replyLogid:t.replyLogid??null,avatar:t?.avatar??null});for(let t=0;t<3;t++)if(r[t]?.replyLogid){var a=c.find(e=>e.id===r[t]?.replyLogid);if(!a)break;r.push({id:a.id,username:a.username,content:a.content,replyLogid:a.replyLogid??null,avatar:a?.avatar??null})}G(r)}}}},highlightedChat:W,recentChatTimeout:p,replyToId:R,replyToUsername:S,replyToContent:z,handleCancelReplyTo:e=>{v(null),A(null)},handleKeyPressChat:handleKeyPressChat,handleSendChat:async e=>{var t,a,n;w?.current?.value&&!g&&(t=w.current.value,a=r?._loggedIn?.icon,console.log("Chat To Send",t),I&&r._socket&&r?._loggedIn?.username&&r?._loggedIn?.identifier&&r?._loggedIn?.hash&&r.dborigin&&(n=""+I,k(t),sendChat(r._socket,r._loggedIn,r.dborigin,n,t,R,S,a,r?.messageType),v(null),A(null)),d(!0),q((new Date).getTime()),setTimeout(()=>{d(!1),setTimeout(()=>{w?.current&&w.current.select()},50)},ADHOC_BLOCK_CHAT),setTimeout(()=>{scrollChatDown(O,"smooth")},250),w.current.value="",w.current.setAttribute("style","height: 1.35rem"))},handleChatTextChange:e=>{},blockChat:g,currentChat:l,blockSend:m,blockSendForce:K,chatInputRef:w,recentChats:_,useThreadOffset:le,userDisplay:E,modPower:T,currentBanTable:y,handleAttemptBanUser:e=>{var t;e?.target?.getAttribute("userid")&&(t=I+"-chat",attemptBanUserChat(r._socket,r._loggedIn,r.dborigin,t,e.target.getAttribute("userid")))},handleAttemptUnBanUser:e=>{var t;e?.target?.getAttribute("userid")&&(t=I+"-chat",attemptBanUserChat(r._socket,r._loggedIn,r.dborigin,t,e.target.getAttribute("userid"),{unban:!0}))},handleSetUserDisplayOff:e=>{f(null)},windowWidth:te,handleRunTasks:()=>{ie()}})))};export default Module;