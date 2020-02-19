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
		mail: "",
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
			const login = this.login;
			// 認証処理
			cognitoUser.authenticateUser(authenticationDetails, {
				onSuccess: function (result) {
					var idToken = result.getIdToken().getJwtToken();          // IDトークン
					//var accessToken = result.getAccessToken().getJwtToken();  // アクセストークン
					//var refreshToken = result.getRefreshToken().getToken();   // 更新トークン
					login(idToken);
					console.log(idToken);
					// サインイン成功の場合、次の画面へ遷移
				},
				onFailure: function(err) {
					// サインイン失敗の場合、エラーメッセージを画面に表示
					console.log(err);
				}
			});
		}
	}
}
</script>

<style scoped>
</style>
