import middlewareFunctions from"/customModules/middleware/MiddlewareFunctions";const checkAuth=async(i,t,n,d,o,a)=>{if(!await middlewareFunctions.manualAllowResourceAuth(i,o,a))if(i?._loggedIn?.identifier&&i?._loggedIn?.hash){let e=!1;setUserAuth(i._loggedIn.identifier);o=(d?.identifier!==i._loggedIn.identifier&&d&&d?.hash!==i._loggedIn.hash&&Object.prototype.hasOwnProperty.call(d,"auth")&&(d.auth=!1),await middlewareFunctions.manualAllowResourceAuth(i,o,a,i._loggedIn.identifier,d));setUserAuthObject({identifier:i._loggedIn.identifier,hash:i._loggedIn.hash,auth:o}),t!==(e=o?!0:e)&&n(e)}else t&&n(!1)};export{checkAuth};