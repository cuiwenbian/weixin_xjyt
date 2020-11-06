<template>
	<!-- 个人资料 -->
	<view class="maincontent">
		<view class="s-line"></view>
		<view class="l" @click="personal">
			<view class="infoo">
				<view>头像</view>
				<view class="avator"><image class="pic" src="../../static/w-titleBar/avators.png" mode=""></image></view>
			</view>
		</view>
		<view class="l" @click="mailaddress">
			<view class="infoo">
				<view>昵称</view>
				<view class="info_d">
					<view>{{nickname}}</view>
					<image class="right-go" src="../../static/image/jj.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="s-line"></view>
		<view class="logout"  @click="logout" hover-class="actived">退出登录</view>
		<view class="shade" v-if="shade" @touchmove.stop.prevent="moveHandle">
			<view class="pop">
				<view class="tips">提示</view>
				<view class="pop-title">退出登录？</view>
				<view class="pops">
					<view class="pop-btn quxiao" @click="cancell">取消</view>
					<view class="pop-btn yess" @click="sure">退出</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			nickname: '星际云通',
			shade: false,
		};
	},
	onHide() {
		this.shade = false;
	},
	onLoad(option) {
		// this.nickname = option.nickname;
	},
	methods:{
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
				url: '../../pages/index/index'
			});
		},
	}
};
</script>

<style lang="less">
page {
	background: #f6f6f6;
}
.l {
	width: 100%;
	height: 120rpx;
	padding: 0 34rpx;
	box-sizing: border-box;
	background-color: #FFFFFF;
}

.infoo {
	float: left;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #eee;
	align-items: center;
	font-size: 30rpx;
	font-weight: 500;
	color: #333333;
}
.info_d {
	display: flex;
	justify-content: space-between;
}
.info_d > view {
	margin-right: 42rpx;
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

.avator {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	
}
.pic {
	display: block;
	width: 100%;
	height: 100%;
}
.logout{
	width: 100%;
	height: 120rpx;
	background-color: #FFFFFF;
	text-align: center;
	line-height: 120rpx;
	font-size: 36rpx;
	font-weight: 500;
	color: #3072F7;
	&.actived{
		background-color: rgba(0,0,0,.18);
	}
}
.shade {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
	}

	.pop {
		width: 636rpx;
		height: 368rpx;
		margin: 450rpx auto;
		padding: 47rpx 40rpx 48rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 5rpx;
	}

	.tips {
		text-align: center;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	}

	.pop-title {
		height: 160rpx;
		line-height: 160rpx;
		text-align: center;
		font-size: 28rpx;
		color: #666666;
	}

	.pops {
		height: 100rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.pop-btn {
		width: 260rpx;
		height: 72rpx;
		border-radius: 5rpx;
		line-height: 72rpx;
		font-size: 26rpx;
		color: #666666;
		background: #cacaca;
		text-align: center;
	}

	.yess {
		background: #41bec9;
		color: #ffffff;
	}
</style>
