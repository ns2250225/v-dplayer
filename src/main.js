import Vue from 'vue'
import App from './App.vue'
import 'DPlayer/dist/DPlayer.min.css'

import VDplayer from './assets/index.js'
Vue.use(VDplayer)

new Vue({
  el: '#app',
  render: h => h(App)
})
