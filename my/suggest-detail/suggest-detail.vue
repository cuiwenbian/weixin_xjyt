<template>
	<!-- 反馈详情 -->
	<view class="container" style="position: relative;">
		<view class="t"></view>
		<view v-if="show_record">
			<view class="no_Record">
				<image src="../../static/image/no-machine.png" mode=""></image>
				<view class="norecord">您还没有反馈记录哦~</view>
			</view>
		</view>
		<view class="suggest-list" v-for="(item,index) in record_list" v-else>
			<view class="question">
				<view class="answer1">{{item.message}}</view>
			</view>
			<view class="question" v-if="item.reply"><view class="answer">回复：{{item.reply}}</view></view>
			<view class="time">
				<view class="submit-time">提交时间：{{item.add_time}}</view>
				<view class="status" v-if="item.user_submit==0">已提交</view>
				<view class="status" style='color:#FFC706;' v-else-if='item.user_submit==2'>已回复</view>
			    <view class="status" v-else>未回复</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			hidden: true,
			message: '',
			record_list: '',
			show_record: false,
			shade: false
		};
	},
	onLoad() {
		this.getAllRecord();
	},
	onShow() {
		this.getAllRecord();
	},

	methods: {
		getAllRecord() {
			var that = this;
			uni.request({
				url: this.url + 'advicefeedbacks/',
				method: 'GET',

				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					console.log(res)
					that.record_list = res.data.data.reverse();
					if (that.record_list.length == 0) {
						that.show_record = true;
					}
				}
			});
		},
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		clearall() {
			this.shade = true;
		},
		cancel() {
			this.shade = false;
		},
		//清空所有记录
		sure() {
			var that = this;
			uni.request({
				url: this.url + 'advicedeleteall/',
				method: 'DELETE',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					if (res.statusCode == 200) {
						that.shade = false;
						that.getAllRecord();
					}
				}
			});
		}
	}
};
</script>

<style>
page {
	background: #f6f6f6;
}
.t {
	height: 30rpx;
}
.suggest-list {
	width: 100%;
	height: auto;
	background: #fff;
	padding: 20rpx 48rpx 40rpx;
	overflow: hidden;
	box-sizing: border-box;
	position: relative;
}
.suggest-list:after{
	content:'';
	position: absolute;
	bottom:-40rpx;
	left:0;
	width:100%;
	height:60rpx;
	background-color: #F6F6F6;
	
}
.question:first-child {
	border-bottom: 1rpx solid #f2f2f2;
}
.question {
	padding: 20rpx 0;
	box-sizing: border-box;
}
.answer {
	width: 100%;
	line-height: 50rpx;
	height: auto;
	font-size: 30rpx;
	font-weight: 300;
	color: #ffae00;
	word-break: break-all;
	word-wrap: break-word;
}
.answer1 {
	width: 100%;
	font-size: 30rpx;
	font-weight: 300;
	line-height: 50rpx;
	color: #333333;
	word-break: break-all;
	word-wrap: break-word;
}
.time {
	width: 100%;
	padding-top: 30rpx;
	box-sizing: border-box;
	border-top: 1rpx solid #f2f2f2;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.submit-time {
	font-size: 24rpx;
	color: #b0b0b0;
	font-weight: 500;
}
.status {
	font-size: 24rpx;
	font-weight: 500;
	color: #446cff;
}
.no_Record {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.no_Record > image {
	width: 300rpx;
	height: 240rpx;
	display: block;
	margin-top: 304rpx;
}
.norecord {
	line-height: 70rpx;
}
</style>
