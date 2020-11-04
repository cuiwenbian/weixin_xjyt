import request from './http.js'
const api=request
export default {
	getNews: (data) => { 
		return api.request('home/news/', 'GET', data,true)
	},
	getNewsDetail: (data) => {
		return api.request('home/news/details/', 'PUT', data , false)
	},
	getRotation: (data) => {
		return api.request('home/rotation/', 'GET', data,true)
	},
}