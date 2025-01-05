import React from"react";import TextareaAutosize from"react-textarea-autosize";import{westernMoneyFormat}from"@tycoonsystems/tycoon-modules/utility/ecommerce";import AddIcon from"@mui/icons-material/Add";import RemoveIcon from"@mui/icons-material/Remove";const Module=n=>{var e=React.useCallback(e=>{const t=n.surveyState;var a=t.pipelineObject;a.matrix||(a.matrix=[]),a.matrix.push(Object.assign({},a.matrix[a.matrix.length-1])),t.pipelineObject=a,n.setSurveyState(null),setTimeout(()=>{n.setSurveyState(t)},1)});const a=React.useCallback(e=>{e=e?.currentTarget?.getAttribute("i");if(null!==e){const a=n.surveyState;var t=a.pipelineObject;t.matrix||(t.matrix=[]),t.matrix.splice(e,1),a.pipelineObject=t,n.setSurveyState(null),setTimeout(()=>{n.setSurveyState(a)},1)}}),r=React.useCallback(e=>{var t=e.currentTarget.getAttribute("modif"),a=e.currentTarget.getAttribute("i")?Number(e.currentTarget.getAttribute("i")):null,e=e.currentTarget.value;if(t&&null!==a&&n?.surveyState?.pipelineObject?.matrix&&n.surveyState.pipelineObject.matrix[a]){const l=Object.assign({},n.surveyState);var r=Object.assign({},l.pipelineObject),t=(r.matrix[a][t]=e,document.querySelector(`input[selectMatrix='admin_matrix_${a}']`));console.log(t,r.matrix),t&&(t.value=westernMoneyFormat.format(r.matrix[a].rate*r.matrix[a].qty)),l.pipelineObject=r,console.log("Set!",l),setTimeout(()=>{n.setSurveyState(l)},1)}}),l=(console.log("matrix",n.regionsData,n.surveyState?.pipelineObject,n.surveyState?.pipelineObject?.matrix),n?.regionsData&&n?.surveyState?.pipelineObject?.currency?.currency?Object.entries(n.regionsData).find(e=>e[1].currency===n.surveyState.pipelineObject.currency?.currency):"");return console.log(l),React.createElement("div",{className:n.className+" InvoiceMatrix_Container"},React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"Details")),React.createElement("td",null,React.createElement("label",null,"Rate")),React.createElement("td",null,React.createElement("label",null,"Quantity")),React.createElement("td",null,React.createElement("label",null,"Line Total"))),n?.surveyState?.pipelineObject?.matrix?n.surveyState.pipelineObject.matrix.map((e,t)=>React.createElement("tr",{key:t},React.createElement("td",null,React.createElement(TextareaAutosize,{defaultValue:e?.info??"",className:"Invoice_details_matrix",onChange:r,modif:"info",i:t,minRows:3,style:{borderRadius:"1rem"}})),React.createElement("td",null,React.createElement("input",{defaultValue:e?.rate??0,onChange:r,modif:"rate",type:"number",i:t})),React.createElement("td",null,React.createElement("input",{defaultValue:e?.qty??0,onChange:r,modif:"qty",type:"number",i:t})),React.createElement("td",{style:{textWrap:"nowrap"}},React.createElement("span",null,l&&l[1]&&l[1].symbol?l[1].symbol:""),React.createElement("input",{defaultValue:""+westernMoneyFormat.format((e?.rate?Number(e.rate):0)*(e?.qty?Number(e.qty):0)),selectMatrix:"admin_matrix_"+t,disabled:!0,style:{border:"none",width:"100px"}})),React.createElement("td",null,1<n.surveyState.pipelineObject.matrix.length?React.createElement("button",{onClick:a,i:t},React.createElement(RemoveIcon,{sx:{fontSize:".9rem"}})):null))):React.createElement("div",null)),React.createElement("button",{onClick:e},React.createElement(AddIcon,{sx:{fontSize:".9rem"}})))};export default Module;