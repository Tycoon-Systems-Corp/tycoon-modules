import{addToCartGlobal,calculateTotal,updateCart,performPurchase,getUseCartOfCurrency}from"@tycoonsystems/tycoon-modules/utility/ecommerce";import{isObjectEmpty}from"@tycoonsystems/tycoon-modules/util";import{handleEventMail}from"@tycoonsystems/tycoon-modules/utility/mail/index";const handleSetLoggedIn=(t,e,a)=>{t._loggedIn?a(t._loggedIn):(t=e())&&a(t)},toggleSingleOpenMenu=(t,e,a,o,r)=>{!r&&a&&a.currentMenu&&a.currentMenu==e?o({}):o({currentMenu:e})},handleCheckUserData=async(t,a)=>{if(t&&a){var o={ip:!(!a.meta||isObjectEmpty(a.meta)||"::ffff:127.0.0.1"!=(a.meta.ip&&a.meta.ip)),location:!(!a.meta||isObjectEmpty(a.meta)||a.meta.location)};let e=!1;for(let t=0;t<Object.entries(o).length;t++)if(Object.entries(o)[t][1]){e=!0;break}if(e)return o}return!1},handleSetCart=(t,e)=>{var a=JSON.parse(localStorage.getItem("cart"));a?a.user||((a=a).user=t,localStorage.setItem("cart",JSON.stringify(a)),e(a)):t&&(a={user:t,cart:[]},localStorage.setItem("cart",JSON.stringify(a)),e(a))},forceUpdateProps=(t,e)=>{try{t&&"_cart"===t.dispatch&&e(JSON.parse(window.localStorage.getItem("cart")))}catch(t){}},registerSocket=(t,e,a,o,r,c)=>{e||o||(e={reconnectAttempts:1,transports:["polling","websocket"],withCredentials:!0},r.socketpath&&(e.path=r.socketpath,e.port=r.socketPort),a(t(r.socketUrl,e)),o=setTimeout(()=>{c(null)},2e4),c(o))},handleGlobalEvent=async(t,e,a,o)=>{var r,c;t&&(console.log("Incoming Handle Global Event",t),"product_purchase"===t.action?setTimeout(()=>{e._LocalEventEmitter.dispatch("main-player",{dispatch:"refetchAuth"})},250):"buy"===t.action?(e._setPageError(null),!a&&t.item&&t.style&&t.option&&(c=JSON.parse(localStorage.getItem("cart")),r=await addToCartGlobal(e.apiUrl,e.domainKey,e._loggedIn,c,t.item,{style:t.style,option:t.option,context:t?.context?"string"==typeof t.context?JSON.parse(t.context):t.context:null},o),e._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),r)&&"success"===r.status&&(updateCart(c,r.cart),c=JSON.parse(localStorage.getItem("cart")),r=calculateTotal(c,null,{object:!0}),console.log("snapshot",r),(r=await performPurchase(e.apiUrl,e.domainKey,e._loggedIn,c,o,{snapshot:r}))?(setTimeout(()=>{e._LocalEventEmitter.dispatch("main-player",{dispatch:"refetchAuth"})},250),"success"===r.status?(r.data&&r.data.cart&&updateCart(c,r.data.cart),r?.data?.order?.id&&(e._LocalEventEmitter.dispatch("cart_update",{dispatch:"purchase",id:r.data.order.id}),console.log("Purchase Success",r),handleEventMail(t,e))):e._setPageError({message:"Purchase failed",placement:"purchase"})):(console.log(r),e._setPageError({message:"Purchase failed",placement:"purchase"})),o(!1))):"checkout"===t.action?(e._setPageError(null),a||(c=JSON.parse(localStorage.getItem("cart")),e._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),r=getUseCartOfCurrency(e,c),c=calculateTotal(r,null,{region:r?.currency??null,object:!0},e),console.log("snapshot",c),console.log(r,o,e._log),(c=await performPurchase(e.apiUrl,e.domainKey,e._loggedIn,r,o,{snapshot:c,extra:{type:e?._solution?.payment??"stripe"}}))?(setTimeout(()=>{e._LocalEventEmitter.dispatch("main-player",{dispatch:"refetchAuth"})},250),"success"===c.status?(c.data&&c.data.cart&&updateCart(r,c.data.cart),c?.data?.order?.id&&(e._LocalEventEmitter.dispatch("cart_update",{dispatch:"purchase",id:c.data.order.id}),console.log("Purchase Success",c),handleEventMail(t,e))):e._setPageError({message:"Purchase failed",placement:"purchase"})):(console.log(c),e._setPageError({message:"Purchase failed",placement:"purchase"})),o(!1))):"add_to_cart"===t.action?(e._setPageError(null),!a&&t.item&&(r=JSON.parse(localStorage.getItem("cart")),c=await addToCartGlobal(e.apiUrl,e.domainKey,e._loggedIn,r,t.item,{style:t.style??null,option:t.option??null,context:t?.context?"string"==typeof t.context?JSON.parse(t.context):t.context:null},o),e._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),c?"success"===c.status&&(updateCart(r,c.cart),handleEventMail(t,e)):e._setPageError({message:"Add to cart failed",placement:"add_to_cart"}))):"add_to_cart_subscribe"===t.action?(e._setPageError(null),!a&&t.item&&t.style&&t.option&&(r=JSON.parse(localStorage.getItem("cart")),c=await addToCartGlobal(e.apiUrl,e.domainKey,e._loggedIn,r,t.item,{style:t.style,option:t.option,context:t?.context?"string"==typeof t.context?JSON.parse(t.context):t.context:null},o,{subscribe:"monthly"}),e._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),c?"success"===c.status&&(updateCart(r,c.cart),handleEventMail(t,e)):e._setPageError({message:"Add to cart failed",placement:"add_to_cart"}))):("logout"===t.action&&(e._setLoggedIn&&e._setLoggedIn(!1),e._setStripeSecret)&&e._setStripeSecret(!1),handleEventMail(t,e)))},registerGoogleSignIn=t=>`// Register google one tap sign in event to pass data to registration/login function
        const onOneTapSignedInGoogle = data => {
            let event = new CustomEvent("thirdparty-signin", { "detail": data });
            document.dispatchEvent(event);
        }
        const doGoogleInit = (delay = 250) => {
            try {
                if (!window || (window && !window.googleInitialized)) {
                    google.accounts.id.initialize({
                        client_id: '${t}',
                        callback: onOneTapSignedInGoogle,
                        use_fedcm_for_prompt: true
                    })
                    window.googleInitialized = true
                    console.log('Google Loaded')
                }
                return true
            } catch (err) {
                // fail silently
                setTimeout(() => {
                    doGoogleInit(delay * 2)
                }, delay)
            }
        }
        try {
            let createdScripts = document.getElementsByClassName("lazyOnload");
            if (createdScripts && createdScripts.length > 1) { // Remove duplicate scripts
                for (let i = 1; i < createdScripts.length; i++) {
                    createdScripts[i].remove();
                }
            }
            doGoogleInit()
        } catch (err) {
            // fail silently
            setTimeout(() => {
                doGoogleInit(500)
            }, 250)
        }`;export{handleSetLoggedIn,toggleSingleOpenMenu,handleCheckUserData,handleSetCart,forceUpdateProps,registerSocket,handleGlobalEvent,registerGoogleSignIn};