<template>
	<div>
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
							<input v-if=isEditing type="text" v-model="Item.name">
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
					v-model="Item.offset1"
					min="0"
					max="24"
					label="時"
					thumb-label
					></v-slider>
					<v-textarea
						color="cyan"
						height="250"
						outlined
						label="自己紹介"
						placeholder="編集をONにして入力してください"
						v-model="Item.selfIntro"
						v-bind:readonly="!isEditing"
					></v-textarea>
					<div class="ml-12 mt-4" fluid>
					<v-btn x-large color="success" dark>
					<h3>コンタクト</h3></v-btn>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
	</div>
</template>

<script>
/* eslint-disable no-console */
import {mapState, mapActions} from 'vuex'

const initialData = ()=>{
	return {
		nowLoading: true,
		isEditing: false,
		Item: {
			name: "_",
			offset: 12,
			selfIntro: "",
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
					local.Item[key] = data.Item[key];
				}
				local.nowLoading = false;
			}).catch(()=>{
				local.nowLoading = false;
			});
		},
		updateUserInfo:function(){
			let items = { id: this.id };
			for(const key in this.Item){
				items[key] = this.Item[key];
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
