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
}

const actions = {
	calcHash: async (c, {idA, idB}) => {
		// sha256
		const uint8  = new TextEncoder().encode(idA+idB)
		const digest = await crypto.subtle.digest('SHA-256', uint8)
		return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
	},

	getRoomInfo: async({dispatch}, {idA, idB}) => {
		const roomHash = await dispatch("calcHash", {"idA": idA,"idB": idB});

		const API = process.env.VUE_APP_CHAT_DB_API + "info_get";
		const val = axios_obj.get(API,{params:{ID:roomHash}}).then(response => {
			const data = response.data.body;
			return data;
		}).catch(err => {
			return err;
		});

		return val.then(res => {
			if(!res.hasOwnProperty("Item")){
				return dispatch("updateRoomInfo", {"idA": idA, "idB": idB, "chatNum": 0, "unreadNum": 0}).then(()=>{
					return dispatch("getRoomInfo", {"idA": idA, "idB": idB});
				});
			}
			return res.Item;
		}).catch(err => {
			console.log({"room get error": err});
			return err;
		})
	},

	updateRoomInfo: async({dispatch}, {idA, idB, chatNum, unreadNum}) => {
		const roomHash = await dispatch("calcHash", {"idA": idA,"idB": idB});

		const API = process.env.VUE_APP_CHAT_DB_API + "info_update";
		const data = JSON.stringify({
			ID: roomHash,
			chatNum: chatNum,
			unreadNum: unreadNum 
		});
		axios_obj.post(API,data).then(()=> {
		}).catch(err => {
			console.log({"err":err});
		});
	},

	getRoomChat: async({dispatch}, {idA, idB}) => {
		const roomHash = await dispatch("calcHash", {"idA": idA,"idB": idB});

		const API = process.env.VUE_APP_CHAT_DB_API + "text_get";
		const val = axios_obj.get(API,{params:{ID:roomHash}}).then(response => {
			const data = response.data.body;
			return data;
		});
		return val.then(res => {
			if(res.hasOwnProperty("Item")){
				return res.Item;
			}
			return {};
		}).catch(err=>{
			console.log({"err":err});
			return {};
		});
	},

	addRoomChat: async({dispatch},{idA, idB, chatText}) => {
		const roomHash = await dispatch("calcHash", {"idA": idA,"idB": idB});

		// 日付取得
		const zeroPadding = (val, len)=>{
			return (Array(len).join('0') + val).slice(-len);
		};
		const date = new Date();
		const ye = zeroPadding(date.getFullYear(), 4);
		const mo = zeroPadding(date.getMonth()+1, 2);
		const da = zeroPadding(date.getDate(), 2);
		const ho = zeroPadding(date.getHours(), 2);
		const mi = zeroPadding(date.getMinutes(), 2);
		const se = zeroPadding(date.getSeconds(), 2);
		const we= "日月火水木金土"[date.getDay()];
		const jDate = `${ye}/${mo}/${da}(${we}) ${ho}:${mi}:${se}`

		const API = process.env.VUE_APP_CHAT_DB_API + "text_update";
		const data = JSON.stringify({
			ID: roomHash,
			text: chatText,
			date: jDate
		});
		axios_obj.post(API,data).then(() => {
		}).catch((res)=>{
			console.log({"err":res});
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
