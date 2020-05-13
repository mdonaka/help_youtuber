<template>
<v-app>
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
</v-app>
</template>

<script>
/* eslint-disable no-console */

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

			userPool.signUp(this.nickname, this.password, attributeList, null, (err)=>{
				if(err){console.log(err);return;}
				console.log("success");
			});
		}
	}
}
</script>

<style scoped>
</style>
