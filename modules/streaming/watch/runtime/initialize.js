import{handleInteractMedia}from"/modules/util";const disposePlayer=e=>{var n;window?.videojs?.players&&(n=window.videojs.players)&&Object.keys(n).length&&n[e]&&n[e].dispose()},initializePlayer=(i,t,r,l,e,a,d=[],s,c,y,g,v)=>{if(console.log(document.getElementById(l)),window.videojs){if(console.log("Run Init",l,document.getElementById(l)),!window.videojs.players[l])return window.videojs(l,e,async function(){if(a?.current){y&&y(!0),window.videojs.log(`Your player ${l} is ready!`),console.log(a.current);for(let e=0;e<d.length;e++){var n=a.current.controlBar.addChild("button"),o=n.el();o.innerHTML=d[e].innerHTML??"",d[e].className&&n.addClass(d[e].className),d[e].btnEvent&&(o.removeEventListener("click",d[e].btnEvent),o.addEventListener("click",d[e].btnEvent))}this.on("error",e=>{console.log("Error",l),s&&s()}),this.on("ready",e=>{t?.id&&i&&r?.trying&&handleInteractMedia(i,i.watchData,r.trying),g&&g(e?.target?.player??this,t)}),this.on("play",e=>{v&&v(!0)}),this.on("ended",e=>{console.log("Ended",l),c&&c()})}});console.log(`Player ${l} already initialized`)}};export{disposePlayer,initializePlayer};