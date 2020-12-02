/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
		textList: [{text:"example", isMine:true}],
		toId: "_"
}

const getters = {
}

const actions = {
	updateTarget: async({dispatch, commit}, toId) => {
		// chat相手の更新
		commit("updateTarget", toId);
		
		// chatリストの更新
		commit("init");
		const myId = await dispatch("id/getId", null, { root: true });
		dispatch("roomInfo/getRoomChat", 
			{"idA": myId, "idB": toId}, { root: true }).then(res=>{
				for (const obj of res){
					commit("push",{"text": obj.text, "isMine": true});
				}
		});
		dispatch("roomInfo/getRoomChat", 
			{"idA": toId, "idB": myId}, { root: true }).then(res=>{
				for (const obj of res){
					commit("push",{"text": obj.text, "isMine": false});
				}
		});
	},

	pushText: async({state, dispatch, commit}, text) =>{
		const myId = await dispatch("id/getId", null, { root: true });
		dispatch("roomInfo/addRoomChat", 
			{"idA": myId, "idB": state.toId, "chatText": text},
			{ root: true });
		commit("push",{"text": text, "isMine": true});
	},
}

const mutations = {
	init: (state) => {
		state.textList = [];
	},
	push: (state, {text, isMine}) => {
		state.textList.push({"text": text, "isMine": isMine});
	},
	updateTarget: (state, toId) => {
		state.toId= toId;
	}
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
