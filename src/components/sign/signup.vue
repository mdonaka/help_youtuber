<template>
	<div>
		<h2>sign up</h2>
		<div v-if="flg">
		<!-- 仮置き -->
		<form>
			0or1:<input type="text" v-model="attribute">
			pass:<input type="text" v-model="password">
			nick:<input type="text" v-model="nickname">
			<input type="submit" @click="signup">
		</form>
		{{attribute}},{{password}},{{nickname}}
		<!-- ------ -->
		</div>

		<!-- activate -->
		<div v-else>
			<Activate :mail="mail"/>
		</div>
		<button @click="flg=!flg">change</button>
	</div>
</template>

<script>
/* eslint-disable no-console */

import Activate from "./activation.vue"

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
	components: {
		Activate
	},
	data(){
		return initialData()
	},
	created(){
	},
	methods:{
		signup:function(){
			let attributeList = [];
			const dataNickName = {
				Name: "nickname",
				value: this.nickname
			}
			attributeList.push(new cognito.CognitoUserAttribute(dataNickName));

			userPool.signUp(this.nickname, this.password, attributeList, null, (err, result)=>{
				if(err){console.log(err);return;}
				console.log("success");
				console.log(result);
			});
		}
	}
}
</script>

<style scoped>
</style>
