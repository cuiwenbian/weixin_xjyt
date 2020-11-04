<template>
	<view>
		<uni-drawer ref="drawer"></uni-drawer>
		<wTitleBar title="星际云通" textColor="#fff" @open="hendleclick"></wTitleBar>
		<carousel :img-list="imgList" url-key="cover_pic" @selected="selectedBanner" />
		<view class="content">
			<view class="ban_btns">
				<view class="machine_btn" @click="mymachine">
					<image src="../../static/image/machine_icon.png" style="width:70rpx;height:56rpx;" mode=""></image>
					<view>我的服务器</view>
				</view>
				<view class="machine_btn" @click="mypower">
					<image src="../../static/image/power_icon.png" style="width:77rpx;height:49rpx;" mode=""></image>
					<view>我的存力</view>
				</view>
			</view>
			<view class="bulletin_board">
				<image src="../../static/image/aounce.png" style="width:86rpx;height:32rpx;" mode=""></image>
				<view class="announcement_txt">公告标题显示在这里，公告标题最多50个字符公告标题最多</view>
				<image src="../../static/image/more.png" style="width:32rpx;height:26rpx;" mode="" @click="more_announcement"></image>
			</view>
		</view>
		<view class="line"></view>
		<view class="content">
			<view class="latest_development_of">
				<view>最新动态</view>
				<image src="../../static/image/more_news.png" mode="" @click="more_news"></image>
			</view>
			<view class="newsList">
				<view class="item_list" @click="information(item.id)" v-for="(item, index) in title" :key="index">
					<image :src=" item.cover_pic" mode=""></image>
					<view class="news_info">
						<view class="news_info_title">
							<view class="num_box">
								<image class="number_img" src="../../static/image/number_tip.png" mode=""></image>
								<view class="news_len">{{index+1}}</view>
							</view>
							<view>{{ item.title }}</view>
						</view>
						<view class="news_info_con">{{ item.essay_describe}}</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
import carousel from '@/components/vear-carousel/vear-carousel';
import { debounce } from '@/common/utils.js';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
let dragBox;
export default {
	data() {
		return {
			num: '01',
			options: {
				visible: false,
				rightMode: false,
				autoClose: true,
				pulldown: true
			},
			imgList: [],
			title:''
		};
	},
	onReady() {
		dragBox = this.$refs.dragBox;
	},
	components: {
		carousel,
		uniDrawer
	},
	onLoad() {
		this.$Api.getNews().then(
			res => {
				console.log(res);
				this.title = res.data.data.lists.slice(0, 2);
			},
			err => {}
		);
		this.$Api.getRotation().then(
			res => {
				console.log(res);
				this.imgList = res.data;
			},
			err => {}
		);
	},
	methods: {
		selectedBanner(item, index) {
			console.log('🥒', item, index);
		},
		hendleclick() {
			this.$refs.drawer.open();
		},
		hello() {
			uni.showToast({
				title: 'hello',
				icon: 'none'
			});
		},
		close() {
			this.$refs.drawer.close();
		},
		toggle() {
			this.options.rightMode = !this.options.rightMode;
		},
		toggle1() {
			this.$set(this.options, 'mask', !this.options.mask);
		},
		afterOpen() {
			uni.showToast({
				title: 'open',
				icon: 'none'
			});
		},
		afterClose() {
			uni.showToast({
				title: 'close',
				icon: 'none'
			});
		},
		linkToTransfer: debounce(
			function() {
				uni.navigateTo({
					url: '../../my/power/power'
				});
			},
			1000,
			true
		),
		mypower: function() {
			this.linkToTransfer();
		},
		mymachine: function() {
			this.linkToTransfer1();
		},
		linkToTransfer1: debounce(
			function() {
				uni.navigateTo({
					url: '../../my/machine/machine'
				});
			},
			1000,
			true
		),
		more_news: function() {
			this.linkToTransfer2();
		},
		linkToTransfer2: debounce(
			function() {
				uni.navigateTo({
					url: '../moreNews/moreNews'
				});
			},
			500,
			true
		),
		more_announcement() {
			this.linkToTransfer3();
		},
		linkToTransfer3: debounce(
			function() {
				uni.navigateTo({
					url: '../announcement/announcement'
				});
			},
			1000,
			true
		),
		linkToTransfer4: debounce(
			function(item) {
				
				this.$Api.getNewsDetail(item).then(
					res => {
						console.log("qewe")
						console.log("新闻详情"+res);
					},
					err => {}
				);
				/* uni.request({
					url: this.BASE_URL + 'home/news/details/' + item + '/',
					method: 'PUT',
					success: res => {
						var ingym = res.data.data;
						this.coo = ingym.text_content;
						var link2 = ingym.link;
						var read_volume = ingym.read_volume;
						var text_content2 = ingym.text_content.replace(/=/g, '_');
						var add_time = ingym.add_time;
						var title = ingym.title;
						if (link2 == null || link2 == '') {
							uni.navigateTo({
								url: '../banner2/banner2?volume=' + read_volume + '&cont=' + encodeURIComponent(text_content2) + '&add=' +
									add_time + '&title=' + title
							});
						} else {
							uni.navigateTo({
								url: `../web2/web2?url=${link2}`
							});
						}
					}
				}); */
			},
			500,
			true
		),
		information: function(item) {
			this.linkToTransfer4(item);
		},
	}
};
</script>

<style lang="less">
.content {
	padding: 0 40rpx;
	box-sizing: border-box;
}
.ban_btns {
	width: 100%;
	padding: 14rpx 0 31rpx 0;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.machine_btn {
	width: 324rpx;
	height: 85rpx;
	background-color: #f8f6fc;
	border-radius: 10rpx;
	display: flex;
	align-items: center;
	color: #222222;
	font-size: 30rpx;
}
.machine_btn > image {
	margin-left: 22rpx;
	margin-right: 19rpx;
}
.bulletin_board {
	padding-bottom: 31rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
}
.announcement_txt {
	width: 521rpx;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 24rpx;
	font-weight: 500;
	margin-left: 9rpx;
	margin-right: 41rpx;
}
.line {
	width: 100%;
	height: 20rpx;
	background-color: #f8f6fc;
}
.latest_development_of {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 34rpx 0 42rpx 0;
	view {
		font-size: 34rpx;
		font-weight: 800;
		color: #333333;
	}
	image {
		width: 37rpx;
		height: 37rpx;
		display: block;
	}
}
.newsList {
	width: 100%;
	height: auto;
	.item_list {
		height: 134rpx;
		margin-bottom: 28rpx;
		display: flex;
		image {
			width: 133rpx;
			height: 134rpx;
			display: block;
		}
		.news_info {
			margin-left: 13rpx;
			width: 78%;
		}
		.news_info_title {
			display: flex;
			font-size: 30rpx;
			font-weight: 800;
			color: #333333;
			margin-top: 4rpx;
		}
		.num_box {
			position: relative;
		}
		.number_img {
			width: 70rpx;
			height: 67rpx;
			display: block;
		}
		.news_len {
			width: 70rpx;
			height: 67rpx;
			position: absolute;
			top: 0;
			left: 0;
			text-align: center;
			line-height: 47rpx;
			font-size: 22rpx;
			font-weight: bold;
			color: #fff;
			z-index: 99;
		}
		.news_info_title > view {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.news_info_con {
			padding-left: 10rpx;
			box-sizing: border-box;
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
			overflow: hidden;
			text-overflow: ellipsis;
			display: box;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
}
</style>
