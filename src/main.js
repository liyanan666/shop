import Vue from 'vue'
import App from './App.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import router from './router/routerconfig.js'
import store from './store/store'
import global from './components/Global.vue'
Vue.prototype.GLOBAL = global

Vue.use(MintUI)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
