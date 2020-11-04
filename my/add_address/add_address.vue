<template>
	<!-- 添加地址 -->
	<view>
		<view class="line"></view>
		<view class="record_list">
			<view class="record_icon"><image src="../../static/image/filecoin-logo.png" mode=""></image></view>
			<view class="record_info"><view>FIL</view></view>
		</view>
		<view class="line1">地址信息</view>
		<view class="info_input">
			<view class="name">
				<input style="width: 88%;" type="text" value="" placeholder="请输入地址" />
				<image src="../../static/image/scan_code2.png" mode=""></image>
			</view>
			<view class="name"><input type="text" value="" placeholder="备注" /></view>
		</view>
		<view class="save">保存</view>
	</view>
</template>

<script></script>

<style>
page {
	background-color: #f6f6f6;
}
.line {
	height: 20rpx;
}
.line1 {
	width: 100%;
	height: 98rpx;
	line-height: 98rpx;
	padding-left: 42rpx;
	box-sizing: border-box;
}
.record_list {
	width: 100%;
	height: 163rpx;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	padding: 0 26rpx;
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
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 20rpx 0;
	box-sizing: border-box;
}
.info_input {
	width: 100%;
	height: 220rpx;
	background-color: #ffffff;
	padding: 0 42rpx;
	box-sizing: border-box;
}
.name {
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.name:first-child {
	border-bottom: 1rpx solid #f7f7f7;
}
.name>image{
	width: 39rpx;
	height: 39rpx;
}
.save{
	width: 667rpx;
	height: 100rpx;
	background: #0090FF;
	border-radius: 50rpx;
	font-size: 37rpx;
	font-weight: 600;
	color: #FFFFFF;
	line-height: 100rpx;
	text-align: center;
	margin:121rpx auto;
}
</style>
