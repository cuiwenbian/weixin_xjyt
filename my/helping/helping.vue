<template>
	<view class="container">
		<image class='bg' src="../../static/image/my-background.png" mode="">
			<view class='back-page' @click='backFront'>
				<image src="../../static/image/zuo.png" mode=""></image>
			</view>
			<view class="title_index">
				帮助中心
			</view>
			<view class="machine-infomation">
				<view class='machine-nums'>
					<view class="nums">
						常见问题解析
					</view>
					<view class='machine-txt'>有什么问题可以向我们提问</view>
				</view>
				<view class='all-trans'>
					<image class='services_img' src="../../static/image/help_img.png" mode=""></image>
				</view>
			</view>
			<view class="my-content">
				<view class="navbar">
					<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
					 @click="tabClick(index)">{{ item.text }}</view>
				</view>
				<view class="list" v-if="tabCurrentIndex === 0">
					<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
								<view class="ques_list" @click="problem_detail(item.id)" v-for="(item,index) in question" :key="index">
									<text>{{index+1+'.'}}</text>
									<text @click="problem_detail(item.id)">{{item.question}}</text>
								</view>
					</scroll-view>
				</view>
				<view class="list" v-if="tabCurrentIndex === 1">
					<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
						<view class="ques_list" @click="problem_detail(item.id)" v-for="(item,index) in question" :key="index">
							<text>{{index+1+'.'}}</text>
							<text>{{item.question}}</text>
						</view>
					</scroll-view>
				</view>
				<view class="list" v-if="tabCurrentIndex === 2">
					<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
						<view class="ques_list" @click="problem_detail(item.id)" v-for="(item,index) in question" :key="index">
							<text>{{index+1+'.'}}</text>
							<text>{{item.question}}</text>
						</view>
					</scroll-view>
				</view>
				<view class="list" v-if="tabCurrentIndex === 3">
					<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
						<view class="ques_list" @click="problem_detail(item.id)" v-for="(item,index) in question" :key="index">
							<text>{{index+1+'.'}}</text>
							<text>{{item.question}}</text>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="s-btns">
				<view class="sn-btn sn-zr" @click="feedback">
					<image src="../../static/image/record.png" mode=""></image>
					<text>意见反馈</text>
				</view>
				<view class="sn-btn sn-cs" @click="feedback_record">
					<image src="../../static/image/record.png" mode=""></image>
					<text>反馈记录</text>
				</view>
			</view>
          </image>
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
				navList: [{
						state: 0,
						text: '常见问题'
					},
					{
						state: 1,
						text: '账号安全'
					},
					{
						state: 2,
						text: '收益相关'
					},
					{
						state: 3,
						text: '交易相关'
					}
				],
				currPage: '', // 当前页码
				totalPage: '', // 总页数
				tabCurrentIndex: 0,
				scrollTop: 0,
				old: {
					scrollTop: 0,
				},
				question: ''
				
			};
		},
		components: {
			loadRefresh
		},
		onLoad() {
			this.selected = {};
		},
		onShow() {
			this.getquestiondata()
		},
		methods: {
			backFront() {
				uni.navigateBack({
					delta: 1
				})
			},
			tabClick(index) {
				var that = this;
				that.tabCurrentIndex = index;
				this.getquestiondata()
			},
			// 上划加载更多
			loadMore() {
				// 请求新数据完成后调用 组件内loadOver()方法
				// 注意更新当前页码 currPage
				this.$refs.loadRefresh.loadOver()
			},
			// 下拉刷新数据列表
			refresh() {
			},
			getquestiondata() {
				var _this = this;
				// console.log(this.tabCurrentIndex)
				uni.request({
					url: this.url + 'cloudasks/',
					data: {
						page: this.currPage,
						type: this.tabCurrentIndex
					},
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					success(res) {
						_this.question = res.data.data.lists;
					//	_this.currPage = res.data.data.pageNum; //当前页
					//	_this.totalPage = res.data.data.totalPage; //总页数

					}
				});
			},
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			moveHandle: function(e) {
				e.preventDefault();
				e.stopPropagation();
			},
			//跳转1常见问题详情
            linkToTransfer3: debounce(
            	function(i) {
            		uni.navigateTo({
            			url: "../problem_details/problem_detail?id=" + i
            		})
            	},
            	500,
            	true
            ),
            problem_detail: function(i) {
            	this.linkToTransfer3(i);
            },
			//跳转提交反馈页
			linkToTransfer1: debounce(
				function() {
					uni.navigateTo({
						url: "../suggest/suggest"
					})
				},
				500,
				true
			),
			feedback: function() {
				this.linkToTransfer1();
			},
			//跳转反馈记录页
			linkToTransfer2: debounce(
				function() {
					uni.navigateTo({
						url: "../suggest-detail/suggest-detail"
					})
				},
				500,
				true
			),
			feedback_record: function() {
				this.linkToTransfer2();
			},

		}
	};
</script>

<style>
	page {
		background: #ffffff;
	}

	.bg {
		width: 100%;
		height: 396rpx;
	}

	.back-page {
		width: 54rpx;
		height: 52rpx;
		position: fixed;
		top: 74rpx;
		left: 24rpx;
		z-index: 99;
	}

	.back-page image {
		width: 54rpx;
		height: 52rpx;
		display: block;
	}

	.title_index {
		height: 64rpx;
		width: 100%;
		text-align: center;
		line-height: 64rpx;
		font-size: 36rpx;
		position: fixed;
		top: 69rpx;
		color: #ffffff;
		z-index: 9;
	}
	.machine-infomation {
		width: 100%;
		height: 172rpx;
		position: fixed;
		top: 147rpx;
		padding: 0 48rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* justify-items: center; */
		background-image: url(../../static/image/flower.png);
		background-size: 100% 100%;
	}

	.machine-nums {
		float: left;
		height: 251rpx;
		margin-left: 0rpx;
		color: #FFFFFF;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
	}

	.all-trans {
		float: left;
		margin-left: 20rpx;
		color: #FFFFFF;
	}

	.services_img {
		width: 129rpx;
		height: 124rpx;
		display: block;
	}

	.nums {
		font-size: 48rpx;
		line-height: 50rpx;
		letter-spacing: 8rpx;
		font-size: 36rpx;
		font-weight: 800;
	}

	.machine-txt {
		font-size: 28rpx;
		font-weight: 400;
	}

	.my-content {
		width: 92%;
		height: calc(100% - 508rpx);
        background: #FFFFFF;
		border-radius: 13rpx;
		position: absolute;
		top: 331rpx;
		left: 4%;
		margin-bottom: 50rpx;
		padding: 36rpx 30rpx;
		box-sizing: border-box;
		box-shadow: 0 0 50px 10rpx rgba(0, 0, 0, 0.2);
	}

	.navbar {
		display: flex;
		height: 80rpx;
		color: #000000;
		position: relative;
		z-index: 10;
	}

	.nav-item {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 26rpx;
		color: #333333;
		position: relative;
	}

	.current {
		font-size: 36rpx;
		font-weight: 600;
		color: #333333;
	}

	.current:after {
		content: '';
		width: 160rpx;
		height: 3rpx;
		background:#1440E7;
		position: absolute;
		top: 80rpx;
		left: 0rpx;
	}

	.list {
		width: 100%;
		height: calc(100% - 80rpx);
	}

	.scroll-view {
		width: 100%;
		height: 100%;
	}

	.ques_list {
		width: 100%;
		height: 109rpx;
		border-bottom: 1rpx solid #EBEBEB;
		display: flex;
		align-items: center;
		
	}

	.ques_icon {
		width: 36rpx;
		height: 30rpx;
		display: block;
		margin: 0 16rpx;
	}

	.ques_list>text {
		display: block;
		/* width:86%; */
		height:50rpx;
		line-height: 50rpx;
		font-size: 26rpx;
		color: #333333;
	}

	.s-btns {
		width: 100%;
		height: 124rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		text-align: center;
		z-index: 1;
		display: flex;
		align-items: center;
	}

	.sn-btn {
		width: 50%;
		height: 100%;
		padding-left: 92rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		background-color: #446CFF;
	}
	.sn-btn:first-child {
		background-color: #2E3044;
	}
	.sn-zr>image {
		width: 47rpx;
		height: 37rpx;
		display: block;
	}
	.sn-zr>text,
	.sn-cs>text {
		font-size: 36rpx;
		font-weight: bold;
		color: #FFFFFF;
		margin-left: 26rpx;

	}
	.sn-cs>image {
		width: 39rpx;
		height: 40rpx;
		display: block;
	}
</style>
