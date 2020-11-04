<template>
	<!-- 地址簿-->
	<view>
		<view v-if="hasRecord">
			<view class="record_list">
				<view class="record_icon"><image src="../../static/image/filecoin-logo.png" mode=""></image></view>
				<view class="record_info">
					<view class="r">地址备注名称显示在这里</view>
					<view class="h">OXS1D2S4D54SD5AOXS1D2S4D54SD5AOXS1D2S4D54SD5A</view>
				</view>
			</view>
		</view>
		<view class="no_record" v-else>
			<image src="../../static/image/help_img.png" mode=""></image>
			<view>您还没有添加地址哦！</view>
		</view>
		<view class="add_new_adr">新建地址</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				n:2,
				hasRecord:true
			}
		}
	}
</script>

<style>
page {
	background: #f6f6f6;
}
.record_list {
	width: 100%;
	height: 163rpx;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	padding:0 26rpx;
	box-sizing: border-box;
}
.record_icon {
	width: 14%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.record_icon > image {
	width: 90rpx;
	height: 90rpx;
}
.record_info {
	width: 84%;
	height: 100%;
	margin-left: 25rpx;
	display: flex;
	flex-direction: column;
	align-content: space-around;
	justify-content: space-around;
	flex-wrap: wrap;
	padding:20rpx 0;
	box-sizing: border-box;
	border-bottom: 1rpx solid #ECECEC;
}
.r {
	font-size: 31rpx;
	font-weight: 600;
	color: #222222;
}
.s {
	font-size: 24rpx;
	font-weight: 600;
	color: #f9b81a;
}
.h {
	font-size: 24rpx;
	font-weight: 300;
	color: #b1b1b1;
	word-break: break-all;
	word-wrap: break-word;
}
.no_record{
	padding-top: 171rpx;
	
}
.no_record>image{
	width: 473rpx;
	height:295rpx;
	margin: 0 auto;
}
.no_record>view{
	text-align: center;
	margin-top: 68rpx;
	font-size: 30rpx;
	font-weight: 600;
	color: #222222;
	opacity: 0.9;
}
.add_new_adr{
	width: 251rpx;
	height: 68rpx;
	background: #0090FF;
	border-radius: 34px;
	font-size: 30rpx;
	font-weight: 400;
	color: #FFFFFF;
	margin:50rpx auto;
	text-align: center;
	line-height: 68rpx;
}
</style>
