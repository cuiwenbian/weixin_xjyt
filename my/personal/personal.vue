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
		<view class="logout">退出登录</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			nickname: '232'
		};
	},
	onLoad(option) {
		// this.nickname = option.nickname;
	}
};
</script>

<style>
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
}

</style>
