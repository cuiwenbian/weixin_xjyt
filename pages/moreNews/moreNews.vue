<template>
	<view>
		<load-refresh ref="loadRefresh" :isRefresh="true" :refreshTime="800" :heightReduce="0" :pageNo="currPage"
		 :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">
			<view slot="content-list">
				<!-- 数据列表 -->
				<view class="bt" @click="information(item.id)" v-for="(item, index) in list" :key="index">
					<view class="left">
						<text class="tex">{{ item.title }}</text>
						<view class="desc">{{ item.add_time }}
						</view>
						<view class="yjj">
							{{ item.essay_describe}}
						</view>
					</view>
					<view class="right">
						<image class="ig" :src="item.cover_pic"></image>
					</view>
				</view>
			</view>
		</load-refresh>

	</view>
</template>

<script>
	import loadRefresh from '@/components/load-refresh/load-refresh.vue'
	import {
		debounce
	} from '@/common/utils.js';
	export default {
		data() {
			return {
				link: '',
				list: '',
				arr: [],
				currPage: 1, // 当前页码
				totalPage: '', // 总页数
			};
		},
		onLoad() {
			this.getAllNews()
		},
		methods: {
			getAllNews() {
				var that = this;
				//新闻接口
				uni.request({
					url: this.url + 'home/news/',
					data: {
						page: this.currPage,
					},
					method: 'GET',
					success: res => {
						that.list = res.data.data.lists;
						this.currPage = res.data.data.pageNum;
						this.totalPage = res.data.data.totalPage;
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
									url: '../banner2/banner2?volume=' + read_volume + '&cont=' + encodeURIComponent(text_content2) + '&add=' +
										add_time + '&title=' + title
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
			async loadMore(){
				uni.showToast({
					title: '加载中',
					icon: 'loading'
				})
				await this.getTest();
				
				for (let item of this.arr) {
					this.list.push(item)
				}
				
				this.$refs.loadRefresh.loadOver()
			},
			getTest(){
				this.currPage=this.currPage+=1;
				return new Promise((resolve,reject)=>{
					uni.request({
						url: this.url + 'home/news/',
						data: {
							page: this.currPage,
						},
						method: 'GET',
						success: res => {
							resolve('success');
							this.arr = res.data.data.lists;
						},
						fail:(err)=>{
							reject('error');
						}
					});
				})
			},
			
			
			// 下拉刷新数据列表
			refresh() {
				uni.showToast({
					title: '刷新中',
					icon: 'loading'
				})
				// 重新请求数据 演示的话直接loadData
				// this.getAllNews()
			}
			
		}
	}
</script>

<style>
	/* 热门资讯 */
	.bt {
		width: 660rpx;
		height: 238rpx;
		margin: 32rpx auto;
		border-radius: 26rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 50rpx -5rpx rgba(0, 0, 0, 0.15);
	}

	.left {
		float: left;
		width: 65%;
	}

	.tex {
		margin-left: 30rpx;
		font-size: 30rpx;
		margin-top: 16rpx;
		line-height: 50rpx;
		color: #111111;
		box-sizing: border-box;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: normal !important;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.desc {
		margin-left: 30rpx;
		margin-top: 8rpx;
		font-size: 24rpx;
		color: #111111;
		opacity: 0.24;
		line-height: 35rpx;
	}

	.yjj {
		margin-left: 30rpx;
		margin-top: 8rpx;
		font-size: 24rpx;
		color: #111111;
		opacity: 0.72;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: normal !important;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.right {
		float: right;
	}

	.ig {
		width: 164rpx;
		height: 200rpx;
		margin-top: 20rpx;
		margin-right: 14rpx;
		border-radius: 6rpx;
	}
</style>
