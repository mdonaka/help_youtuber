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
								<input v-if=isEditing type="text" v-model="name">
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
					<br>
					<v-textarea
						outlined
						label="自己紹介"
						value=""
						v-bind:readonly="!isEditing"
					></v-textarea>

			</v-col>
			<v-col>
<div> 
<td>
<v-switch v-model="isEditing"></v-switch></td>
<td>
<p prepend-icon="mdi-account-edit">
	<v-icon>mdi-account-edit</v-icon> 編集
	<v-btn small color="primary" v-if="isEditing" @click="updateUserInfo">情報を更新する</v-btn>
</p>
</td>
          <v-select
            :items="Sitems"
            filled
            label="サムネイル作成"
						v-bind:readonly="!isEditing"
          ></v-select>

          <v-select
            :items="Kitems"
            filled
            label="希望価格帯"
						v-bind:readonly="!isEditing"
          ></v-select>

					<v-textarea
						outlined
						label="コメント"
						value=""
						v-bind:readonly="!isEditing"
					></v-textarea>

          <v-select
            :items="Gitems"
            filled
            label="業務形態"
						v-bind:readonly="!isEditing"
          ></v-select>

          <v-select
            :items="Ditems"
            filled
            label="動画編集歴"
						v-bind:readonly="!isEditing"
          ></v-select>

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
			<!-- ユーザ名は登録情報に関わるため変更不可能 -->
			<v-text-field label="ユーザー名" type="text" v-model="name" readonly />
			<v-text-field label="メールアドレス" type="text" v-model="mail" v-bind:readonly="!isEditing"/>
			<v-text-field label="好きな食べ物" type="text" v-model="food" v-bind:readonly="!isEditing" />
			<div @click="test">click me</div>
  </v-app>
</div>
</template>

<script>
/* eslint-disable no-console */

import {mapState, mapActions} from 'vuex'

const initialData = ()=>{
	return {
		isEditing: false,
		name: "_",
		mail: "_" ,
		food: "_",
		userList: [],
		Sitems: ['可能(別途料金)', '可能(込料金)', '不可', '要相談'],
		Kitems: ['作業時間制', '動画時間制', '単価制', 'その他','要相談'],
		Gitems: ['専業', '副業', '小遣い稼ぎ','練習'],
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
		...mapActions({
			getUserInfo: "users/getUserInfo",
			userUpdate: "users/userUpdate",
		}),
		test: function(){ 
			console.log(this.id);
			this.getUserInfo(this.id).then((val)=>{
				console.log({val: val});
			});
		},
		updateAllContents: function() {
			const non = '_';
			if(this.id !== non){
				const local = this;
				this.getUserInfo(this.id).then((data) => {
					const item = data.Item;
					local.name = item.name;
					local.mail= item.mail;
					local.food= item.food;
				});
			}
		},
		updateUserInfo:function(){
			const data = JSON.stringify({
				id:this.id,
				name: this.name,
				mail: this.mail,
				food: this.food
			});
			const local = this;
			this.userUpdate(data).then(()=>{
				console.log("update fin");
				local.isEditing = false;
			});
		},
	}
}
</script>

<style scoped>
</style>
