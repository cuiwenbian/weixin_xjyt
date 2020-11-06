<template>
	<!-- 邮箱认证 -->
	<view class="container">
		<view class="line"></view>
		<view class="title_tip">请输入邮箱</view>
		<view class="list">
			<input class="enter" type="text&number" :value="email" @input="getEmailValue" @blur="getEmailStyle" placeholder="请输入邮箱地址"
			 placeholder-style="color:#999999;" />
		</view>
		<view class="list">
			<input class="enter enter1" type="number" @input="getEmailCode" placeholder="请输入邮箱验证码" placeholder-style="color:#999999;" />
			<button class="getcode" @click="sendcode" :disabled="cutdownIng">{{ sendBtnText }}</button>
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
	const cutdownTime = 120;
	export default {
		data() {
			return {
				email: '',
				emailCode: '',
				n: true,
				cutdownIng: false, // 正在倒计时中，
				cutDownTiemr: '', // 倒计时定时器
				sendBtnText: '获取验证码',
				isClick:true,
				
			};
		},
		onLoad() {
			var em=uni.getStorageSync('phone');
			var flag = check.checkEmail(em);
			if(flag){
				this.email=em;
			}
		},
		onBackPress(option) {
			plus.key.hideSoftKeybord();
		},
		computed: {
			allowLogin() {
				return !!(this.email && this.emailCode)
			},
		},
		methods: {
			next: function() {
				var that = this;
				that.n = false;
			},
			back: function() {
				var that = this;
				that.n = true;
			},
			getEmailValue: function(e) {
				this.email = e.detail.value;
			},
			getEmailStyle: function(e) {
				var flag = check.checkEmail(this.email);
				if (!this.email) {
					uni.showToast({
						title: '请输入邮箱',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.email && !flag) {
					uni.showToast({
						title: '邮箱格式不正确',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
			},
			getEmailCode: function(e) {
				this.emailCode = e.detail.value;
			},
			linkToTransfer: debounce(function() {

				var that = this;
				if (that.cutdownIng) return;
				if (!that.email) {
					uni.showToast({
						title: '请输入邮箱',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				var flag = check.checkEmail(that.email);
				if (!flag) {
					uni.showToast({
						title: '邮箱格式不正确',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if(that.isClick){
					that.isClick = false;
					uni.request({
						//绑定邮箱验证码
						url: this.url + 'bindings/',
						method: 'POST',
						data: {
							email: that.email
						},
						success: function(res) {
							if (res.statusCode == 200) {
								let surTime = cutdownTime;
								that.cutdownIng = true;
								that.sendBtnText = `${surTime}s`;
								that.cutDownTiemr = setInterval(() => {
									surTime--;
									that.sendBtnText = `${surTime}s`;
									if (surTime <= 0) {
										clearInterval(that.cutDownTiemr);
										that.cutdownIng = false;
										that.sendBtnText = '重新获取';
										that.cutDownTiemr = '';
									}
								}, 1000);
							}
							if (res.statusCode == 401) {
								uni.showToast({
									title: '该邮箱已被使用',
									icon: 'none',
									duration: 2000
								});
								return false;
							}
						},
						complete(res) {
						   that.isClick = true;
						},
						fail: function(err) {
						   that.isClick = true;
						}
					});
				}else{
					uni.showLoading({
						title:'加载中'
					})
				}
		
			}, 500, true),
			sendcode: function() {
				this.linkToTransfer()
			},
			save: function() {
				if (this.email == '') {
					uni.showToast({
						title: '请输入邮箱地址',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.emailCode == '') {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				uni.request({
					url: this.url + 'linkemails/',
					method: 'POST',
					data: {
						email: this.email,
						email_msg: this.emailCode
					},
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					success(res) {
						if (res.statusCode == 200) {
							uni.navigateBack({
								delta: 2
							})
							uni.showToast({
								title: '邮箱绑定成功',
								icon: 'none',
								duration: 1500
							});

						}
						if (res.statusCode == 400) {
							uni.showToast({
								title: '验证码错误',
								icon: 'none',
								duration: 2000
							});
						}
					},
					complete(res) {
						
					}
				});
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
		background: #FFFFFF;
		padding-left: 48rpx;
		padding-right: 48rpx;
		box-sizing: border-box;
	}

	.line {
		height: 125rpx;
	}
    .title_tip{
		font-size: 60rpx;
		font-weight: 600;
		color: #222222;
		margin-bottom: 49rpx;
	}
	.list {
		width: 100%;
		height: 122rpx;
		background: #fff;
		border-bottom: 1rpx solid #F6F6F6;
	}

	.enter {
		float: left;
		width: 550rpx;
		height: 122rpx;
		line-height: 122rpx;
		font-size: 30rpx;
		color: #333;
	}

	.enter1 {
		width: 300rpx;
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
    .getcode::after {
    	border: none;
    }
	button,button[disabled] {
		background: none !important;
		border: none !important;
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
