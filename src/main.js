/**
 * 入口文件
 */
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'

import NavHeader from './components/NavHeader/NavHeader.vue'
import star from './components/star/star.vue'
Vue.component('star',star)
Vue.component('NavHeader',NavHeader);



/* eslint-disable no-new */
export default new Vue({
  el:'#app',
   // components:App,
   // template:'<App>',
   render: h => h(App),
  router,
  store
})
