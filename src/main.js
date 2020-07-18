import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import store from '@/store/index'
import router from './router/index'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.filter('formatDate', function (value, formatType = "LL") {
  if (!value) return ''

  return moment(value).format(formatType)
})
Vue.use(Toasted)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
