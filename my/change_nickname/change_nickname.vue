<template>
	<!-- 个人资料 -->
	<view class="maincontent">
		<view class="s-line"></view>
		<view class="l" @click="personal">
			<view class="infoo">
				<view><input type="text" :value="nickname" /></view>
				<view class="avator"><image class="pic" src="../../static/image/clear_txt.png" mode=""></image></view>
			</view>
		</view>
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


.s-line {
	width: 100%;
	height: 20rpx;
	background: #eee;
}

.avator {
	width: 48rpx;
	height: 48rpx;
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
