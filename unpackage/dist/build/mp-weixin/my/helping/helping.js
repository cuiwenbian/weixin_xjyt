(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/helping/helping"],{4265:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("45e3"),a=function(){n.e("components/load-refresh/load-refresh").then(function(){return resolve(n("b0b9"))}.bind(null,n)).catch(n.oe)},r={data:function(){return{navList:[{state:0,text:"常见问题"},{state:1,text:"账号安全"},{state:2,text:"收益相关"},{state:3,text:"交易相关"}],currPage:"",totalPage:"",tabCurrentIndex:0,scrollTop:0,old:{scrollTop:0},question:""}},components:{loadRefresh:a},onLoad:function(){this.selected={}},onShow:function(){this.getquestiondata()},methods:{backFront:function(){t.navigateBack({delta:1})},tabClick:function(t){var e=this;e.tabCurrentIndex=t,this.getquestiondata()},loadMore:function(){this.$refs.loadRefresh.loadOver()},refresh:function(){},getquestiondata:function(){var e=this;t.request({url:this.url+"cloudasks/",data:{page:this.currPage,type:this.tabCurrentIndex},method:"GET",header:{Authorization:"JWT "+t.getStorageSync("token")},success:function(t){e.question=t.data.data.lists}})},scroll:function(t){this.old.scrollTop=t.detail.scrollTop},moveHandle:function(t){t.preventDefault(),t.stopPropagation()},linkToTransfer3:(0,o.debounce)((function(e){t.navigateTo({url:"../problem_details/problem_detail?id="+e})}),500,!0),problem_detail:function(t){this.linkToTransfer3(t)},linkToTransfer1:(0,o.debounce)((function(){t.navigateTo({url:"../suggest/suggest"})}),500,!0),feedback:function(){this.linkToTransfer1()},linkToTransfer2:(0,o.debounce)((function(){t.navigateTo({url:"../suggest-detail/suggest-detail"})}),500,!0),feedback_record:function(){this.linkToTransfer2()}}};e.default=r}).call(this,n("543d")["default"])},4850:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"4a98":function(t,e,n){"use strict";n.r(e);var o=n("4265"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},5458:function(t,e,n){"use strict";(function(t){n("5471");o(n("66fd"));var e=o(n("fff8"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},b8b4:function(t,e,n){},ff70:function(t,e,n){"use strict";var o=n("b8b4"),a=n.n(o);a.a},fff8:function(t,e,n){"use strict";n.r(e);var o=n("4850"),a=n("4a98");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("ff70");var u,i=n("f0c5"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=s.exports}},[["5458","common/runtime","common/vendor"]]]);