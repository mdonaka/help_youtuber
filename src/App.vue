<template>
  <v-app>
    <v-toolbar color="error" dense>
          <v-img
          alt="YtoE Logo"
          class="shrink mr-2"
          contain
          v-bind:src="require('@/assets/YtoE_logo.png')"
          width="60"
        />
        <v-col cols="12" sm="5">
        <v-text-field
          hide-details
          label="検索"
          solo
          dense
        ></v-text-field>
        </v-col>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
  
        <v-btn icon href="#/chat" >
          <v-icon>mdi-chat</v-icon>
        </v-btn>
  
        <v-btn icon href="#/user">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn icon href="/#/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
				{{id}}
        <v-btn icon @click=logout>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
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
			console.log("on");
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
};
</script>
