(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/moreNews/moreNews","components/load-refresh/load-refresh"],{"0078":function(t,e,n){"use strict";n.r(e);var r=n("2f27"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"28c9":function(t,e,n){"use strict";var r=n("8029"),a=n.n(r);a.a},"2aa3":function(t,e,n){},"2f27":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),a=(o(n("b0b9")),n("45e3"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=u(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function u(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e,n,r,a,o,i){try{var u=t[o](i),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,a)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){c(o,r,a,i,u,"next",t)}function u(t){c(o,r,a,i,u,"throw",t)}i(void 0)}))}}var l={data:function(){return{link:"",list:"",arr:[],currPage:1,totalPage:0}},onLoad:function(){this.getAllNews()},methods:{getAllNews:function(){var e=this,n=this;t.request({url:this.url+"home/news/",data:{page:this.currPage},method:"GET",success:function(t){console.log(t),n.list=t.data.data.lists,e.currPage=t.data.data.pageNum,e.totalPage=parseInt(t.data.data.totalPage)}})},linkToTransfer:(0,a.debounce)((function(e){var n=this;t.request({url:this.url+"home/news/details/"+e+"/",method:"PUT",success:function(e){var r=e.data.data;n.coo=r.text_content;var a=r.link,o=r.read_volume,i=r.text_content.replace(/=/g,"_"),u=r.add_time,s=r.title;null==a||""==a?t.navigateTo({url:"../banner2/banner2?volume="+o+"&cont="+encodeURIComponent(i)+"&add="+u+"&title="+s}):t.navigateTo({url:"../web2/web2?url=".concat(a)})}})}),500,!0),information:function(t){this.linkToTransfer(t)},loadMore:function(){var e=this;return f(r.default.mark((function n(){var a,o,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.showToast({title:"加载中",icon:"loading"}),n.next=3,e.getTest();case 3:a=i(e.arr);try{for(a.s();!(o=a.n()).done;)u=o.value,e.list.push(u)}catch(r){a.e(r)}finally{a.f()}e.$refs.loadRefresh.loadOver();case 6:case"end":return n.stop()}}),n)})))()},getTest:function(){var e=this;return this.currPage=this.currPage+=1,new Promise((function(n,r){t.request({url:e.url+"home/news/",data:{page:e.currPage},method:"GET",success:function(t){n("success"),e.arr=t.data.data.lists},fail:function(t){r("error")}})}))},refresh:function(){t.showToast({title:"刷新中",icon:"loading"})}}};e.default=l}).call(this,n("543d")["default"])},"73db":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},7912:function(t,e,n){"use strict";var r=n("2aa3"),a=n.n(r);a.a},"7a35":function(t,e,n){"use strict";n.r(e);var r=n("94c9"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"800d":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={loadRefresh:function(){return Promise.resolve().then(n.bind(null,"b0b9"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},8029:function(t,e,n){},"94c9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"loadRefresh",props:{isRefresh:{type:Boolean,defaule:!0},refreshTime:{type:Number,default:800},heightReduce:{type:Number,default:0},backgroundCover:{type:String,default:"white"},pageNo:{type:Number,default:0},totalPageNo:{type:Number,default:0}},data:function(){return{startY:0,moveY:0,hasMore:!0,moving:!1,refresh:!1,loading:!1,coverTransform:"translateY(0px)",coverTransition:"0s",playState:"paused"}},computed:{getHeight:function(){var e=t.getSystemInfoSync().windowHeight-t.upx2px(0+this.heightReduce);return"height: ".concat(e,"px;")},loadText:function(){var t=this.pageNo,e=this.totalPageNo,n=this.loading;return n?"加载中...":t<e?"上拉加载更多":"已经到底啦~"}},watch:{refresh:function(t){t&&this.$emit("refresh")}},methods:{loadMore:function(){var t=this.pageNo,e=this.totalPageNo;t<e&&(this.loading=!0,this.$emit("loadMore"))},loadOver:function(){this.loading=!1},coverTouchstart:function(t){this.isRefresh&&(this.coverTransition="transform .1s linear",this.startY=t.touches[0].clientY)},coverTouchmove:function(t){if(this.isRefresh&&!this.refresh){this.moveY=t.touches[0].clientY;var e=this.moveY-this.startY;e<0?this.moving=!1:(this.moving=!0,e>=60&&(this.refresh=!0,this.coverTransform="translateY(60px)",this.playState="running"))}},coverTouchend:function(){var t=this;this.isRefresh&&this.refresh&&setTimeout((function(){!1!==t.moving&&(t.moving=!1,t.refresh=!1,t.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",t.coverTransform="translateY(0px)",t.playState="paused")}),this.refreshTime)},runRefresh:function(){var t=this;this.refresh=!0,this.coverTransition="transform .1s linear",this.coverTransform="translateY(60px)",this.playState="running",setTimeout((function(){t.refresh=!1,t.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",t.coverTransform="translateY(0px)",t.playState="paused"}),this.refreshTime)}}};e.default=n}).call(this,n("543d")["default"])},9874:function(t,e,n){"use strict";(function(t){n("5471");r(n("66fd"));var e=r(n("e865"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},b0b9:function(t,e,n){"use strict";n.r(e);var r=n("73db"),a=n("7a35");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("28c9");var i,u=n("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"45b8cf76",null,!1,r["a"],i);e["default"]=s.exports},e865:function(t,e,n){"use strict";n.r(e);var r=n("800d"),a=n("0078");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7912");var i,u=n("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=s.exports}},[["9874","common/runtime","common/vendor"]]]);