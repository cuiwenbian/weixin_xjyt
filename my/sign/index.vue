<template>
	<view class="sign-content">
		<view>
			<view class="reset" @click="clearClick" style="position:fixed;bottom: 206rpx;background:#fff;">重写</view>
			<view class="tips">
				<text>请横向使用正楷字书写,否则视为无效</text>
			</view>
			<view class="reset" @click="saveClick" style="position:fixed;bottom: 66rpx;background: rgb(129,215,65);color:#fff;">确定</view>
		</view>
		<canvas class="sign" canvas-id="sign" @touchmove="move" @touchstart="start" @touchend="end" @touchcancel="cancel"
		 @longtap="tap" disable-scroll="true" @error="error">
		</canvas>
		<view>
			<view style="transform: rotate(90deg);text-align: center;position:fixed;width:130rpx;right:-14rpx;top:46%;">签名板</view>
			<view style="position: fixed;right:24rpx;bottom:30rpx;transform: rotate(90deg)" @click="cancels">取消</view>
		</view>
	</view>
</template>

<script>
	let content = null;
	let touchs = [];
	import {
		debounce
	} from '@/common/utils.js';
	export default {
		data() {
			return {
				machine_acceptance: "",
				sha: '',
				verify: ''
			}
		},
		onLoad: function(options) {
			this.machine_acceptance = options.machine_acceptance;

			//console.log(this.machine_acceptance)
			//获得Canvas的上下文
			content = uni.createCanvasContext('sign');
			//设置线的颜色
			content.setStrokeStyle("red");
			//设置线的宽度
			content.setLineWidth(3);
			//设置线两端端点样式更加圆润
			content.setLineCap('round');
			//设置两条线连接处更加圆润
			content.setLineJoin('round');
			// content.setFillStyle('white')
			// content.fillRect(0, 0, 750, 700)
			// content.draw()
		},
		methods: {
			cancels(){
				uni.navigateBack({
					delta:1
				})
			},
			// 画布的触摸移动开始手势响应
			start: function(event) {
				// console.log("触摸开始" + event.changedTouches[0].x);
				// console.log("触摸开始" + event.changedTouches[0].y);
				//获取触摸开始的 x,y
				let point = {
					x: event.changedTouches[0].x,
					y: event.changedTouches[0].y
				}
				touchs.push(point);
			},
			// 画布的触摸移动手势响应
			move: function(e) {
				let point = {
					x: e.touches[0].x,
					y: e.touches[0].y
				}
				touchs.push(point);
				if (touchs.length >= 2) {
					this.draw(touchs);
				}
			},
			// 画布的触摸移动结束手势响应
			end: function(e) {
				console.log("触摸结束" + e);
				//清空轨迹数组
				for (let i = 0; i < touchs.length; i++) {
					touchs.pop();
				}
			},
			// 画布的触摸取消响应
			cancel: function(e) {
				//console.log("触摸取消" + e);
			},
			// 画布的长按手势响应
			tap: function(e) {
				//console.log("长按手势" + e);
			},
			error: function(e) {
				//console.log("画布触摸错误" + e);
			},
			//绘制
			draw: function(touchs) {
				let point1 = touchs[0];
				let point2 = touchs[1];
				touchs.shift();
				content.moveTo(point1.x, point1.y);
				content.lineTo(point2.x, point2.y);
				content.stroke();
				content.draw(true);
			},
			//清除操作
			clearClick: function() {
				//清除画布
				content.clearRect(0, 0, 750, 700);
				content.draw(true);
			},
			//保存图片
			saveClick: function() {
				this.linkToTransfer();
			},
			linkToTransfer: debounce(
				function() {
					var that = this;
					uni.canvasToTempFilePath({
						canvasId: 'sign',
						success: function(res) {
							// let imgArr = []
							// imgArr.push(res.tempFilePath)
							var tempFilePath = res.tempFilePath;
							if (that.machine_acceptance == 1) {
								//服务器验收
								uni.uploadFile({
									url: that.url + 'usermachine/affirm/',
									filePath: tempFilePath,
									name: 'picture',
									header: {
										Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
									},
									success: (uploadFileRes) => {
										if (uploadFileRes.statusCode == 200) {
											uni.navigateBack({
												delta: 1
											})
											uni.showToast({
												title: "已验收",
												icon: 'none',
												duration: 3000
											})
					
										}
					
									}
								});
							} else {
								//存力验收
								uni.uploadFile({
									url: that.url + 'cloudmachine/',
									filePath: tempFilePath,
									name: 'picture',
									header: {
										Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
									},
									success: (uploadFileRes) => {
										if (uploadFileRes.statusCode == 200) {
											uni.navigateBack({
												delta: 1
											})
											uni.showToast({
												title: "已验收",
												icon: 'none',
												duration: 3000
											})
					
										}
					
									}
								});
							}
							//预览图片
							/* uni.previewImage({
								urls: imgArr,
								success(response) {
									console.log(response)
								}
							}) */
						}
					})
				},
				1000,
				true
			),
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.sign-content {
		display: flex;
		height: 100vh;
		/*  #ifdef  H5  */
		height: calc(100vh - 44px);
		/*  #endif  */
		padding: 20rpx 0;
		box-sizing: border-box;

		.reset {
			background-color: rgb(248, 248, 248);
			border: 1px solid #ddd;
			transform: rotate(90deg);
			margin-top: 28rpx;
			padding: 6rpx 20rpx;
			border: none;
		}

		.tips {
			width: 600rpx;
			color: red;
			transform: rotate(90deg);
			height: 10px;
			position: fixed;
			left: -233rpx;
			top: 326rpx;
			/*  #ifdef  H5  */
			top: calc(326rpx + 88rpx);
			/*  #endif  */
			font-size: 34rpx;
		}

		.sign {
			flex: 1;
			height: 100%;
			margin-right: 100rpx;
			margin-left: 100rpx;
			border: 1px dashed #ddd;
			background-color: #fff;
		}
	}
</style>
