import Vue from 'vue'
import Vuex from 'vuex'
import id from './modules/id'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		id	
	}
})
