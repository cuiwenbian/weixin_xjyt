<template>
	<!-- 提现 -->
	<view>
		<view class="withdrawal">
			<view class="line_"></view>
			<view class="adr_line">
				<view class="tsd">收款地址：</view>
				<view class="tsd_imgs">
					<view><image style="width: 46rpx;height:46rpx;" src="../../static/image/scan_code.png" mode=""></image></view>
					<view style="color:#BFBFBF;">|</view>
					<view><image style="width: 45rpx;height:50rpx;" src="../../static/image/address_book.png" mode=""></image></view>
				</view>
			</view>
			<view class="line_"></view>
			<view class="amount_line">
				<view class="tit">提现金额</view>
				<view class="int">
					<input type="text" value="324" />
					<view>全部</view>
				</view>
				<view class="avaible">
					<view>可用：1500522.0000</view>
					<view>手续费：0.1fil/笔</view>
				</view>
			</view>
			<view class="line_"></view>
			<view class="adr_line">
				<view class="tsd">实际到账：</view>
				<view class=""><view style="color:#BFBFBF;">0</view></view>
			</view>
			<view class="tips">
				<view class="tips_tit">温馨提示</view>
				<view class="tips_con">
					您的提币转账将走区块链转账，转账过程需要等待链上确认。 为了保障您的资金安全，我们会对您的提币进行人工审核， 提交后请耐心等待。你可以点击此处，
					<span>查看提现记录</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script></script>

<style>
page {
	background: #f6f6f6;
}
.withdrawal {
}
.line_ {
	width: 100%;
	height: 20rpx;
}
.adr_line {
	width: 100%;
	height: 113rpx;
	background-color: #ffffff;
	padding: 0 42rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.tsd {
	font-size: 30rpx;
	font-weight: 500;
	color: #24262f;
}
.tsd_imgs {
	width: 20%;
	display: flex;
	justify-content: space-between;
}
.amount_line {
	width: 100%;
	height: 349rpx;
	background-color: #ffffff;
	padding: 0 42rpx;
	box-sizing: border-box;
}
.tit {
	font-size: 30rpx;
	font-weight: 500;
	color: #24262f;
	padding-top: 42rpx;
	padding-bottom: 63rpx;
	box-sizing: border-box;
}
.int {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1rpx solid #f7f7f7;
}
.int > input {
	width: 80%;
	font-size: 84rpx;
	font-weight: 500;
	color: #24262f;
}
.int > view {
	font-size: 30rpx;
	font-weight: 500;
	color: #0090ff;
}
.avaible {
	display: flex;
	justify-content: space-between;
}
.avaible > view {
	font-size: 24rpx;
	font-weight: 500;
	color: #24262f;
	opacity: 0.53;
	margin-top: 22rpx;
}
.tips{
	margin-top: 97rpx;
	padding: 0 42rpx;
	box-sizing: border-box;
	text-align: center;
}
.tips_tit{
	font-size: 28rpx;
	font-weight: 600;
	color: #222222;
}
.tips_con{
	font-size: 24rpx;
	font-weight: 400;
	color: #888888;
	line-height: 41rpx;
	margin-top: 25rpx;
}
.tips_con>span{
	color:#0090FF;
}
</style>
