import React from"react";const Module=r=>{var e=r._loggedIn?.meta?.account?.full,t=r?._loggedIn,a=React.useCallback(e=>{new Promise(async(e,t)=>{r?.f&&"function"==typeof r.f?e(await r.f()):e()}).then(()=>{0<r?._stripeSecret?.card?.data.length&&r.handlePerformPurchase(e)})});return React.createElement(React.Fragment,null,(r?.validCc||r?.free||!e&&t&&0<r?._stripeSecret?.card?.data.length||!t)&&0<r?.cart?.items?.length?React.createElement(React.Fragment,null,React.createElement("button",{className:"Ecommerce_PurchaseButton",style:{width:"100%",marginBottom:".25rem"},onClick:a},r?.free?"Get Now":"Purchase"),r?.pageError?.message&&"purchase"==r?.pageError?.placement?React.createElement("div",{className:"error Ecommerce_PurchaseButtonError",style:{marginBottom:".125rem"},onClick:r?.handleClearError},r?.pageError?.message??""):null):null)};export default Module;