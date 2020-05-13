<template>
<v-app>
	<div> 
		<h2>ユーザ画面</h2>
		<h1 @click="post">POST チェック</h1>
	</div>
</v-app>
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
