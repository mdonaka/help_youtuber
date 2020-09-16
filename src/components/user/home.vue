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
    <v-card><v-tabs
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

			<v-tab-item> <Profile/> </v-tab-item>
			<v-tab-item> <Evaluation/> </v-tab-item>
			<v-tab-item> <Example/> </v-tab-item>

		</v-tabs></v-card>
  </v-app>
</div>
</template>

<script>
/* eslint-disable no-console */

import {mapState, mapActions} from 'vuex'
import Profile from "./profile"
import Evaluation from "./evaluation"
import Example from "./example"

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
		hitem: "_",
		Hitems: ['早い', '比較的早い', 'ふつう', '比較的遅い', 'のんびり'],
		iitem: "_",
		Iitems: ['プロ級', '高クオリティ', 'ふつう', 'ああ', '見習い'],
		oitem: "_",
		Oitems: ['バラエティ', 'Vlog', 'ゲーム実況', '商品紹介', 'メイク・ファッション', 'ペット・動物', '食べ物', '乗り物（車・電車・航空機等）', '旅行・アウトドア', 'ミュージック', '教育', 'English', 'ハウツー', '漫画系', 'スポーツ', '企業タイアップ', '衝撃動画・まとめ系', 'Vtuber', 'トレンド・流行り', 'パチンコ', '政治・ニュース'],
		comment: "",
		price: "",
		selfIntro: "",
	};
}

export default {
	components: {Profile, Evaluation, Example},
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
