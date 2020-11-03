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
			<textarea value="" placeholder="请输入您要反馈的内容.." placeholder-class="ph_cl" />
			<view class="words_num">{{ num_words }}/{{ num_all_word }}</view>
		</view>
		<view class="line_colu padding">联系电话</view>
		<view class="phone_area padding"><input type="number" value="" placeholder="请输入您的手机号" placeholder-class="ph_cl" /></view>
		<view>
			<view class="btn" @click="pwd_login" v-if="allowLogin_pwd">注册</view>
			<view class="btn_" v-else>注册</view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
export default {
	data() {
		return {
			flag: false,
			hidden: true,
			title: '',
			desc: '',
			messages: '',
			id: '',
			add_time: '',
			ischeck: false,
			markList: ['功能异常', '优化建议', '其他反馈'],
			n:0,
			num_all_word: 200,
			num_words: 0
		};
	},
	components: {
		uniNavBar
	},
	onLoad() {
		var _this = this;
		uni.request({
			url: this.url + 'advicefeedback/',
			method: 'GET',
			data: {
				title: this.title,
				message: this.desc
			},
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success(res) {
				if (res.data.data == '') {
					_this.flag = true;
				} else {
					_this.flag = false;
				}
				_this.messages = res.data.data;
				for (let i = 0; i < _this.messages.length; i++) {
					var t = _this.messages[i].add_time;
					var t1 = t.substr(0, 10) + '  ' + t.substr(11, 8);
					_this.messages[i].add_time = t1;
					var up = _this.messages[i].updated_time;
					var up1 = up.substr(0, 10) + '  ' + up.substr(11, 8);
					_this.messages[i].updated_time = up1;
				}
			}
		});
	},
	onBackPress(option) {
		plus.key.hideSoftKeybord();
	},
	methods: {
		changeList(index) {
			this.n = index;
		},
		moveHandle: function(e) {
			e.preventDefault();
			e.stopPropagation();
		},
		getTitleContent: function(e) {
			this.title = e.detail.value;
		},
		getDescContent: function(e) {
			this.desc = e.detail.value;
		},
		addMessage: function() {
			this.hidden = false;
		},
		close: function() {
			this.hidden = true;
		},
		back: function() {
			uni.navigateBack({
				delta: 1
			});
		},
		submit: function() {
			var _this = this;
			if (this.title == '') {
				uni.showToast({
					title: '标题不能为空',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (this.desc == '') {
				uni.showToast({
					title: '请描述您的问题',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			uni.request({
				url: this.url + 'advicefeedback/',
				method: 'POST',
				data: {
					title: this.title,
					message: this.desc
				},
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					if (res.statusCode == 200) {
						_this.hidden = true;
						_this.title = '';
						_this.desc = '';
						uni.showToast({
							title: '提交成功',
							icon: 'none',
							duration: 2000
						});
					} else {
						uni.showToast({
							title: '请输入文字信息',
							icon: 'none',
							duration: 2000
						});
					}
					var page = getCurrentPages().pop();
					if (page == undefined || page == null) return;
					page.onLoad();
				}
			});
		},
		detail: function(item) {
			var mes = JSON.stringify(item);
			uni.navigateTo({
				url: '../suggest-detail/suggest-detail?message=' + mes
			});
		},
		identity: function() {
			uni.navigateTo({
				url: '../identity/identity'
			});
		}
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
	font-size: 24rpx;
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
.words_num {
	position: absolute;
	right: 42rpx;
	bottom: 16rpx;
	font-size: 30rpx;
	font-weight: 500;
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
