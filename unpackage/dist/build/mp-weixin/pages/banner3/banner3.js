(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/banner3/banner3"],{"391e":function(t,n,a){"use strict";a.r(n);var e=a("8cd6"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"8cd6":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){a.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(a("ea4b"))}.bind(null,a)).catch(a.oe)},i={data:function(){return{id:"",title:"",txt:"",cont:"",add:"",volume:"",aa:"",prev_info:"",next_info:"",prev_id:"",next_id:""}},components:{uniNavBar:e},onLoad:function(t){this.id=t.id,this.getNews()},mounted:function(){},methods:{back:function(){t.navigateBack({delta:1})},getNews:function(){var t=this,n=this.id;this.$Api.getAounceDetail(n).then((function(n){t.title=n.data.data[0].title,t.txt=n.data.data[0].title.substring(0,10)+"...",t.aa=n.data.data[0].text_content,t.add=n.data.data[0].add_time,t.prev_info=n.data.data[1].title,t.prev_id=n.data.data[1].id,t.next_info=n.data.data[2].title,t.next_id=n.data.data[2].id}),(function(t){}))},prev:function(){this.id=this.prev_id,t.pageScrollTo({scrollTop:0,duration:100}),this.getNews()},next:function(){this.id=this.next_id,t.pageScrollTo({scrollTop:0,duration:100}),this.getNews()}}};n.default=i}).call(this,a("543d")["default"])},a09a:function(t,n,a){},aa30:function(t,n,a){"use strict";(function(t){a("5471");e(a("66fd"));var n=e(a("c3a0"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])},b3aa:function(t,n,a){"use strict";var e=a("a09a"),i=a.n(e);i.a},c3a0:function(t,n,a){"use strict";a.r(n);var e=a("e94a"),i=a("391e");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("b3aa");var u,d=a("f0c5"),c=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,"f194f126",null,!1,e["a"],u);n["default"]=c.exports},e94a:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement;t._self._c},o=[]}},[["aa30","common/runtime","common/vendor"]]]);