import{fetchPost}from"../fetch/fetch";import{logout}from"tycoon-modules/utility/onboarding/SignIn.js";const fetchStripeSecret=async(t,e,i,r={})=>{return console.log(i,e),!!(i&&i.identifier&&i.hash&&e)&&(e=Object.assign({domainKey:e,hash:i.hash,identifier:i.identifier},r),await fetchPost(t+"/m/getclientsecret",null,null,e))},getStripeSecretData=async(t,e,i,r)=>{t=await fetchStripeSecret(t,e,i,r);return t||!1},setStripeSecretData=async(t,e,i,r)=>{t=await getStripeSecretData(t,e,i);return t&&r(t),t},saveCreditCardInfo=async(t,e,i,r,a={})=>{r=r();if(r&&r.identifier&&r.hash){e=Object.assign({cus_id:i.stripeSecret.user,domainKey:e,hash:r.hash,identifier:r.identifier},a),r=(i.result&&i.result.setupIntent&&i.result.setupIntent.payment_method&&(e.payment_id=i.result.setupIntent.payment_method),await fetchPost(t+"/m/saveccinfo",null,null,e));if(r&&r.hasOwnProperty("status")){if("disauthenticated"==r.status)return logout(),"disauthenticated";if("failed"==r.status)return!1;if("success"==r.status)return r}}return!1};export{fetchStripeSecret,getStripeSecretData,setStripeSecretData,saveCreditCardInfo};