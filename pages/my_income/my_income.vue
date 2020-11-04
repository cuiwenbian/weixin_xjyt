<template>
	<view>
		<wTitleBar textColor="#fff" @open="hendleclick"></wTitleBar>
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
			<view class="annotation">
				注释：收益规则请查看
				<span style="color:#1E8BE7;" @click="explain">结算说明</span>
				，最终解释权归星际云通所有！
			</view>
			<view class="con_txt">
				<text :class="['bt-tab', sel_tab === '1' ? 'bt-tab-active' : '']" @click="handleSelectTab('1')">资产</text>
				<span>/</span>
				<text :class="['bt-tab', sel_tab === '2' ? 'bt-tab-active' : '']" @click="handleSelectTab('2')">记录</text>
			</view>
			<view class="record_lists" v-if="sel_tab === '1'">
				<view class="record_">
					<view class="re_img">
						<image src="../../static/image/filecoin-logo.png" mode=""></image>
						<view class="fil_statu">当前可用</view>
					</view>
					<view class="fil">
						<view>7500.0000</view>
						<view>¥750.00</view>
					</view>
				</view>
			</view>
			<view class="record_lists" v-if="sel_tab === '2'"></view>
		</view>
	</view>
</template>

<script>
import { debounce } from '@/common/utils.js';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
export default {
	data() {
		return {
			sel_tab: '1'
		};
	},
	components: {
		uniDrawer
	},
	methods: {
		hendleclick() {
			this.$refs.drawer.open();
		},
		handleSelectTab(tab) {
			this.sel_tab = tab;
		},
		explain(){
			uni.navigateTo({
				url:'../../my/explain/explain'
			})
		}
	}
};
</script>

<style>
.peofit_con {
	padding: 8rpx 24rpx;
	box-sizing: border-box;
}
.pro_banner {
	width: 100%;
	height: 284rpx;
	background-image: url(../../static/image/filcoin_bg.png);
	background-size: 100% 100%;
	position: relative;
}
.pro_pop {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 284rpx;
	padding: 60rpx 69rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
}
.account {
	font-size: 28rpx;
	font-weight: 300;
	color: #ffffff;
}
.profit {
	font-size: 60rpx;
	font-weight: 500;
	color: #ffffff;
}
.zh {
	font-size: 24rpx;
	font-weight: 300;
	color: #ffffff;
}
.withdrawal_btn {
	width: 157rpx;
	height: 54rpx;
	background: rgba(224, 246, 255, 0.47);
	border-radius: 27rpx;
	position: absolute;
	right: 67rpx;
	bottom: 58rpx;
	z-index: 99;
	font-size: 28rpx;
	font-weight: 400;
	color: #ffffff;
	text-align: center;
	line-height: 54rpx;
}
.annotation {
	font-size: 24rpx;
	font-weight: 400;
	color: #999999;
	text-align: center;
}
.con_txt {
	padding-left: 28rpx;
	box-sizing: border-box;
	margin-top: 87rpx;
	margin-bottom: 60rpx;
}

.con_txt > span {
	color: #bfbfbf;
	display: inline-block;
	margin: 0 20rpx;
}

.bt-tab {
	color: #949494;
	font-size: 30rpx;
}

.bt-tab-active {
	font-size: 37rpx;
	font-weight: 600;
	color: #222222;
}
.record_lists {
	padding: 0rpx 28rpx;
}
.record_ {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1rpx solid #F7F7F7;
	padding-top: 35rpx;
	padding-bottom: 35rpx;
}
.re_img {
	display: flex;
	align-items: center;
}
.re_img > image {
	width: 70rpx;
	height: 70rpx;
}
.fil_statu {
	margin-left: 29rpx;
	font-size: 30rpx;
	font-weight: 500;
	color: #222222;
}
.fil {
	text-align: right;
}
.fil>view{
	font-size: 30rpx;
	font-weight: 500;
	color: #141414;
}
.fil>view:last-child{
	font-size: 24rpx;
	font-weight: 500;
	color: #141414;
	opacity: 0.49;
}
</style>
