(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/power/power"],{"56a5":function(t,e,n){"use strict";var a=n("5cb5"),o=n.n(a);o.a},"5cb5":function(t,e,n){},b3ed:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var a={cmdCircle:function(){return n.e("components/cmd-circle/cmd-circle").then(n.bind(null,"5b69"))}},o=function(){var t=this,e=t.$createElement;t._self._c},c=[]},bcf5:function(t,e,n){"use strict";n.r(e);var a=n("b3ed"),o=n("ea46");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("56a5");var r,i=n("f0c5"),s=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=s.exports},be2b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("45e3"),o=function(){n.e("components/cmd-circle/cmd-circle").then(function(){return resolve(n("5b69"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{n:!0,contract:[{},{}],hashrate_total:"0",use_avg:"0",scrollTop:0,old:{scrollTop:0},cunli:!0,categart:"",shade:!1,sha:!1,verify:!1,chnerot:"",tess:"",machine_acceptance:2}},components:{cmdCircle:o},onShow:function(){this.getAllInfo();var e=this;t.request({url:this.url+"usercloudagree/",method:"GET",header:{Authorization:"JWT "+t.getStorageSync("token")},success:function(t){console.log(t),e.chnerot=t.data.data.user_agreement,0==e.chnerot?e.shade=!0:e.shade=!1}})},onLoad:function(t){this.getAllInfo()},methods:{moveHandle:function(t){t.preventDefault(),t.stopPropagation()},cancel:function(){t.navigateBack({delta:1})},prompt:function(){this.sha=!0},getAllInfo:function(){var e=this;t.request({url:this.url+"mycloudss/",method:"GET",header:{Authorization:"JWT "+t.getStorageSync("token")},success:function(t){console.log(t);var n=[],a=0,o=0,c=0;e.tess=t.data.data[1][0],console.log(e.tess),0==e.tess&&(e.verify=!0),1==e.tess&&(e.verify=!1,e.sha=!1),t.data.data&&t.data.data.length&&(n=t.data.data[0].map((function(t){return t.starttime=t.starttime?t.starttime.substring(0,10):"",t.endtime=t.endtime?t.endtime.substring(0,10):"",a+=parseFloat(t.hashrate||0),o+=parseFloat(t.use||0),t})),c=(o/t.data.data.length).toFixed(2)),e.hashrate_total=a,e.use_avg=c,e.contract=n,0!=e.contract.length&&(e.cunli=!1)}})},linkToTransfer2:(0,a.debounce)((function(){t.navigateTo({url:"../powerAgreement/powerAgreement"})}),500,!0),sure:function(){this.linkToTransfer2()},linkToTransfer1:(0,a.debounce)((function(){t.navigateTo({url:"../powerAgreement/powerAgreement"})}),500,!0),surePower:function(){this.linkToTransfer1()},scroll:function(t){this.old.scrollTop=t.detail.scrollTop},backFront:function(){console.log(123),t.navigateBack({delta:1})},transfer:function(e){t.request({url:this.url+"cloudtransfers/",method:"GET",header:{Authorization:"JWT "+t.getStorageSync("token")},success:function(n){console.log(n),200==n.statusCode&&t.navigateTo({url:"../power-transfer/power-transfer?ids="+e.id+"&day="+e.days+"&rate="+e.hashrate}),400==n.statusCode&&t.showToast({icon:"none",title:"未实名认证通过或未设置交易密码"})}})},bt:function(){t.navigateBack({delta:1})},bbctn:function(){t.showToast({title:"存力转让功能暂未开放",icon:"none",duration:3e3})},validation:function(){t.navigateTo({url:"../sign/index?machine_acceptance="+this.machine_acceptance})}}};e.default=c}).call(this,n("543d")["default"])},be7c:function(t,e,n){"use strict";(function(t){n("5471");a(n("66fd"));var e=a(n("bcf5"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ea46:function(t,e,n){"use strict";n.r(e);var a=n("be2b"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=o.a}},[["be7c","common/runtime","common/vendor"]]]);