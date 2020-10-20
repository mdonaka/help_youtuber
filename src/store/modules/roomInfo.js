/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

const axios_obj = Axios.create({
	responseType: 'json'
});

const state = {
}

const getters = {
	calcHash: (idA, idB) => {
		// hash化関数
		idA,idB;
	},
}

const actions = {
	getRoomInfo: async(idA, idB) => {
		const roomHash = 0//hash化

		const API = process.env.VUE_APP_HOGE_DB_API + "hoge";
		const val = axios_obj.get(API,{params:{room:roomHash}}).then(response => {
			const data = response.data.body;
			return data;
		});
		val;
	},
	updateRoomInfo: async(idA, idB, chatNum, unreadNum) => {
		const roomHash = 0//hash化

		const API = process.env.VUE_APP_HOGE_DB_API + "huga";
		const data = {
			room: roomHash,
			chatNum: chatNum,
			unreadNum: unreadNum
		};
		const val = axios_obj.get(API,data).then(response => {
			const data = response.data.body;
			return data;
		});
		val;
	},
	getRoomChat: async(idA, idB) => {
		const roomHash = 0//hash化

		const API = process.env.VUE_APP_HOGE_DB_API + "hoge";
		const val = axios_obj.get(API,{params:{room:roomHash}}).then(response => {
			const data = response.data.body;
			return data;
		});
		val;
	},
	addRoomChat: async(idA, idB, chatText) => {
		const roomHash = 0//hash化
		const chatNum = 0// chat数を取得
		const unreadNum = 0//未読数を取得
		// updateRoomInfo(idA,idB, chatNum+1, unreadNum+1);

		const API = process.env.VUE_APP_HOGE_DB_API + "huga";
		const data = {
			room: roomHash,
			text: chatText,
			data: 0// 日付を取得
		};
		const val = axios_obj.get(API,data).then(response => {
			const data = response.data.body;
			return data;
		});
		val;
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
