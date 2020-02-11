<template>
	<div>
		<h2>activation</h2>
		<!-- 仮置き -->
		<form>
			mail:{{mail}}
			key:<input type="text" v-model="key">
			<input type="submit" @click="activate">
		</form>
		{{mail}},{{key}}
		<!-- ------ -->
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
		key:"",
	};
};

export default {
	name: "activation",
	props:["mail"],
	data(){
		return initialData()
	},
	methods:{
		activate:function(){
			const userData = {
				Username: this.mail,
				Pool: userPool
			};
			const cognitoUser = new cognito.CognitoUser(userData);
			cognitoUser.confirmRegistration(this.key, true, function(err, result){
			if (err) {
				// アクティベーション失敗の場合、エラーメッセージを画面に表示
				if (err.message != null) {
					console.log(err);
				}
			} else {
				// アクティベーション成功の場合、サインイン画面に遷移
				console.log("Activation Success");
				console.log(result);
			}});
		}
	}
}
</script>

<style scoped>
</style>
