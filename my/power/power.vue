<template>
	<view>
		<view class="validate">
			您的存力发生改变，请点击签名验收！
		</view>
		<view class="power_ban">
			<image src="../../static/image/my_powe_bannerr.png" mode="">
			</image>
			<view class="pop_txt">
				<view class="txt">我的存力</view>
				<view class="power_nums">75000T</view>
			</view>
		</view>
		<view class="power_list">
			<view class="power_eve">
				<image src="../../static/image/bg_img.png" class="pos_bgimg" mode=""></image>
				<view class="eve_left">
					<view class="e1">长三角矿池</view>
					<view class="e2">日期：2020/10/28-2022/10/28</view>
					<view class="e2">剩余时间：365天</view>
				</view>
				<view class="eve_right">
					<view class="circle_process">
						<cmd-circle cid="circle14" type="circle" :percent="45" ></cmd-circle>
					</view>
					<view class="e3">70 <span style="font-size: 30r0px;">T</span></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cmdCircle from "@/components/cmd-circle/cmd-circle.vue"
	export default{
		data(){
			return {
			}
		},
		components: {cmdCircle},
		methods:{
			
		}
	}
</script>

<style>
	.validate{
		width: 100%;
		height: 89rpx;
		background-color: #E74B27;
		line-height: 89rpx;
		font-size: 30rpx;
		font-weight: 300;
		color: #FFFFFF;
		padding-left: 42rpx;
		box-sizing: border-box;
	}
	.power_ban {
		width: 100%;
		height: 273rpx;
		position: relative;
	}
	.power_ban>image{
		width: 100%;
		height: 100%;
	}
	.pop_txt {
		width: 100%;
		height:273rpx;
		padding:75rpx 0 70rpx 43rpx;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		/* 水平均匀分布 */
		flex-direction: column;
	}

	.txt {
		font-size: 30rpx;
		font-weight: 300;
		color: #fff;
	}

	.power_nums {
		font-size: 60rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
	.power_list{
		padding: 50rpx 42rpx;
	}
	.power_eve{
		width: 100%;
		height: 172rpx;
		background: #FFFFFF;
		box-shadow: 6rpx 4rpx 16rpx 0rpx rgba(19, 63, 230, 0.11);
		border-radius: 10rpx;
		margin-bottom: 36rpx;
		padding:28rpx 27rpx;
		box-sizing: border-box;
		display: flex;
		position: relative;
	}
	.pos_bgimg{
		width: 252rpx;
		height: 85rpx;
		position: absolute;
		right: -42rpx;
		bottom: 0;
	}
	.eve_left{
		width: 70%;
		height:100%;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.e1{
		font-size: 30rpx;
		font-weight: 600;
		color: #2F363D;
	}
	.e2{
		font-size: 24rpx;
		font-weight: 400;
		color: #2F363D;
		opacity: 0.6;
	}
	.eve_right{
		width: 30%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
	}
	.circle_process{
	   widht:64rpx;
	   height:64rpx;
	}
	.e3{
		font-size: 60rpx;
		font-weight: 500;
		color: #2F363D;
	}
</style>
