<template>
	<view>
		<view class="validate" @click="prompt" v-if="verify">您的存力发生改变，请点击签名验收！</view>
		<view class="power_ban">
			<image src="../../static/image/my_powe_bannerr.png" mode=""></image>
			<view class="pop_txt">
				<view class="txt">我的存力</view>
				<view class="power_nums">{{ hashrate_total }}T</view>
			</view>
		</view>
		<view class="power_list" v-if="cunli">
			<image class="nomachine" src="../../static/image/no-machine.png" mode=""></image>
			<view style="color:#111111;font-size:24rpx;text-align: center;line-height: 95rpx;">暂无存力</view>
		</view>
		<view class="power_list" v-else>
			<view class="power_eve" v-for="(server, index) in contract" :key="index">
				<image src="../../static/image/bg_img.png" class="pos_bgimg" mode=""></image>
				<view class="eve_left">
					<view class="e1">{{ server.name }}</view>
					<view class="e2">日期：{{ server.starttime }}至{{ server.endtime }}</view>
					<view class="e2">剩余时间：{{ server.days }}天</view>
				</view>
				<view class="eve_right">
					<view class="circle_process"><cmd-circle cid="circle14" type="circle" :percent="server.hashrate"></cmd-circle></view>
					<view class="e3">
						{{ server.hashrate }}
						<span style="font-size: 30r0px;">T</span>
					</view>
				</view>
			</view>
		</view>
		<view class="shade" v-if="shade" @touchmove.stop.prevent="moveHandle">
			<view class="pop">
				<view class="pop-title">若不阅读和同意协议,无法使用此功能哦</view>
				<view class="pops">
					<view class="pop-btn1" @click="cancel">取消</view>
					<view class="pop-btn2" @click="sure">去阅读</view>
				</view>
			</view>
		</view>
		<view class="shade" v-if="sha" @touchmove.stop.prevent="moveHandle">
			<view class="pop1">
				<view class="pjin">存力验收</view>
				<view class="yokder"><image class="yokder" src="../static/images/nsrcsr.png" mode=""></image></view>
				<view class="pop-title1">您有新的存力已到账，请及时验收！</view>
				<view class="pops1"><view class="pop-btn" @click="validation">验收</view></view>
			</view>
		</view>
	</view>
</template>
<script>
import cmdCircle from '@/components/cmd-circle/cmd-circle.vue';
import { debounce } from '@/common/utils.js';
export default {
	data() {
		return {
			n: true,
			contract: [{}, {}],
			hashrate_total: '0',
			use_avg: '0',
			scrollTop: 0,
			old: {
				scrollTop: 0
			},
			cunli: true,
			categart: '',
			shade: false,
			sha: false,
			verify: false,
			chnerot: '',
			tess: '',
			machine_acceptance: 2
		};
	},
	components: { cmdCircle },
	onShow() {
		this.getAllInfo();
		var that = this;
		uni.request({
			url: this.url + 'usercloudagree/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
			},
			success(res) {
				console.log(res);
				that.chnerot = res.data.data.user_agreement;
				if (that.chnerot == 0) {
					that.shade = true;
				} else {
					that.shade = false;
				}
			}
		});
	},
	onLoad(option) {
		this.getAllInfo();
	},
	methods: {
		moveHandle: function(e) {
			e.preventDefault();
			e.stopPropagation();
		},
		cancel: function() {
			uni.navigateBack({
				delta: 1
			});
		},
		prompt: function() {
			this.sha = true;
		},
		getAllInfo() {
			var that = this;
			uni.request({
				url: this.url + 'mycloudss/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					console.log(res);
					var contract = [];
					var hashrate_total = 0; // 总数
					var use_total = 0;
					var use_avg = 0; // 平均数
					that.tess = res.data.data[1][0];
					console.log(that.tess);
					if (that.tess == 0) {
						that.verify = true;
					}
					if (that.tess == 1) {
						that.verify = false;
						that.sha = false;
					}
					if (res.data.data && res.data.data.length) {
						contract = res.data.data[0].map(item => {
							item.starttime = item.starttime ? item.starttime.substring(0, 10) : '';
							item.endtime = item.endtime ? item.endtime.substring(0, 10) : '';
							hashrate_total += parseFloat(item.hashrate || 0);
							use_total += parseFloat(item.use || 0);
							return item;
						});
						use_avg = (use_total / res.data.data.length).toFixed(2);
					}
					that.hashrate_total = hashrate_total;
					that.use_avg = use_avg;
					that.contract = contract;
					if (that.contract.length != 0) {
						that.cunli = false;
					}
				}
			});
		},
		linkToTransfer2: debounce(
			function() {
				uni.navigateTo({
					url: '../powerAgreement/powerAgreement'
				});
			},
			500,
			true
		),
		sure: function() {
			this.linkToTransfer2();
		},
		linkToTransfer1: debounce(
			function() {
				uni.navigateTo({
					url: '../powerAgreement/powerAgreement'
				});
			},
			500,
			true
		),
		surePower: function() {
			this.linkToTransfer1();
		},
		scroll(e) {
			this.old.scrollTop = e.detail.scrollTop;
		},
		backFront: function() {
			console.log(123);
			uni.navigateBack({
				delta: 1
			});
		},
		transfer: function(item) {
			var that = this;
			uni.request({
				url: this.url + 'cloudtransfers/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					console.log(res);
					if (res.statusCode == 200) {
						uni.navigateTo({
							url: '../power-transfer/power-transfer?ids=' + item.id + '&day=' + item.days + '&rate=' + item.hashrate
						});
					}
					if (res.statusCode == 400) {
						uni.showToast({
							icon: 'none',
							title: '未实名认证通过或未设置交易密码'
						});
					}
				}
			});
		},
		bt: function() {
			uni.navigateBack({
				delta: 1
			});
		},
		bbctn: function() {
			uni.showToast({
				title: '存力转让功能暂未开放',
				icon: 'none',
				duration: 3000
			});
		},
		validation: function() {
			uni.navigateTo({
				url: '../sign/index?machine_acceptance=' + this.machine_acceptance
			});
			/* uni.request({
					url: this.url + 'cloudmachine/',
					method: 'POST',
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					success(res) {
						console.log(res)
					}
				});
				uni.showToast({
					title: '已验收'
				});
				this.sha = false;
				this.verify = false; */
		}
	}
};
</script>

<style>
.validate {
	width: 100%;
	height: 89rpx;
	background-color: #e74b27;
	line-height: 89rpx;
	font-size: 30rpx;
	font-weight: 300;
	color: #ffffff;
	padding-left: 42rpx;
	box-sizing: border-box;
}
.power_ban {
	width: 100%;
	height: 273rpx;
	position: relative;
}
.power_ban > image {
	width: 100%;
	height: 100%;
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
	color: #ffffff;
}
.power_list {
	padding: 50rpx 42rpx;
}
.nomachine {
	width: 344rpx;
	height: 252rpx;
	display: block;
	margin: 190rpx auto 0;
}
.power_eve {
	width: 100%;
	height: 172rpx;
	background: #ffffff;
	box-shadow: 6rpx 4rpx 16rpx 0rpx rgba(19, 63, 230, 0.11);
	border-radius: 10rpx;
	margin-bottom: 36rpx;
	padding: 28rpx 27rpx;
	box-sizing: border-box;
	display: flex;
	position: relative;
}
.pos_bgimg {
	width: 252rpx;
	height: 85rpx;
	position: absolute;
	right: -42rpx;
	bottom: 0;
}
.eve_left {
	width: 70%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
}
.e1 {
	font-size: 30rpx;
	font-weight: 600;
	color: #2f363d;
}
.e2 {
	font-size: 24rpx;
	font-weight: 400;
	color: #2f363d;
	opacity: 0.6;
}
.eve_right {
	width: 30%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
}
.circle_process {
	widht: 64rpx;
	height: 64rpx;
}
.e3 {
	font-size: 60rpx;
	font-weight: 500;
	color: #2f363d;
}
/* 弹框css */
	.shade {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99999;
	}
	.pop {
		width: 550rpx;
		height: 300rpx;
		margin: 400rpx auto;
		padding: 0 60rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 10rpx;
	
	}
	
	.pop1 {
		width: 550rpx;
		height: 600rpx;
		margin: 400rpx auto;
		padding: 0 60rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 10rpx;
	} 
	.yokder{
	    width: 279rpx;
	    height: 279rpx;
	    margin: 0 auto;
	    border-radius: 160rpx;
	}
	.pjin{
	    text-align: center;
	    padding-top: 30rpx; 
	    padding-bottom: 30rpx; 
	    font-size: 32rpx; 
	    font-weight:600 ;
	}
	.pop-title {
		height: 180rpx;
		line-height: 180rpx;
		text-align: center;
		font-size: 24rpx;
	    font-weight: 600;
	}
	.pop-title1 {
		height: 120rpx;
		line-height: 120rpx;
		text-align: center;
		font-size: 24rpx;
	    font-weight: 600;
	}
	
	.pops {
		height: 100rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	.pops1 {
		height: 100rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	
	.pop-btn1 {
		width: 158rpx;
		height: 66rpx;
		border-radius: 50rpx;
		line-height: 66rpx;
		font-size: 26rpx;
		color: #333;
		text-align: center;
	}
	.pop-btn2{
		width: 35%;
		height: 66rpx;
		border-radius: 50rpx;
		line-height: 66rpx;
		font-size: 26rpx;
		color: #fff;
		text-align: center;
		background-image: linear-gradient(to right, #01c774, #01dda9);
	}
	.pop-btn{
		width: 90%;
		height: 66rpx;
		border-radius: 50rpx;
		line-height: 66rpx;
		font-size: 26rpx;
		color: #fff;
		text-align: center;
		background-image: linear-gradient(to right, #01c774, #01dda9);
	}
	
	.pop-bt {
		width: 158rpx;
		height: 66rpx;
		border-radius: 10rpx;
		line-height: 66rpx;
		font-size: 30rpx;
		color: #999999;
		text-align: center;
		background: #fff;
	}
</style>
