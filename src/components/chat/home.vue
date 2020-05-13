<template>
  <div>
  <v-app>
		<h1>chat画面</h1>
		<div v-for="text in textList" v-bind:key="text.id">
			{{text}}
		</div>
		<input v-model="sendText">
		<button @click="sendMessage">send</button>
  </v-app>
  </div>
</template>

<script>
/* eslint-disable no-console */

const initialData = ()=>{
	return {
		sendText: "",
		textList: [],
		sock: new WebSocket(process.env.VUE_APP_CHAT_URL)
	};
}


export default {
	data(){
		return initialData()
	},
	created(){
		// 接続
		this.sock.addEventListener('open',function(){
			console.log('Socket 接続成功');
		});

		const data = this;
		// サーバーからデータを受け取る
		this.sock.addEventListener('message',function(e){
			data.textList.push(e.data);
		});
	},
	methods:{
		sendMessage: function(){
			const data = JSON.stringify({"action":"sendMessage", "data":this.sendText});
			this.sock.send(data);
			this.sendText= "";
		}
	}
}

</script>

<style>
</style>
