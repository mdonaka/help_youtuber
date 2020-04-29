<template>
	<div> 
		<h2>ユーザ画面</h2>
		<h1 @click="update">POST チェック</h1>
		<h1 @click="get">GET チェック</h1>
	</div>
</template>

<script>
/* eslint-disable no-console */

import Axios from 'axios';

export default {
	created:()=>{
	},
	methods:{
		get:()=>{
			const axios_obj = Axios.create({
				responseType: 'json'
			});
			const API = process.env.VUE_APP_DB_API + "getDB";
			axios_obj.get(API, {patams:{id:"omiomi"}}).then(response => {
				const data = response.data;
				console.log("data:");
				console.log(data);
			});
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
			const data = JSON.stringify({
				id:"omitsu",
				Twitter: "@omiomi",
				name: "SAN"
			});
			this.post("updateDB", data, (response)=>{
				console.log(response);
			});
		},
	}
}
</script>

<style scoped>
</style>
