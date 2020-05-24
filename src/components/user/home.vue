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
			<h1>aaaa</h1>
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
  </v-app>
</div>
</template>

<script>
/* eslint-disable no-console */

export default {
	created:()=>{
		/*
		console.log("Hello");
		$(function() {
			$('#ajax-button').click(
				function() {
					var hostUrl= 'http://localhost:8000';
					var param1 = 1;
					var param2 = 10;
					$.ajax({
					url: hostUrl,
					type:'POST',
					dataType: 'json',
					data : {parameter1 : param1, parameter2 : param2 },
					timeout:3000,
				}).done(function(data) {
					alert("ok");
				}).fail(function(XMLHttpRequest, textStatus, errorThrown) {
					alert("error");
				})
			});
		});
		*/
	},
	methods:{
		post: ()=>{
		},
	}
}
</script>

<style scoped>
</style>
