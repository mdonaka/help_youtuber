<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="mdi-account-circle" label="ユーザ名" v-model="mail"/>
          <v-text-field v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" append-icon="mdi-eye-off" label="パスワード" @click:append="showPassword = !showPassword" v-model="password" />
          <v-card-actions>
            <v-btn class="info" color="error" @click="test">ログイン</v-btn>
          </v-card-actions>
          <p>※アカウントをお持ちでない方は<a href="/#/sign/signup">こちら</a></p>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
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
		password: "1234**KKoop",
		showPassword:false
	};
};

export default {
	name: 'App',
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
