<template>
	<view class="logins">
		<image class="login_bg" src="../../static/image/login_bg.png" mode="">
			<view class="popup">
				<view class="con">
					<view class="con_txt">
						<text :class="['bt-tab', sel_tab === '1' ? 'bt-tab-active' : '']" @click="handleSelectTab('1')">密码登录</text>
						<span>/</span>
						<text :class="['bt-tab', sel_tab === '2' ? 'bt-tab-active' : '']" @click="handleSelectTab('2')">验证码登录</text>
					</view>
					<view class="con_tip">请输入您的常用手机或邮箱</view>
					<view class="inp">
						<view class="input"><input class="input_num" type="text" v-model="phone_email" placeholder="输入手机号或邮箱" /></view>
						<view class="input" v-if="sel_tab=='1'">
							<input v-if="eye" class="input_pwd" password="true" type="text" v-model="password" placeholder="输入密码" @input="getpwd"/>
							<input v-else class="input_pwd" type="text" v-model="password" placeholder="输入密码" @input="getpwd"/>
							<view class="eye" v-if="show_eye">
								<image v-if="eye" src="../../static/image/icon-pass-hide.png" mode="" @click="change"></image>
								<image v-else src="../../static/image/icon-pass-show.png" mode="" @click="change"></image>
							</view>
						</view>
						<view class="input" v-if="sel_tab=='2'">
							<input class="input_code" type="text" v-model="code" placeholder="输入验证码" />
							<view class="code_btn">
								<button class="getcode" @click="getCodeBtn" :disabled="cutdownIng">{{sendBtnText}}</button>
							</view>
						</view>
					</view>
					<view v-if="sel_tab=='2'">
						<view class="btn"   @click="code_login" v-if="allowLogin">登录</view>
						<view class="btn_"   v-else>登录</view>
					</view>
					<view v-if="sel_tab=='1'">
						<view class="btn"  @click="pwd_login" v-if="allowLogin_pwd">登录</view>
						<view class="btn_"   v-else>登录</view>
					</view>
					<view class="register" v-if="sel_tab=='1'">
						<view @click="register">注册</view>
						<view @click="forget">忘记密码？</view>
					</view>
				</view>
			</view>
		</image>
	</view>
</template>

<script>
	const cutdownTime = 60;
	const cutdownTime_e= 120;
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
				show_eye:false
			};
		},
		computed: {
			allowLogin () {
				return !!(this.phone_email && this.code)
			},
			allowLogin_pwd () {
				return !!(this.phone_email && this.password)
			},
		},
		components: {},
		methods: {
			getpwd(e){
				if(e.detail.value!=""){
					this.show_eye=true
				}else{
					this.show_eye=false
				}
			},
			handleSelectTab(tab) {
				this.sel_tab = tab;
			},
			change() {
				this.eye = !this.eye
			},
			register() {
				uni.navigateTo({
					url: "../register/register"
				})
			},
			forget() {
				uni.navigateTo({
					url: '../getBackPassword/getBackPassword'
				})
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
									title: "用户不存在",
									icon: 'none',
									duration: 3000
								})
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
									title: "用户不存在",
									icon: 'none',
									duration: 3000
								})
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
				} else if(!this.code){
					uni.showToast({
						title: '请输入验证码',
						icon: 'none',
						duration: 2000
					});
					return false;
				}else if (myreg.test(this.phone_email) || flag) {
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
				}else if(!this.password){
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

<style>
	page {
		width: 100%;
		height: 100%;
	}

	.logins {
		width: 100%;
		height: 100%;
	}

	.login_bg {
		width: 684rpx;
		height: 385rpx;
		display: block;
		position: fixed;
		top: 0;
	}

	.popup {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
	}

	.con {
		width: 92%;
		height: 67%;
		background-color: #FFFFFF;
		border-radius: 20px;
		margin: 28% auto;
		padding: 95rpx 48rpx;
	}

	.con_txt {
		color: #999999;
		font-size: 40rpx;
		/* letter-spacing: 5rpx; */
	}

	.con_txt>span {
		color: #2E2E2E;
		display: inline-block;
		margin: 0 10rpx;
	}

	.bt-tab {
		color: #999999;
		font-size: 40rpx;
	}

	.bt-tab-active {
		color: #333333;
		font-size: 48rpx;
		font-weight: bold;
	}

	.con_tip {
		font-size: 20rpx;
		color: #333333;
		line-height: 60rpx;
	}

	.inp {
		width: 100%;
		height: 300rpx;
		/* background-color: #007AFF; */
	}

	.input {
		width: 100%;
		height: 150rpx;
		padding-top: 50rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #DDDDDD;
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

	.eye>image {
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
    .getcode{
		background: #FFFFFF;
		border: none;
		color:#323232;
		font-size: 30rpx;
		text-align: right;
	}
	.getcode::after{
		border: none;
	}
	button[disabled] {
		background: none !important;
		color: #999999 !important;
		border: none;
	}
	.btn {
		width: 556rpx;
		height: 80rpx;
		background: rgba(25, 119, 255, 1);
		border-radius: 40rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 34rpx;
		line-height: 80rpx;
		margin: 99rpx auto 80rpx auto;
	}
	.btn_ {
		width: 556rpx;
		height: 80rpx;
		background: rgba(25, 119, 255, 0.3);
		border-radius: 40rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 34rpx;
		line-height: 80rpx;
		margin: 99rpx auto 80rpx auto;
	}

	.register {
		width: 84%;
		height: 50rpx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
</style>
