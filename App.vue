<script>
export default {
	onLaunch: function() {
		var that = this;
		var times = uni.getStorageSync('nowtime');
		var setTime = new Date().getTime();
		if (times) {
			console.log('当前时间戳' + setTime);
			console.log('本地存储时间戳' + times);
			var allTime = setTime - times;
			console.log('登录使用token时间' + allTime);
			if (allTime > 1000 * 60 * 21600) {
				//如果token超过十五天，自动清除token,重新登录
				console.log('token已过期');
				uni.removeStorageSync('token');
				uni.removeStorageSync('phone');
				uni.removeStorageSync('nowtime');
			} else {
				console.log('token未过期');
			}
		}
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
@import 'colorui/main.css';
@import 'colorui/icon.css';
/*每个页面公共css */
image {
	display: block;
}
</style>
