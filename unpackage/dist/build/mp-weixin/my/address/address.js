(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/address/address"],{"8fc9":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return a}));var a={passwordInput:function(){return t.e("components/password-input/password-input").then(t.bind(null,"e220"))},keyboardPackage:function(){return t.e("components/keyboard-package/keyboard-package").then(t.bind(null,"98a8"))}},o=function(){var e=this,n=e.$createElement;e._self._c},s=[]},a2b8:function(e,n,t){"use strict";(function(e){t("5471");a(t("66fd"));var n=a(t("d5d8"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},a2c4:function(e,n,t){"use strict";t.r(n);var a=t("e25e"),o=t.n(a);for(var s in a)"default"!==s&&function(e){t.d(n,e,(function(){return a[e]}))}(s);n["default"]=o.a},d5d8:function(e,n,t){"use strict";t.r(n);var a=t("8fc9"),o=t("a2c4");for(var s in o)"default"!==s&&function(e){t.d(n,e,(function(){return o[e]}))}(s);t("e28a");var i,r=t("f0c5"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=u.exports},e25e:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("45e3"),o=function(){Promise.all([t.e("common/vendor"),t.e("components/uni-swipe-action/uni-swipe-action")]).then(function(){return resolve(t("6ad1"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/keyboard-package/keyboard-package").then(function(){return resolve(t("98a8"))}.bind(null,t)).catch(t.oe)},i=function(){t.e("components/password-input/password-input").then(function(){return resolve(t("e220"))}.bind(null,t)).catch(t.oe)},r=function(){t.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(t("ea4b"))}.bind(null,t)).catch(t.oe)},u={data:function(){return{options:[{text:"删除",style:{backgroundColor:"#dd524d"}}],wallet_value:"",wallet_key:"",address_out:"",flag:!0,right:"",id:"",shade:!0,password:"",user_id:"",numberList:[],length:6,type:"number",passIn:!1}},components:{uniSwipeAction:o,keyboardPackage:s,passwordInput:i,uniNavBar:r},onLoad:function(){this.getData()},onShow:function(){this.getData()},methods:{getData:function(){var n=this;e.request({url:this.url+"walletaddresss/",method:"GET",header:{Authorization:"JWT "+e.getStorageSync("token")},success:function(e){console.log(e),""==e.data.data?n.flag=!1:n.flag=!0,n.address_out=e.data.data}})},clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onChange:function(e){0==e.show&&(this.passIn=!1),this.numberList.length=0},onConfirm:function(){6!=this.numberList.length&&e.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},onInput:function(n){var t=this;t.numberList.push(n),t.password=t.numberList.join().replace(/,/g,""),t.numberList.length>=t.length&&(e.request({url:t.url+"updatadeleteaddresss/",method:"DELETE",data:{id:t.id,password:t.password},header:{Authorization:"JWT "+e.getStorageSync("token")},success:function(n){if(console.log(n),200==n.statusCode&&(t.passIn=!1,t.$refs["number"].close(),e.showToast({title:"删除成功",icon:"none",duration:2e3})),400==n.statusCode){t.$refs.wrong.flag=!1;var a=n.data.data.err_num,o=5-a;t.$refs.wrong.tip="密码错误,剩余"+o+"次机会"}423==n.statusCode&&(t.passIn=!1,t.$refs["number"].close(),e.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}));var s=getCurrentPages().pop();void 0!=s&&null!=s&&s.onLoad()}}),this.numberList.length=0)},click:function(e){var n=this;n.id=e.id,this.passIn=!0,this.$refs["number"].open(),this.onInput(val)},linkToTransfer:(0,a.debounce)((function(){e.navigateTo({url:"../add_address/add_address"})}),1e3,!0),add_address:function(){this.linkToTransfer()},back:function(){e.navigateBack({delta:1})},edit:function(n){var t=this;t.id=n.id,t.wallet_key=n.wallet_key,t.wallet_value=n.wallet_value,t.user_id=n.user_id,e.navigateTo({url:"../edit-address/edit-address?id="+t.id+"&wallet_key="+t.wallet_key+"&wallet_value="+t.wallet_value+"&user_id="+t.user_id})}}};n.default=u}).call(this,t("543d")["default"])},e28a:function(e,n,t){"use strict";var a=t("e993"),o=t.n(a);o.a},e993:function(e,n,t){}},[["a2b8","common/runtime","common/vendor"]]]);