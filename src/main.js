import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'intersection-observer' // Optional
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/global.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify'
// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
// import { LayoutPlugin, ModalPlugin, CardPlugin, VBScrollspyPlugin, DropdownPlugin, TablePlugin } from 'bootstrap-vue'

// Vue.use(LayoutPlugin, ModalPlugin, CardPlugin, VBScrollspyPlugin, DropdownPlugin, TablePlugin)

const vuetifyOptions = { }
Vue.use(Vuetify)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify: new Vuetify(vuetifyOptions),
  template: '<App/>'
})
