(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/powerAgreement/powerAgreement"],{1532:function(t,e,n){"use strict";n.r(e);var o=n("74b8"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"6b77":function(t,e,n){"use strict";n.r(e);var o=n("d2fa"),a=n("1532");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("983a");var u,s=n("f0c5"),r=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=r.exports},"74b8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{agreement:"",chnerot:"",flag:!1,fllaag:!1,resInfo:"",servicePath:"",pops:!1,isClick:!0}},onShow:function(){var e=this;t.request({url:this.url+"usercloudagree/",method:"GET",header:{Authorization:"JWT "+t.getStorageSync("token")},success:function(t){console.log(t),e.chnerot=t.data.data.user_agreement,e.agreement=t.data.data.agreement,0==e.chnerot&&(e.flag=!0)}})},methods:{sss:function(){var e=this;t.request({url:this.url+"usercloudagree/",method:"POST",header:{Authorization:"JWT "+t.getStorageSync("token")},success:function(n){200==n.statusCode&&(e.fllaag=!0,e.flag=!1,t.showToast({title:"已阅读并同意协议",icon:"none",duration:3e3}))}})},aaa:function(){var e=this,n=this;console.log(n.isClick),n.isClick&&(n.isClick=!1,t.showLoading({title:"资源加载中",duration:2e3}),t.downloadFile({url:this.urla+"media/用户存力服务协议.pdf",filePath:wx.env.USER_DATA_PATH+"/用户存力服务协议.pdf",success:function(o){console.log(o),200===o.statusCode?t.request({url:e.url+"senduseragree/",method:"GET",header:{Authorization:"JWT "+t.getStorageSync("token")},success:function(e){200==e.statusCode&&t.showToast({title:"下载成功并已发送至绑定邮箱",icon:"none"}),302==e.statusCode&&t.showToast({title:"协议将会发送至您的邮箱，请先绑定邮箱",icon:"none"}),console.log(e)},complete:function(){console.log("完成"),n.isClick=!0,console.log(n.isClick)}}):t.showToast({title:"下载失败",duration:3e3})},fail:function(){n.isClick=!0,t.showToast({title:"下载失败"})},complete:function(){n.isClick=!0,t.hideLoading()}}))}}};e.default=n}).call(this,n("543d")["default"])},"983a":function(t,e,n){"use strict";var o=n("f788"),a=n.n(o);a.a},d2fa:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},d817:function(t,e,n){"use strict";(function(t){n("5471");o(n("66fd"));var e=o(n("6b77"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f788:function(t,e,n){}},[["d817","common/runtime","common/vendor"]]]);