<template>
	<!-- 提现成功 -->
	<view>
		<view class="no_record">
			<image src="../../static/image/with_success.png" mode=""></image>
			<view>提现申请已提交，请耐心等待~</view>
			<view class="konw">知道了</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.no_record{
		padding-top: 98rpx;
		
	}
	.no_record>image{
		width: 329rpx;
		height:329rpx;
		margin: 0 auto;
	}
	.no_record>view{
		text-align: center;
		margin-top:52rpx;
		font-size: 30rpx;
		font-weight: 600;
		color: #222222;
		opacity: 0.9;
	}
	.konw{
		width: 251rpx;
		height: 68rpx;
		background: #0090FF;
		margin:118rpx auto;
		border-radius: 34rpx;
		font-size: 30rpx;
		font-weight: 400;
		color:#FFFFFF;
		text-align: center;
		line-height: 68rpx;
	}
</style>
