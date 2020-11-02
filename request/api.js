import request from './http.js'
const api=request
export default {
	getNews: (data) => { 
		return api.request('home/news/', 'GET', data)
	},
	getPool: (data) => {
		return api.request('cloudareadys/', 'GET', data)
	},
}