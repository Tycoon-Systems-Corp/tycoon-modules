import{fetchPost}from"@tycoonsystems/tycoon-modules/utility/fetch";import{resolveVariables}from"/app.config";export default async function handler(t){if(t){t=await fetchPost(resolveVariables()?.apiUrl+"/m/fetchhandler",null,null,t);if(t&&t.hasOwnProperty("status")){if("disauthenticated"==t.status)return logout(),"disauthenticated";if("failed"==t.status)return!1;if("success"==t.status)return t}}return!1}