(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/agreement/agreement"],{"201f":function(t,e,n){"use strict";n.r(e);var a=n("39a4"),o=n("354f");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("a7b9");var u,r=n("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=s.exports},"25db":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{agreement:"",chnerot:"",flag:!1,fllaag:!1,resInfo:"",servicePath:"",pops:!1,isClick:!0}},onShow:function(){var e=this;t.request({url:this.url+"usermachine/agreement/",method:"GET",header:{Authorization:"JWT "+t.getStorageSync("token")},success:function(t){e.chnerot=t.data.data.user_agreement,e.agreement=t.data.data.agreement,0==e.chnerot&&(e.flag=!0)}})},methods:{sss:function(){var e=this;t.request({url:this.url+"usermachine/agreement/",method:"POST",header:{Authorization:"JWT "+t.getStorageSync("token")},success:function(n){200==n.statusCode&&(e.fllaag=!0,e.flag=!1,t.showToast({title:"已阅读并同意协议",icon:"none",duration:3e3}))}})},aaa:function(){var e=this,n=this;this.isClick&&(n.isClick=!1,t.showLoading({title:"资源加载中",duration:2e3}),t.downloadFile({url:this.urla+"media/用户服务协议.pdf",filePath:wx.env.USER_DATA_PATH+"/用户服务协议.pdf",success:function(n){200===n.statusCode?t.request({url:e.url+"sendusermachine/",method:"GET",header:{Authorization:"JWT "+t.getStorageSync("token")},success:function(e){console.log(e),200==e.statusCode&&t.showToast({title:"下载成功并已发送至绑定邮箱",icon:"none"}),302==e.statusCode&&t.showToast({title:"协议将会发送至您的邮箱，请先绑定邮箱",icon:"none"})}}):t.showToast({title:"下载失败",icon:"none",duration:3e3})},fail:function(){n.isClick=!0,t.showToast({title:"下载失败"})},complete:function(){n.isClick=!0,t.hideLoading()}}))}}};e.default=n}).call(this,n("543d")["default"])},"354f":function(t,e,n){"use strict";n.r(e);var a=n("25db"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"39a4":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement;t._self._c},i=[]},4473:function(t,e,n){"use strict";(function(t){n("5471");a(n("66fd"));var e=a(n("201f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},6412:function(t,e,n){},a7b9:function(t,e,n){"use strict";var a=n("6412"),o=n.n(a);o.a}},[["4473","common/runtime","common/vendor"]]]);