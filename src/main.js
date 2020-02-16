import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'
import {store}  from './store'


Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
