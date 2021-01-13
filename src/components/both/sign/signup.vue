<template>
<v-app>
	<div>
		<v-card width="400px" class="mx-auto mt-5" v-bind:disabled="nowLoading">
			<!-- サインイン時のローディング処理 -->
			<v-dialog width="400px" v-model="nowLoading" persistent hide-overlay>
				<v-card color="primary" dark >
					<v-card-text>
						now signup...
						<v-progress-linear
							indeterminate
							color="white"
							class="mb-0"
						></v-progress-linear>
					</v-card-text>
				</v-card>
			</v-dialog>
			<!-- ---------------------------- -->
		<v-card-title>
			<h1 class="display-1">アカウント作成</h1>
		</v-card-title>

		<v-card-text>
			<v-form>
			<v-text-field prepend-icon="mdi-account-circle" label="ユーザ名" v-model="nickname" />
			<v-text-field v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" append-icon="mdi-eye-off" label="パスワード" v-model="password" @click:append="showPassword = !showPassword" hint="小文字，大文字，数字，記号を含め8文字以上" />
			<v-radio-group prepend-icon="mdi-play-box"  v-model="row" row>
				<v-radio label="Youtuber" color="red" value="Youtuber"></v-radio>
				<v-radio label="Editor" color="success" value="Editor"></v-radio>
			</v-radio-group>
			<v-card-actions>
				<v-btn class="info" color="error" @click="signup" >アカウント作成</v-btn>
			</v-card-actions>
			<p>※ログインは<a href="/#/sign/signin">こちら</a></p>
			</v-form>
		</v-card-text>
		</v-card>
	</div>
</v-app>
</template>

<script>
/* eslint-disable no-console */
import {mapActions} from 'vuex'
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
		showPassword: false,
		row:1,
		nowLoading: false
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
		...mapActions({
			login: "id/login_new",
		}),
		signup: async function(){
			const this2 = this;
			this.nowLoading = true;
			new Promise((resolve, reject)=>{
				let attributeList = [];
				const dataNickName = {
					Name: "nickname",
					value: this.nickname
				}
				attributeList.push(new cognito.CognitoUserAttribute(dataNickName));

				userPool.signUp(this.nickname, this.password, attributeList, null, (err)=>{
					if(err){reject(err); return;}
					resolve(this2.signin());
				});
			}).then((res)=>{
				console.log({signup: res});
				this2.nowLoading = false;
			},(err)=>{
				console.log(err);
				this2.nowLoading = false;
			});
		},
		signin: async function(){
			return new Promise((resolve) => {
				// 認証データの作成
				const authenticationData = {
					Username: this.nickname,
					Password: this.password
				};
				const this2 = this;
				this.login(authenticationData).then(()=>{
					this2.updateDB();
					resolve(this2.nickname);
				});
			});
		},
		post: async (method, data)=>{
			return new Promise((resolve) => {
				const axios_obj = Axios.create({
					responseType: 'json'
				});
				const API = process.env.VUE_APP_DB_API + method;
				axios_obj.post(API, data).then(response => {
					resolve(response);
				});
			});
		},
		updateDB: async function(){
			return new Promise((resolve) => {
				const non = '_';
				if(this.id !== non){
					const data = JSON.stringify({
						id:this.id,
						name: this.nickname,
						row: this.row,
					});
					const this2 = this;
					this.post("updateDB", data).then((response)=>{
						this2.$router.push(((this2.row=="Youtuber")?"/user_y":"/user_e")+"/userpage", ()=>{});
						resolve(response);
					});
				}
			});
		},
	}
}
</script>

<style scoped>
</style>
