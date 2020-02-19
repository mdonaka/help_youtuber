<template>
	<div>
		<h2>sign in</h2>
		<div @click="login('k')">no bug</div>
		<!-- 仮置き -->
		<form>
			mail:<input type="text" v-model="mail">
			pass:<input type="text" v-model="password">
			<input type="submit" @click="signin">
		</form>
		<button @click="test">get</button>
		{{mail}},{{password}}
	</div>
</template>

<script>
/* eslint-disable no-console */
import {mapMutations} from 'vuex'

// const aws = require("aws-sdk");
const cognito = require("amazon-cognito-identity-js");
const poolData = {
	UserPoolId: process.env.VUE_APP_USER_POOL_ID,
	ClientId: process.env.VUE_APP_CLIENT_ID,
};
const userPool = new cognito.CognitoUserPool(poolData);

const initialData = ()=>{
	return {
		mail: "nickname",
		password: "1234**KKoop"
	};
};

export default {
	data(){
		return initialData()
	},
	methods:{
		...mapMutations({
			login: "id/login"
		}),
		signin:function(){
			// 認証データの作成
			const authenticationData = {
				Username: this.mail,
				Password: this.password
			};
			const authenticationDetails = new cognito.AuthenticationDetails(authenticationData);

			const userData = {
				Username: this.mail,
				Pool: userPool
			};
			const cognitoUser = new cognito.CognitoUser(userData);
			// 認証処理
			cognitoUser.authenticateUser(authenticationDetails, {
				onSuccess: function () {
					//var idToken = result.getIdToken().getJwtToken();          // IDトークン
					//var accessToken = result.getAccessToken().getJwtToken();  // アクセストークン
					//var refreshToken = result.getRefreshToken().getToken();   // 更新トークン
					console.log("Success");
				},
				onFailure: function(err) {
					// サインイン失敗の場合、エラーメッセージを画面に表示
					console.log(err);
				}
			});
			this.test();
		},
		test: function(){
			const cognitoUser = userPool.getCurrentUser();  // 現在のユーザー
			let currentUserData = {};  // ユーザーの属性情報
			const login = this.login;
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
							login(currentUserData["sub"]);
							console.log(currentUserData);
						});
					}
				});
			}else{
				console.log("non");
			} 	
		}
	}
}
</script>

<style scoped>
</style>
