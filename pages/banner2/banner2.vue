<template>
	<!-- 咨询详情 -->
	<view>
		<uni-nav-bar left-icon="back" :title="tit" :fixed="true" :status-bar="true" @click-left="back" background-color="#FAFBFC"
		 color="#000000"></uni-nav-bar>
		<view class="art_con">
			<view class="art_tit">
				{{title}}
			</view>
			<view class="art_time">{{add}}</view>
			<view class="conten">
				<rich-text :nodes="aa"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		data() {
			return {
				tit:'',
				title: '',
				cont: '',
				add: '',
				volume: '',
				aa: '',
				
			};
		},
		components: {
			uniNavBar
		},
		onLoad(option) {
			this.title = option.title;
			if(option.title.length>6){
				this.tit = option.title.substring(0, 6) + '...';
			}else{
				this.tit = option.title
			}
			this.cont = option.cont;
			// console.log(this.cont)
			// #ifdef MP-WEIXIN
			this.cont = decodeURIComponent(option.cont);
			// #endif
			this.aa = this.cont.replace(/_/gi, '=').replace(/\<img/gi, '<img style="max-width:100%;height:auto" ').replace(
				/<section/g, '<div').replace(/\/section>/g, '/div>');;
			this.add = option.add;
			this.volume = option.volume;
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
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
		padding: 30rpx;
		box-sizing: border-box;
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
	}

	.ques_item {
		color: #666666;
		font-size: 28rpx;
		line-height: 50rpx;
	}
</style>
