(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set_password/set_password"],{"131c":function(s,t,o){"use strict";(function(s){o("5471");n(o("66fd"));var t=n(o("2d81"));function n(s){return s&&s.__esModule?s:{default:s}}s(t.default)}).call(this,o("543d")["createPage"])},"1a73":function(s,t,o){"use strict";var n;o.d(t,"b",(function(){return e})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return n}));var e=function(){var s=this,t=s.$createElement;s._self._c},i=[]},"21ff":function(s,t,o){"use strict";o.r(t);var n=o("9bfe"),e=o.n(n);for(var i in n)"default"!==i&&function(s){o.d(t,s,(function(){return n[s]}))}(i);t["default"]=e.a},"2d81":function(s,t,o){"use strict";o.r(t);var n=o("1a73"),e=o("21ff");for(var i in e)"default"!==i&&function(s){o.d(t,s,(function(){return e[s]}))}(i);o("b3e2");var a,u=o("f0c5"),c=Object(u["a"])(e["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);t["default"]=c.exports},6769:function(s,t,o){},"9bfe":function(s,t,o){"use strict";(function(s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{code:"",phone:"",password:"",sec_password:"",focusing:!1,focusing1:!1,focusing_has:!1,focusing1_has:!1,showpwd:!1,showpwd1:!1,email:"",type:"",statusBarHeight:""}},onLoad:function(t){var o=this;s.getSystemInfo({success:function(s){o.statusBarHeight=s.statusBarHeight+"px"}}),this.code=t.code,this.phone=t.phone,this.type=t.type},computed:{allowRegist:function(){return!(!this.password||!this.sec_password)}},components:{},onBackPress:function(s){plus.key.hideSoftKeybord()},methods:{back_page:function(){s.navigateBack({delta:1})},idshowpwd:function(){this.showpwd=!this.showpwd},idshowpwd1:function(){this.showpwd1=!this.showpwd1},clearall:function(s){var t=this;1==s?(t.password="",this.focusing_has=!1):2==s&&(t.sec_password="",this.focusing1_has=!1)},password_in_input:function(){this.focusing=!0,this.focusing1=!1,this.focusing1_has=!1,""!=this.password&&(this.focusing_has=!0)},password_in_input1:function(){this.focusing1=!0,this.focusing=!1,this.focusing_has=!1,""!=this.sec_password&&(this.focusing1_has=!0)},getpwd:function(s){""!=s.detail.value?this.focusing_has=!0:this.focusing_has=!1},getpwd_sec:function(s){""!=s.detail.value?this.focusing1_has=!0:this.focusing1_has=!1},regist:function(){var t=this;if(!t.password)return s.showToast({title:"请输入密码",icon:"none",duration:3e3}),!1;if(!t.sec_password)return s.showToast({title:"请确认密码",icon:"none",duration:3e3}),!1;var o=/^[a-z0-9]{6,16}$/;return o.test(t.password)?t.password!=t.sec_password?(s.showToast({title:"两次密码不一致",icon:"none",duration:3e3}),!1):void(1==t.type?s.request({url:this.url+"users/regist/",method:"POST",data:{mobile:t.phone,code:t.code,password:t.password,sec_password:t.sec_password},headers:{"Content-Type":"application/json"},success:function(t){console.log("手机注册"),400==t.statusCode?s.showToast({title:"该账号已绑定",icon:"none",duration:3e3}):201==t.statusCode&&(s.showToast({title:"手机号注册成功",icon:"none",duration:3e3}),s.reLaunch({url:"../login/login"}))}}):s.request({url:this.url+"users/email/regist/",method:"POST",data:{mobile:t.phone,code:t.code,password:t.password,sec_password:t.sec_password},headers:{"Content-Type":"application/json"},success:function(t){console.log("邮箱注册"),console.log(t),400==t.statusCode?s.showToast({title:"该账号已绑定",icon:"none",duration:3e3}):201==t.statusCode&&(s.showToast({title:"邮箱注册成功",icon:"none",duration:3e3}),s.reLaunch({url:"../login/login"}))}})):(s.showToast({title:"密码格式不正确",icon:"none",duration:2e3}),!1)}}};t.default=o}).call(this,o("543d")["default"])},b3e2:function(s,t,o){"use strict";var n=o("6769"),e=o.n(n);e.a}},[["131c","common/runtime","common/vendor"]]]);