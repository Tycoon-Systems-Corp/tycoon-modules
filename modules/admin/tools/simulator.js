import{v4 as uuidv4}from"uuid";const replaceSchemaVariables=(e,a,r)=>{e=structuredClone(e);return e?.content?.config?.platform?.pages&&(e.content.config.platform.pages=mapPages(e.content.config.platform.pages,a,r)),e},mapPages=(e,a,r)=>e=0<e?.length?e.map(e=>traversePopulate(e,a,null,0,r)):e,traversePopulate=(e,a,r,t=0,n)=>{let p=e;var s;return 0<Object.entries(e)?.length&&"string"!=typeof e&&(Array.isArray(e)?p=e.map(e=>traversePopulate(e,a,null,t+1,n)):(s={},-1<["identify"].indexOf(n)&&"props"===r&&(p["data-renderer"]||(s["data-renderer"]=uuidv4())),p=s,Object.entries(e).map(e=>{"appendProps"===e[0]&&!0===e[1]?"render"===n?p=Object.assign(p,a):p[e[0]]=e[1]:"appendVariables"===e[0]&&!0===e[1]&&a?._configVariables?"render"===n?p=Object.assign(p,a._configVariables):p[e[0]]=e[1]:e[0]&&(p[e[0]]="props"!==r?traversePopulate(e[1],a,e[0],t+1,n):e[1])}))),p};export default{replaceSchemaVariables:replaceSchemaVariables};