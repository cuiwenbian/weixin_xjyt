(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/machine/machine"],{"6d3e":function(e,n,t){"use strict";var a=t("bb74"),i=t.n(a);i.a},bb74:function(e,n,t){},bbff:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("45e3"),i={data:function(){return{flag:!0,user_machine:"",machine_id:"",user_agreement:"",shade:!1,sha:!1,ress:"",scrollTop:0,old:{scrollTop:0},verify:!1,many:"0",num:"0.00",machine_profit:"0.00",machine_acceptance:1}},onShow:function(){var n=this,t=this;e.request({url:this.url+"assets/",method:"GET",header:{Authorization:"JWT "+e.getStorageSync("token")},success:function(e){200==e.statusCode&&(t.machine_profit=parseFloat(e.data.machine_profit).toFixed(2))}}),e.request({url:this.url+"usermachines/",method:"GET",header:{Authorization:"JWT "+e.getStorageSync("token")},success:function(e){console.log(e),n.user_machine=e.data.data.machine_datas[1],n.many=n.user_machine.length,0==n.user_machine.length&&(n.flag=!1),n.user_agreement=e.data.data.user_agreement,0==n.user_agreement?n.shade=!0:1==n.user_agreement&&(n.shade=!1),n.ress=e.data.data.machine_datas[0],0==n.ress?n.verify=!0:(n.verify=!1,n.sha=!1)}})},methods:{scroll:function(e){this.old.scrollTop=e.detail.scrollTop},backFront:function(){e.navigateBack({delta:1})},salemachine:function(){e.showToast({title:"服务器出售功能暂未开放",icon:"none",duration:3e3})},moveHandle:function(e){e.preventDefault(),e.stopPropagation()},linkToTransfer1:(0,a.debounce)((function(){e.navigateTo({url:"../agreement/agreement"})}),500,!0),sure:function(){this.linkToTransfer1()},cancel:function(){e.navigateBack({delta:1})},onNavigationBarButtonTap:function(){e.navigateTo({url:"../../pages/agreement/agreement"})},linkToTransfer:(0,a.debounce)((function(n){e.navigateTo({url:"../machine-detail/machine-detail?machine_id="+n.machine_id})}),500,!0),select:function(e){console.log("xiangqing"),this.linkToTransfer(e)},prompt:function(){this.sha=!0},can:function(){this.sha=!1},validation:function(){e.navigateTo({url:"../sign/index?machine_acceptance="+this.machine_acceptance})}}};n.default=i}).call(this,t("543d")["default"])},bc5e:function(e,n,t){"use strict";t.r(n);var a=t("bbff"),i=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(n,e,(function(){return a[e]}))}(c);n["default"]=i.a},c7ed:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return a}));var i=function(){var e=this,n=e.$createElement;e._self._c},c=[]},f7e6:function(e,n,t){"use strict";(function(e){t("5471");a(t("66fd"));var n=a(t("fdd6"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},fdd6:function(e,n,t){"use strict";t.r(n);var a=t("c7ed"),i=t("bc5e");for(var c in i)"default"!==c&&function(e){t.d(n,e,(function(){return i[e]}))}(c);t("6d3e");var o,r=t("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=u.exports}},[["f7e6","common/runtime","common/vendor"]]]);