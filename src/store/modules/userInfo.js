/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'

import id from './id'

Vue.use(Vuex)

const state = {
}

const getters = {
}

const actions = {
	getUserInfomation: async() => {
		console.log("in");
		let local = {};
		this.getUserInfo(this.id).then((data) => {
			const item = data.Item;
			local.name = item.name;
			local.mail= item.mail;
			local.food= item.food;
			local.sitem = item.sitem;
			local.kitem = item.kitem;
			local.gitem = item.gitem;
			local.ditem = item.ditem;
			local.comment = item.comment;
			local.selfIntro = item.selfIntro;
			local.nowLoading = false;
			local.price = item.price;
		}).catch(()=>{
			local.nowLoading = false;
		});
		return local;
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
