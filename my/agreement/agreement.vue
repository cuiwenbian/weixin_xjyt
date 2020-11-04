<template>
	<!-- 用户服务协议 -->
	<view class="container">
		<view class="dde">
			<rich-text :nodes="agreement"></rich-text>
		</view>
		<view class="fix">
			<button class="down" @click="aaa">下载</button>
			<button class="down" v-if="flag" @click="sss">同意</button>
			<button class="dowwn" v-if="fllaag">已同意</button>
		</view>
	</view>
</template>

<script> 
	export default {
		data() {
			return {
				agreement: '',
				chnerot: '',
				flag: false,
				fllaag: false,
				resInfo: '',
				servicePath: '',
				pops: false,
				isClick:true
				
			};
		},
		onShow() {
			var that = this;
			uni.request({
				url: this.url + 'usermachine/agreement/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					that.chnerot = res.data.data.user_agreement;
					that.agreement = res.data.data.agreement;
					if (that.chnerot == 0) {
						that.flag = true;
					}
				}
			});
		},
		methods: {
			sss: function() {
				var that = this;
				uni.request({
					url: this.url + 'usermachine/agreement/',
					method: 'POST',
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					success(res) {
						if (res.statusCode == 200) {
							that.fllaag = true;
							that.flag = false;
							uni.showToast({
								title: '已阅读并同意协议',
								icon: 'none',
								duration: 3000
							});
						}
					}
				});
			},
			aaa: function() {
				var that=this;
				if(this.isClick){
					that.isClick = false;
					uni.showLoading({
						title: '资源加载中',
						duration: 2000
					});
					uni.downloadFile({
						url: this.urla + 'media/用户服务协议.pdf',
						// #ifdef MP-WEIXIN
						filePath: wx.env.USER_DATA_PATH + '/用户服务协议.pdf',
						// #endif
						success: res => {
							var self = this;
							if (res.statusCode === 200) {
								// plus.io.requestFileSystem(plus.io.PRIVATE_WWW, function(fobject) {
								// 	//查找用户服务协议.pdf这个文件，有就打开，没有就创建
								// 	fobject.root.getFile('用户存力服务协议.pdf', {
								// 		create: true
								// 	}, function(fileEntry) {
								// 		fileEntry.file(function(file) {
								// 			var fileReader = new plus.io.FileReader();
								// 			self.resInfo = file;
								// 			//console.log(self.resInfo)
								// 			//console.log(self.resInfo.fullPath)
								// 			// self.servicePath = self.resInfo.fullPath
								// 			// self.servicePath='/'+self.servicePath.split('/0/')[1];
								// 			console.log(self.servicePath)
								// 			fileReader.readAsText(file, 'utf-8');
								// 			//文件读取操作完成时附加函数
								// 			fileReader.onloadend = function(evt) {
								// 				console.log(evt);
								// 			};
					
								// 		});
								// 	});
								// });
								
					            uni.request({
					                url:this.url + 'sendusermachine/',
					                method:'GET',
					                header: {
					                	Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					                },
					                success(res) {
										console.log(res)
					                    if(res.statusCode == 200){
					                        uni.showToast({
					                            title:'下载成功并已发送至绑定邮箱',
					                            icon:'none'
					                        })
					                    }
					                    if(res.statusCode == 302){
					                        uni.showToast({
					                            title:'协议将会发送至您的邮箱，请先绑定邮箱',
					                            icon:'none'
					                        })
					                    }
					                }
					            })
								
							} else {
								uni.showToast({
									title: '下载失败',
									icon: 'none',
									duration: 3000
								});
							}
						},
						fail: function() {
							that.isClick = true;
							uni.showToast({
								title: '下载失败'
							});
						},
						complete: function() {
							that.isClick = true;
							uni.hideLoading()
						}
					});
				}
				
			}
		}
	};
</script>

<style>

	.dde {
		height: 500rpx;
	}

	.fix {
		width: 100%;
		height: 98rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: space-between;
	}

	.down {
		width: 130rpx;
		height: 60rpx;
		font-size: 26rpx;
		line-height: 60rpx;
		margin-top: 19rpx;
		color: #fff;
		border-radius: 50rpx;
		background-image: linear-gradient(to right, #01c774, #01dda9);
	}

	.dowwn {
		width: 160rpx;
		height: 60rpx;
		font-size: 26rpx;
		line-height: 60rpx;
		margin-top: 19rpx;
		color: #fff;
		border-radius: 50rpx;
		background-image: linear-gradient(to right, #01c774, #01dda9);
	}

	.agreemen {
		font-size: 20rpx;
	}
</style>
