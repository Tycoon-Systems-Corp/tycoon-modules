import apiReq from"tycoon-modules/utility/api/apiReq";const handleInitiateAction=async(e,t)=>{try{let i=t?.action??e?.currentTarget?.getAttribute("action");var n=t?.existing??e?.currentTarget?.getAttribute("existing");if(i&&-1<["like","dislike"].indexOf(i)){console.log("Existing",n),"true"==n&&"like"==i?i="unlike":"true"==n&&"dislike"==i&&(i="undislike");var r=t?.m,a=t?.useType,l=t?.identifier;if(r&&a&&l)return await apiReq("/p/recordlikedislike",{identifier:l,itemId:r,itemType:a,status:i})}return null}catch(i){return null}};export{handleInitiateAction};