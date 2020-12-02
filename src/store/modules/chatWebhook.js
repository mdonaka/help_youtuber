/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
		textList: [{text:"example", isMine:true}]
}

const getters = {
}

const actions = {
}

const mutations = {
	init: (state) => {
		state.textList = [];
	},
	push: (state, {text, isMine}) => {
		state.textList.push({"text": text, "isMine": isMine});
	}
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
