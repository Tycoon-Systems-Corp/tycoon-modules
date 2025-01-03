import{fetchPost}from"tycoon-modules/utility/fetch";import{defaultStyle,defaultProduct}from"tycoon-modules/ecommerce/product/defaults";export default async function handler(a){if(console.log("Create Product Body",a),a?.apiUrl&&a?.pipelineDbItem){const i=new FormData,n=a.pipelineDbItem??defaultProduct(null,null,!0,!0),d=[];Object.entries(a.pipelineObject).map(e=>{switch(e[0]){case"name":n.name=e[1];break;case"description":n.detailmeta.description=e[1];break;case"eventDate":n?.detailmeta||(n.detailmeta=defaultProduct().detailmeta),n?.detailmeta.eventDateDef||(n.detailmeta.eventDateDef={dates:[],input:"",tags:[]}),n.detailmeta.eventDateDef.dates=[e[1]],n.detailmeta.eventDateDef.input=[e[1].toString()],n?.detailmeta.livestreamDef||(n.detailmeta.livestreamDef={dates:[],input:"",tags:[]}),n.detailmeta.livestreamDef.dates=[e[1]],n.detailmeta.livestreamDef.input=[e[1].toString()];break;case"price":n?.styles||0!=n?.styles.length||(n.styles=[defaultStyle()]),n.styles[0].price=e[1];break;case"quantity":n?.styles||0!=n?.styles.length||(n.styles=[defaultStyle()]),n.styles[0].quantity=e[1];break;case"lineup":Array.isArray(e[1])&&e[1].map(t=>{var e,i=t.modif||"lineup";t.image&&-1<["lineup"].indexOf(i)&&t.id&&(e=a.imgFor.findIndex(e=>e.id===t.id),console.log("F",e,t,a.imgFor),-1===e&&a.imgFor.push({id:t.id,name:t.image.name,modif:i}),a.imgCache.append("image",t.image),d.push({name:t.name,modif:i,id:t.id,title:t.title,time:t.time,description:t.description}))});break;case"images":Array.isArray(e[1])&&e[1].map(e=>{e.image&&e.name&&-1<["leadImg","featureImg","productImg"].indexOf(e.modif)&&(i.append("image",e.image),d.push({name:e.name,modif:e.modif,id:e.id}))});break;default:n.meta[e[0]]=e[1]}}),console.log("Body Img For",a.imgFor);for(let t=0;t<a.imgFor.length;t++){var e=a.imgCache.getAll("image");e&&(e=e.find(e=>e.name===a.imgFor[t].name))&&(console.log("Append",e),i.append("image",e),e={name:e.name,modif:a.imgFor[t].modif,id:a.imgFor[t]?.id??null},"lineup"===a.imgFor[t].modif&&(e.title=a.imgFor[t].title,e.description=a.imgFor[t].description,e.time=a.imgFor[t].time),console.log(e),d.push(e))}console.log(a),i.append("imgNames",JSON.stringify(d)),i.append("hash",a._loggedIn.hash),i.append("identifier",a._loggedIn.identifier),i.append("product",JSON.stringify(n)),i.append("shop",a?.shop?.id??null),i.append("status",a?.status??"publish"),i.append("existing",a.existing);var t=await fetchPost(a.apiUrl+"/m/publishproduct",null,null,i,{formData:!0});if(t&&t.hasOwnProperty("status")){if("disauthenticated"==t.status)return logout(),"disauthenticated";if("failed"==t.status)return!1;if("success"==t.status)return t}}return!1}