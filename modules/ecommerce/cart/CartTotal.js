import React from"react";import{calculateTotal,resolveMoneyFormat}from"/modules/utility/ecommerce/ecommerce.js";const Module=e=>React.createElement("div",{className:"flex Ecommerce_Price"},e?.free?React.createElement("div",{className:"Ecommerce_FreeBanner",style:{fontSize:"1.25rem"}},"Free"):React.createElement(React.Fragment,null,React.createElement("div",{style:{lineHeight:"1.4rem"}},"Cart Total: "),React.createElement("div",{style:{fontSize:"1.25rem"}},e?.useCartOfCurrency?.currency?.symbol??null,resolveMoneyFormat(calculateTotal(e?.useCartOfCurrency,null,{region:e?.useCartOfCurrency?.currency??null},e)))));export default Module;