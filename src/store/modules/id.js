/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../../router.js'

const cognito = require("amazon-cognito-identity-js");
const poolData = {
	UserPoolId: process.env.VUE_APP_USER_POOL_ID,
	ClientId: process.env.VUE_APP_CLIENT_ID,
};
const userPool = new cognito.CognitoUserPool(poolData);
/* */

Vue.use(Vuex)

const state = {
  id: "_"
}

const actions = {
	// ログイン
	login_new: async ({dispatch}, authenticationData) => {
		return new Promise((resolve, reject) => {
			// 認証データの作成
			const authenticationDetails = new cognito.AuthenticationDetails(authenticationData);
			const userData = {
				Username: authenticationData.Username,
				Pool: userPool
			};
			const cognitoUser = new cognito.CognitoUser(userData);

			// 認証処理
			cognitoUser.authenticateUser(authenticationDetails, {
				onSuccess: function () {
					resolve(dispatch("login"));
				},
				onFailure: function(err) {
					reject(err);
				}
			});
		});
	},
	login: async({commit, state}) => {
		return new Promise((resolve, reject) => {
			if(state.id !== "_"){resolve({already: state.id});}
			const cognitoUser = userPool.getCurrentUser();  // 現在のユーザー

			// 現在のユーザー情報が取得できているか？
			if (cognitoUser == null){ reject("user not found"); } 

			cognitoUser.getSession(function(err) {
				if (err) { reject(err);}

				// ユーザの属性を取得
				cognitoUser.getUserAttributes(function(err, result) {
					if (err) { reject(err);}

					// idを更新
					const id = result[0].getValue();
					commit("login", id);
					router.push("/user", ()=>{});
					resolve({login: id});
				});
			});
		});
	},
	logout({state, commit}){
		new Promise((resolve, reject) => {
			Vue.$confirm({
				message: 'ログアウトしますか？',
				button: {
					yes: 'はい',
					no: 'いいえ'
				},
				callback: confirm => {
					if(!confirm){reject();} 
					resolve();
				}
			});
		}).then(()=>{
			const cognitoUser = userPool.getCurrentUser();
			if(cognitoUser == null){return "use not found";}
			const id = state.id;
			cognitoUser.signOut();
			commit("login", "_");
			router.push("/sign", ()=>{});
			id;
			//console.log({"logout succes": id});
		}).catch(()=>{
			console.log("logout cancel");
		});
	},
	getId: async({dispatch, state}) => {
		return new Promise((resolve, reject) => {
			if(state.id !== "_"){
				resolve(state.id);
			}
			dispatch("login").then(function(){
				resolve(state.id);
			}).catch(()=>{
				reject("_");
			});
		});
	},
}

const mutations = {
	login: (state, id) => {
		state.id = id;
	},
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
