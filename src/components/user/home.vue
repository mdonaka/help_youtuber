<template>
	<div> 
		<h2>ユーザ画面</h2>
		<h1 @click="post">POST チェック</h1>
	</div>
</template>

<script>
/* eslint-disable no-console */

import Axios from 'axios';

export default {
	created:()=>{
	},
	methods:{
		post: ()=>{
			const axios_obj = Axios.create({
				responseType: 'json'
			});

			const data = JSON.stringify({str:"Hello"});
			const API = process.env.VUE_APP_DB_API + "updateDB";

			axios_obj.post(API, data).then(response => {
				const data = response.data;
				console.log(data);
			});
		},
	}
}
</script>

<style scoped>
</style>
