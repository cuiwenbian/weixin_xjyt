(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"510b":function(e,t,n){},"5bee":function(e,t,n){"use strict";var o=n("510b"),r=n.n(o);r.a},"91c5":function(e,t,n){"use strict";n.r(t);var o=n("9db2");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("5bee");var c,u,a,i,l=n("f0c5"),f=Object(l["a"])(o["default"],c,u,!1,null,null,null,!1,a,i);t["default"]=f.exports},"9bd1":function(e,t,n){"use strict";(function(e){n("5471");var t=c(n("66fd")),o=c(n("91c5")),r=c(n("1b2e"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){n.e("components/w-titleBar/w-titleBar").then(function(){return resolve(n("569b"))}.bind(null,n)).catch(n.oe)};t.default.component("wTitleBar",l),t.default.config.productionTip=!1,t.default.prototype.$Api=r.default,t.default.prototype.url="https://api.ipcn.xyz/api/v1/",t.default.prototype.urla="https://api.ipcn.xyz/",o.default.mpType="app";var f=new t.default(a({},o.default));e(f).$mount()}).call(this,n("543d")["createApp"])},"9db2":function(e,t,n){"use strict";n.r(t);var o=n("b628"),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=r.a},b628:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){var t=e.getStorageSync("nowtime"),n=(new Date).getTime();if(t){console.log("当前时间戳"+n),console.log("本地存储时间戳"+t);var o=n-t;console.log("登录使用token时间"+o),o>1296e6?(console.log("token已过期"),e.removeStorageSync("token"),e.removeStorageSync("phone"),e.removeStorageSync("nowtime")):console.log("token未过期")}},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=n}).call(this,n("543d")["default"])}},[["9bd1","common/runtime","common/vendor"]]]);