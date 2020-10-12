<template>
	<div>
	<!-- ローディング処理 -->
	<v-dialog width="400px" v-model="saveItems.nowLoading" persistent hide-overlay>
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
								<input v-if=isEditing type="text" v-model="saveItems.name">
								<span v-else>{{saveItems.name}}</span>
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
							v-model="saveItems.selfIntro"
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
						:items="notSaveItems.Sitems"
						v-model="saveItems.sitem"
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
						:items="notSaveItems.Kitems"
						v-model="saveItems.kitem"
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
						placeholder="例:約3,000円/h"
						v-model="saveItems.price"
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
					placeholder="例：価格相談受け付けます。"
					v-model="saveItems.comment"
					v-bind:readonly="!isEditing"
					></v-textarea>
				</v-row>
			</v-card>

			<v-card
			max-width="300"
			min-width="200"
			elevation="0"
			>
				<v-select
				:items="notSaveItems.Gitems"
				v-model="saveItems.gitem"
				filled
				class="mb-n3"
				label="業務形態"
				v-bind:readonly="!isEditing"
				></v-select>

				<v-select
				:items="notSaveItems.Ditems"
				v-model="saveItems.ditem"
				filled
				class="mb-n3"
				label="動画編集歴"
				v-bind:readonly="!isEditing"
				></v-select>
			</v-card>
		</v-col>
		<v-col>
			<v-card
			max-width="300"
			min-width="200"
			elevation="0"
			>
				<v-select
				:items="notSaveItems.Hitems"
				v-model="saveItems.hitem"
				filled
				class="mb-n3"
				label="作業スピード"
				v-bind:readonly="!isEditing"
				></v-select>

				<v-select
				:items="notSaveItems.Iitems"
				v-model="saveItems.iitem"
				filled
				class="mb-n3"
				label="編集クオリティ（自己評価）"
				v-bind:readonly="!isEditing"
				></v-select>

				<v-select
				v-model="saveItems.e6"
				:items="notSaveItems.Oitems"
				:menu-props="{ maxHeight: '400' }"
				label="得意ジャンル"
				multiple
				chips
				hint="複数選択できます"
				persistent-hint
				v-bind:readonly="!isEditing"
				></v-select>		
			</v-card>
		</v-col>
	</v-row>
</v-container>

	</div>
			</v-col>
			</v-row>
			</v-container>
			
          </v-card>
		<!-- ユーザ名は登録情報に関わるため変更不可能 -->
		<v-text-field label="ユーザー名" type="text" v-model="saveItems.name" readonly />
		<v-text-field label="メールアドレス" type="text" v-model="saveItems.mail" v-bind:readonly="!isEditing"/>
		<v-text-field label="好きな食べ物" type="text" v-model="saveItems.food" v-bind:readonly="!isEditing" />
	</div>
</template>

<script>
/* eslint-disable no-console */

import {mapState, mapActions} from 'vuex'

const initialData = ()=>{
	return {
		nowLoading: true,
		isEditing: false,
		saveItems: {
			name: "_",
			mail: "_" ,
			food: "_",
			sitem: "_",
			kitem: "_",
			gitem: "_",
			ditem: "_",
			hitem: "_",
			iitem: "_",
			oitem: "_",
			comment: "",
			price: "",
			selfIntro: "",
		},
		notSaveItems: {
			Sitems: ['可能(別途料金)', '可能(込料金)', '不可', '要相談'],
			Kitems: ['作業時間制', '動画時間制', '単価制', 'その他','要相談'],
			Gitems: ['専業', '副業', '小遣い稼ぎ','練習（無料で編集します）'],
			Ditems: ['1年未満', '1年以上3年未満', '3年以上5年未満', '5年以上7年未満', '7年以上10年未満', '10年以上'],
			Hitems: ['はやい', 'ふつう', 'のんびり'],
			Iitems: ['プロ級', '高クオリティ', 'ふつう', 'ああ', '見習い'],
			Oitems: ['バラエティ', 'Vlog', 'ゲーム実況', 'メイク・ファッション', 'ペット・動物', '食べ物', '乗り物（車・電車・航空機等）', '旅行・アウトドア', 'ミュージック', '教育', 'English', 'ハウツー', '漫画ストーリー系', 'スポーツ', '企業タイアップ', '衝撃動画・まとめ系', 'Vtuber', 'トレンド・流行り', 'パチンコ', '政治・ニュース'],
		}
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
		updateAllContents: function() {
			this.nowLoading = true;
			const local = this;
			this.getUserInfo().then((data) => {
				for(const key in data.Item){
					local.saveItems[key] = data.Item[key];
				}
				local.nowLoading = false;
			}).catch(()=>{
				local.nowLoading = false;
			});
		},
		updateUserInfo:function(){
			let items = { id: this.id };
			for(const key in this.saveItems){
				items[key] = this.saveItems[key];
			}
			const data = JSON.stringify(items);

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
