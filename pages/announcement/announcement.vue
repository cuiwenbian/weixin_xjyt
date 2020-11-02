<template>
	<!-- 公告列表 -->
	<view>
		<view class="announce">公告</view>
		<view class="announcement" v-for="(item,index) in announcement" :key="index" @click="ant(item.id)">
			<view class="announcement_info">
				<view class="announcement_tit">{{item.title}}</view>
				<view class="announcement_desc">{{item.add_time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				announcement: ''
			}
		},
		onLoad() {
			var that = this;
			uni.request({
				url: this.url + 'home/',
				method: 'GET',
				success(res) {
					that.announcement = res.data;
				}
			});
		},
		mounted() {

		},
		methods: {
			ant: function(e) {
				var id = parseInt(e);
				uni.navigateTo({
					url: '../banner3/banner3?id=' + id
				})

			},
		}
	}
</script>

<style>
	.img-logo {
		width: 100%;
		height: 160rpx;
	}

	.announce {
		font-size: 48rpx;
		font-weight: bold;
		text-indent: 32rpx;
		line-height: 150rpx;
	}

	.announcement {
		width: 92%;
		height: 160rpx;
		margin: 0 auto;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #F2F2F2;
	}

	.announcement_info {
		width: 100%;
	}

	.announcement_img>image {
		width: 150rpx;
		height: 126rpx;
		display: block;
	}

	.announcement_tit {
		color: #333333;
		font-size: 32rpx;
		font-weight: 800;
		line-height: 50rpx;
		margin-top: 20rpx;
	}

	.announcement_desc {
		height: 80rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		color: #999999;
		font-weight: 400;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: normal !important;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
