<template>
	<!-- 轮播详情 -->
	<view>
		<uni-nav-bar left-icon="back" :title="tit" :fixed="true" :status-bar="true" @click-left="back" background-color="#FAFBFC"
		 color="#000000"></uni-nav-bar>
		<!-- <image class="img-logo" src="../../static/image/message_logo.png" mode=""></image> -->
		<view class="art_con">
			<view class="art_tit">
				{{title}}
			</view>
			<view class="art_time">{{add}}</view>
			<view class="conten">
				<rich-text :nodes="aa"></rich-text>
			</view>
			<view class="about_ques">相关文章</view>
			<view class="ques_item" @click="prev">{{prev_info}}</view>
			<view class="ques_item" @click="next">{{next_info}}</view>
		</view>
	</view>
	</view>
</template>

<script>
	function formatRichText(html = '') {
		let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
			match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
			return match;
		});
		newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
			match = match.replace(/width:[^;]+;/gi, 'max-width:100%;height: auto;').replace(/width:[^;]+;/gi,
				'max-width:100%;height: auto;');
			return match;
		});
		newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;margin-top:0;margin-bottom:5px;height: auto;"');
		return newContent;
	}
	import {
		debounce
	} from '@/common/utils.js';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		data() {
			return {
				ction: '',
				aa: '',
				title: '',
				tit: '',
				add: '',
				prev_info: '',
				prev_id: '',
				next_id: '',
				next_info: '',
				id: ''
			};
		},
		components: {
			uniNavBar
		},
		onLoad(option) {
			this.title = option.title;
			console.log(option.title.length)
			if(option.title.length>6){
				this.tit = option.title.substring(0, 10) + '...';
			}else{
				this.tit = option.title
			}
			this.add = option.add_time;
			this.prev_info = option.prev_qus;
			this.prev_id = option.prev_id;
			this.next_info = option.next_qus;
			this.next_id = option.next_id;
			this.ction = uni.getStorageSync('index-banner-content') || '';
			this.aa = this.ction.replace(/_/g, '=').replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
			uni.removeStorageSync('index-banner-content');
			// #ifdef MP-WEIXIN
			let aa = this.ction.replace(/_/g, '=');
			aa = formatRichText(aa);
			this.aa = aa;
			//#endif
			// #ifndef MP-WEIXIN
			this.aa = this.ction.replace(/_/g, '=').replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
			//#endif
		},
		onShow() {
		//	this.getOtherNew()
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			getOtherNew() {
				var that = this;
				uni.request({
					url: this.url + 'home/rotation/details/' + this.id + '/',
					method: 'PUT',
					success(res) {
						var link = res.data.data[0].link;
						if (link == null || link == '') {
							that.add = res.data.data[0].add_time;
							that.title = res.data.data[0].title;
							if(that.title.length>6){
								that.tit = that.title.substring(0, 10) + '...';
							}else{
								that.tit = that.title
							}
							that.aa = res.data.data[0].text_content;
							that.prev_info = res.data.data[1].title;
							that.prev_id = res.data.data[1].id;
							that.next_id = res.data.data[2].id;
							that.next_info = res.data.data[2].title;
						} else {
							uni.navigateTo({
								url: `../web1/web1?url=${link}`
							});
						}
						uni.pageScrollTo({
							scrollTop: 0,
							duration: 100
						})
					}
				});
			},
			
			prev() {
				this.id = this.prev_id;
				this.getOtherNew()
			},
			next() {
				this.id = this.next_id;
				this.getOtherNew()
			}

		}
	};
</script>

<style>
	page {
		background-color: #FFFFFF;
	}

	uni-rich-text img {
		max-width: 100% !important;
	}

	.img-logo {
		width: 100%;
		height: 160rpx;
	}

	.art_con {
		width: 100%;
		height: auto;
		padding: 50rpx 30rpx;
		box-sizing: border-box;
	}

	.art_tit {
		width: 100%;
		font-size: 50rpx;
		color: #333333;
		font-weight: 800;
	}

	.art_time {
		width: 100%;
		height: 82rpx;
		line-height: 82rpx;
		font-size: 24rpx;
		color: #999999;
		text-align: right;
		border-bottom: 1rpx solid #EBEBEB;
	}
    .conten{
		padding: 30rpx 0;
		box-sizing: border-box;
		border-bottom: 1rpx solid #EBEBEB;
	}
	.user_action {
		width: 100%;
		height: 168rpx;
		background-color: #FAFAFA;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.robot {
		width: 135rpx;
		height: 95rpx;
	}

	.robot>image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.user_ques {
		height: 70%;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}

	.que {
		color: #999999;
		font-size: 21rpx;
	}

	.btns>text {
		width: 123rpx;
		height: 37rpx;
		border-radius: 3rpx;
		background-color: #F7F7F7;
		box-shadow: 0rpx 0rpx 3rpx 5rpx rgba(0, 0, 0, 0.2);
		float: left;
		color: #333333;
		font-size: 17rpx;
		text-align: center;
		margin-right: 20rpx;
	}

	.about_ques {
		color: #333333;
		font-size: 34rpx;
		font-weight: 800;
		line-height: 80rpx;
		margin-top: 30rpx;
	}

	.ques_item {
		color: #666666;
		font-size: 28rpx;
		line-height: 60rpx;
	}
</style>
