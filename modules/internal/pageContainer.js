import React from"react";import Head from"next/head";import{useRouter}from"next/router";import resolveConfig from"/app.config";import{generateComponent,handlePropsPriority,resolvePage,resolveDefaults}from"/modules/utility.js";import{isObjectEmpty}from"/modules/util";import{constructGeneral,paintMeta}from"./meta/general";import middlewareFunctions from"/customModules/middleware/MiddlewareFunctions";import{SliderStyles,SliderTheme,GoogleFontsLink,PaystackScript,AdsenseOwnership,AdsenseMeta}from"/modules/internal/localImports";import{UploadPage}from"/modules/video/upload";import{ArticlePage}from"/modules/article";import{submitNewPassword}from"/modules/utility/onboarding/Password";import{Admin}from"/modules/admin";import{ForumPage}from"/modules/comment/forum";const PageContainer=t=>{const a=useRouter();var e=a["query"];const[r,l]=React.useState(!1),[n,s]=React.useState({}),[o,i]=React.useState(-1),[c,m]=React.useState(null),[u,p]=React.useState(1);console.log("Render",t?.renderSchema,t.simulatedPage,t);var d=t?.simulating&&t?.simulatedPage&&t?.renderSchema?t.renderSchema?.content?.config?.platform?.pages?.find(e=>e.url===t.simulatedPage):null;const g=t?.simulating&&t.simulatedPage?t.simulatedPage:t.path;var f=new URL(t.simulatedUrl,"https://"+t.domainUrl),h=new URLSearchParams(f.search);const y=t?.simulating?h:e,R=(t?.simulating?f:a)?.pathname;h=resolveConfig(t._configVariables,t);let v=resolvePage(h,g);e=(t?.simulating&&d?d:v)?.data,f="/a"===v?.url||"/a"===R;const E=React.useRef(),C=async e=>{var e=await resolveDefaults(v.url,t,t._configVariables,y,g,l,e,R);isObjectEmpty(e)||(e=Object.assign({...t},e),s(e),t?.simulating&&(p(u+1),setTimeout(()=>{p(u+2)},250)))};t._LocalEventEmitter.unsubscribe("refetchDefaults"),t._LocalEventEmitter.subscribe("refetchDefaults",e=>{C(!0)}),React.useEffect(()=>{v&&v.url&&!r&&isObjectEmpty(n)&&C()},[r,n,v]);var P=handlePropsPriority(n,t),h=resolveConfig(t._configVariables,P),e=(v=resolvePage(h,t?.simulating?g:P.path),(t?.simulating&&d?d:v)?.data),h=generateComponent(e),d=!e||e?.props&&!Object.prototype.hasOwnProperty.call(e.props,"useMenu")||e.props?.useMenu,w=!e||e?.props&&!Object.prototype.hasOwnProperty.call(e.props,"useAppConfigLayout")||e.props?.useAppConfigLayout;const _=Object.assign({},P);_.useMenu=d,_.useAppConfigLayout=w;d=React.createElement("div",{className:P.pageName+"_Body "+(t.pageClass??""),style:{top:P.menuConfig.height?P.menuConfig.height+"px":"",position:"relative"}},h);_.useAppConfigLayout&&(_.appConfigLayout=d);const b=(e,l=0,n,s)=>{let o=0;return React.Children.map(e,function(a){if(null===a||"function"!=typeof a.type)return o++,React.createElement("div");{let e=s&&s[o]?s[o]:[],t=(0===l?e=_.children:0<l&&delete _.children,_);0<l&&(t.children=e);var r=n&&n[o]?n[o]:null;return(t=r?.props?Object.assign(r.props,t):t)?.children&&(t.children=b(t.children,l+1,r?.children??null,e?.props?.children)),o++,React.cloneElement(a,t)}})};var h=b(t.children,0,e?.children??null),d="/upload"===v?.url||"/upload"===R,e="/reset"===v?.url||"/reset"===R,S="/admin"===v?.url||"/admin"===R,N=resolvePage?.url?.match(/^\/c(?:\/.*)?$/)||R.match(/^\/c(?:\/.*)?$/);let L=constructGeneral(a,_);middlewareFunctions?.transformMeta&&(L=middlewareFunctions.transformMeta(a,L,_));var O=React.useCallback(async e=>{var t;a?.query&&"password"===a.query.reset&&a.query.token&&a.query.email&&(-1===o||o<(new Date).getTime()-600)&&0<E?.current?.value?.length&&(t=await submitNewPassword(E.current.value,a.query.token,a.query.email,a.query.goto))?.data&&m({data:t.data,status:t.message,goto:a.query.goto??""}),i((new Date).getTime())}),A=paintMeta(L);return console.log(AdsenseOwnership),React.createElement(React.Fragment,null,React.createElement(Head,null,React.createElement("title",null,_.siteTitle),process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID?React.createElement("meta",{name:"google-signin-client_id",content:""+process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}):null,A,SliderStyles,SliderTheme,GoogleFontsLink,PaystackScript,AdsenseOwnership,AdsenseMeta??"",React.createElement("link",{rel:"icon",href:"/favicon.ico"})),React.createElement("div",{className:f?"Article_SafeStyles":""},h,!v?.data&&d&&w?React.createElement("div",{className:P.pageName+"_Body "+(t.pageClass??""),style:{top:P.menuConfig.height?P.menuConfig.height+"px":"",position:"relative"}},React.createElement(UploadPage,_)):null,!v?.data&&f&&w?React.createElement("div",{className:P.pageName+"_Body "+(t.pageClass??""),style:{top:P.menuConfig.height?P.menuConfig.height+"px":"",position:"relative"}},React.createElement(ArticlePage,_)):null,!v?.data&&S&&w?React.createElement("div",{className:P.pageName+"_Body "+(t.pageClass??"")},React.createElement(Admin,_)):null,!v?.data&&N&&w?React.createElement("div",{className:P.pageName+"_Body "+(t.pageClass??""),style:{top:P.menuConfig.height?P.menuConfig.height+"px":"",position:"relative"}},React.createElement(ForumPage,_)):null,!v?.data&&e&&w?React.createElement("div",{className:P.pageName+"_Body "+(t.pageClass??""),style:{top:P.menuConfig.height?P.menuConfig.height+"px":"",position:"relative"}},React.createElement("div",{style:{margin:"0 auto",textAlign:"center"}},React.createElement("h3",null,"Reset Password"),React.createElement("h4",null,a?.query?.email),c?.goto?React.createElement("div",null,React.createElement("p",null,React.createElement("a",{href:`https://${t?.domainUrl}/`+c.goto,className:"reset_password_link",style:{color:"#ff6deb"}},c?.message??"Successfully reset password. Please sign in"))):React.createElement("div",null,React.createElement("div",{style:{display:"flex",gap:".5rem",justifyContent:"center"}},React.createElement("label",null,"Password"),React.createElement("input",{type:"password",id:"reset_password_secure",ref:E})),React.createElement("button",{style:{marginTop:"1rem"},onClick:O},"Submit")))):null))};export default PageContainer;