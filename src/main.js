// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'

import 'common/stylus/index.styl'

Vue.config.productionTip = false
fastclick.attach(document.body)

import axios from './axios'
Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
