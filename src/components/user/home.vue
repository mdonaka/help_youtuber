<template>
	<div> 
		<h2>ユーザ画面</h2>
		<div>ユーザ名:
			<input v-if=editFlg type="text" v-model="name">
			<span v-else>{{name}}</span>
		</div>
		<div>メアド:
			<input v-if=editFlg type="text" v-model="mail">
			<span v-else>{{mail}}</span>
		</div>
		<div>好きな食べ物:
			<input v-if=editFlg type="text" v-model="food">
			<span v-else>{{food}}</span>
		</div>

		編集: <input type="checkbox" v-model="editFlg">
		<p>
			<button @click="updateAllContents">ユーザ表示</button>
			<button @click="update">情報を更新する</button>
			<button @click="allget">全取得</button>
		</p>
		<div>
			<span>以下全ユーザリスト</span>
			<div v-for="data in userList" v-bind:key="data.id">
				名前:{{data.name}}，mail:{{data.mail}}
			</div>
		</div>
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
		userList: [],
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
		this.updateAllContents();
	},
	methods:{
		updateAllContents: function() {
			const non = '_';
			if(this.id !== non){
				const local = this;
				this.get(this.id, function(data){
					console.log(data.body);
					if("Item" in data.body){
						const item = data.body.Item;
						local.name = item.name;
						local.mail= item.mail;
						local.food= item.food;
					}else{
						const prop = initialData();
						for(const key in prop)if(prop.hasOwnProperty(key)){
							local[key] = prop[key];
						}
					}
				});
			}
		},
		get:(id, callback)=>{
			console.log("call", id);
			const axios_obj = Axios.create({
				responseType: 'json'
			});

			const API = process.env.VUE_APP_DB_API + "getDB";
			axios_obj.get(API,{params:{id:id}}).then(response => {
				const data = response.data;
				callback(data)
			});
		},
		allget:function(){
			const axios_obj = Axios.create({
				responseType: 'json'
			});

			var local = this;
			const API = process.env.VUE_APP_DB_API + "getAllDB";
			axios_obj.get(API).then(function(response) {
				const data = response.data;
				local.userList = data;
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
		const non = '_';
			if(this.id !== non){
				const data = JSON.stringify({
					id:this.id,
					name: this.name,
					mail: this.mail,
					food: this.food
				});
				this.post("updateDB", data, (response)=>{
					console.log(response);
				});
			}
		},
	}
}
</script>

<style scoped>
</style>
