<template>
<div id="app">
	<!-- ローディング処理 -->
	<v-dialog width="400px" v-model="nowLoading" persistent hide-overlay>
		<v-card color="primary" dark >
			<v-card-text>
				now loading...
				<v-progress-linear
					indeterminate
					color="white"
					class="mb-0"
				></v-progress-linear>
			</v-card-text>
		</v-card>
	</v-dialog>
	<!-- ---------------------------- -->
  <v-app id="inspire">
    <v-card>
      <v-tabs
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

			<v-card
			max-width="434"
			class="mx-auto"
			elevation="0">
				<br>
				<v-textarea
					color="cyan"
					height="200"
					outlined
					label="自己紹介"
					placeholder="編集をONにして入力してください"
					v-model="selfIntro"
					v-bind:readonly="!isEditing"
				></v-textarea>
			</v-card>
		</v-col>

		<v-col>
			<div> 
				<td> <v-switch v-model="isEditing"></v-switch></td> 
				<td>
					<p prepend-icon="mdi-account-edit">
						<v-icon>mdi-account-edit</v-icon> 編集
						<v-btn small color="primary" v-if="isEditing" @click="updateUserInfo">情報を更新する</v-btn>
					</p>
				</td>
<v-container>
<v-row>
<v-col>
				<v-card
					max-width="300"
					min-width="200"
					elevation="0"
				>

          <v-select
            :items="Sitems"
						v-model="sitem"
            filled
						class="mb-n6"
            label="サムネイル作成"
						v-bind:readonly="!isEditing"
          ></v-select>

    </v-card>
				<v-card
					elevation="0"
					max-width="300"
				>
					<v-row>
					<v-col>
						<v-select
							:items="Kitems"
							v-model="kitem"
							filled
							class="mb-n6"
							label="希望価格帯"
							v-bind:readonly="!isEditing"
						></v-select>
					</v-col>

					<v-col>
						<v-textarea
							outlined
							color="cyan"
							class="mb-n6"
							height="50"
							label="価格帯詳細"
							placeholder="約3,000円/h"
							v-model="price"
							v-bind:readonly="!isEditing"
						></v-textarea>
					</v-col>
					</v-row>

					<v-row>
						<v-textarea
							color="cyan"
							class="mb-n3"
							height="80"			
							outlined
							label="コメント"
							placeholder="価格相談受け付けます。"
							v-model="comment"
							v-bind:readonly="!isEditing"
						></v-textarea>
					</v-row>
				</v-card>

				<v-select
					:items="Gitems"
					v-model="gitem"
					filled
					class="mb-n3"
					label="業務形態"
					v-bind:readonly="!isEditing"
				></v-select>

				<v-select
					:items="Ditems"
					v-model="ditem"
					filled
					class="mb-n6"
					label="動画編集歴"
					v-bind:readonly="!isEditing"
				></v-select>
</v-col>
<v-col>
<v-btn-toggle maltiple>
<v-container
class="mb-n6">
<v-row>
<v-col>
  <v-btn
      width="5vw" outlined color="red" value="24h">2
  </v-btn>
</v-col>
<v-col
class="ml-n4">
  <v-btn
      width="5vw" outlined color="red accent-3" value="3d">3
  </v-btn>
</v-col>
<v-col
class="ml-n4">
  <v-btn
      width="5vw" outlined color="pink" value="1w">一
  </v-btn>
</v-col>
</v-row>
</v-container>
</v-btn-toggle>
</v-col>
</v-row>
</v-container>

	</div>
			</v-col>
			</v-row>
			</v-container>
			
          </v-card>
        </v-tab-item>
      </v-tabs>
			</v-card>

<v-tab-item>
	<v-card flat>
		<v-container>
			<v-row>
				<v-col>
					<v-container fluid fill-height>
<v-card outlined
elevation="3">
					<v-avatar
					class="profile"
					color="grey"
					size="200"
					>
					<v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
					</v-avatar>
</v-card>
<v-card outlined
elevation="3" class="mt-4">
					<v-list-item-title class="title">
					<input v-if=isEditing type="text" v-model="name">
					<span v-else>{{name}}</span>
					</v-list-item-title>
					<v-list-item-subtitle>Editor</v-list-item-subtitle>
					<v-list-item-title>☆☆☆☆☆ 0.0 (0件)</v-list-item-title>
 <v-divider></v-divider>
					<p class="font-weight-black">得意ジャンル</p> 
					<p class="font-weight-black">作業スピード</p>
					<p class="font-weight-black">編集クオリティ</p>
</v-card>
					</v-container>
				</v-col>
				<v-col>
				<p class="font-weight-black">希望価格帯</p>
<v-col cols="12">
            <v-text-field
              value="John Doe"
              label="Solo"
              solo
              readonly
outlined
class="my-n5"
            ></v-text-field>
          </v-col>
				<p class="font-weight-black">サムネイル作成</p>
<v-col cols="12">
            <v-text-field
              value="John Doe"
              label="Solo"
              solo
              readonly
outlined
class="my-n5"
            ></v-text-field>
          </v-col>
				<p class="text--disabled">編集ソフト</p>
<v-col cols="12">
            <v-text-field
              value="工事中"
              label="Solo"
              solo
              disabled
outlined
class="my-n5"
            ></v-text-field>
          </v-col>
				<p class="text--disabled">編集例</p>
<v-col cols="12">
            <v-text-field
              value="工事中"
              label="Solo"
              solo
              disabled
outlined
class="my-n5"
            ></v-text-field>
          </v-col>
				</v-col>
				<v-col>
 <v-slider
color="red"
            v-model="offset1"
            min="0"
            max="24"
            label="時"
            thumb-label
          ></v-slider>
					<v-textarea
						color="cyan"
						height="200"
						outlined
						label="自己紹介"
						placeholder="編集をONにして入力してください"
						v-model="selfIntro"
						v-bind:readonly="!isEditing"
					></v-textarea>
<div class="my-3" fluid>
 <v-btn x-large color="success" dark>
<h3>コンタクト</h3></v-btn>
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
			<!-- ユーザ名は登録情報に関わるため変更不可能 -->
			<v-text-field label="ユーザー名" type="text" v-model="name" readonly />
			<v-text-field label="メールアドレス" type="text" v-model="mail" v-bind:readonly="!isEditing"/>
			<v-text-field label="好きな食べ物" type="text" v-model="food" v-bind:readonly="!isEditing" />
  </v-app>
</div>
</template>

<script>
/* eslint-disable no-console */

import {mapState, mapActions} from 'vuex'

const initialData = ()=>{
	return {
		nowLoading: true,
		isEditing: false,
		name: "_",
		mail: "_" ,
		food: "_",
		sitem: "_",
		Sitems: ['可能(別途料金)', '可能(込料金)', '不可', '要相談'],
		kitem: "_",
		Kitems: ['作業時間制', '動画時間制', '単価制', 'その他','要相談'],
		gitem: "_",
		Gitems: ['専業', '副業', '小遣い稼ぎ','練習（無料で編集します）'],
		ditem: "_",
		Ditems: ['1年未満', '1年以上3年未満', '3年以上5年未満', '5年以上7年未満', '7年以上10年未満', '10年以上'],
		comment: "",
		price: "",
		selfIntro: "",
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
			login:"id/login",
		}),
		updateAllContents: function() {
			this.nowLoading = true;
			const non = '_';
			if(this.id !== non){
				const local = this;
				this.getUserInfo(this.id).then((data) => {
					const item = data.Item;
					local.name = item.name;
					local.mail= item.mail;
					local.food= item.food;
					local.sitem = item.sitem;
					local.kitem = item.kitem;
					local.gitem = item.gitem;
					local.ditem = item.ditem;
					local.comment = item.comment;
					local.selfIntro = item.selfIntro;
					local.nowLoading = false;
					local.price = item.price;
				}).catch(()=>{
					local.nowLoading = false;
				});
			}else{
				const this2 = this;
				this.login().then(()=>{this2.updateAllContents();});
			}
		},
		updateUserInfo:function(){
			console.log(this.kitem);
			const data = JSON.stringify({
				id:this.id,
				name: this.name,
				mail: this.mail,
				food: this.food,
				sitem: this.sitem,
				kitem: this.kitem,
				gitem: this.gitem,
				ditem: this.ditem,
				comment: this.comment,
				price: this.price,
				selfIntro: this.selfIntro,
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
