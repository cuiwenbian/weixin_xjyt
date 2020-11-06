<template>
	<!-- 添加地址 -->
	<view>
		<view class="line"></view>
		<view class="record_list">
			<view class="record_icon"><image src="../../static/image/filecoin-logo.png" mode=""></image></view>
			<view class="record_info"><view>FIL</view></view>
		</view>
		<view class="line1">地址信息</view>
		<view class="info_input">
			<view class="name">
				<input style="width: 88%;" type="text" :value="adr" @input="getAddress"  placeholder="请输入地址" />
				<!-- <image src="../../static/image/scan_code2.png" mode=""></image> -->
			</view>
			<view class="name"><input type="text" :value="remark" @input="getRemark"  placeholder="备注" /></view>
		</view>
		<view class="save" @click="save">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				adr: '',
				remark: '',
				// flag: '',
				isClick:true
			}
		},
		onLoad(option) {
			// this.flag = option.flag
		},
		onBackPress(option) {
			plus.key.hideSoftKeybord()
		},
		computed: {
			allowLogin () {
				return !!(this.adr && this.remark)
			},
		},
		methods: {
			getAddress: function(e) {
				this.adr = e.detail.value
			},
			getRemark: function(e) {
				this.remark = e.detail.value
			},
			save: function() {
				var that=this;
				if (this.adr == '') {
					uni.showToast({
						title: '地址不能为空',
						icon: 'none',
						duration: 2000
					})
					return false
				}
				if (this.adr.length <= 32) {
					uni.showToast({
						title: '地址最少32位',
						icon: 'none',
						duration: 2000
					})
					return false
				}
				if (this.remark == "") {
					uni.showToast({
						title: '备注名称不能为空',
						icon: 'none',
						duration: 2000
					})
					return false
				}
				if(this.isClick){
					that.isClick = false;
					uni.request({
						url: this.url + 'walletaddresss/',
						method: 'POST',
						data: {
							wallet_key: this.remark,
							wallet_value: this.adr
						},
						header: {
							Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
						},
						success(res) {
							if (res.statusCode == 202) {
								uni.showToast({
									title: '地址格式不正确(只能是字母或数字)',
									icon: 'none',
									duration: 2000
								})
								return false
							}
							if (res.statusCode == 204) {
								uni.showToast({
									title: '昵称不可重复',
									icon: 'none',
									duration: 2000
								})
								return false
							}
							if (res.statusCode == 205) {
								uni.showToast({
									title: '地址不合法',
									icon: 'none',
									duration: 2000
								})
								return false
							}
							if (res.statusCode == 200) {
								uni.navigateBack({
									delta: 1
								})
								uni.showToast({
									title: '添加成功',
									icon: 'none',
									duration: 1500
								})
							}
						},
						complete() {
							that.isClick = true;
						},
						fail() {
							that.isClick = true;
						}
					})
				}
				
				
			}
		}
	}
</script>

<style>
page {
	background-color: #f6f6f6;
}
.line {
	height: 20rpx;
}
.line1 {
	width: 100%;
	height: 98rpx;
	line-height: 98rpx;
	padding-left: 42rpx;
	box-sizing: border-box;
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
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 20rpx 0;
	box-sizing: border-box;
}
.info_input {
	width: 100%;
	height: 220rpx;
	background-color: #ffffff;
	padding: 0 42rpx;
	box-sizing: border-box;
}
.name {
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.name:first-child {
	border-bottom: 1rpx solid #f7f7f7;
}
.name>image{
	width: 39rpx;
	height: 39rpx;
}
.save{
	width: 667rpx;
	height: 100rpx;
	background: #0090FF;
	border-radius: 50rpx;
	font-size: 37rpx;
	font-weight: 600;
	color: #FFFFFF;
	line-height: 100rpx;
	text-align: center;
	margin:121rpx auto;
}
</style>
