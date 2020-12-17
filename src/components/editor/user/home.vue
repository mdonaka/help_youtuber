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
			<v-tab-item> <Action/> </v-tab-item>
			<v-tab-item> <Action/> </v-tab-item>
			<!--
			<v-tab-item> <Evaluation/> </v-tab-item>
			<v-tab-item> <Example/> </v-tab-item>
			-->

		</v-tabs></v-card>
  </v-app>
</div>
</template>

<script>
/* eslint-disable no-console */

import Profile from "./profile"
/*
import Evaluation from "./evaluation_nise"
import Example from "./example"
*/
import Action from "./../../both/action"

import {mapActions} from 'vuex'

const initialData = ()=>{
	return { };
}

export default {
	components: {Profile, /*Evaluation, Example,*/ Action},
	data(){
		return initialData()
	},
	methods:{
		...mapActions({}),
	},
	computed: {
	},
	mounted:function(){
	},
	created(){}
}
</script>

<style scoped>
</style>
