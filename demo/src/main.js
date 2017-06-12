import Vue from 'vue'
import App from './App.vue'
import Plugin from 'plugin'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS)
Vue.use(Plugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
