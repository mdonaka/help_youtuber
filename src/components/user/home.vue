<template>
<div id="app">
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

import Profile from "./profile"
import Evaluation from "./evaluation"
import Example from "./example"

import {mapActions} from 'vuex'

const initialData = ()=>{
	return { };
}

export default {
	components: {Profile, Evaluation, Example},
	data(){
		return initialData()
	},
	methods:{
		...mapActions({
			login:"id/login",
			getRoomInfo: "roomInfo/getRoomInfo",
			updateRoomInfo: "roomInfo/updateRoomInfo",
			getRoomChat: "roomInfo/getRoomChat",
			addRoomChat: "roomInfo/addRoomChat"
		}),
	},
	computed: {
	},
	mounted:function(){
	},
	created(){
		//const val = this.getRoomInfo({"idA":"T","idB": "S"});
		//val.then((res)=>console.log({"res": res}));
		//this.updateRoomInfo({"idA": "T", "idB": "S", "chatNum": 0, "unreadNum": 0});
		//this.getRoomChat({"idA":"T","idB": "S"}).then(res=>{console.log({"1":res})});
		//this.addRoomChat({"idA":"T","idB": "S","chatText": "from vue"});
		//this.getRoomChat({"idA":"T","idB": "S"}).then(res=>{console.log({"2":res})});
	}
}
</script>

<style scoped>
</style>
