<template>
	<div>
		<h2>sign up</h2>
		<!-- 仮置き -->
		<form>
			mail:<input type="text" v-model="mail">
			pass:<input type="text" v-model="password">
			nick:<input type="text" v-model="nickname">
			<input type="submit" @click="signup">
		</form>
		{{mail}},{{password}},{{nickname}}

		<!-- ------ -->
		<div>no bug</div>
	</div>
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
		mail:"test@tsetaa.ppas.aaa",
		password:"1234**KKoop",
		nickname:"nickname",
	};
}

export default {
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

			userPool.signUp(this.mail, this.password, attributeList, null, (err, result)=>{
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
