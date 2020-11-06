<template>
	<!-- 问题详情 -->
	<view>
		<uni-nav-bar left-icon="back" :title="tit" :fixed="true" :status-bar="true" @click-left="back" background-color="#FAFBFC"
		 color="#000000"></uni-nav-bar>
		<!-- <view class="line"></view> -->
		<view class="art_con">
			<view class="art_tit">
				{{question}}
			</view>
			<view class="art_time">{{addtime}}</view>
			<view class="conten">
				<rich-text :nodes="answer"></rich-text>
			</view>

		</view>
		<view class="user_action">
			<view class="robot">
				<image src="../../static/image/robot.png" mode=""></image>
			</view>
			<view class="user_ques">
				<view class="que">以上信息是否解决了您的问题？</view>
				<view class="btns">
					<text class="btn_click" @click="resolved(1)" v-if="cilcked">已解决</text>
					<text class="btn_sta" @click="resolved(1)" v-else>已解决</text>
					<text class="btn_click" @click="resolved(0)" v-if="cilcked_n">未解决</text>
					<text class="btn_sta" @click="resolved(0)" v-else>未解决</text>
				</view>
				<!-- <view class="btns" v-else-if="status==0"><text style="color:#757575;">未解决</text></view> -->
				<!-- <view class="btns" v-else-if="status==1"><text style="color:#757575;">已解决</text></view> -->
			</view>
		</view>
		<view class="about_box">
			<view class="about_ques">相关问题</view>
			<view class="ques_item" @click="prev">{{prev_info}}</view>
			<view class="ques_item" @click="next">{{next_info}}</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		data() {
			return {
				id: '',
				question: '',
				tit: '',
				answer: '',
				addtime: '',
				prev_info: '',
				prev_id: '',
				next_id: '',
				next_info: '',
				status: '',
				cilcked: false,
				cilcked_n: false
			}
		},
		onLoad(option) {
			this.id = option.id;
			console.log(this.id)
			this.getDetail()
		},
		onShow() {
			this.getDetail()
		},
		components: {
			uniNavBar
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			getDetail() {
				var that = this;
				uni.request({
					url: this.url + 'askdetail/' + this.id + '/',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					success(res) {
						console.log(res)
						that.question = res.data.data[0].question;
						that.tit = res.data.data[0].question.substring(0, 6) + '...';
						that.answer = res.data.data[0].answer;
						that.addtime = res.data.data[0].add_time;
						that.status = res.data.data[2][0];
						that.prev_info = res.data.data[3].title;
						that.prev_id = res.data.data[3].id;
						that.next_info = res.data.data[4].title;
						that.next_id = res.data.data[4].id;
						console.log(that.answer)
						console.log(that.prev_info)
						console.log(that.next_info)
						console.log(that.status)
						if (that.status == 0) {
							console.log('未解决')
						} else if (that.status == 1) {
							console.log("已解决")
						} else {
							console.log("未查看")
						}
						uni.pageScrollTo({
							scrollTop: 0,
							duration: 100
						})
					}

				})
			},
			prev() {
				this.id = this.prev_id;
				this.getDetail()
			},
			next() {
				this.id = this.next_id;
				this.getDetail()
			},
			resolved(i) {
				console.log(i)
				if(i==1){
					this.cilcked=true
					this.cilcked_n=false
				}else if(i==0){
					this.cilcked_n=true
					this.cilcked=false
				}
				uni.request({
					url: this.url + 'askvakid/',
					data: {
						like_id: i,
						question_id: this.id
					},
					method: 'PUT',
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					success(res) {
						console.log(res)
					}
				})
			}
		}

	}
</script>

<style>
	.line {
		width: 100%;
		height: 1rpx;
		border-top: 1rpx solid #EBEBEB;
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

	.conten {
		margin: 30rpx 0;
	}

	.user_action {
		width: 100%;
		height: 168rpx;
		background-color: #FAFAFA;
		padding: 0 30rpx;
		box-sizing: border-box;
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
		font-size: 24rpx;
	}

	.btns>.btn_sta {
		width: 146rpx;
		height: 46rpx;
		border-radius: 3rpx;
		background-color: #F7F7F7;
		float: left;
		color: #333333;
		font-size: 22rpx;
		text-align: center;
		margin-right: 20rpx;
		line-height: 46rpx;
	}

	.btns>.btn_click {
		width: 146rpx;
		height: 46rpx;
		border-radius: 3rpx;
		float: left;
		font-size: 22rpx;
		text-align: center;
		margin-right: 20rpx;
		line-height: 46rpx;
		background-color: #007AFF;
		color:#FFFFFF;
	}

	.about_box {
		padding: 30rpx;
		box-sizing: border-box;
		margin-bottom: 30rpx;
	}

	.about_ques {
		color: #333333;
		font-size: 35rpx;
		font-weight: 800;
		line-height: 80rpx;
	}

	.ques_item {
		color: #666666;
		font-size: 28rpx;
		line-height: 65rpx;
	}
</style>
