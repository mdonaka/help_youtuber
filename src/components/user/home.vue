<template>
<div id="app">
  <v-app id="inspire">
    <v-card>
      <v-tabs
		v-model="tab"
		background-color="error"
		grow
		dark
		icons-and-text
		>
        <v-tab>
          <v-icon>mdi-card-account-details</v-icon>
          プロフィール
        </v-tab>
        <v-tab>
          <v-icon>mdi-thumbs-up-down</v-icon>
          評価
        </v-tab>
        <v-tab>
          <v-icon>mdi-movie-open</v-icon>
          編集例
        </v-tab>
  
        <v-tab-item>
			<v-card flat>
			<v-container fluid>
			<v-row align="center" >
			<v-col>
				<v-card
					class="mx-auto"
					max-width="434"
					tile
					>
					<v-img
						height="100%"
						src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
					>
						<v-row
						align="end"
						class="fill-height"
						>
						<v-col
							align-self="start"
							class="pa-0"
							cols="12"
						>
							<v-avatar
							class="profile"
							color="grey"
							size="164"
							tile
							>
							<v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
							</v-avatar>
						</v-col>
						<v-col class="py-0">
							<v-list-item
							color="rgba(0, 0, 0, .4)"
							dark
							>
							<v-list-item-content>
								<v-list-item-title class="title">
								<input v-if=editFlg type="text" v-model="name">
								<span v-else>{{name}}</span>
								</v-list-item-title>
								<v-list-item-subtitle>Editor</v-list-item-subtitle>
								<v-list-item-title>☆☆☆☆☆ 0.0 (0件)</v-list-item-title>
							</v-list-item-content>
							</v-list-item>
						</v-col>
						</v-row>
					</v-img>
					</v-card>
<v-card
max-width="434"
class="mx-auto"
elevation="0">
					<br>
					<v-textarea
					outlined
					label="自己紹介"
					value=""
					v-if=editFlg
					></v-textarea>

					<v-textarea
					outlined
					label="自己紹介"
					value=""
					v-else
					readonly
					></v-textarea>
</v-card>

			</v-col>
			<v-col>
<div> 
<td>
<v-switch v-model="editFlg"></v-switch></td>
<td>
<p prepend-icon="mdi-account-edit">
<v-icon>mdi-account-edit</v-icon> 編集</p>
</td>
<v-card
max-width="300"
elevation="0"
>
          <v-select
            :items="Sitems"
            filled
            label="サムネイル作成"
			v-if=editFlg
          ></v-select>

          <v-select
            :items="Sitems"
            filled
            label="サムネイル作成"
			v-else
			readonly
          ></v-select>

<v-card
elevation="0"
max-width="300"
>
<v-row>
<v-col>
          <v-select
            :items="Kitems"
            filled
            label="希望価格帯"
			v-if=editFlg
          ></v-select>

          <v-select
            :items="Kitems"
            filled
            label="希望価格帯"
			v-else
			readonly
          ></v-select>
</v-col>
<v-col>
  <v-textarea
			outlined
			label="価格帯詳細"
placeholder="約3,000円/h"
height="50"
			value=""
			v-if=editFlg
			></v-textarea>

			<v-textarea
			outlined
			label="価格帯詳細"
height="50"
			value=""
			v-else
			readonly
			></v-textarea>
</v-col>
</v-row>
<v-row>
			<v-textarea
			outlined
			label="コメント"
placeholder="価格相談受け付けます。"
			value=""
			v-if=editFlg
			></v-textarea>

			<v-textarea
			outlined
			label="コメント"
placeholder="編集をONにして入力してください"
			value=""
			v-else
			readonly
			></v-textarea>
</v-row>
</v-card>

          <v-select
            :items="Gitems"
            filled
            label="業務形態"
			v-if=editFlg
          ></v-select>

          <v-select
            :items="Gitems"
            filled
            label="業務形態"
			v-else
			readonly
          ></v-select>

          <v-select
            :items="Ditems"
            filled
            label="動画編集歴"
			v-if=editFlg
          ></v-select>

          <v-select
            :items="Ditems"
            filled
            label="動画編集歴"
			v-else
			readonly
          ></v-select>
</v-card>

	</div>
			</v-col>
			</v-row>
			</v-container>
			
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
			<v-card-text class=text-center><v-icon left>mdi-alert</v-icon>工事中</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
			<v-card-text class=text-center><v-icon left>mdi-alert</v-icon>工事中</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
			<v-text-field v-if=editFlg label="ユーザー名" type="text" v-model="name">
			</v-text-field>
			<v-text-field v-else label="ユーザー名" type="text" v-model="name" readonly>
			{{name}}</v-text-field>
			<v-text-field v-if=editFlg label="メールアドレス" type="text" v-model="mail">
			</v-text-field>
			<v-text-field v-else label="メールアドレス" type="text" v-model="mail" readonly>
			{{name}}</v-text-field>
			<v-text-field v-if=editFlg label="好きな食べ物" type="text" v-model="food">
			</v-text-field>
			<v-text-field v-else label="好きな食べ物" type="text" v-model="food" readonly>
			{{name}}</v-text-field>
			<p>
			<button @click="updateAllContents">ユーザ表示 |||</button>
			<button @click="update">情報を更新する |||</button>
			<button @click="allget">全取得</button>
		</p>
		<div>
			<span>以下全ユーザリスト</span>
			<div v-for="data in userList" v-bind:key="data.id">
				名前:{{data.name}}，mail:{{data.mail}}
			</div>
		</div>
  </v-app>
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
		Sitems: ['可能(別途料金)', '可能(込料金)', '不可', '要相談'],
		Kitems: ['作業時間制', '動画時間制', '単価制', 'その他','要相談'],
		Gitems: ['専業', '副業', '小遣い稼ぎ','練習（無料で編集します）'],
		Ditems: ['1年未満', '1年以上3年未満', '3年以上5年未満', '5年以上7年未満', '7年以上10年未満', '10年以上'],
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
