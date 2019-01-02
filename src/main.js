
import Vue from 'vue'
import App from './App'
import router from './router'
import  store from './store'
import './mock/mockServer'
//注册头部全局组件
import NavHeader from './components/NavHeader/NavHeader'
Vue.component('NavHeader',NavHeader)


new Vue({
  el: '#app',
  render:h =>h(App),
  router,
  store
})
