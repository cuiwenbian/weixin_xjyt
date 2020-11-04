<template>
	<!-- 解绑邮箱 -->
	<view class="container">
		<view class="line"></view>
		<view class="title_tip">解绑邮箱</view>
		<view class="list">
			<view class="enter" :value="email">{{ email }}</view>
		</view>
		<view class="list">
			<input class="enter enter1" type="number" :value="emailCode" @input="getEmailCode" placeholder="请输入邮箱验证码" />
			<button class="getcode" @click="sendcode" :disabled="cutdownIng">{{ sendBtnText }}</button>
		</view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="unbind" v-if="allowLogin">确认</view>
			<view class="submit-btn-disable" v-else>确认</view>
		</view>
	</view>
</template>

<script>
	var check = require('../../common/utils.js');
	import {
		debounce
	} from '@/common/utils.js'
	const cutdownTime = 120;
	export default {
		data() {
			return {
				email: '',
				email1: '',
				n: true,
				emailCode: '',
				cutdownIng: false, // 正在倒计时中，
				cutDownTiemr: '', // 倒计时定时器
				sendBtnText: '获取验证码',
				isClick:true
			};
		},
		onShow() {
			var _this = this;
			uni.request({
				url: this.url + 'delemails/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					var email = res.data.data;
					var email1 = res.data.data;
					_this.email1 = email1;
					var l = email.split('@');
					email = l[0].substr(0, l[0].length - 5) + '****@' + l[1];
					_this.email = email;
				}
			});
		},
		onBackPress(option) {
			plus.key.hideSoftKeybord();
		},
		computed: {
			allowLogin() {
				return !!(this.emailCode)
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
			getEmailCode: function(e) {
				this.emailCode = e.detail.value;
			},
			linkToTransfer: debounce(function() {
				var that = this;
				if (that.cutdownIng) return;
				uni.request({
					//解除绑定邮箱验证码
					url: this.url + 'deleteemails/',
					method: 'POST',
					data: {
						email: that.email,
						email_msg: that.emailCode
					},
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					success: function(res) {
						console.log(res)
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
					},
					fail: function(err) {}
				});
			}, 500, true),
			sendcode: function() {
				this.linkToTransfer()
			},
			unbind: function() {
				var that=this;
				if (this.emailCode == '') {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if(this.isClick){
					that.isClick = false;
					uni.request({
						url: this.url + 'delemails/', //解除绑定接口
						method: 'POST',
						data: {
							email: this.email1,
							email_msg: this.emailCode
						},
						header: {
							Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
						},
						success(res) {
							console.log(res)
							if (res.statusCode == 400) {
								uni.showToast({
									title: '验证码错误',
									icon: 'none',
									duration: 2000
								});
								return false;
							}
							if (res.statusCode == 200) {
								uni.navigateBack({
									delta: 2
								})
								uni.showToast({
									title: '邮箱解绑成功',
									icon: 'none',
									duration: 1500
								});
							}
						},
						fail(res) {
							that.isClick = true;
						},
						complete(res) {
							that.isClick = true;
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
