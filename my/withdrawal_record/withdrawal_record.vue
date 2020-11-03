<template>
	<!-- 提现记录 -->
	<view>
		<view v-if="hasRecord">
			<view class="record_list">
				<view class="record_icon"><image src="../../static/image/checked.png" mode=""></image></view>
				<view class="record_info">
					<view class="r">- 100.05 FIL</view>
					<view class="s" :style="{'color':n==0?'#F9B81A':n==2?'#36BC36':'#ED481C'}">审核通过，区块链确认中</view>
					<view class="h">OXS1D2S4D54SD5A...</view>
					<view class="h">2020/08/13 14:02:15</view>
				</view>
			</view>
		</view>
		<view class="no_record" v-else>
			<image src="../../static/image/help_img.png" mode=""></image>
			<view>暂无记录~</view>
		</view>
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
	align-content: space-around;
	justify-content: space-between;
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
}
.no_record{
	padding-top: 98rpx;
	
}
.no_record>image{
	width: 407rpx;
	height:348rpx;
	margin: 0 auto;
}
.no_record>view{
	text-align: center;
	line-height: 50rpx;
	font-size: 30rpx;
	font-weight: 600;
	color: #222222;
	opacity: 0.9;
}
</style>
