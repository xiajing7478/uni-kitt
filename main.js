import Vue from 'vue'
import App from './App'
import { myRequest } from './utils/index.js'
Vue.prototype.$myRequest = myRequest
Vue.config.productionTip = false
Vue.filter('formate', function(date) {
	return new Date(date).toLocaleDateString()
})
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
