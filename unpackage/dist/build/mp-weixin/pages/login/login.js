(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"2c09":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=60,i=120,a=n("45e3"),s={data:function(){return{sel_tab:"1",phone_email:"",password:"",code:"",cutdownIng:!1,cutDownTiemr:"",sendBtnText:"获取验证码",type:"",eye:!0,show_eye:!1,statusBarHeight:""}},onLoad:function(t){var n=this;e.getSystemInfo({success:function(e){n.statusBarHeight=e.statusBarHeight+"px"}})},computed:{allowLogin:function(){return!(!this.phone_email||!this.code)},allowLogin_pwd:function(){return!(!this.phone_email||!this.password)}},methods:{back_page:function(){console.log("page"),e.navigateBack({delta:1})},getpwd:function(e){""!=e.detail.value?this.show_eye=!0:this.show_eye=!1},handleSelectTab:function(e){this.sel_tab=e},change:function(){this.eye=!this.eye},register:function(){e.navigateTo({url:"../regist/regist"})},forget:function(){e.navigateTo({url:"../getBackPassword/getBackPassword"})},getCodeBtn:function(){if(!this.cutdownIng){var t=a.checkEmail(this.phone_email),n=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/,s=this;if(!this.phone_email)return e.showToast({title:"请输入邮箱或手机号",icon:"none",duration:2e3}),!1;n.test(this.phone_email)?(s.type=1,e.request({method:"POST",data:{mobile:s.phone_email},url:s.url+"users/forgot/sms/",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){var n=t.statusCode;if(200==n){var i=o;s.cutdownIng=!0,s.sendBtnText="".concat(i,"s"),s.cutDownTiemr=setInterval((function(){i--,s.sendBtnText="".concat(i,"s"),i<=0&&(clearInterval(s.cutDownTiemr),s.cutdownIng=!1,s.sendBtnText="重新获取",s.cutDownTiemr="")}),1e3)}else 400==n&&e.showToast({title:"用户不存在",icon:"none",duration:3e3})}})):t?(s.type=2,e.request({method:"POST",data:{mobile:s.phone_email},url:s.url+"users/find/pwd/sms/",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){console.log(t);var n=t.statusCode;if(200==n){var o=i;s.cutdownIng=!0,s.sendBtnText="".concat(o,"s"),s.cutDownTiemr=setInterval((function(){o--,s.sendBtnText="".concat(o,"s"),o<=0&&(clearInterval(s.cutDownTiemr),s.cutdownIng=!1,s.sendBtnText="重新获取",s.cutDownTiemr="")}),1e3)}else 400==n&&e.showToast({title:"用户不存在",icon:"none",duration:3e3})}})):e.showToast({title:"请输入正确邮箱或手机号",icon:"none",duration:2e3})}},code_login:function(){var t=this,n=a.checkEmail(this.phone_email),o=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return this.phone_email?this.code?void(o.test(this.phone_email)||n?e.request({url:this.url+"users/emobile/login/",method:"POST",data:{mobile:t.phone_email,code:t.code},headers:{"Content-Type":"application/json"},success:function(n){if(400==n.statusCode&&e.showToast({title:"验证码不正确",icon:"none"}),402==n.statusCode&&e.showToast({title:"用户名或密码错误",icon:"none",duration:3e3}),200==n.statusCode){var o=(new Date).getTime();e.setStorageSync("nowtime",o),e.setStorageSync("phone",t.phone_email),e.setStorageSync("token",n.data.data),e.reLaunch({url:"../index/index"})}},fail:function(e){},complete:function(e){}}):e.showToast({title:"请输入正确邮箱或手机号",icon:"none",duration:2e3})):(e.showToast({title:"请输入验证码",icon:"none",duration:2e3}),!1):(e.showToast({title:"请输入邮箱或手机号",icon:"none",duration:2e3}),!1)},pwd_login:function(){var t=this,n=a.checkEmail(this.phone_email),o=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return this.phone_email?this.password?void(o.test(this.phone_email)||n?e.request({url:this.url+"users/emobile/login/",method:"POST",data:{mobile:t.phone_email,password:t.password},headers:{"Content-Type":"application/json"},success:function(n){if(400==n.statusCode&&e.showToast({title:"验证码不正确",icon:"none"}),401==n.statusCode&&e.showToast({title:"用户不存在",icon:"none",duration:3e3}),402==n.statusCode&&e.showToast({title:"用户名或密码错误",icon:"none",duration:3e3}),412==n.statusCode&&e.showToast({title:"请用手机短信快速登录,并设置密码",icon:"none"}),200==n.statusCode){var o=(new Date).getTime();e.setStorageSync("nowtime",o),e.setStorageSync("phone",t.phone_email),e.setStorageSync("token",n.data.token),e.reLaunch({url:"../index/index"})}},fail:function(e){},complete:function(e){}}):e.showToast({title:"请输入正确邮箱或手机号",icon:"none",duration:2e3})):(e.showToast({title:"请输入密码",icon:"none",duration:2e3}),!1):(e.showToast({title:"请输入邮箱或手机号",icon:"none",duration:2e3}),!1)}}};t.default=s}).call(this,n("543d")["default"])},"498b":function(e,t,n){"use strict";n.r(t);var o=n("f7ba"),i=n("b57f");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("fc5b");var s,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"7fa1d0e1",null,!1,o["a"],s);t["default"]=u.exports},"49c0":function(e,t,n){"use strict";(function(e){n("5471");o(n("66fd"));var t=o(n("498b"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"756d":function(e,t,n){},b57f:function(e,t,n){"use strict";n.r(t);var o=n("2c09"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},f7ba:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement;e._self._c},a=[]},fc5b:function(e,t,n){"use strict";var o=n("756d"),i=n.n(o);i.a}},[["49c0","common/runtime","common/vendor"]]]);