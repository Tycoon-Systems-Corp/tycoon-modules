import DOMPurify from"dompurify";const createMarkup=r=>{try{var t;if("object"==typeof r)if(r?.contents)return t=JSON.parse(r.contents),{__html:DOMPurify.sanitize(t??"")};try{var e=JSON.parse(r);return{__html:DOMPurify.sanitize(e??"")}}catch(r){}return{__html:DOMPurify.sanitize(r??"")}}catch(r){return""}};export{createMarkup};