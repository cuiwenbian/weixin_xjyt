<template>
	<view>
		<image class="power_ban" src="../../static/image/my_powe_bannerr.png" mode="">
			<view class="pop_txt">
				<view class="txt">我的服务器</view>
				<view class="power_nums">7500 <span style="font-size: 30rpx;">台</span></view>
			</view>
		</image>
		<view class="power_list">
			<view class="machine-sale-list">
				<image class='machine-pic' src="../../static/image/machine_img_bg.png"></image>
				<view class="machine-desc-info">
					<view class='machine-name'>1U专业型  MD19200133</view>
					<view class='machine-in'>
						<view class='a'>已运行<text class='s'>34</text>天</view>
						<view class='a'>剩余<text class='y'>9374</text>天</view>
					</view>
					<view class='all-free'><span>存储5T/</span><span>总容量4T</span></view>
				</view>
			</view>
			<view class="machine-sale-list">
				<image class='machine-pic' src="../../static/image/machine_img_bg.png"></image>
				<view class="machine-desc-info">
					<view class='machine-name'>1U专业型  MD19200133</view>
					<view class='machine-in'>
						<view class='a'>已运行<text class='s'>34</text>天</view>
						<view class='a'>剩余<text class='y'>9374</text>天</view>
					</view>
					<view class='all-free'><span>存储5T/</span><span>总容量4T</span></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cmdCircle from "@/components/cmd-circle/cmd-circle.vue"
	export default {
		data() {
			return {}
		},
		components: {
			cmdCircle
		},
		methods: {

		}
	}
</script>

<style>
	.power_ban {
		width: 100%;
		height: 273rpx;
	}

	.pop_txt {
		width: 100%;
		height: 273rpx;
		padding: 75rpx 0 70rpx 43rpx;
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
	.power_list {
		padding: 26rpx 42rpx;
	}
	.machine-sale-list {
		width: 100%;
		height: 202rpx;
		margin: 37rpx auto;
		position: relative;
	}
	.machine-pic {
		width: 160rpx;
		height: 202rpx;
		float: left;
	}
	.machine-desc-info {
		float: left;
		margin-left: 28rpx;
	}
	.machine-name {
		font-size: 40rpx;
		font-weight: 600;
		color: #111111;
		line-height: 50rpx;
		font-family: 'myface_bold';
	}

	.machine-in {
		overflow: hidden;
		line-height: 70rpx;
	}

	.a {
		float: left;
		margin-right: 30rpx;
		font-size: 23rpx;
		font-weight: normal;
		color: #666666;
	}
	.s {
		color: #F6B506;
		font-size: 40rpx;
		font-family: 'myface_bold';
	}
	.y {
		color: #01C97A;
		font-size: 40rpx;
		font-family: 'myface_bold';
	}
	.all-free {
		color: #666666;
		font-size: 23rpx;
		line-height: 60rpx;
		font-family: 'myface_bold';
	}
</style>
