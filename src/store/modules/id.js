/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'

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
}

const mutations = {
	login(state, authenticationData){
		const authenticationDetails = new cognito.AuthenticationDetails(authenticationData);

		const userData = {
			Username: authenticationData.Username,
			Pool: userPool
		};
		console.log(authenticationData);
		const cognitoUser = new cognito.CognitoUser(userData);
		// 認証処理
		cognitoUser.authenticateUser(authenticationDetails, {
			onSuccess: function () {
				console.log("signin success");
			},
			onFailure: function(err) {
				// サインイン失敗の場合、エラーメッセージを画面に表示
				console.log(err);
			}
		});
	},
	update(state){
		const cognitoUser = userPool.getCurrentUser();  // 現在のユーザー
		let currentUserData = {};  // ユーザーの属性情報
		// 現在のユーザー情報が取得できているか？
		if (cognitoUser != null) {
			cognitoUser.getSession(function(err) {
				if (err) {
					console.log(err);
				} else {
					// ユーザの属性を取得
					cognitoUser.getUserAttributes(function(err, result) {
						if (err) {
							console.log(err);
						}

						// 取得した属性情報を連想配列に格納
						for (let i = 0; i < result.length; i++) {
							currentUserData[result[i].getName()] = result[i].getValue();
						}
						state.id = currentUserData["sub"];
						console.log("id get success");
						console.log(currentUserData);
					});
				}
			});
		}else{
			console.log("user not found");
		} 	
	},
	logout(state){
		state.id="_";
	}
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
