import Vue from 'vue'
import App from './App'
import wTitleBar from 'components/w-titleBar/w-titleBar.vue'
Vue.component('wTitleBar', wTitleBar)
import Api from 'request/api.js'

Vue.config.productionTip = false

Vue.prototype.$Api = Api//挂载全局
Vue.prototype.url = 'https://api.ipcn.xyz/api/v1/'
Vue.prototype.urla = 'http://api.ipcn.xyz/'
// Vue.prototype.url = 'https://apitest.ipcn.xyz/api/v1/'
// Vue.prototype.url = 'http://192.168.1.158:8000/api/v1/'
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
