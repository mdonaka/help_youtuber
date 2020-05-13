<template>
	<div> 
		<h2>ユーザ画面</h2>
		<div>ユーザ名:{{name}}</div>
		<div>メアド: {{mail}}</div>
		<div>好きな食べ物: {{food}}</div>

		<button @click="updateAllContents">ユーザ表示</button>
		<button @click="update">更新</button>
		<button @click="allget">全取得</button>
	</div>
</template>

<script>
/* eslint-disable no-console */

import {mapState} from 'vuex'
import Axios from 'axios';

const initialData = ()=>{
	return {
		editFlg: false,
		name: "_",
		mail: "_" ,
		food: "_",
	};
}

export default {
	data(){
		return initialData()
	},
	computed: {
		...mapState({
			id:s=>s.id.id
		}),
	},
	mounted:function(){
		const non = '_';
		console.log("call", this.id);
		if(this.id !== non){
			this.updateAllContents(this.id);
		}
	},
	methods:{
		updateAllContents: function(id) {
			const local = this;
			this.get(id, function(data){
				const item = data.body.Item;
				local.name = item.name;
				local.mail= item.mail;
				local.food= item.food;
			});
		},
		get:(id, callback)=>{
			const axios_obj = Axios.create({
				responseType: 'json'
			});

			const API = process.env.VUE_APP_DB_API + "getDB";
			axios_obj.get(API,{params:{id:"omitsu"}}).then(response => {
				const data = response.data;
				callback(data)
			});
		},
		allget:()=>{
			const axios_obj = Axios.create({
				responseType: 'json'
			});

			const API = process.env.VUE_APP_DB_API + "getAllDB";
			axios_obj.get(API).then(response => {
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
