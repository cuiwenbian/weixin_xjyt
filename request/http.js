const BASE_URL = "https://api.ipcn.xyz/api/v1/" //公共请求头
const TOKEN = uni.getStorageSync('TOKEN') //TOKEN

const request = (url, method, data) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + url, //仅为示例，并非真实接口地址。
			data: data,
			method: method,
			header: {
				'custom-header': 'hello', //自定义请求头信息
				'token': TOKEN,
			},
			success: (res) => {
				if (res.statusCode == 200) {
					resolve(res)
				} else {
					uni.showToast({
						title:"请稍候重试",
						icon:'none',
						duration:3000
					})
				}
			},
			fail(error) {
				reject(error)
			},
			complete() {

			}
		});
	})
}

export default {
	request
}
