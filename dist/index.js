!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("fly-to-app",[],r):"object"==typeof exports?exports["fly-to-app"]=r():e["fly-to-app"]=r()}(self,(function(){return(()=>{"use strict";var e={295:(e,r,o)=>{function t(){var e=navigator.userAgent.toLowerCase(),r=null!=e.match(/Android/i),o=null!=e.match(/(iPhone|iPod|iPad|Mac OS)/i),t=o&&-1==e.indexOf("os 8")&&-1==e.indexOf("os 7")&&-1==e.indexOf("os 6")&&-1==e.indexOf("os 5"),i=e.indexOf("mqqbrowser")>-1&&-1==e.indexOf("qq/")&&-1==e.indexOf("micromessenger/");return{ua:e,isAndroid:r,isIOS:o,isIOS9plus:t,qqBrower:i}}function i(e){var r=t(),o=r.isIOS,i=r.isIOS9plus;o?i?location.href=e:function(e){var r=document.createElement("iframe");r.src=e,r.style.display="none",document.body.appendChild(r),setTimeout((function(){document.body.removeChild(r)}),2e3)}(e):location.href=e}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.source,o=void 0===r?"":r,n=e.target,s=void 0===n?"":n,f=e.iosBrowserUser,d=e.androidBrowserUser,u=e.isApp,a=e.cb;if(!o)throw new Error("source is required !");if(u&&!s)throw new Error("The page is in app, target is required !");var p=navigator.userAgent.toLowerCase(),c=t(),l=c.isIOS,m=f||"micromessenger,weibo,mailapp,qq/",O=d||"micromessenger,weibo,qq/",v=m.split(",").filter((function(e){return p.indexOf(e)>-1})).length>0,y=O.split(",").filter((function(e){return p.indexOf(e)>-1})).length>0;if(l){if(u)return void(location.href=s);if(v)return void(a&&a(t()));i(o)}else{if(u)return void(location.href=s);if(y)return void(a&&a(t()));i(o)}}o.r(r),o.d(r,{checkOs:()=>t,openApp:()=>n})}},r={};function o(t){if(r[t])return r[t].exports;var i=r[t]={exports:{}};return e[t](i,i.exports,o),i.exports}return o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(295)})()}));
//# sourceMappingURL=index.js.map