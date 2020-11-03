<template>
	<!-- 转账成功 -->
	<view>
		<view class="main_tran_info">
			<view class="succ_img">
				<image src="../../static/image/successful.png" mode=""></image>
				<view>转账成功</view>
				<view>-9000.0000FIL</view>
			</view>
			<view class="desc_trans">
				<view class="desc_trans_one">
					<view class="label_tr">提交时间：</view>
					<view class="label_qs">2020/11/26 18:55</view>
				</view>
				<view class="desc_trans_one">
					<view class="label_tr">接收地址：</view>
					<view class="label_qs">OXZCSADAS4D5A4SD531ASD2AS2X10A D1AS2D1AS31D2ASDASD</view>
				</view>
				<view class="desc_trans_one">
					<view class="label_tr">Txid：</view>
					<view class="label_qs">OXZCSADAS4D5A4SD531ASD2AS2X10A D1AS2D1AS31D2ASDASD</view>
				</view>
				<view class="desc_trans_one">
					<view class="label_tr">处理时间：</view>
					<view class="label_qs">2020/11/26 18:55</view>
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
.main_tran_info {
	width: 89%;
	height: auto;
	background-color: #ffffff;
	margin: 22rpx auto;
	padding: 30rpx 36rpx;
	box-sizing: border-box;
}
.succ_img {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.succ_img > image {
	width: 152rpx;
	height: 152rpx;
}
.succ_img > view {
	margin-top: 28rpx;
	font-size: 37rpx;
	font-weight: 600;
	color: #222222;
	margin-bottom: 26rpx;
}
.desc_trans {
	margin-top: 100rpx;
}
.desc_trans_one {
	margin: 48rpx 0;
}
.label_tr {
	font-size: 30rpx;
	font-weight: 500;
	color: #333333;
	opacity: 0.7;
	line-height: 50rpx;
}
.label_qs {
	font-size: 30rpx;
	font-weight: 500;
	color: #333333;
	line-height: 45rpx;
}
</style>
