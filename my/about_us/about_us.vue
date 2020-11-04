<template>
	<view>
		<view class="maincontent">
			<view class='s-line'></view>
			<view class="l">
				<view class="infoo">
					<view>当前版本</view>
					<view style="font-family: 'myface';">v{{ version }}</view>
				</view>
			</view>
			<view class="l">
				<view class="infoo">
					<view>更新日志</view>
					<image class='right-go' src="../../static/image/jj.png" mode=""></image>
				</view>
			</view>
			<view class="l">
				<view class="infoo" @click="aggrement_power">
					<view>用户存力协议</view>
					<image class='right-go' src="../../static/image/jj.png" mode=""></image>
				</view>
			</view>
			
			<view class="l">
				<view class="infoo" @click="aggrement_seivice">
					<view>用户服务协议</view>
					<image class='right-go' src="../../static/image/jj.png" mode=""></image>
				</view>
			</view>
			<view class='s-line'></view>
			<view class="l">
				<view class="infoo">
					<view>官方网站</view>
					<view style="font-family: 'myface';">www.ipcn.xyz</view>
				</view>
			</view>
			<view class="l">
				<view class="infoo">
					<view>微信公众号</view>
					<view style="font-family: 'myface';">www.ipcn.xyz</view>
				</view>
			</view>
			
	    </view>
	</view>
</template>

<script>
	import {
		debounce
	} from '@/common/utils.js';
	var check = require('../../common/utils.js');
	export default {
		data() {
			return {
				phone: '',
				version: uni.getStorageSync('version')||'1.1.0',
				shade: false,
			};
		},
		onLoad() {
			
			var p = uni.getStorageSync('phone');
			var flag = check.checkEmail(p);
			if(flag){
				var p_=p.replace(/(?<=.{2})[^@]+(?=.{2}@)/,"*****")
				this.phone = p_;
			}else{
				var p1 = p.split(''); //字符串转为数组
				var phone =
					p1
					.slice(0, 3)
					.join()
					.replace(/,/g, '') +
					'****' +
					p1
					.slice(7, 11)
					.join()
					.replace(/,/g, '');
				this.phone = phone;
				}
		},
		onHide() {
			this.shade = false;
		},
		methods: {
			backfront: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			logout: function() {
				this.shade = true;
			},
			moveHandle: function(e) {
				e.preventDefault();
				e.stopPropagation();
			},
			cancell: function() {
				this.shade = false;
			},
			sure: function() {
				uni.removeStorageSync('phone');
				uni.removeStorageSync('token');
				uni.removeStorageSync('nowtime');
				uni.reLaunch({
					url: '../login/login'
				});
			},
			aggrement_power: function() {
				this.linkToTransfer();
			},
			linkToTransfer: debounce(
				function() {
					uni.navigateTo({
						url:'../powerAgreement/powerAgreement'
					});
				},
				1000,
				true
			),
			aggrement_seivice: function() {
				this.linkToTransfer1();
			},
			linkToTransfer1: debounce(
				function() {
					uni.navigateTo({
						url:'../agreement/agreement'
					});
				},
				500,
				true
			),
			
			
		}
	};
</script>

<style lang="scss">
	.height {
		height: var(--status-bar-height);
		background: #FAFBFC;
	} 
	.l {
		width: 100%;
		height: 154rpx;
		padding: 34rpx;
		box-sizing: border-box;
	}

	.infoo {
		float: left;
		width: 100%;
		height: 126rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
		padding-top: 30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		font-weight: 500;
		color: #333333;
	}

	.right-go {
		width: 36rpx;
		height: 36rpx;
	}

	.s-line {
		width: 100%;
		height: 20rpx;
		background: #eee;
	}

	
</style>
