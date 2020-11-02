<!-- 公告 -->
<template>
	<view>
		<!-- <uni-nav-bar left-icon="back"  :title="txt" :fixed="true" :status-bar="true"  @click-left="back"  background-color="#FAFBFC" color="#000000" ></uni-nav-bar> -->
		<image class="img-logo" src="../../static/image/message_logo.png" mode=""></image>
		<view class="art_con">
			<view class="art_tit">
				{{title}}
			</view>
			<view class="art_time">{{add}}</view>
			<view class="conten">
				<rich-text :nodes="aa"></rich-text>
			</view>
		    <view class="about_info">
				<view class="about_ques">相关公告</view>
				<view class="ques_item" @click="prev">{{prev_info}}</view>
				<view class="ques_item" @click="next">{{next_info}}</view>
			</view>
			
		</view>
	</view>

</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		data() {
			return {
				id:'',
				title: '',
				txt:'',
				cont: '',
				add: '',
				volume: '',
				aa: '',
				prev_info:'',
				next_info:'',
				prev_id:'',
				next_id:''
			};
		},
		components: {
			uniNavBar
		},
		onLoad(option) {
			this.id=option.id;
			this.getNews()
		},
		mounted() {
			
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			getNews(){
				var that=this;
				uni.request({
					url: this.url + 'home/userhome/details/' + this.id + '/',
					method: 'GET',
					success(res) {
						that.title=res.data.data[0].title;
						that.txt=res.data.data[0].title.substring(0,6)+'...';
						that.aa=res.data.data[0].text_content;
						that.add=res.data.data[0].add_time;
						that.prev_info=res.data.data[1].title;
						that.prev_id=res.data.data[1].id;
						that.next_info=res.data.data[2].title;
						that.next_id=res.data.data[2].id;
						
					},
					
				});
			},
			prev(){
				this.id=this.prev_id;
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 100
				})
				this.getNews()
			},
			next(){
				this.id=this.next_id;
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 100
				})
				this.getNews()
			}
		}
	};
</script>

<style scoped>
	page {
		background-color: #FFFFFF;
	}

	uni-rich-text img {
		max-width: 100% !important;
	}
    .img-logo{
		width:100%;
		height:160rpx;
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
		font-size: 21rpx;
		color: #999999;
		text-align: right;
		border-bottom: 1rpx solid #EBEBEB;
	}
	.conten{
		margin-top: 30rpx;
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
	.about_info{
		margin-bottom: 30rpx;
	}
	.about_ques {
		color: #333333;
		font-size: 35rpx;
		font-weight: 800;
		line-height: 80rpx;
		margin-top: 30rpx;
	}
	
	.ques_item {
		color: #666666;
		font-size: 28rpx;
		line-height: 50rpx;
	}
</style>
