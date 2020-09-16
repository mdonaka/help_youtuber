/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

//import idModule from './id'

Vue.use(Vuex)

const state = {
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

const actions = {
	getUserInfo: async function({dispatch}){
		console.log("call");
		return dispatch("id/getId", null, { root: true }).then((id)=>{
			const axios_obj = Axios.create({
				responseType: 'json'
			});

			const API = process.env.VUE_APP_DB_API + "getDB";
			const val = axios_obj.get(API,{params:{id:id}}).then(response => {
				const data = response.data.body;
				return data;
			});
			return val;
		});
	},
	userUpdate: async function({mutations}, data){
		mutations; // not use errorを封じる
		const axios_obj = Axios.create({
			responseType: 'json'
		});
		const API = process.env.VUE_APP_DB_API + "updateDB";
		const val = axios_obj.post(API, data).then(response => {
			const data = response.data;
			return data;
		});
		return val;
	},
}

const mutations = {
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
