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
		idA;idB;
		const roomHash = "roomHash"//hash化

		const API = process.env.VUE_APP_CHAT_DB_API + "info_get";
		const val = axios_obj.get(API,{params:{ID:roomHash}}).then(response => {
			const data = response.data.body;
			return data;
		}).catch(err => {
			console.log({"err":err});
			return "ERROR";
		});
		val.then(res => {
			console.log({"info": "get"});
			console.log(res);
		})
	},

	updateRoomInfo: async(idA, idB, chatNum, unreadNum) => {
		const roomHash = "roomHash"//hash化

		idA;idB;chatNum;unreadNum;
		const API = process.env.VUE_APP_CHAT_DB_API + "info_update";
		const data = JSON.stringify({
			ID: roomHash,
			chatNum: chatNum,
			unreadNum: unreadNum 
		});
		const val = axios_obj.post(API,data).then(response => {
			const data = response.data.body;
			return data;
		}).catch(err => {
			console.log({"err":err});
			return "ERROR";
		});
		val.then(res => {
			console.log({"info": "update"});
			console.log(res);
		})
	},

	getRoomChat: async(idA, idB) => {
		idA;idB;
		const roomHash = "roomHash"//hash化

		const API = process.env.VUE_APP_CHAT_DB_API + "text_get";
		const val = axios_obj.get(API,{params:{ID:roomHash}}).then(response => {
			const data = response.data.body;
			return data;
		});
		val.then(res => {
			console.log({"get chat":res});
		})
	},

	addRoomChat: async({state},{idA, idB, chatText}) => {
		const roomHash = "roomHash"//hash化
		// updateRoomInfo(idA,idB, chatNum+1, unreadNum+1);
		idA;idB;state;

		const API = process.env.VUE_APP_CHAT_DB_API + "text_update";
		const data = JSON.stringify({
			ID: roomHash,
			text: chatText,
			date: "20201029"// 日付を取得
		});
		console.log(data);
		const val = axios_obj.post(API,data).then(response => {
			const data = response.data.body;
			return data;
		}).catch((res)=>{
			console.log({"err":res});
		});
		val.then((res) => {
			console.log({"update chat":res});
		});
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
