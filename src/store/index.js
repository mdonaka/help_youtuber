import Vue from 'vue'
import Vuex from 'vuex'
import id from './modules/id'
import users from './modules/users'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		id,
		users
	}
})
