<template>
	<!-- 设置登录密码 -->
	<view class="container">
		<view class="line"></view>
		<view class="list">
			<text class="email1">登录账号：{{ phone }}</text>
		</view>
		<view class="linee"></view>
		<view class="list">
			<input class="code" type="number" @input="getCodeValue" :value="code" placeholder="请输入验证码" />
			<button class="getcode" @click="getCodeBtn" :disabled="cutdownIng">{{ sendBtnText }}</button>
		</view>
		<view class="set">设置登录密码</view>
		<view class="list">
			<view class="title">登录密码:</view>
			<input class="code" style="width:400rpx;" :password="isPassword" :value="pwd" @input="getLoginPassword" @blur='checkPwd'
			 placeholder="6-16位数字或字母" />
			<image :class="isPassword ? 'close' : 'cloose'" :src="isPassword ? '../../static/image/password.png' : '../../static/image/openeye.png'"
			 @click="show" mode=""></image>
		</view>
		<view class="linee"></view>
		<view class="list">
			<view class="title">确认密码:</view>
			<input class="code" :password="isPassword1" :value="pwd1" @input="getLoginPassword1" placeholder="请再次输入登录密码" />
			<image :class="isPassword1 ? 'close' : 'cloose'" :src="isPassword1 ? '../../static/image/password.png' : '../../static/image/openeye.png'"
			 @click="show1" mode=""></image>
		</view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="save" v-if="allowLogin">确认</view>
			<view class="submit-btn-disable" v-else>确认</view>
		</view>
	</view>
</template>

<script>
	var check = require('../../common/utils.js');
	import {
		debounce
	} from '@/common/utils.js';
	const cutdownTime = 60;
	const cutdownTime_e = 120;
	export default {
		data() {
			return {
				isPassword: true,
				isPassword1: true,
				phone: uni.getStorageSync('phone'),
				cutdownIng: false, // 正在倒计时中，
				cutDownTiemr: '', // 倒计时定时器
				sendBtnText: '获取验证码',
				n: true,
				pwd: '',
				pwd1: '',
				// iscode: '',
				code: '',
				isClick: true
			};
		},
		onBackPress(option) {
			plus.key.hideSoftKeybord();
		},
		computed: {
			allowLogin() {
				return !!(this.pwd && this.pwd1 && this.code)
			},
		},
		methods: {
			getLoginPassword: function(e) {
				this.pwd = e.detail.value;
			},
			getLoginPassword1: function(e) {
				this.pwd1 = e.detail.value;
			},
			getCodeValue: function(e) {
				this.code = e.detail.value;
			},
			checkPwd: function(e) {
				this.pwd = e.detail.value;
				var str = /^[a-z0-9]{6,16}$/;
				if (!str.test(this.pwd)) {
					uni.showToast({
						title: '密码格式为6到16位字母或数字',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
			},
			show: function() {
				this.isPassword = !this.isPassword;
			},
			show1: function() {
				this.isPassword1 = !this.isPassword1;
			},
			other: function() {
				uni.navigateTo({
					url: '../change-pass/change-pass'
				});
			},
			next: function() {
				var that = this;
				that.n = false;
			},
			back: function() {
				var that = this;
				that.n = true;
			},
			getCode() {
				var flag = check.checkEmail(this.phone);
				const myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
				const _this = this;
				if (_this.cutdownIng) return;
				if (myreg.test(this.phone)) {
					//如果是手机号
					//console.log("手机号设置密码")
					// _this.type=1;
					uni.request({
						//短信接口
						url: _this.url + 'users/login/sms/',
						method: 'POST',
						data: {
							mobile: this.phone
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success(res) {
							//根据code判断
							var ocode = res.statusCode;
							if (ocode == 200) {
								//_this.iscode = res.data.data;
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

							} else if (ocode == 411) {
								uni.showToast({
									title: '操作太频繁，请稍候重试',
									icon: 'none',
									duration: 2000
								});
								return false;
							}
						}
					});
				} else if (flag) {
					//如果是邮箱
					//console.log("邮箱设置密码")
					_this.type = 2;
					uni.request({
						method: 'POST',
						data: {
							mobile: _this.phone
						},
						//邮箱修改密码  获取验证码接口
						url: _this.url + 'users/find/pwd/sms/',
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success(res) {
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
									title: "操作太频繁，请稍候重试",
									icon: 'none',
									duration: 3000
								})
							}
						}
					});
				}

			},

			//获取验证码
			linkToTransfer: debounce(function(e) {
				this.getCode();
			}, 1000, true),
			getCodeBtn: function(e) {
				this.linkToTransfer(e)
			},
			save() {
				var _self = this;
				if (this.pwd == '') {
					uni.showToast({
						title: '请输入登录密码',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				var str = /^[a-z0-9]{6,16}$/;
				if (!str.test(this.pwd)) {
					uni.showToast({
						title: '密码格式为6到16位字母或数字',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.pwd1 == '') {
					uni.showToast({
						title: '请确认登录密码',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.pwd1 && this.pwd && this.pwd1 !== this.pwd) {
					uni.showToast({
						title: '两次密码不一致',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.code == '') {
					uni.showToast({
						title: '验证码不能为空',
						icon: 'none',
						duration: 2000
					});
					return false;
				}

				if (this.isClick) {
					_self.isClick = false;
					uni.request({
						url: this.url + 'updataLoginpwdcode/',
						method: 'POST',
						data: {
							mobile: this.phone,
							password: this.pwd,
							password1: this.pwd1,
							code: this.code
						},
						header: {
							Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
						},
						success: res => {

							if (res.statusCode == 200) {

								uni.removeStorageSync('phone');
								uni.removeStorageSync('token');
								uni.removeStorageSync('nowtime');
								uni.reLaunch({
									url: '../../pages/login/login'
								});
								uni.showToast({
									title: '登录密码设置成功',
									icon: 'none',
									duration: 1500
								});
							}
							if (res.statusCode == 400) {
								uni.showToast({
									title: '验证码已过期',
									icon: 'none'
								});
							}
						},
						fail() {
							_self.isClick = true;
						},
						complete() {
							_self.isClick = true;
						}
					});
				}
			}
		}
	};
</script>
<style>
	uni-button:after{
		border: none;
	}
</style>
<style lang="scss">
	page {
		background: #edeeee;
	}

	.line {
		height: 50rpx;
	}

	.list {
		height: 100rpx;
		width: 100%;
		background: #fff;
		padding-left: 48rpx;
		box-sizing: border-box;
	}

	.title {
		float: left;
		width: 150rpx;
		line-height: 100rpx;
		font-size: 30rpx;
		color: #333333;
	}

	.email1 {
		line-height: 100rpx;
		font-size: 30rpx;
		color: #333333;
	}

	.code {
		float: left;
		width: 450rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 30rpx;
	}

	.getcode {
		float: right;
		font-size: 30rpx;
		font-weight: 400;
		color: #446CFF;
		width: 250rpx;
		height: 50rpx;
		text-align: center;
		line-height: 50rpx;
		margin-top: 35rpx;
		border: none;
	}
	
	button,button[disabled] {
		background: none !important;
		border: none !important;
	}

	.close {
		float: right;
		display: block;
		width: 34rpx;
		height: 15rpx;
		margin-right: 48rpx;
		margin-top: 40rpx;
	}

	.cloose {
		float: right;
		display: block;
		width: 34rpx;
		height: 24rpx;
		margin-right: 48rpx;
		margin-top: 40rpx;
	}

	.linee {
		height: 20rpx;
	}

	.set {
		line-height: 100rpx;
		font-size: 30rpx;
		margin-left: 48rpx;
	}

	.save {
		margin: 100rpx auto 0;
		width: 690rpx;
		height: 88rpx;
		background: #0a1117;
		border-radius: 80rpx;
		text-align: center;
		line-height: 88rpx;
		color: #fff;
		font-size: 30rpx;
	}

	.submit-btn-wrap {
		padding-top: 130rpx;

		.submit-btn {
			width: 653rpx;
			height: 93rpx;
			background: rgba(56, 114, 255, 1);
			border-radius: 47rpx;
			margin: 0 auto;
			line-height: 93rpx;
			text-align: center;
			color: #fff;
			font-size: 37rpx;
			font-weight: 600;
			transition: all .2s;
		
			&:active {
				background-color: rgba(56, 114, 255, .85);
			}
		}
		
		.submit-btn-disable {
			width: 653rpx;
			height: 93rpx;
			margin: 0 auto;
			line-height: 93rpx;
			text-align: center;
			color: #fff;
			font-size: 37rpx;
			border-radius: 47rpx;
			background: rgba(56, 114, 255, .45)
		}
	}
</style>
