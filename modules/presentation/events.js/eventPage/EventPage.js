import React from"react";import Styles from"../../Presentation.module.scss";import{resolveImg,resolveOption,resolveMoneyFormat,resolveRegionBasedPrice}from"tycoon-modules/utility/ecommerce";import{fireGlobalEvent,getTimeRemaining}from"tycoon-modules/utility/utility";import{normalizeData,resolveMainLink,datePassed,resolveGoodDate}from"tycoon-modules/utility";import{getFormattedTime}from"tycoon-modules/util";import Link from"next/link";import Image from"next/image";import{v4 as uuidv4}from"uuid";import{resolveImage}from"tycoon-modules/utility/utility/image";const moduleName="IndexHello",RESET_CTA_TIMER=18e4,Module=l=>{const[t,a]=React.useState(!1),[i,n]=React.useState(null),[m,,]=React.useState(-1),[e,c]=React.useState(null),[,s]=React.useState(!1),[,o]=React.useState(!1),[r,u]=React.useState(null);var[,,]=React.useState(!1),d=React.useRef(),S=(l._LocalEventEmitter.unsubscribe(r),l._LocalEventEmitter.subscribe(r,e=>{e&&e.dispatch&&"updateCountdown"===e.dispatch&&(null!==(e=i?.date??null)?(e="string"==typeof e?new Date(Number(e)):new Date(e),datePassed(e)?c("nodate"):isNaN(e)||(e=getTimeRemaining(e,new Date))&&(c(e),o(!0))):(c("nodate"),o(!1)))}),React.useEffect(()=>{if(!t){a((new Date).getTime());const e=uuidv4();o(!1),setInterval(()=>{l._LocalEventEmitter.dispatch(e,{dispatch:"updateCountdown"})},1e3),u(e)}},[t,l?.eventData]),React.useCallback(async e=>{if(s(!0),e?.currentTarget?.getAttribute("ctaAfter")){e.currentTarget.innerHTML=e.currentTarget.getAttribute("ctaAfter");const t=e.currentTarget.getAttribute("cta"),a=e.currentTarget;setTimeout(()=>{try{a.innerHTML=t}catch(e){}},RESET_CTA_TIMER)}fireGlobalEvent(e,l._LocalEventEmitter)}));React.useEffect(()=>{var e;l?.eventData?.id&&l.eventData.id!==i&&(-1===m||m<(new Date).getTime()-5e3)&&(e=normalizeData([l.eventData]),n(e[0]))},[l?.eventData,i]);const N=i?.id?i:null;return React.createElement("div",{className:`${l.className} ${Styles.IndexBgContainer} EventPage_Container`},l.children,l.hideDefault?null:N?React.createElement("div",{className:Styles.Container+" EventPage_EventContainer "},React.createElement("div",{className:`${Styles.BgUpperContainer} ${moduleName}_Container`},React.createElement("div",{className:`${Styles.BgContainer} ${moduleName}_BgContainer `+l.bgClassName,style:{backgroundImage:`url(${resolveImage(l,N,N?.leadBg??null,"bg")})`}},l.children,React.createElement("div",{className:`${Styles.FillPageContainer} ${Styles.FillPageContainerEvent} ${moduleName}_FillPageContainer`,style:{height:`calc(100vh - ${l?.menuConfig?.height??45}px)`}},React.createElement("div",{className:`${Styles.TimeContainer} ${moduleName}_TimeContainer `+l.timeContainerClassName},React.createElement("div",{className:`${Styles.TimeCountdown} ${moduleName}_TimeCountdown ${l.timeCountdownClassName} `+(e?""+Styles.TimeCountdownVisible:null)},e&&o?"nodate"===e?React.createElement("div",null):React.createElement(React.Fragment,null,0<e.days?React.createElement("div",{className:`${Styles.TimeSection} ${moduleName}_TimeSection ${Styles.TimeSectionDay} `+l.timeSectionClassName},React.createElement("div",{className:`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue `+l.timeSectionValueClassName},e.days),React.createElement("div",{className:`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel `+l.TimeSectionLabelClassName},"Days")):null,0<e.days?React.createElement("div",{className:`${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon `+l.timeSectionColonClassName},":"):null,0===e.hours&&0===e.minutes&&0===e.seconds?React.createElement("div",null):React.createElement(React.Fragment,null,React.createElement("div",{className:`${Styles.TimeSection} ${moduleName}_TimeSection `+l.timeSectionClassName},React.createElement("div",{className:`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue `+l.timeSectionValueClassName},e.hours),React.createElement("div",{className:`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel `+l.TimeSectionLabelClassName},"Hours")),React.createElement("div",{className:`${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon `+l.timeSectionColonClassName},":"),React.createElement("div",{className:`${Styles.TimeSection} ${moduleName}_TimeSection `+l.timeSectionClassName},React.createElement("div",{className:`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue `+l.timeSectionValueClassName},e.minutes),React.createElement("div",{className:`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel `+l.TimeSectionLabelClassName},"Minutes")),React.createElement("div",{className:`${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon `+l.timeSectionColonClassName},":"),React.createElement("div",{className:`${Styles.TimeSection} ${moduleName}_TimeSection `+l.timeSectionClassName},React.createElement("div",{className:`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue `+l.timeSectionValueClassName},e.seconds),React.createElement("div",{className:`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel `+l.TimeSectionLabelClassName},"Seconds")))):null),N.showSimpleDate&&e?React.createElement("div",{className:`${Styles.TimeSimple} ${moduleName}_TimeSimple `+l.timeSimpleClassName},React.createElement("div",null,N?.date?resolveGoodDate(N.date):"")):null),React.createElement("div",{className:`${Styles.DataContainer} ${moduleName}_DataContainer `+l.DataContainerClassName},React.createElement("div",{className:`${Styles.AuthorContainer} ${moduleName}_AuthorContainer `+l.authorContainerClassName},""!==N?.icon?React.createElement("div",{className:`${Styles.IconContainer} ${moduleName}_IconContainer `+l.iconContainerClassName},React.createElement(Link,{href:"/p?u="+(N?.author??""),style:{alignSelf:"center"}},React.createElement(Image,{loader:()=>resolveImage(l,N,N?.icon??null,"icon"),src:resolveImage(l,N,N?.icon??null,"icon"),style:{maxWidth:"50px",borderRadius:"4rem"},alt:N?.author??"",width:N.iconWidth??"50",height:N.iconHeight??"50",layout:"responsive"}))):null,React.createElement(Link,{href:"/p?u="+(N?.author??""),style:{alignSelf:"center"}},React.createElement("div",{className:`${Styles.Author} ${moduleName}_Author `+l.authorClassName},N?.author??""))),React.createElement(Link,{href:resolveMainLink(N),style:{alignSelf:"center",position:"relative"}},React.createElement("div",{className:`${Styles.Lead} ${moduleName}_Lead `+l.leadClassName},N?.title??""),N.created&&!isNaN(new Date(N.created))&&new Date(N.created).getTime()>(new Date).getTime()-1296e6?React.createElement("div",{className:"newItem",style:{position:"absolute",top:"-18.5px",left:"75px"}},React.createElement("span",null,"New"),React.createElement("span",{style:{fontSize:".9rem"},className:"star material-icons"},"star")):null),N?.item?.id&&N?.item?.style&&N?.item?.option?React.createElement("div",{className:"flex",style:{alignItems:"center",columnGap:".5rem"}},React.createElement("button",{className:`${Styles.CtaButton} ${moduleName}_Cta `+l.ctaClassName,onClick:S,action:-1<["add_to_cart","buy"].indexOf(N?.action)?N.action:"add_to_cart",item:N.item.id,selectedstyle:N.item.style,currentoption:N.item.option,ref:d,ctaAfter:N.ctaAfter,cta:N.cta},N.cta),(S=N?.styles?.find?N.styles.find(e=>e.sid===N.item.style):null,0==(S=resolveRegionBasedPrice(l,S))?.price?React.createElement("div",{className:"flex",style:{fontSize:"1.5rem",fontWeight:"600",marginTop:".5rem"}},React.createElement("div",null,"Free")):S?.currency&&S?.symbol&&Object.prototype.hasOwnProperty.call(S,"price")?React.createElement("div",{className:"flex",style:{fontSize:"1.25rem",fontWeight:"600"}},React.createElement("div",null,S.symbol),React.createElement("div",{style:{marginRight:".25rem"}},resolveMoneyFormat(S.price)),React.createElement("div",null,S.currency)):React.createElement("div",null)),(d=!((d=resolveOption(N,N.item.style,N.item.option,!0))?.quantity&&300<d.quantity)&&d?.quantity&&d.quantity<=300?"Not much left in stock":"")?React.createElement("div",{style:{alignItems:"center",display:"flex",fontSize:".85rem",fontWeight:"700",gap:".25rem",color:"#ff8686"}},React.createElement("span",null,d),React.createElement("span",{style:{fontSize:"1.15rem"},className:"inventory material-icons"},"inventory")):null):null)))),React.createElement("div",{className:""+Styles.SecondDataContainer},N.description&&""!==N.description?React.createElement("div",{className:`${Styles.Description} ${moduleName}_Description `+l.descriptionClassName},N?.description??""):null,N.showSimpleDate&&e?React.createElement("div",{className:`${Styles.TimeSimpleInline} ${moduleName}_TimeSimple `+l.timeSimpleClassName},React.createElement("div",null,N?.date?resolveGoodDate(N.date):"")):null,React.createElement("div",null,N?.detailmeta?.lineup&&N.detailmeta.lineup.map&&0<N.detailmeta.lineup.length?React.createElement("div",{style:{marginTop:".5rem"}},React.createElement("div",{className:Styles.LineupLabel+" EventPage_Lineup_Label"},"Lineup"),React.createElement("div",{className:""+Styles.LineupContainer},N.detailmeta.lineup.map((e,t)=>React.createElement("div",{className:""+Styles.LineupItem,index:t,key:t},React.createElement("div",{style:{marginTop:".125rem",marginBottom:"1rem"}},React.createElement("div",{className:""+Styles.LineupImageContainer,style:{position:"relative"}},React.createElement("div",{className:""+Styles.LineupImageInternalContainer,style:{backgroundImage:`url(${l.cdn.static}/${e.image})`}},React.createElement("img",{src:""+resolveImg(null),className:""+Styles.LineupImage,style:{opacity:e.image?0:1}})))),React.createElement("div",{className:""+Styles.ParticipantLabel},""!==e.title?e.title:React.createElement("div",{style:{opacity:".7"}},"Participant")),e.description?React.createElement("div",{style:{marginBottom:".5rem"}},e.description):null,e.time?React.createElement("div",{className:"lineupItem_time "+Styles.LineupItemTime},getFormattedTime(e.time,{simple:!0})):null)))):null))):React.createElement("div",{className:"PagePadding"},"No Event"),l.childrenAfter)};export default Module;