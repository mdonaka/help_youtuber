import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'
import {store}  from './store'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
