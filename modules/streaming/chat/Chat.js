function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,n=arguments[t];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}import React from"react";import{v4 as uuidv4}from"uuid";import{attemptBanUserChat,joinChat,requestBanTable,sendChat}from"../../utility/socket";import{isObjectEmpty}from"../../util";import ChatStyles from"./Chat.module.scss";import{handleKeyPressChat,scrollChatDown}from"./utility";import{Chat,DonationsLedger}from"/layout/chat";const CONNECT_THRESHOLD=12500,ADHOC_BLOCK_CHAT=1500,RECENT_CHAT_THRESHOLD=2e4,RECENT_CHAT_TIMEOUT=1e4,MAX_RECENT_CHATS=9,Module=r=>{const[t,N]=React.useState(!1),[a,j]=React.useState(null),[n,i]=React.useState(!1),[o,e]=React.useState(!1),[l,B]=React.useState({}),[c,U]=React.useState(!1),[s,P]=React.useState(null),[u,g]=React.useState(!1),[K,d]=React.useState(!1),[q,m]=React.useState(!1),[,F]=React.useState(-1),[h,V]=React.useState([]),[b,_]=React.useState(null),[f,X]=React.useState({}),[$,E]=React.useState(null),[p,G]=React.useState(null),[T,W]=React.useState(-1),[C,R]=React.useState(null),[v,y]=React.useState(null),[z,J]=React.useState([]),[Q,S]=React.useState(null),[A,Y]=React.useState(-1),[w,D]=React.useState(!1),[L,Z]=React.useState([]),O=React.useRef(),H=React.useRef(),I=React.useRef(),k=r?.useRoom??r?.watchData?.id??"",x=r?.watchData?.status;React.useEffect(()=>{if(!t){const e=uuidv4();j(e),setInterval(()=>{r._LocalEventEmitter.dispatch(e,{dispatch:"calculate_donations_ledger"})},5e3),N(!0)}},[t]);var ee=r?._pageDimensions?.width??0;React.useEffect(()=>{r._LocalEventEmitter&&(r._LocalEventEmitter.unsubscribe("receive_chat"),r._LocalEventEmitter.subscribe("receive_chat",e=>{if(e){var t=Object.entries(e);for(let e=0;e<t.length;e++)if(t[e][0]&&t[e][0]===c&&t[e][1]){console.log(t[e][1],s);const a=!s||s.length<50,n=s?.length?t[e][1].length-s.length:0;setTimeout(()=>{(ne(n)||a)&&scrollChatDown(H,s?"smooth":"instant")},50),P(t[e][1]);break}}}),r._LocalEventEmitter.unsubscribe(a),r._LocalEventEmitter.subscribe(a,e=>{if(e&&"calculate_donations_ledger"===e.dispatch&&s&&Array.isArray(s)){const n=[...L];n.map((e,t)=>{e.expiryMs<(new Date).getTime()-1e4&&n.splice(t,1)}),s.slice(75<s.length?s.length-75:0,s.length).map(t=>{var e,a;"donation"===t?.type&&-1===L.findIndex(e=>e.id===t.id)&&t?.time&&(e=t?.expiry?Number(t.expiry):12e4,(a=new Date(Number(t.time)).getTime()+e)>(new Date).getTime())&&n.unshift(Object.assign(t,{expiry:e,expiryMs:a}))}),Z(n)}}))},[a,r._LocalEventEmitter,r.chatConfig,c,H.current,I.current,s,L]),React.useEffect(()=>{r._LocalEventEmitter&&(r._LocalEventEmitter.unsubscribe("receive_ban_table"),r._LocalEventEmitter.subscribe("receive_ban_table",e=>{if(console.log(e),e){var t=Object.entries(e);for(let e=0;e<Object.entries(t).length;e++){var a=k+"-chat-"+r.dborigin;if(t[e][0]&&t[e][0]===a){console.log("Setting ban table",t[e][1]),G(t[e][1]??{});break}}}}))},[r._LocalEventEmitter,k,r.dborigin]),React.useEffect(()=>{r._LocalEventEmitter&&(r._LocalEventEmitter.unsubscribe("join_chat_waiting"),r._LocalEventEmitter.subscribe("join_chat_waiting",e=>{var t=k+"-chat";te(t)}))},[n,r._socket,r.dborigin,r._rooms,k,r._loggedIn,r.dborigin,o,l,c]),React.useEffect(()=>{r?.useRoom||x&&r?._loggedIn?.identifier&&r?._loggedIn?.hash&&k&&-1<["live"].indexOf(x)?e(!0):e(!1)},[r._loggedIn,k,x,o]);const M=e=>{var t=h;e&&t.push({chat:e,time:(new Date).getTime()});for(let e=0;e<t.length;e++)t[e].time<(new Date).getTime()-RECENT_CHAT_THRESHOLD&&t.splice(e,1);V(t),re(t)},te=(React.useEffect(()=>{var e=k+"-chat";te(e),ae(),M()},[n,r._socket,r.dborigin,r._rooms,k,r._loggedIn,r.dborigin,o,l,c,M]),e=>{try{c&&k+"-chat-"+r.dborigin===c&&s||!n&&r._rooms&&o&&(!r._rooms.rooms||r._rooms.rooms.indexOf(e+"-"+r.dborigin)<0||!s)&&(isObjectEmpty(l)||l.time<(new Date).getTime()-CONNECT_THRESHOLD&&l.attempt<5)&&(i(!0),setTimeout(()=>{i(!1),setTimeout(()=>{r._LocalEventEmitter.dispatch("join_chat_waiting",{})},500)},(l.attempt??1)*CONNECT_THRESHOLD),joinChat(r._socket,r._loggedIn,r.dborigin,e,l.attempt??1),B({time:(new Date).getTime(),attempt:l.attempt?l.attempt+1:2}),setTimeout(()=>{r._LocalEventEmitter.dispatch(a,{dispatch:"calculate_donations_ledger"})},1500))}catch(e){}}),ae=()=>{var e;k&&(e=k+"-chat",r.dborigin)&&-1<r?._rooms?.rooms?.indexOf(e+"-"+r.dborigin)&&c!==e+"-"+r.dborigin&&U(e+"-"+r.dborigin)};const ne=(e=0)=>{if(H?.current&&I?.current){var t=e*(r?.chatConfig?.chatItemHeight??17.5),e=(console.log(H.current.scrollTop,I.current.clientHeight-H.current.clientHeight,e,t,H.current.scrollTop+t),H.current.clientHeight+100);if(console.log(H.current.scrollTop+t,I.current.clientHeight-e),H.current.scrollTop+t>I.current.clientHeight-e)return!0}return!1},re=e=>{(e??h).length>MAX_RECENT_CHATS&&!b&&(g(!0),m(!0),e=setTimeout(()=>{g(!1),m(!1),_(null)},RECENT_CHAT_TIMEOUT),b?.r&&clearTimeout(b.r),_({r:e,time:(new Date).getTime()+RECENT_CHAT_TIMEOUT}))};React.useEffect(()=>{var e,t=f;let a=!1;r?.watchData?.author!==r._loggedIn?.identifier||f.canBan||(a=!0,t.canBan=!0,!p&&T<(new Date).getTime()-10&&(W((new Date).getTime()),e=k+"-chat",requestBanTable(r._socket,r._loggedIn,r.dborigin,e))),a&&X(t)},[r.watchData,r._loggedIn,f,p,k,r._socket,r.dborigin,T]);const ie=()=>{if(t&&r?._isMobile)if(document?.activeElement!==O?.current||w)document&&document.activeElement&&document?.activeElement===O?.current||!w||(D(!1),r?.setMobileStyleConfigs&&r.setMobileStyleConfigs(!1));else{D(!0);try{window&&setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},250)}catch(e){}r?.setMobileStyleConfigs&&r.setMobileStyleConfigs(!0)}};const oe=e=>{var t=(new Date).getTime(),a=(e.expiryMs-t)/1e3,n=e.expiry/1e3,r=n-a,i=a/n,o=1-i;return console.log(e,r,n,t,e.expiryMs),console.log(r,n,i,a,o),{"--animation-duration":`${0<a?a:0}s`,"--gradient-scale":0<i?i:0}};var le=React.useMemo(()=>React.createElement(DonationsLedger,_extends({},r,{donationsLedger:L,calculateAnimationStyles:oe})),[L]),ce=(ie(),r?.chatConfig?.menuThreadOffset??2.85),se=r?.chatConfig?.replyOff;return React.createElement(React.Fragment,null,React.createElement(Chat,_extends({},r,{renderDonations:le,replyOff:se,mobileStyleConfigs:w,scrollChatRef:H,scrollChatInnerRef:I,chatLog:s,handleSetUserDisplay:e=>{var t;e?.target?.getAttribute("username")&&e?.target?.getAttribute("author")&&(t=e.target.getAttribute("username"),e=e.target.getAttribute("author"),E({user:t,id:e}),ne())&&scrollChatDown(H,"instant")},handleGoToPost:e=>{var t=e?.target.getAttribute("logid")?e.target:e.target.parentElement,t=e?.target.getAttribute("logid")?e.target:e.target.parentElement;console.log(t),t.getAttribute("logid")&&(e=t.getAttribute("logid"),t=document.querySelector(`div[logid='${e}']`),console.log(t),t?.scrollIntoView)&&(S(e),-1<A&&clearTimeout(A),e=setTimeout(()=>{S(null)},1e4),Y(e),t.scrollIntoView({behavior:"smooth",block:"center"}))},handleReplyTo:e=>{var t=e?.target.getAttribute("logid")?e.target:e.target.parentElement;if((t=e?.target.getAttribute("logid")?e.target:e.target.parentElement).getAttribute("logid")&&t.getAttribute("username")&&t.getAttribute("author")){const n=t.getAttribute("logid");e=t.getAttribute("username"),t=t.getAttribute("author");if(n&&e&&t){R(n),y(e);t=s.find(e=>e.id===n);if(t?.content&&t?.username){const r=[];r.push({id:n,username:t.username,content:t.content,replyLogid:t.replyLogid??null,avatar:t?.avatar??null});for(let t=0;t<3;t++)if(r[t]?.replyLogid){var a=s.find(e=>e.id===r[t]?.replyLogid);if(!a)break;r.push({id:a.id,username:a.username,content:a.content,replyLogid:a.replyLogid??null,avatar:a?.avatar??null})}J(r)}}}},highlightedChat:Q,recentChatTimeout:b,replyToId:C,replyToUsername:v,replyToContent:z,handleCancelReplyTo:e=>{R(null),y(null)},handleKeyPressChat:handleKeyPressChat,handleSendChat:async e=>{var t,a,n;O?.current?.value&&!u&&(t=O.current.value,a=r?._loggedIn?.icon,console.log("Chat To Send",t),k&&r._socket&&r?._loggedIn?.username&&r?._loggedIn?.identifier&&r?._loggedIn?.hash&&r.dborigin&&(n=k+"-chat",M(t),sendChat(r._socket,r._loggedIn,r.dborigin,n,t,C,v,a),R(null),y(null)),d(!0),F((new Date).getTime()),setTimeout(()=>{d(!1),setTimeout(()=>{O?.current&&O.current.select()},50)},ADHOC_BLOCK_CHAT),setTimeout(()=>{scrollChatDown(H,"smooth")},250),O.current.value="",O.current.setAttribute("style","height: 1.35rem"))},handleChatTextChange:e=>{},blockChat:u,currentChat:c,blockSend:K,blockSendForce:q,chatInputRef:O,recentChats:h,useThreadOffset:ce,userDisplay:$,modPower:f,currentBanTable:p,handleAttemptBanUser:e=>{var t;e?.target?.getAttribute("userid")&&(t=k+"-chat",attemptBanUserChat(r._socket,r._loggedIn,r.dborigin,t,e.target.getAttribute("userid")))},handleAttemptUnBanUser:e=>{var t;e?.target?.getAttribute("userid")&&(t=k+"-chat",attemptBanUserChat(r._socket,r._loggedIn,r.dborigin,t,e.target.getAttribute("userid"),{unban:!0}))},handleSetUserDisplayOff:e=>{E(null)},windowWidth:ee,handleRunTasks:()=>{ie()}})))};export default Module;