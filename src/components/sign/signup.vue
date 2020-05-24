<template>
	<div>
		<h2>sign up</h2>
		<!-- 仮置き -->
		<form>
			nick:<input type="text" v-model="nickname">
			pass:<input type="text" v-model="password">
			0or1:<input type="text" v-model="attribute">
			<input type="submit" @click="signup">
		</form>
		{{attribute}},{{password}},{{nickname}}
		<!-- ------ -->

		<button @click="flg=!flg">change</button>
	</div>
</template>

<script>
/* eslint-disable no-console */
import {mapMutations} from 'vuex'
import {mapState} from 'vuex'
import Axios from 'axios';

// const aws = require("aws-sdk");
const cognito = require("amazon-cognito-identity-js");
const poolData = {
	UserPoolId: process.env.VUE_APP_USER_POOL_ID,
	ClientId: process.env.VUE_APP_CLIENT_ID,
};
const userPool = new cognito.CognitoUserPool(poolData);

const initialData = ()=>{
	return {
		nickname:"nickname",
		password:"1234**KKoop",
		attribute: "1",
		flg:true,
	};
}

export default {
	name: "signup",
	computed: {
		...mapState({
			id:s=>s.id.id
		}),
	},
	data(){
		return initialData()
	},
	created(){
	},
	methods:{
		...mapMutations({
			login: "id/login"
		}),
		signup:function(){
			let attributeList = [];
			const dataNickName = {
				Name: "nickname",
				value: this.nickname
			}
			attributeList.push(new cognito.CognitoUserAttribute(dataNickName));

			userPool.signUp(this.nickname, this.password, attributeList, null, (err)=>{
				if(err){console.log(err);return;}
				console.log("success");
			});
			setTimeout(this.signin, 1000);
		},
		signin:function(){
			// 認証データの作成
			const authenticationData = {
				Username: this.nickname,
				Password: this.password
			};
			const authenticationDetails = new cognito.AuthenticationDetails(authenticationData);

			const userData = {
				Username: this.nickname,
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
			setTimeout(this.test, 1000);
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
							console.log(currentUserData["sub"]);
							login(currentUserData["sub"]);
							console.log(currentUserData);
						});
					}
				});
				setTimeout(this.update, 1000);
			}else{
				console.log("non");
			} 	
		},
		post:(method, data, callback)=>{
			const axios_obj = Axios.create({
				responseType: 'json'
			});
			const API = process.env.VUE_APP_DB_API + method;
			axios_obj.post(API, data).then(response => {
				const data = response.data;
				callback(data);
			});
		},
		update:function(){
			const non = '_';
			if(this.id !== non){
				const data = JSON.stringify({
					id:this.id,
					name: this.nickname,
					mail: "_",
					food:"_" 
				});
				this.post("updateDB", data, (response)=>{
					console.log(response);
				});
			}
		},
	}
}
</script>

<style scoped>
</style>
