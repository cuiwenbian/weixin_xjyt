<template>
	<!-- 地址簿-->
	<view>
		<view v-if="flag">
			<block v-for="item in address_out" :key="item.id">
				<uniSwipeAction :options="options" @click="click(item)">
					<view class="record_list">
						<view class="record_icon"><image src="../../static/image/filecoin-logo.png" mode=""></image></view>
						<view class="record_info">
							<view class="r">{{ item.wallet_key }}</view>
							<view class="h">{{ item.wallet_value }}</view>
						</view>
					</view>
				</uniSwipeAction>
			</block>
		</view>
		<view class="no_record" v-else>
			<image src="../../static/image/no_Address.png" mode=""></image>
			<view>您还没有添加地址哦！</view>
		</view>
		<view class="add_new_adr" @click="add_address" hover-class="actived">新建地址</view>
		<!-- #ifndef H5 -->
			<password-input v-if="passIn" @clo="clo" ref='wrong' @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
			<!-- #endif -->
			<!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
			<!-- #ifdef H5 -->
			<view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" :gutter="20" ref='wrong' :list="numberList"></password-input></view>
			<!-- #endif -->
			<!-- 数字键盘 -->
			<keyboard-package  ref="number" @onChange='onChange' @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
		
	</view>
</template>

<script>
import uniSwipeAction from '../../components/uni-swipe-action/uni-swipe-action.vue';
import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
import passwordInput from '../../components/password-input/password-input.vue';
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import { debounce } from '@/common/utils.js';
export default {
	data() {
		return {
			options: [
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			],
			wallet_value: '',
			wallet_key: '',
			address_out: '',
			flag: true,
			right: '',
			id: '',
			shade: true,
			password: '',
			user_id: '',
			numberList: [],
			length: 6,
			type: 'number',
			passIn: false
		};
	},
	components: {
		uniSwipeAction,
		keyboardPackage,
		passwordInput,
		uniNavBar
	},
	onLoad() {
		this.getData();
	},
	onShow() {
		this.getData();
	},
	methods: {
		getData() {
			var that = this;
			uni.request({
				url: this.url + 'walletaddresss/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					console.log(res)
					if (res.data.data == '') {
						that.flag = false;
					} else {
						that.flag = true;
					}
					that.address_out = res.data.data;
				}
			});
		},
		clo: function() {
			this.passIn = false;
			this.$refs['number'].close();
			this.numberList.length = 0;
		},
		onDelete() {
			this.numberList.pop();
		},
		onChange(e) {
			if (e.show == false) {
				this.passIn = false;
			}
			this.numberList.length = 0;
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
			var that = this;
			that.numberList.push(val);
			that.password = that.numberList.join().replace(/,/g, '');
			if (that.numberList.length >= that.length) {
				uni.request({
					url: that.url + 'updatadeleteaddresss/',
					method: 'DELETE',
					data: {
						id: that.id,
						password: that.password
					},
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					success(res) {
						console.log(res)
						if (res.statusCode == 200) {
							that.passIn = false;
							that.$refs['number'].close();
							uni.showToast({
								title: '删除成功',
								icon: 'none',
								duration: 2000
							});
						}
						if (res.statusCode == 400) {
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
						var page = getCurrentPages().pop();
						if (page == undefined || page == null) return;
						page.onLoad();
					}
				});
				this.numberList.length = 0;
			}
		},
		//点击删除按钮
		click: function(item) {
			var that = this;
			that.id = item.id;
			this.passIn = true;
			this.$refs['number'].open();
			this.onInput(val);
		},
		//点击添加按钮
		linkToTransfer: debounce(
			function() {
				uni.navigateTo({
					url:'../add_address/add_address'
					// url: '../add-address/add-address?flag=' + this.flag
				});
			},
			1000,
			true
		),
		add_address: function() {
			this.linkToTransfer();
		},
		//返回
		back: function() {
			uni.navigateBack({
				delta: 1
			});
		},
		//点击编辑按钮
		edit: function(item) {
			var that = this;
			that.id = item.id;
			that.wallet_key = item.wallet_key;
			that.wallet_value = item.wallet_value;
			that.user_id = item.user_id;
			uni.navigateTo({
				url: '../edit-address/edit-address?id=' + that.id + '&wallet_key=' + that.wallet_key + '&wallet_value=' + that.wallet_value + '&user_id=' + that.user_id
			});
		}
	}
};
</script>
<style lang="less">
page {
	background: #f6f6f6;
}
.record_list {
	width: 100%;
	height: 163rpx;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	padding: 0 26rpx;
	box-sizing: border-box;
}
.record_icon {
	width: 14%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.record_icon > image {
	width: 90rpx;
	height: 90rpx;
}
.record_info {
	width: 84%;
	height: 100%;
	margin-left: 25rpx;
	display: flex;
	flex-direction: column;
	align-content: space-around;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 20rpx 0;
	box-sizing: border-box;
	border-bottom: 1rpx solid #ececec;
}
.r {
	font-size: 31rpx;
	font-weight: 600;
	color: #222222;
}
.s {
	font-size: 24rpx;
	font-weight: 600;
	color: #f9b81a;
}
.h {
	font-size: 24rpx;
	font-weight: 300;
	color: #b1b1b1;
	word-break: break-all;
	word-wrap: break-word;
}
.no_record {
	padding-top: 171rpx;
}
.no_record > image {
	width: 473rpx;
	height: 295rpx;
	margin: 0 auto;
}
.no_record > view {
	text-align: center;
	margin-top: 68rpx;
	font-size: 30rpx;
	font-weight: 600;
	color: #222222;
	opacity: 0.9;
}
.add_new_adr {
	width: 251rpx;
	height: 68rpx;
	background: #0090ff;
	border-radius: 34px;
	font-size: 30rpx;
	font-weight: 400;
	color: #ffffff;
	margin: 50rpx auto;
	text-align: center;
	line-height: 68rpx;
	&.actived{
		background-color: rgba(0,0,0,0.1);
	}
}
</style>
