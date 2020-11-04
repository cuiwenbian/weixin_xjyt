<template>
	<view>
		<wTitleBar  textColor="#fff" @open="hendleclick"></wTitleBar>
		<uni-drawer ref="drawer"></uni-drawer>
		<view class="peofit_con">
			<view class="pro_banner">
				<view class="pro_pop">
					<view class="account">账户资产（FIL）</view>
					<view class="profit">7500.0000</view>
					<view class="zh">≈￥750000</view>
				</view>
				<view class="withdrawal_btn">提现</view>
			</view>
			<view class="annotation">注释：收益规则请查看 <span style="color:#1E8BE7;">结算说明</span>，最终解释权归星际云通所有！</view>
		    
		</view>
	</view>
</template>

<script>
	import { debounce } from '@/common/utils.js';
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
	export default {
		data(){
			return {
				
			}
		},
		components: {
			uniDrawer,
		},
		methods:{
			
		}
		
	}
</script>

<style>
	.peofit_con{
		padding: 8rpx 24rpx;
		box-sizing: border-box;
	}
	.pro_banner{
		width: 100%;
		height: 284rpx;
		background-image: url(../../static/image/filcoin_bg.png);
		background-size: 100% 100%;
		position: relative;
	}
	.pro_pop{
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		height: 284rpx;
		padding:60rpx 69rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.account{
		font-size: 28rpx;
		font-weight: 300;
		color: #FFFFFF;
	}
	.profit{
		font-size: 60rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
	.zh{
		font-size: 24rpx;
		font-weight: 300;
		color: #FFFFFF;
	}
	.withdrawal_btn{
		width: 157rpx;
		height: 54rpx;
		background:rgba(224, 246, 255, .47);
		border-radius: 27rpx;
		position: absolute;
		right: 67rpx;
		bottom:58rpx;
		z-index: 99;
		font-size: 28rpx;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		line-height: 54rpx;
	}
	.annotation{
		font-size: 24rpx;
		font-weight: 400;
		color: #999999;
		text-align: center;
	}
</style>
