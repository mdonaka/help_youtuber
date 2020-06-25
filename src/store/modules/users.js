/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios';

Vue.use(Vuex)

const state = {
}

const actions = {
}

const mutations = {
}

const getters = {
	async getUsers() {
		const axios_obj = Axios.create({
			responseType: 'json'
		});

		const API = process.env.VUE_APP_DB_API + "getAllDB";
		const val = axios_obj.get(API).then(function(response) {
			const data = response.data;
			return data;
		});
		return val;
	},
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
