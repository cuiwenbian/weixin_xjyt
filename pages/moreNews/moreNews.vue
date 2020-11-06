<template>
	<view class="content">
		<load-refresh ref="loadRefresh" :isRefresh="true" :refreshTime="800" :heightReduce="0" :pageNo="currPage" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">
			<view slot="content-list">
			<view class="newsList">
				<view class="item_list" @click="information(item.id)" v-for="(item, index) in list" :key="index">
					<image :src="item.cover_pic" mode=""></image>
					<view class="news_info">
						<view class="news_info_title">
							<view class="num_box">
								<image class="number_img" src="../../static/image/number_tip.png" mode=""></image>
								<view class="news_len">{{ index + 1 }}</view>
							</view>
							<view class="title_ss">{{ item.title }}</view>
						</view>
						<view class="news_info_con">{{ item.essay_describe }}</view>
					</view>
				</view>
			</view>
			</view>
		</load-refresh>
	</view>
</template>

<script>
import loadRefresh from '@/components/load-refresh/load-refresh.vue';
import { debounce } from '@/common/utils.js';
export default {
	data() {
		return {
			link: '',
			list: '',
			arr: [],
			currPage: 1, // 当前页码
			totalPage: 0 // 总页数
		};
	},
	onLoad() {
		this.getAllNews();
	},
	methods: {
		getAllNews() {
			var that = this;
			//新闻接口
			uni.request({
				url: this.url + 'home/news/',
				data: {
					page: this.currPage
				},
				method: 'GET',
				success: res => {
					console.log(res);
					that.list = res.data.data.lists;
					this.currPage = res.data.data.pageNum;
					this.totalPage = parseInt(res.data.data.totalPage);
				}
			});
		},

		linkToTransfer: debounce(
			function(item) {
				uni.request({
					url: this.url + 'home/news/details/' + item + '/',
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
								url: '../banner2/banner2?volume=' + read_volume + '&cont=' + encodeURIComponent(text_content2) + '&add=' + add_time + '&title=' + title
							});
						} else {
							uni.navigateTo({
								url: `../web2/web2?url=${link2}`
							});
						}
					}
				});
			},
			500,
			true
		),
		information: function(item) {
			this.linkToTransfer(item);
		},
		async loadMore() {
			uni.showToast({
				title: '加载中',
				icon: 'loading'
			});
			await this.getTest();

			for (let item of this.arr) {
				this.list.push(item);
			}

			this.$refs.loadRefresh.loadOver();
		},
		getTest() {
			this.currPage = this.currPage += 1;
			return new Promise((resolve, reject) => {
				uni.request({
					url: this.url + 'home/news/',
					data: {
						page: this.currPage
					},
					method: 'GET',
					success: res => {
						resolve('success');
						this.arr = res.data.data.lists;
					},
					fail: err => {
						reject('error');
					}
				});
			});
		},

		// 下拉刷新数据列表
		refresh() {
			uni.showToast({
				title: '刷新中',
				icon: 'loading'
			});
			// 重新请求数据 演示的话直接loadData
			// this.getAllNews()
		}
	}
};
</script>

<style lang="less">
/* 热门资讯 */
.content {
	padding: 0 40rpx;
	box-sizing: border-box;
	background-color: #FFFFFF;
}
.newsList {
	width: 100%;
	height: auto;
	margin-top: 28rpx;
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
			width: 70rpx;
			margin-right: 10rpx;
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
		.news_info_title > .title_ss {
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
