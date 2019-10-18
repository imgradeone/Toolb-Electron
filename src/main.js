import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueMDCAdapter from 'vue-mdc-adapter'

Vue.use(VueMDCAdapter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
