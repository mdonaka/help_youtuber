import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'
import {store}  from './store'
import vuetify from './plugins/vuetify';
import VueConfirmDialog from 'vue-confirm-dialog'

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
