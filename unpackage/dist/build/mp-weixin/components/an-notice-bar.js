(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/an-notice-bar"],{4069:function(t,n,e){"use strict";var i=e("7941"),o=e.n(i);o.a},"6b3b":function(t,n,e){"use strict";e.r(n);var i=e("fda7"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},7856:function(t,n,e){"use strict";e.r(n);var i=e("e19c"),o=e("6b3b");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("4069");var s,c=e("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=r.exports},7941:function(t,n,e){},e19c:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c},u=[]},fda7:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{color:{type:String,default:"#de8c17"},bgColor:{type:String,default:"#fffbe8"},switchTime:{type:String,default:3},showSerial:{type:Boolean,default:!0}},data:function(){return{number:0,list:[],copyText:"",show:""}},mounted:function(){var t=this;this.$Api.getAounce().then((function(n){console.log(n),200==n.statusCode&&(t.list=n.data)}),(function(t){}))},watch:{text:function(){this.show=!0,this.text!=this.copyText&&(this.copyText=this.text,this.list=this.text.split("|"),console.log(JSON.stringify(this.list)),this.list.length>1&&(this.showSerial=!0))}},methods:{more:function(){this.show=!1,this.$emit("more")},go:function(t){this.$emit("go",t)}}};n.default=i}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/an-notice-bar-create-component',
    {
        'components/an-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7856"))
        })
    },
    [['components/an-notice-bar-create-component']]
]);
