<template>
	<!-- 建议反馈 -->
	<view class="contents">
		<view class="line_colu padding">
			反馈类型
			<span style="color:#ED2020;">*</span>
		</view>
		<view class="sug_type padding">
			<view class="type_list" v-for="(c, index) of markList" :key="index">
				<view :class="index == n ? 'circle_checked ' : 'circle_check'" @click="changeList(index)"></view>
				<view class="error_ty">{{ c }}</view>
			</view>
		</view>
		<view class="line_colu padding">反馈内容</view>
		<view class="record_area">
			<textarea :value="feed_content" @input="getDataNum" placeholder="请输入您要反馈的内容.." placeholder-class="ph_cl" />
			<view class="words_num">{{ conterNum }}/{{ num_all_word }}</view>
		</view>
		<view class="line_colu padding">联系电话</view>
		<view class="phone_area padding"><input type="number" :value="phone" @input="getPhone" placeholder="请输入您的手机号" placeholder-class="ph_cl" /></view>
		<view>
			<view class="btn" @click="submit" >提交</view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
export default {
	data() {
		return {
			conterNum: '0',
			title:'1',
			feed_content:'',			
			add_time: '',
			ischeck: false,
			markList: ['功能异常', '优化建议', '其他反馈'],
			n:0,
			num_all_word: 200,
			phone:''
		};
	},
	components: {
		uniNavBar
	},
	onLoad() {
		
	},
	onBackPress(option) {
		plus.key.hideSoftKeybord();
	},
	methods: {
		changeList(index) {
			this.n = index;
		},
		getDataNum(e){
			this.conterNum=e.detail.cursor;
			this.feed_content=e.detail.value;
		},
		getPhone(e){
			this.phone=e.detail.value;
		},
		
		submit: function() {
			var _this = this;
			if (this.feed_content == '') {
				uni.showToast({
					title: '请输入您要反馈的内容',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			uni.request({
				url: this.url + 'advicefeedbacks/',
				method: 'POST',
				data: {
					title:this.title,
					message:this.feed_content
				},
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					if (res.statusCode == 200) {
						uni.redirectTo({
							url:'../helping/helping'
						})
						uni.showToast({
							title:"提交成功",
							icon:'none',
							duration:3000
						})
					} else {
						uni.showToast({
							title: '提交失败',
							icon: 'none',
							duration: 2000
						});
					}
					
				}
			});
		},
	}
};
</script>

<style>
page {
	background: #f6f6f6;
}
.padding {
	padding: 0 42rpx;
	box-sizing: border-box;
}
.line_colu {
	width: 100%;
	height: 82rpx;
	background-color: #f6f6f6;
	line-height: 82rpx;
	font-size: 30rpx;
	font-weight: 500;
	color: #333333;
}
.sug_type {
	width: 100%;
	height: 381rpx;
	background-color: #ffffff;
}
.type_list {
	height: 33%;
	display: flex;
	align-items: center;
}
.circle_check {
	width: 34rpx;
	height: 34rpx;
	border-radius: 50%;
	border: 4rpx solid #bfbfbf;
	margin-right: 27rpx;
}
.circle_checked {
	width: 34rpx;
	height: 34rpx;
	margin-right: 27rpx;
	background-image: url(../../static/image/checked.png);
	background-size: 100% 100%;
}
.error_ty {
	font-size: 30rpx;
	font-weight: 500;
	color: #333333;
}
.record_area {
	width: 100%;
	height: 292rpx;
	background-color: #ffffff;
	padding: 38rpx 41rpx;
	box-sizing: border-box;
	position: relative;
}
.record_area>textarea{
	font-weight: normal;
}
.words_num {
	position: absolute;
	right: 42rpx;
	bottom: 16rpx;
	font-size: 30rpx;
	color: #c5c5c5;
}
.phone_area {
	width: 100%;
	height: 100rpx;
	background-color: #ffffff;
	display: flex;
	align-items: center;
}
.ph_cl {
	font-size: 30rpx;
	font-weight: 500;
	color: #c5c5c5;
}
.btn {
	width: 87%;
	height: 93rpx;
	background: #3872ff;
	box-shadow: 15rpx 26rpx 90rpx 0rpx rgba(56, 114, 255, 0.41);
	border-radius: 47rpx;
	text-align: center;
	color: #ffffff;
	font-size: 37rpx;
	line-height: 93rpx;
	font-weight: 600;
	margin: 30rpx auto 0 auto;
}
.btn_ {
	width: 87%;
	height: 93rpx;
	background: rgba(25, 119, 255, 0.3);
	border-radius: 47rpx;
	text-align: center;
	color: #ffffff;
	font-size: 37rpx;
	font-weight: 600;
	line-height: 93rpx;
	margin: 30rpx auto 0 auto;
}
</style>
