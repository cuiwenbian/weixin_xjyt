<template>
	<view>
		<wTitleBar textColor="#fff" @open="hendleclick"></wTitleBar>
		<uni-drawer ref="drawer"></uni-drawer>
		<view class="peofit_con">
			<view class="shade" v-if="shade">
				<view class="pop">
					<view class="pop-title">您还没有登录</view>
					<view class="pops">
						<view class="pop-bn" @click="sure">登录</view>
					</view>
				</view>
			</view>
			<view class="pro_banner">
				<view class="pro_pop">
					<view class="account">账户资产（FIL）</view>
					<view class="profit">{{ fil_counts }}</view>
					<view class="zh">≈￥{{(fil_price*fil_counts).toFixed(2)}}</view>
				</view>
				<view class="withdrawal_btn" @click="btn" hover-class="actived">提现</view>
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
						<view>{{ available}}</view>
						<view>¥{{(fil_price*available).toFixed(2)}}</view>
					</view>
				</view>
				<view class="record_">
					<view class="re_img">
						<image src="../../static/image/filecoin-logo.png" mode=""></image>
						<view class="fil_statu">官方质押</view>
					</view>
					<view class="fil">
						<view>{{ pledge }}</view>
						<view>¥{{(fil_price*pledge).toFixed(2)}}</view>
					</view>
				</view>
				<view class="record_">
					<view class="re_img">
						<image src="../../static/image/filecoin-logo.png" mode=""></image>
						<view class="fil_statu">官方冻结</view>
					</view>
					<view class="fil">
						<view>{{ freeze }}</view>
						<view>¥{{(fil_price*freeze).toFixed(2)}}</view>
					</view>
				</view>
			</view>
			<view class="record_lists" v-if="sel_tab === '2'">
				<div class="item"><dyDatePicker :value="date" timeType="month" @getData="DateChange" :placeholder="date"></dyDatePicker></div>
				<view v-if="flag">
					<image class="transfer" src="../../static/image/no-machine.png" mode=""></image>
					<view class="info">没有记录～</view>
				</view>
				<block v-else v-for="(item, index) in profit_all_fill" :key="index">
					<view class="record_">
						<view class="re_img">
							<image src="../../static/image/filecoin-logo.png" mode=""></image>
							<view class="fil" style="text-align: left;margin-left: 20rpx;">
								<view>服务器收益</view>
								<view>{{ item.time }}</view>
							</view>
						</view>
						<view class="fil_statu" v-if="item.machine_profit>0">+{{ item.machine_profit.toFixed(4) }}</view>
					    <view class="fil_statu" v-else>{{ item.machine_profit.toFixed(4) }}</view>
					</view>
					<view class="record_">
						<view class="re_img">
							<image src="../../static/image/filecoin-logo.png" mode=""></image>
							<view class="fil" style="text-align: left;margin-left: 20rpx;">
								<view>存力收益</view>
								<view>{{ item.time }}</view>
							</view>
						</view>
						<view class="fil_statu" v-if="item.cloud_profit>0">+{{ item.cloud_profit.toFixed(4) }}</view>
						<view class="fil_statu" v-else>{{ item.cloud_profit.toFixed(4) }}</view>
					</view>
					<view class="record_" v-if="item.dealer_queryset_sum">
						<view class="re_img">
							<image src="../../static/image/filecoin-logo.png" mode=""></image>
							<view class="fil" style="text-align: left;margin-left: 20rpx;">
								<view>经销商收益</view>
								<view>{{ item.time }}</view>
							</view>
						</view>
						<view class="fil_statu" v-if="item.dealer_queryset_sum">+{{ item.dealer_queryset_sum.toFixed(4) }}</view>
						<view class="fil_statu" v-else>{{ item.dealer_queryset_sum.toFixed(4) }}</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
import { debounce } from '@/common/utils.js';
import dyDatePicker from '@/components/dy-Date.vue';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
export default {
	data() {
		return {
			sel_tab: '1',
			n: true,
			fil_counts: '0.00',
			machine_month_profit: '0.00',
			cloud_month_profit: '0.00',
			month_profit: '0.00',
			dealer_machine_queryset: '',
			dealer_cloud_queryset: '',
			cloud_queryset: '',
			machine_queryset: '',
			profit_Detail: [],
			month_list: [],
			profit_all_fill: '',
			num: '0.00',
			pledge: '0.00', //质押
			freeze: '0.00', //冻结
			available: '0.00', //可用
			fee: '',
			fil_price:'', //fil币价
			add_item: '',
			profit: '0',
			entin: [{}],
			flag: false,
			ention: '',
			//控制下拉列表的显示隐藏，false隐藏、true显示
			index: 0,
			//选择的下拉列表下标
			date: '本月',
			teran: '',
			scrollTop: 0,
			old: {
				scrollTop: 0
			},
			shade: false,
			token:uni.getStorageSync('token')
		};
	},
	mounted() {
		if (this.token) {
			this.getALL()
			this.getProfit();
		} else {
			this.shade = true
		}
	
	},
	components: {
		uniDrawer,
		dyDatePicker
	},
	onHide() {
		this.$refs.drawer.close();
	},
	methods: {
		linkToTransfer2: debounce(function() {
			uni.navigateTo({
				url: '../login/login'
			});
		
		}, 1000, true),
		sure: function() {
			this.linkToTransfer2()
		},
		hendleclick() {
			this.$refs.drawer.open();
		},
		handleSelectTab(tab) {
			var that = this;
			that.sel_tab = tab;
			var data = new Date();
			var text = data.getFullYear('-');
			var txt = data.getMonth() + 1;
			var teran = text + '-' + txt;
			that.teran = teran;
			if (that.sel_tab === '2') {
				console.log("mlir")
				that.date = '本月';
				uni.request({
					url: this.url + 'assets/month/profit/',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					data: {
						month: teran
					},
					success(res) {
						that.month_list = [];
						that.profit_Detail = [];
						var seront = res.data.data;
						that.machine_month_profit = parseFloat(seront.month_details.machine_month_profit).toFixed(2); //服务器月总收益
						that.cloud_month_profit = parseFloat(seront.month_details.cloud_month_profit).toFixed(2); //存力月总收益
						that.month_profit = parseFloat(seront.month_details.month_profit).toFixed(4); //服务器存力月总收益
						var profit = res.data.data.profit_details.reverse();
						for (var i = 0; i < profit.length; i++) {
							for (var key in profit[i]) {
								that.month_list.push(key);
								that.profit_Detail.push(profit[i][key]);
			
								var arr2 = [];
								for (var i in that.month_list) {
									arr2.push({
										time: that.month_list[i]
									});
								}
								var obj = that.profit_Detail.map((item, index) => {
									return { ...item, ...arr2[index] };
								});
								that.profit_all_fill = obj;
							}
						}
						if (profit == '') {
							that.flag = true;
						} else {
							that.flag = false;
						}
					}
				});
			}
		},
		explain() {
			uni.navigateTo({
				url: '../../my/explain/explain'
			});
		},
		getALL(){
			var that = this;
			uni.request({
				url: this.url + 'assets/', //资产收益
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					console.log(res);
					that.pledge = parseFloat(res.data.pledge_num).toFixed(4); //质押
					that.freeze = parseFloat(res.data.locked_num).toFixed(4); //冻结
					that.available = parseFloat(res.data.availed_num).toFixed(4); //可用
					//that.fil_counts = parseFloat(res.data.locked_num)+parseFloat(res.data.locked_num)+parseFloat(res.data.availed_num)   //总资产
					that.fil_counts = (Number(res.data.pledge_num) + Number(res.data.locked_num) + Number(res.data.availed_num)).toFixed(4); //总资产
					that.fee = res.data.fee; //手续费
					that.fil_price=res.data.fil_price;
				}
			});
		},
		getProfit() {
			var that = this;
			var data = new Date();
			var text = data.getFullYear('-');
			var txt = data.getMonth() + 1;
			var teran = text + '-' + txt;
			that.teran = teran;
			// 这是收入记录请求API
			uni.request({
				url: this.url + 'assets/month/profit/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				data: {
					month: that.teran
				},
				success(res) {
					console.log(res);
					that.month_list = [];
					that.profit_Detail = [];
					var seront = res.data.data;
					that.machine_month_profit = parseFloat(seront.month_details.machine_month_profit).toFixed(2); //服务器月总收益
					that.cloud_month_profit = parseFloat(seront.month_details.cloud_month_profit).toFixed(2); //存力月总收益
					that.month_profit = parseFloat(seront.month_details.month_profit).toFixed(4); //服务器存力月总收益
					var profit = res.data.data.profit_details.reverse();
					for (var i = 0; i < profit.length; i++) {
						for (var key in profit[i]) {
							that.month_list.push(key);
							that.profit_Detail.push(profit[i][key]);
							var arr2 = [];
							for (var i in that.month_list) {
								arr2.push({
									time: that.month_list[i]
								});
							}
							var obj = that.profit_Detail.map((item, index) => {
								return { ...item, ...arr2[index] };
							});
							that.profit_all_fill = obj;
							console.log(obj);
						}
					}
					if (profit == '') {
						that.flag = true;
					} else {
						that.flag = false;
					}
				}
			});
		},
		scroll(e) {
			this.old.scrollTop = e.detail.scrollTop;
		},
		next: function() {
			this.n = false;
		},
		back: function() {
			this.n = true;
		},
		bindChange(e) {
			const val = e.detail.value;
			this.year = this.years[val[0]];
			this.month = this.months[val[1]];
			this.day = this.days[val[2]];
		},
		linkToTransfer: debounce(
			function() {
				uni.navigateTo({
					url: '../../my/withdrawal/withdrawal?bar=' + this.available + '&fee=' + this.fee
				});
			},
			1000,
			true
		),
		btn() {
			this.linkToTransfer();
		},
		btnCoin() {
			uni.showToast({
				title: '此功能暂未开放',
				duration: 2000,
				icon: 'none'
			});
		},
		optionTap(e) {
			var that = this;
			let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
			var time = this.selectData[Index];
			(this.index = Index), (this.selectShow = !this.selectShow);
			uni.request({
				url: this.url + 'month/profit/',
				method: 'GET',
				data: {
					month: that.selectData[that.index]
				},
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {}
			});
		},
		//收益日期选择
		DateChange(e) {
			var that = this;
			that.date = e;
			uni.request({
				url: this.url + 'assets/month/profit/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				data: {
					month: e
				},
				success(res) {
					that.month_list = [];
					that.profit_Detail = [];
					var seront = res.data.data;
					that.machine_month_profit = parseFloat(seront.month_details.machine_month_profit).toFixed(2); //服务器月总收益
					that.cloud_month_profit = parseFloat(seront.month_details.cloud_month_profit).toFixed(2); //存力月总收益
					that.month_profit = parseFloat(seront.month_details.month_profit).toFixed(4); //服务器存力月总收益
					var profit = res.data.data.profit_details.reverse();
					for (var i = 0; i < profit.length; i++) {
						for (var key in profit[i]) {
							that.month_list.push(key);
							that.profit_Detail.push(profit[i][key]);
							var arr2 = [];
							for (var i in that.month_list) {
								arr2.push({
									time: that.month_list[i]
								});
							}
							var obj = that.profit_Detail.map((item, index) => {
								return { ...item, ...arr2[index] };
							});
							that.profit_all_fill = obj;
						}
					}
					if (profit == '') {
						that.flag = true;
					} else {
						that.flag = false;
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
.peofit_con {
	padding: 8rpx 24rpx;
	box-sizing: border-box;
}
.uppop{
	position: absolute;
	
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
	&.actived{
		background-color: rgba(0,0,0,.18);
	}
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
.item {
	height: 100rpx;
	font-size: 22rpx;
	text-align: left;
	position: relative;
}
.record_ {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1rpx solid #f7f7f7;
	padding-top: 35rpx;
	padding-bottom: 35rpx;
}
.transfer {
	width: 344rpx;
	height: 252rpx;
	display: block;
	margin: 152rpx auto 35rpx;
}

.info {
	text-align: center;
	color: #8796aa;
	font-size: 26rpx;
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
.fil > view {
	font-size: 30rpx;
	font-weight: 500;
	color: #141414;
}
.fil > view:last-child {
	font-size: 24rpx;
	font-weight: 500;
	color: #141414;
	opacity: 0.49;
}
/*  */
.shade {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .4);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
	}

	.pop {
		width: 550rpx;
		height: 300rpx;
		margin: 500rpx auto;
		padding: 0 60rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 10rpx;
	}

	.pop-title {
		height: 180rpx;
		line-height: 180rpx;
		text-align: center;
		font-size: 26rpx;
	}

	.pops {
		height: 100rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.pop-bn {
		width: 158rpx;
		height: 66rpx;
		border-radius: 20rpx;
		line-height: 66rpx;
		font-size: 28rpx;
		color: #ffffff;
		background-color: #3872FF;
		text-align: center;
	}
</style>
