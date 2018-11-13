import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from './http'
import './assets/css/reset.css'
import './assets/utils/rem'
// import AnimatedVue from 'animated-vue'
import animated from 'animate.css'

Vue.use(ElementUI).use(animated)
Vue.prototype.$axios = Axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
