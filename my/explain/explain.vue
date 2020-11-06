<template>
	<view class="explain_page">
		<view class="conten">
			<rich-text :nodes="content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				content:''
			}
		},
		onLoad: function(opetions) {
			var that = this;
			uni.request({
				url: this.url + 'instruction/', //结算说明
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					console.log(res);
					if(res.data.code==200){
						that.content=res.data.data.content;
					}
					else{
						uni.showToast({
							title:res.data.msg,
							icon:'none',
							duration:3000
						})
					}
				}
			});
		},
	}
</script>

<style>
.explain_page {
	padding: 0 42rpx;
	box-sizing: border-box;
}

</style>
