import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  id: "_"
}

const actions = {
}

const mutations = {
	login(state, newId){
		state.id = newId;
	},
	logout(state){
		state.id="_";
	}
}

const getters = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
