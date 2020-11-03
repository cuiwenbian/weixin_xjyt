<template>
	<!-- 反馈详情 -->
	<view class="container" style="position: relative;">
		<view class="t"></view>
		<view class="suggest-list">
			<view class="question">
				<view class="answer1">字形充满了整个字面框，整个字体向右边倾斜，左 边有细长的延伸线，整个字形看上去就像飞奔而去 的运动员，非常适用于品牌广告和产品包装设计。</view>
			</view>
			<view class="question"><view class="answer">回复：好的</view></view>
			<view class="time">
				<view class="submit-time">提交时间：{{ message.add_time }}</view>
				<view class="status">已提交</view>
				<view class="status" v-show="message.company_submit == 1">已提交</view>
				<view class="status" v-show="message.company_submit == 2">已回复</view>
			</view>
			<view class="t"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			hidden: true,
			message: ''
		};
	},
	onLoad(options) {
		var a = options.message;
		var b = JSON.parse(a);
		this.message = b;
		if (this.message.reply != null) {
			this.hidden = false;
		}
	}
};
</script>

<style>
page {
	background: #edeeee;
}
.t {
	height: 30rpx;
}
.suggest-list {
	width: 100%;
	height: auto;
	background: #fff;
	padding: 20rpx 48rpx;
	overflow: hidden;
	box-sizing: border-box;
}
.question:first-child{
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
	color:#333333;
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
	color: #B0B0B0;
	font-weight: 500;
}
.status {
	font-size: 24rpx;
	font-weight: 500;
	color: #446CFF;
}
</style>
