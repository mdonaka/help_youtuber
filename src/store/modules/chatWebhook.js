/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
		textList: [{text:"example", isMine:true}],
		toId: "_",
		sock: new WebSocket(process.env.VUE_APP_CHAT_URL),
}

const getters = {
}

const actions = {
	updateTarget: async({dispatch, commit}, toId) => {
		console.info("target update");
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
		if(state.toId === "_"){return;}
		// ローカルを更新
		commit("push",{"text": text, "isMine": true});
		// データベースを更新
		const myId = await dispatch("id/getId", null, { root: true });
		dispatch("roomInfo/addRoomChat", 
			{"idA": myId, "idB": state.toId, "chatText": text},
			{ root: true });
		// 相手へ送信
		const data = JSON.stringify({"action":"sendMessage", "data":
			{ text:text, sendId:state.toId }
		});
		state.sock.send(data);
	},

	socketConnect: async({dispatch, state, commit}) => {
		const myId = await dispatch("id/getId", null, { root: true });

		// 接続
		state.sock.addEventListener('open',function(){
			console.log('Socket 接続成功');
			// ユーザの登録
			const req= JSON.stringify({"action":"addUser", "data":myId});
			state.sock.send(req);
		});

		// サーバーからデータを受け取る
		state.sock.addEventListener('message',function(e){
			console.log({"get": e.data});
			// TODO: 相手が誰かを確認する if(state.toId == e.hoge)
			commit("push", {text:e.data, isMine:false});
		});

	}
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
