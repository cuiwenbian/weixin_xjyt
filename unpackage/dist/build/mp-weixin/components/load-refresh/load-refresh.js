(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/load-refresh/load-refresh"],{"28c9":function(t,e,r){"use strict";var n=r("8029"),i=r.n(n);i.a},"73db":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"7a35":function(t,e,r){"use strict";r.r(e);var n=r("94c9"),i=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},8029:function(t,e,r){},"94c9":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"loadRefresh",props:{isRefresh:{type:Boolean,defaule:!0},refreshTime:{type:Number,default:800},heightReduce:{type:Number,default:0},backgroundCover:{type:String,default:"white"},pageNo:{type:Number,default:0},totalPageNo:{type:Number,default:0}},data:function(){return{startY:0,moveY:0,hasMore:!0,moving:!1,refresh:!1,loading:!1,coverTransform:"translateY(0px)",coverTransition:"0s",playState:"paused"}},computed:{getHeight:function(){var e=t.getSystemInfoSync().windowHeight-t.upx2px(0+this.heightReduce);return"height: ".concat(e,"px;")},loadText:function(){var t=this.pageNo,e=this.totalPageNo,r=this.loading;return r?"加载中...":t<e?"上拉加载更多":"已经到底啦~"}},watch:{refresh:function(t){t&&this.$emit("refresh")}},methods:{loadMore:function(){var t=this.pageNo,e=this.totalPageNo;t<e&&(this.loading=!0,this.$emit("loadMore"))},loadOver:function(){this.loading=!1},coverTouchstart:function(t){this.isRefresh&&(this.coverTransition="transform .1s linear",this.startY=t.touches[0].clientY)},coverTouchmove:function(t){if(this.isRefresh&&!this.refresh){this.moveY=t.touches[0].clientY;var e=this.moveY-this.startY;e<0?this.moving=!1:(this.moving=!0,e>=60&&(this.refresh=!0,this.coverTransform="translateY(60px)",this.playState="running"))}},coverTouchend:function(){var t=this;this.isRefresh&&this.refresh&&setTimeout((function(){!1!==t.moving&&(t.moving=!1,t.refresh=!1,t.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",t.coverTransform="translateY(0px)",t.playState="paused")}),this.refreshTime)},runRefresh:function(){var t=this;this.refresh=!0,this.coverTransition="transform .1s linear",this.coverTransform="translateY(60px)",this.playState="running",setTimeout((function(){t.refresh=!1,t.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",t.coverTransform="translateY(0px)",t.playState="paused"}),this.refreshTime)}}};e.default=r}).call(this,r("543d")["default"])},b0b9:function(t,e,r){"use strict";r.r(e);var n=r("73db"),i=r("7a35");for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);r("28c9");var o,s=r("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"45b8cf76",null,!1,n["a"],o);e["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/load-refresh/load-refresh-create-component',
    {
        'components/load-refresh/load-refresh-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b0b9"))
        })
    },
    [['components/load-refresh/load-refresh-create-component']]
]);