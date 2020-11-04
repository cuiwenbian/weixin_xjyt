<template>
	<view class="logins">
		<view class="login_bg"><image src="../../static/image/login_bg.png" mode=""></image></view>
		<view class="login_bg2"><image src="../../static/image/login_bg2.png" mode=""></image></view>
		<!--  -->
		<view class="popup">
			<view class="con">
				<view class="con_txt">
					<text :class="['bt-tab', sel_tab === '1' ? 'bt-tab-active' : '']" @click="handleSelectTab('1')">手机注册</text>
					<span></span>
					<text :class="['bt-tab', sel_tab === '2' ? 'bt-tab-active' : '']" @click="handleSelectTab('2')">邮箱注册</text>
				</view>
				<!-- <view class="con_tip">请输入您的常用手机或邮箱</view> -->
				<view class="inp">
					<view class="input" v-if="sel_tab == '1'"><input class="input_num" type="text" v-model="phone_email" placeholder="请输入手机号" /></view>
					<view class="input" v-if="sel_tab == '2'"><input class="input_num" type="text" v-model="phone_email" placeholder="请输入邮箱" /></view>
					<view class="input" >
						<input class="input_code" type="text" v-model="code" placeholder="请输入验证码" />
						<view class="code_btn">
							<button class="getcode" @click="getCodeBtn" :disabled="cutdownIng">{{ sendBtnText }}</button>
						</view>
					</view>
					<view class="input" >
						<input v-if="eye" class="input_pwd" password="true" type="text" v-model="password" placeholder="请输入密码" @input="getpwd" />
						<input v-else class="input_pwd" type="text" v-model="password" placeholder="请输入密码" @input="getpwd" />
						<view class="eye" v-if="show_eye">
							<image v-if="eye" src="../../static/image/icon-pass-hide.png" mode="" @click="change"></image>
							<image v-else src="../../static/image/icon-pass-show.png" mode="" @click="change"></image>
						</view>
					</view>
					
				</view>
				<view v-if="sel_tab == '2'">
					<view class="btn" @click="code_login" v-if="allowLogin">注册</view>
					<view class="btn_" v-else>注册</view>
				</view>
				<view v-if="sel_tab == '1'">
					<view class="btn" @click="pwd_login" v-if="allowLogin_pwd">注册</view>
					<view class="btn_" v-else>注册</view>
				</view>
				<view class="register">
					<view>
						已有账号？
						<span @click="register" style="color:#3872FF;">去登录</span>
					</view>
				</view>
			</view>
		</view>
		<!-- </image> -->
	</view>
</template>

<script>
const cutdownTime = 60;
const cutdownTime_e = 120;
var check = require('../../common/utils.js');
export default {
	data() {
		return {
			sel_tab: '1',
			phone_email: '',
			password: '',
			code: '',
			cutdownIng: false, // 正在倒计时中，
			cutDownTiemr: '', // 倒计时定时器
			sendBtnText: '获取验证码',
			type: '',
			eye: true,
			show_eye: false
		};
	},
	computed: {
		allowLogin() {
			return !!(this.phone_email && this.code);
		},
		allowLogin_pwd() {
			return !!(this.phone_email && this.password);
		}
	},
	components: {},
	methods: {
		getpwd(e) {
			if (e.detail.value != '') {
				this.show_eye = true;
			} else {
				this.show_eye = false;
			}
		},
		handleSelectTab(tab) {
			this.sel_tab = tab;
		},
		change() {
			this.eye = !this.eye;
		},
		register() {
			uni.navigateTo({
				url: '../login/login'
			});
		},
		forget() {
			uni.navigateTo({
				url: '../getBackPassword/getBackPassword'
			});
		},
		getCodeBtn() {
			if (this.cutdownIng) return;
			var flag = check.checkEmail(this.phone_email);
			const myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
			const _this = this;
			if (!this.phone_email) {
				uni.showToast({
					title: '请输入邮箱或手机号',
					icon: 'none',
					duration: 2000
				});
				return false;
			} else if (myreg.test(this.phone_email)) {
				//console.log("手机获取验证码登录")
				_this.type = 1;
				uni.request({
					method: 'POST',
					data: {
						mobile: _this.phone_email
					},
					//手机忘记密码  获取验证码接口
					url: _this.url + 'users/forgot/sms/',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success(res) {
						//console.log(res);
						var ocode = res.statusCode;
						if (ocode == 200) {
							let surTime = cutdownTime;
							_this.cutdownIng = true;
							_this.sendBtnText = `${surTime}s`;
							_this.cutDownTiemr = setInterval(() => {
								surTime--;
								_this.sendBtnText = `${surTime}s`;
								if (surTime <= 0) {
									clearInterval(_this.cutDownTiemr);
									_this.cutdownIng = false;
									_this.sendBtnText = '重新获取';
									_this.cutDownTiemr = '';
								}
							}, 1000);
						} else if (ocode == 400) {
							uni.showToast({
								title: '用户不存在',
								icon: 'none',
								duration: 3000
							});
						}
					}
				});
			} else if (flag) {
				//console.log("邮箱获取验证码登录")
				_this.type = 2;
				uni.request({
					method: 'POST',
					data: {
						mobile: _this.phone_email
					},
					//邮箱忘记密码  获取验证码接口
					url: _this.url + 'users/find/pwd/sms/',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success(res) {
						console.log(res);
						var ocode = res.statusCode;
						if (ocode == 200) {
							let surTime = cutdownTime_e;
							_this.cutdownIng = true;
							_this.sendBtnText = `${surTime}s`;
							_this.cutDownTiemr = setInterval(() => {
								surTime--;
								_this.sendBtnText = `${surTime}s`;
								if (surTime <= 0) {
									clearInterval(_this.cutDownTiemr);
									_this.cutdownIng = false;
									_this.sendBtnText = '重新获取';
									_this.cutDownTiemr = '';
								}
							}, 1000);
						} else if (ocode == 400) {
							uni.showToast({
								title: '用户不存在',
								icon: 'none',
								duration: 3000
							});
						}
					}
				});
			} else {
				uni.showToast({
					title: '请输入正确邮箱或手机号',
					icon: 'none',
					duration: 2000
				});
			}
		},
		//验证码登录
		code_login() {
			var _this = this;
			//console.log('验证码登录')
			var flag = check.checkEmail(this.phone_email);
			const myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;

			if (!this.phone_email) {
				uni.showToast({
					title: '请输入邮箱或手机号',
					icon: 'none',
					duration: 2000
				});
				return false;
			} else if (!this.code) {
				uni.showToast({
					title: '请输入验证码',
					icon: 'none',
					duration: 2000
				});
				return false;
			} else if (myreg.test(this.phone_email) || flag) {
				uni.request({
					url: this.url + 'users/emobile/login/',
					method: 'POST',
					data: {
						mobile: _this.phone_email,
						code: _this.code
					},
					headers: {
						'Content-Type': 'application/json'
					},
					success: res => {
						//console.log(res);
						if (res.statusCode == 400) {
							uni.showToast({
								title: '验证码不正确',
								icon: 'none'
							});
						}

						if (res.statusCode == 402) {
							uni.showToast({
								title: '用户名或密码错误',
								icon: 'none',
								duration: 3000
							});
						}

						if (res.statusCode == 200) {
							let setTime = new Date().getTime();
							uni.setStorageSync('nowtime', setTime);
							uni.setStorageSync('phone', _this.phone_email);
							uni.setStorageSync('token', res.data.data);
							//保存登录账号到本地  phone字段
							_this.global_.phone = uni.getStorageSync('phone');
							_this.global_.token = uni.getStorageSync('token');
							uni.reLaunch({
								url: '../index/index'
							});
						}
					},
					fail(res) {},
					complete(res) {}
				});
			} else {
				uni.showToast({
					title: '请输入正确邮箱或手机号',
					icon: 'none',
					duration: 2000
				});
			}
		},
		//密码登录
		pwd_login() {
			var _this = this;
			//console.log('密码登录')
			var flag = check.checkEmail(this.phone_email);
			const myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;

			if (!this.phone_email) {
				uni.showToast({
					title: '请输入邮箱或手机号',
					icon: 'none',
					duration: 2000
				});
				return false;
			} else if (!this.password) {
				uni.showToast({
					title: '请输入密码',
					icon: 'none',
					duration: 2000
				});
				return false;
			} else if (myreg.test(this.phone_email) || flag) {
				uni.request({
					url: this.url + 'users/emobile/login/',
					method: 'POST',
					data: {
						mobile: _this.phone_email,
						password: _this.password
					},
					headers: {
						'Content-Type': 'application/json'
					},
					success: res => {
						//console.log(res);
						if (res.statusCode == 400) {
							uni.showToast({
								title: '验证码不正确',
								icon: 'none'
							});
						}
						if (res.statusCode == 401) {
							uni.showToast({
								title: '用户不存在',
								icon: 'none',
								duration: 3000
							});
						}
						if (res.statusCode == 402) {
							uni.showToast({
								title: '用户名或密码错误',
								icon: 'none',
								duration: 3000
							});
						}
						if (res.statusCode == 412) {
							uni.showToast({
								title: '请用手机短信快速登录,并设置密码',
								icon: 'none'
							});
						}
						if (res.statusCode == 200) {
							let setTime = new Date().getTime();
							uni.setStorageSync('nowtime', setTime);
							uni.setStorageSync('phone', _this.phone_email);
							uni.setStorageSync('token', res.data.token);

							_this.global_.phone = uni.getStorageSync('phone');
							_this.global_.token = uni.getStorageSync('token');
							uni.reLaunch({
								url: '../index/index'
							});
						}
					},
					fail(res) {},
					complete(res) {}
				});
			} else {
				uni.showToast({
					title: '请输入正确邮箱或手机号',
					icon: 'none',
					duration: 2000
				});
			}
		}
	}
};
</script>

<style scoped>
page {
	width: 100%;
	height: 100%;
}

.logins {
	width: 100%;
	height: 100%;
}

.login_bg {
	width: 684px;
	height: 385px;
	display: block;
	position: fixed;
	left: -480rpx;
	top: -220rpx;
}
.login_bg > image {
	width: 100%;
	height: 100%;
}
.login_bg2 {
	display: block;
	position: fixed;
	left: -340rpx;
	bottom: -280rpx;
}

.popup {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
}

.con {
	width: 87%;
	height: 67%;
	margin: 28% auto;
	padding: 95rpx 0rpx;
	box-sizing: border-box;
}

.con_txt {
	margin-bottom: 20rpx;
}

.con_txt > span {
	color: #bfbfbf;
	display: inline-block;
	margin: 0 20rpx;
}

.bt-tab {
	color: #bfbfbf;
	font-size: 28rpx;
}

.bt-tab-active {
	color: #040404;
	font-size: 48rpx;
	font-weight: 500;
	position: relative;
}
.bt-tab-active:after {
	content: '';
	width: 11rpx;
	height: 11rpx;
	background: #0074ff;
	border-radius: 50%;
	position: absolute;
	bottom: -15rpx;
	left: 46%;
}

.con_tip {
	font-size: 20rpx;
	color: #333333;
	line-height: 60rpx;
}

.inp {
	width: 100%;
	height: 459rpx;
}

.input {
	width: 100%;
	height: 153rpx;
	padding-top: 30rpx;
	box-sizing: border-box;
	border-bottom: 1rpx solid #dddddd;
}

.input_num {
	width: 100%;
	height: 100%;
	line-height: 100px;
}

.input_pwd {
	width: 80%;
	height: 100%;
	line-height: 100px;
	float: left;
}

.eye {
	width: 20%;
	height: 100%;
	float: left;
	display: flex;
	align-items: center;
	justify-content: center;
}

.eye > image {
	width: 45rpx;
	height: 19rpx;
}

.input_code {
	width: 60%;
	height: 100%;
	line-height: 100px;
	float: left;
}

.code_btn {
	width: 40%;
	height: 100%;
	float: right;
	display: flex;
	align-items: center;
}
.getcode {
	background: #ffffff;
	border: none;
	color: #0074FF;
	font-size: 30rpx;
	text-align: right;
}
.getcode::after {
	border: none;
}
button[disabled] {
	background: none !important;
	color: #999999 !important;
	border: none;
}
.btn {
	width: 87%;
	height: 93rpx;
	background: #3872ff;
	box-shadow: 15rpx 26rpx 90rpx 0rpx rgba(56, 114, 255, 0.41);
	border-radius: 47rpx;
	text-align: center;
	color: #ffffff;
	font-size: 37rpx;
	line-height: 93rpx;
	font-weight: 600;
	margin: 99rpx auto 71rpx auto;
}
.btn_ {
	width: 87%;
	height: 93rpx;
	background: rgba(25, 119, 255, 0.3);
	border-radius: 47rpx;
	text-align: center;
	color: #ffffff;
	font-size: 37rpx;
	font-weight: 600;
	line-height: 93rpx;
	margin: 99rpx auto 71rpx auto;
}
.forgetpwd {
	width: 100%;
	height: 100rpx;
	margin: 0 auto;
	line-height: 100rpx;
	font-size: 28rpx;
	font-weight: 500;
	color: #3872ff;
	display: flex;
	justify-content: flex-end;
}
.register {
	width: 87%;
	height: 50rpx;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	font-size: 28rpx;
	font-weight: 500;
	color: #666666;
}
</style>
