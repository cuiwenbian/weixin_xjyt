<template>
	<!-- 实名认证成功 -->
	<view>
		<view class="succ_img">
			<image src="../../static/image/successful.png" mode=""></image>
			<view>实名认证已完成</view>
		</view>
		<view class="authentication_information">
			<view class="listline">
				<view class="labeler">真实姓名：</view>
				<view class="name">李晓超</view>
			</view>
			<view class="listline">
				<view class="labeler">身份证号：</view>
				<view class="name">410221189566454</view>
			</view>
		</view>
		<view class="tips">
			实名信息认证后无法修改
		</view>
	</view>
</template>

<script>
</script>

<style>
	.succ_img{
		margin-top: 96rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.succ_img>image{
		width:152rpx;
		height:152rpx;
	}
	.succ_img>view{
		font-size: 37rpx;
		font-weight: 600;
		color: #222222;
		line-height: 100rpx;
	}
	.authentication_information{
		width: 100%;
		padding:0 42rpx;
		box-sizing: border-box;
		margin-top: 45rpx;
	}
	.listline{
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0;
	}
	.labeler{
		font-size: 30rpx;
		font-weight: 500;
		color: #333333;
		opacity: 0.7;
	}
	.name{
		font-size: 30rpx;
		font-weight: 500;
		color: #333333;
	}
	.tips{
		width: 100%;
		position: fixed;
		bottom: 110rpx;
		font-size: 24rpx;
		text-align: center;
		font-weight: 600;
		color: #222222;
	}
</style>
