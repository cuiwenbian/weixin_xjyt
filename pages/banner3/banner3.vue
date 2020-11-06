<!-- 公告 -->
<template>
	<view>
		<view class="art_con">
			<view class="art_tit">
				{{title}}
			</view>
			<view class="art_time">
				<view class="avator_img"><image src="../../static/image/title_logo.png" mode=""></image></view>
			    <view class="descc">
					<view class="gg">星际云通官方</view>
					<view class="tt">{{add}}</view>
				</view>
			</view>
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
				var id=this.id;
				this.$Api.getAounceDetail(id).then(
					res => {
						that.title=res.data.data[0].title;
						that.txt=res.data.data[0].title.substring(0,10)+'...';
						that.aa=res.data.data[0].text_content;
						that.add=res.data.data[0].add_time;
						that.prev_info=res.data.data[1].title;
						that.prev_id=res.data.data[1].id;
						that.next_info=res.data.data[2].title;
						that.next_id=res.data.data[2].id;
					},
					err => {}
				);
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
		height: 112rpx;
		padding-bottom: 30rpx;
		margin-top: 20rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		color: #999999;
		border-bottom: 1rpx solid #EBEBEB;
		display: flex;
		align-items: center;
	}
	.avator_img{
		width: 65rpx;
		height:65rpx;
	}
	.avator_img>image{
		width:100%;
		height:100%;
	}
	.descc{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 20rpx;
	}
	.gg{
		font-size: 26rpx;
		font-weight: 800;
		color: #333333;
	}
	.tt{
		font-size: 20rpx;
		font-weight: 400;
		color: #CECECE;
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
