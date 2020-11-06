const BASE_URL = "https://api.ipcn.xyz/api/v1/" //公共请求头
// const BASE_URL = "http://192.168.1.158:8000/api/v1/"
const TOKEN = uni.getStorageSync('token') //TOKEN

const request = (url, method, data, ispath=true) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: ispath ? BASE_URL + url : BASE_URL + url + data,
			data: ispath ? data : '',
			method: method,
			header: {
				//Authorization: 'JWT' + ' ' + TOKEN //自定义请求头信息
			},
			success: (res) => {
				if (res.statusCode == 200) {
					resolve(res)
				} else {
					uni.showToast({
						title: "请稍候重试",
						icon: 'none',
						duration: 3000
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
