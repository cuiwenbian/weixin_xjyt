(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/change-loginPassword/change-loginPassword"],{4493:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},s=[]},"49c8":function(t,n,e){"use strict";var o=e("e6b9"),i=e.n(o);i.a},5361:function(t,n,e){},"7e03":function(t,n,e){"use strict";(function(t){e("5471");o(e("66fd"));var n=o(e("80a5"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"80a5":function(t,n,e){"use strict";e.r(n);var o=e("4493"),i=e("b1dc");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("49c8"),e("f1ee");var a,c=e("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=r.exports},b1dc:function(t,n,e){"use strict";e.r(n);var o=e("b765"),i=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);n["default"]=i.a},b765:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("45e3"),i=e("45e3"),s=60,a=120,c={data:function(){return{isPassword:!0,isPassword1:!0,phone:t.getStorageSync("phone"),cutdownIng:!1,cutDownTiemr:"",sendBtnText:"获取验证码",n:!0,pwd:"",pwd1:"",code:"",isClick:!0}},onBackPress:function(t){plus.key.hideSoftKeybord()},computed:{allowLogin:function(){return!!(this.pwd&&this.pwd1&&this.code)}},methods:{getLoginPassword:function(t){this.pwd=t.detail.value},getLoginPassword1:function(t){this.pwd1=t.detail.value},getCodeValue:function(t){this.code=t.detail.value},checkPwd:function(n){this.pwd=n.detail.value;var e=/^[a-z0-9]{6,16}$/;if(!e.test(this.pwd))return t.showToast({title:"密码格式为6到16位字母或数字",icon:"none",duration:2e3}),!1},show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},other:function(){t.navigateTo({url:"../change-pass/change-pass"})},next:function(){var t=this;t.n=!1},back:function(){var t=this;t.n=!0},getCode:function(){var n=i.checkEmail(this.phone),e=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/,o=this;o.cutdownIng||(e.test(this.phone)?t.request({url:o.url+"users/login/sms/",method:"POST",data:{mobile:this.phone},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){var e=n.statusCode;if(200==e){var i=s;o.cutdownIng=!0,o.sendBtnText="".concat(i,"s"),o.cutDownTiemr=setInterval((function(){i--,o.sendBtnText="".concat(i,"s"),i<=0&&(clearInterval(o.cutDownTiemr),o.cutdownIng=!1,o.sendBtnText="重新获取",o.cutDownTiemr="")}),1e3)}else if(411==e)return t.showToast({title:"操作太频繁，请稍候重试",icon:"none",duration:2e3}),!1}}):n&&(o.type=2,t.request({method:"POST",data:{mobile:o.phone},url:o.url+"users/find/pwd/sms/",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){var e=n.statusCode;if(200==e){var i=a;o.cutdownIng=!0,o.sendBtnText="".concat(i,"s"),o.cutDownTiemr=setInterval((function(){i--,o.sendBtnText="".concat(i,"s"),i<=0&&(clearInterval(o.cutDownTiemr),o.cutdownIng=!1,o.sendBtnText="重新获取",o.cutDownTiemr="")}),1e3)}else 400==e&&t.showToast({title:"操作太频繁，请稍候重试",icon:"none",duration:3e3})}})))},linkToTransfer:(0,o.debounce)((function(t){this.getCode()}),1e3,!0),getCodeBtn:function(t){this.linkToTransfer(t)},save:function(){var n=this;if(""==this.pwd)return t.showToast({title:"请输入登录密码",icon:"none",duration:2e3}),!1;var e=/^[a-z0-9]{6,16}$/;return e.test(this.pwd)?""==this.pwd1?(t.showToast({title:"请确认登录密码",icon:"none",duration:2e3}),!1):this.pwd1&&this.pwd&&this.pwd1!==this.pwd?(t.showToast({title:"两次密码不一致",icon:"none",duration:2e3}),!1):""==this.code?(t.showToast({title:"验证码不能为空",icon:"none",duration:2e3}),!1):void(this.isClick&&(n.isClick=!1,t.request({url:this.url+"updataLoginpwdcode/",method:"POST",data:{mobile:this.phone,password:this.pwd,password1:this.pwd1,code:this.code},header:{Authorization:"JWT "+t.getStorageSync("token")},success:function(n){200==n.statusCode&&(t.removeStorageSync("phone"),t.removeStorageSync("token"),t.removeStorageSync("nowtime"),t.reLaunch({url:"../../pages/login/login"}),t.showToast({title:"登录密码设置成功",icon:"none",duration:1500})),400==n.statusCode&&t.showToast({title:"验证码已过期",icon:"none"})},fail:function(){n.isClick=!0},complete:function(){n.isClick=!0}}))):(t.showToast({title:"密码格式为6到16位字母或数字",icon:"none",duration:2e3}),!1)}}};n.default=c}).call(this,e("543d")["default"])},e6b9:function(t,n,e){},f1ee:function(t,n,e){"use strict";var o=e("5361"),i=e.n(o);i.a}},[["7e03","common/runtime","common/vendor"]]]);