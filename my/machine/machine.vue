<template>
	<view>
		<view class="validate" @click="prompt" v-if="verify">
			您的存力发生改变，请点击签名验收！
		</view>
		<view class="power_ban" >
			<image src="../../static/image/my_powe_bannerr.png" mode="">
			<view class="pop_txt">
				<view class="txt">我的服务器</view>
				<view class="power_nums">{{many}} <span style="font-size: 30rpx;">台</span></view>
			</view>
		</view>
		<view class="power_list" v-if='flag'>
			<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
			<block v-for="(item, index) in user_machine" :key="index">
			<view class="machine-sale-list" @click="select(item)" :id="item.machine_id">
				<image class='machine-pic' src="../../static/image/machine_img_bg.png"></image>
				<view class="machine-desc-info">
					<view class='machine-name'>{{ item.type }} {{ item.number }}</view>
					<view class='machine-in'>
						<view class='a'>已运行<text class='s'>{{ item.usedays }}</text>天</view>
						<view class='a'>剩余<text class='y'>{{ item.freedays }}</text>天</view>
					</view>
					<view class='all-free'><span>总容量{{ item.disk }}T</span></view>
				</view>
			</view>
			</block>
			</scroll-view>
		</view>
		<view class="power_list" v-else>
			<image class='nomachine' src="../../static/image/no-machine.png" mode=""></image>
			    <view style='color:#111111;font-size:24rpx;text-align: center;line-height: 95rpx;'>暂无服务器</view>
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
		        <view class="pjin">服务器验收</view>
		        <view class="yokder">
		            <!-- <image src="../static/images/cansrsst.png" mode=""></image> -->
		            <image class="yokder" src="../static/images/cansrsst.png" mode=""></image>
		        </view>
		        <view class="pop-title1">您有新的服务器需要验收</view>
				<view class="pops1">
					<view class="pop-btn" @click="validation">验收</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		debounce
	} from '@/common/utils.js';
	export default {
		data() {
			return {
				flag: true,
				user_machine: '',
				machine_id: '',
				user_agreement: '',
				shade: false,
				sha: false,
				ress: '',
				scrollTop: 0,
				old: {
					scrollTop: 0,
				},
				verify: false,
				many:'0',
				num:'0.00',
				machine_profit:'0.00',
				machine_acceptance:1
				
			};
		}, 
		onShow() {
			var that=this;
			uni.request({
				url: this.url + "assets/",
				method:'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					if(res.statusCode==200){
						that.machine_profit = parseFloat(res.data.machine_profit).toFixed(2) //服务器收益
					}
				}
			});
			uni.request({
				url: this.url + 'usermachines/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success: res => {
					console.log(res)
					this.user_machine = res.data.data.machine_datas[1];
					this.many=this.user_machine.length; //服务器台数
					if (this.user_machine.length == 0) {
						this.flag = false;
					}
					this.user_agreement = res.data.data.user_agreement; //是否验收
					if (this.user_agreement == 0) {
						this.shade = true;
					} else if (this.user_agreement == 1) {
						this.shade = false;
					}
					this.ress = res.data.data.machine_datas[0]; //是否验收
					if (this.ress == 0) {
						this.verify = true;
					} else {
						this.verify = false;
						this.sha = false;
					}
				}
			});
		},
		methods: {
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			backFront(){
				uni.navigateBack({
					delta:1
				})
			},
			salemachine:function(){
			    uni.showToast({
			    	title:'服务器出售功能暂未开放',
					icon:'none',
					duration:3000
			    })	
			},
			moveHandle: function(e) {
				e.preventDefault();
				e.stopPropagation();
			},
			linkToTransfer1: debounce(
				function() {
					uni.navigateTo({
						url: '../agreement/agreement'
					});
				},
				500,
				true
			),
			sure: function() {
				this.linkToTransfer1()
			},
			cancel: function() {
				uni.navigateBack({
					delta:1
				})
			},
			onNavigationBarButtonTap: function() {
				uni.navigateTo({
					url: '../../pages/agreement/agreement'
				});
			},
			linkToTransfer: debounce(
				function(item) {
					uni.navigateTo({
						url: '../machine-detail/machine-detail?machine_id=' + item.machine_id
					});
				},
				500,
				true
			),
			select: function(item) {
				console.log("xiangqing")
				this.linkToTransfer(item);
			},
			prompt: function() {
				this.sha = true;
			},
			can: function() {
				this.sha = false;
			},
			validation: function() {
				uni.navigateTo({
					url:"../sign/index?machine_acceptance="+this.machine_acceptance
				})
			}
		}
	};
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
	.nomachine{
		width:344rpx;
		height:252rpx;
		display: block;
		margin:190rpx auto 0;
	}
	.scroll-view {
		width: 100%;
		height: 100%;
	}
	.machine-sale-list {
		width: 100%;
		height: 202rpx;
		margin: 37rpx auto;
		position: relative;
		display: flex;
	
	}
	.machine-pic {
		width: 160rpx;
		height: 202rpx;
	}
	.machine-desc-info {
		margin-left: 28rpx;
	}
	.machine-name {
		font-size: 34rpx;
		font-weight: 600;
		color: #111111;
		line-height: 50rpx;
		margin-top: 10rpx;
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
	/* 弹框css */
	.shade {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
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
