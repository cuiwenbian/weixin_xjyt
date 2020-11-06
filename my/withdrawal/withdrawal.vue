<template>
	<!-- 提现 -->
	<view>
		<view class="withdrawal">
			<view class="line_"></view>
			<view class="adr_line">
				<view class="tsd">
					<view>收款地址：</view>
				  <input type="text"  @input="getTranferAdd" :value="wallet_value">
				</view>
				<view class="tsd_imgs">
					<!-- <view><image style="width: 46rpx;height:46rpx;" src="../../static/image/scan_code.png" mode=""></image></view> -->
					<!-- <view style="color:#BFBFBF;">|</view> -->
					<view @click="link"><image style="width: 45rpx;height:50rpx;" src="../../static/image/address_book.png" mode=""></image></view>
				</view>
			</view>
			<view class="line_"></view>
			<view class="amount_line">
				<view class="tit">提现金额</view>
				<view class="int">
					<input type="text" @input="getFilNum" v-model="fil_num" placeholder="最小提币数量为10" placeholder-style="font-size:30rpx;color:#BFBFBF"/>
					<view @click="fusre">全部</view>
				</view>
				<view class="avaible">
					<view>可用：{{ bar || '0.00' }}</view>
					<view>手续费：0.1fil/笔</view>
				</view>
			</view>
			<view class="line_"></view>
			<view class="adr_line">
				<view class="tsd">实际到账：</view>
				<view class="">
					<view style="color:#BFBFBF;" v-if="fil_num>0">{{fil_num-0.1}}</view>
					<view style="color:#BFBFBF;" v-else>0</view>
					</view>
			</view>
			<view class="tips">
				<view class="tips_tit">温馨提示</view>
				<view class="tips_con">
					您的提币转账将走区块链转账，转账过程需要等待链上确认。 为了保障您的资金安全，我们会对您的提币进行人工审核， 提交后请耐心等待。你可以点击此处，
					<span @click="check_record">查看提现记录</span>
				</view>
			</view>
			<view class="submit-btn"   @click="save" hover-class="actived">提交</view>
		</view>
		<!-- #ifndef H5 -->
		<password-input v-if="passIn" @clo="clo" ref="wrong" @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
		<!-- #endif -->
		<!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
		<!-- #ifdef H5 -->
		<view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" :gutter="20" ref="wrong" :list="numberList"></password-input></view>
		<!-- #endif -->
		<!-- 数字键盘 -->
		<keyboard-package ref="number" @onChange="onChange" @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
	</view>
</template>

<script>
import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
import passwordInput from '../../components/password-input/password-input.vue';
import { debounce } from '@/common/utils.js';
export default {
	data() {
		return {
			bar: '0.00',
			moder: '',
			fee: '',
			password: '',
			numberList: [],
			length: 6,
			type: 'number',
			passIn: false,
			fil_num: '', //提币数量的值
			wallet_value: '',  //转账地址的值
			isFoucs:false
		}
	},
	components: {
		keyboardPackage,
		passwordInput
	},
	onLoad(res) {
		this.bar = res.bar;
		this.fee = res.fee;
		this.wallet_value = res.wallet_value;
	},
	onBackPress(option) {
		plus.key.hideSoftKeybord();
	},
	methods:{
		check_record(){
			uni.navigateTo({
				url:'../withdrawal_record/withdrawal_record'
			})
		},
		getFilNum: function(e) {
			this.fil_num = e.detail.value;
		},
		getTranferAdd: function(e) {
			this.wallet_value = e.detail.value;
		},
		linkToTransfer: debounce(function(){
			var that = this;
			uni.request({
				url: this.url + 'walletaddresss/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					if (res.statusCode == 400) {
						uni.showToast({
							title: '用户未实名认证',
							icon: 'none',
							duration: 2000
						});
					}
					if (res.statusCode == 201) {
						uni.showToast({
							title: '身份认证审核中，请等待',
							icon: 'none',
							duration: 2000
						});
					}
					if (res.statusCode == 200) {
						uni.redirectTo({
							url: '../choose-address/choose-address?bar=' + that.bar + '&fee=' + that.fee
						});
					}
					if (res.statusCode == 302) {
						uni.showToast({
							title: '用户未设置交易密码',
							icon: 'none',
							duration: 2000
						});
					}
				}
			});
		},500, true),
		link() {
			this.linkToTransfer()
		},
		fusre() {
			this.fil_num = this.bar;
		},
		clo: function() {
			this.passIn = false;
			this.$refs['number'].close();
			this.numberList.length = 0;
		},
		onChange(e) {
			if (e.show == false) {
				this.passIn = false;
			}
			this.numberList.length = 0;
		},
		onDelete() {
			this.numberList.pop();
		},
		onConfirm() {
			if (this.numberList.length != 6) {
				uni.showToast({
					title: '请输入六位交易密码！',
					duration: 2000,
					icon: 'none'
				});
			}
		},
		onInput(val) {
		    console.log(val)
			var that = this;
			that.numberList.push(val);
			that.password = that.numberList.join().replace(/,/g, '');
			console.log(that.password)
			if (that.numberList.length >= that.length) {
				uni.request({
					url: that.url + 'assets/capitalcode/',
					method: 'POST',
					data: {
						capital_code: that.password
					},
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					success(res) {
						console.log(res)
						if (res.statusCode == 400) {
							that.numberList.pop();
							that.numberList.length = 0;
							that.$refs.wrong.flag = false;
							var n = res.data.data.err_num;
							var s = 5 - n;
							that.$refs.wrong.tip = '密码错误,剩余' + s + '次机会';
						}
						if (res.statusCode == 423) {
							that.passIn = false;
							that.$refs['number'].close();
							uni.showToast({
								title: '交易密码已锁定,请在今日24:00后进行交易',
								icon: 'none',
								duration: 2000
							});
						}
						if (res.statusCode == 201) {
							that.passIn = false;
							that.$refs['number'].close();
							uni.redirectTo({
								url:'../withdrawal_success/withdrawal_success'
								// url: '../commit/commit?fil_num=' + that.fil_num + '&wallet_value=' + that.wallet_value
							});
						}
						var page = getCurrentPages().pop();
						if (page == undefined || page == null) return;
						page.onLoad();
					}
				});
				this.numberList.length = 0;
			}
		},
		save: function() {
			var that = this;
			var b = parseFloat(that.bar);
			var f = parseFloat(that.fil_num);
			if (that.wallet_value == '') {
				uni.showToast({
					title: '转账地址不能为空',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (that.fil_num == '') {
				uni.showToast({
					title: '提币数量不能为空',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (that.fil_num < 0.001) {
				uni.showToast({
					title: '提币数量无效',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (that.fil_num <=10) {
				uni.showToast({
					title: '最少提现数量为10',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (f > b) {
				uni.showToast({
					title: '提币数量余额不足',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			console.log(that.fil_num)
			console.log(that.wallet_value)
			uni.request({
				url: that.url + 'assets/transfer/',
				method: 'POST',
				data: {
					fil_num: that.fil_num,
					address: that.wallet_value
				},
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					if (res.statusCode == 411) {
						uni.showToast({
							title: '未进行实名认证',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					if (res.statusCode == 412) {
						uni.showToast({
							title: '实名认证中，请耐心等待',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					if (res.statusCode == 403) {
						uni.showToast({
							title: '交易密码未设置',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					if (res.statusCode == 400) {
						uni.showToast({
							title: '输入信息有误(提币地址最少32位)',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					if (res.statusCode == 423) {
						uni.showToast({
							title: '交易密码已锁定,请在今日24:00后进行交易',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					if (res.statusCode == 200) {
						that.passIn = true;
						that.$refs['number'].open();
						that.onInput(val);
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
page {
	background: #f6f6f6;
}
.withdrawal {
}
.line_ {
	width: 100%;
	height: 20rpx;
}
.adr_line {
	width: 100%;
	height: 113rpx;
	background-color: #ffffff;
	padding: 0 42rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.tsd{
	display: flex;
}
.tsd >view{
	font-size: 30rpx;
	font-weight: 500;
	color: #24262f;
}
.tsd_imgs {
	width: 20%;
	display: flex;
	justify-content: flex-end;
}
.amount_line {
	width: 100%;
	height: 349rpx;
	background-color: #ffffff;
	padding: 0 42rpx;
	box-sizing: border-box;
}
.tit {
	font-size: 30rpx;
	font-weight: 500;
	color: #24262f;
	padding-top: 42rpx;
	padding-bottom: 63rpx;
	box-sizing: border-box;
}
.int {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1rpx solid #f7f7f7;
}
.int > input {
	width: 80%;
	height:90rpx;
	font-size: 80rpx;
	/* font-weight: 500; */
	color: #24262f;
}
.int > view {
	font-size: 30rpx;
	font-weight: 500;
	color: #0090ff;
}
.avaible {
	display: flex;
	justify-content: space-between;
}
.avaible > view {
	font-size: 24rpx;
	font-weight: 500;
	color: #24262f;
	opacity: 0.53;
	margin-top: 22rpx;
}
.tips {
	margin-top: 97rpx;
	padding: 0 42rpx;
	box-sizing: border-box;
	text-align: center;
}
.tips_tit {
	font-size: 28rpx;
	font-weight: 600;
	color: #222222;
}
.tips_con {
	font-size: 24rpx;
	font-weight: 400;
	color: #888888;
	line-height: 41rpx;
	margin-top: 25rpx;
}
.tips_con > span {
	color: #0090ff;
}
.submit-btn{
	width: 653rpx;
	height: 93rpx;
	background: #3872FF;
	box-shadow: 15rpx 26rpx 90rpx 0rpx rgba(56, 114, 255, 0.41);
	border-radius: 47rpx;
	font-size: 37rpx;
	font-weight: 600;
	color: #FFFFFF;
	text-align: center;
    line-height: 93rpx;
	margin:50rpx auto;
	&.actived{
		background-color: rgba(0,0,0,0.1);
	}
}
</style>
