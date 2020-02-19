<template>
  <div id="app">
    <h1 @click="hello">Help Youtuber</h1>
		<router-view/>
			userid:{{id}}
		<button @click="logout">logout</button>
  </div>
</template>

<script>
/* eslint-disable no-console */

import {mapState, mapMutations} from 'vuex'
const cognito = require("amazon-cognito-identity-js");
const poolData = {
	UserPoolId: process.env.VUE_APP_USER_POOL_ID,
	ClientId: process.env.VUE_APP_CLIENT_ID,
};
const userPool = new cognito.CognitoUserPool(poolData);

export default {
  name: 'app',
	computed: {
		...mapState({
			id:s=>s.id.id
		}),
	},
	methods:{
		hello: function(){
			this.$router.push("/sign");
		},
		...mapMutations({
			logout:"id/logout",
			login:"id/login"
		}),
	},
	created(){
	
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
</script>

<style>
</style>
