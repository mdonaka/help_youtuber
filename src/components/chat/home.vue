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
          <v-icon>mdi-human</v-icon>
          Editor情報
        </v-tab>
        <v-tab>
          <v-icon>mdi-chat</v-icon>
          チャット
        </v-tab>
        <v-tab-item>
          <v-card flat>
			<h1>工事中</h1>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>			
 <div id="app">
  <v-app id="inspire">
    <v-card
      height="800"
      min-width="300"
      max-width="800"
      class="mx-8 my-3" 
      elevation="3"
      color="blue lighten-5"
    >
    <v-card>
      <v-responsive :aspect-ratio="16/9">
      </v-responsive>
    </v-card>
			<h1>chat画面</h1>
		<div v-for="text in textList" v-bind:key="text.id">
			{{text}}
		</div>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="入力"
	v-model="sendText"
              outlined
            ></v-text-field>
          </v-col>
		<input v-model="sendText">
		<button @click="sendMessage">send</button>
<h1>さんさん</h1>
</v-card>
  </v-app>
</div>
          </v-card>
        </v-tab-item>
      </v-tabs>     
    </v-card>
  </v-app>
</div>
</template>

<script>
/* eslint-disable no-console */

const initialData = ()=>{
	return {
		tab: null,
		sendText: "",
		textList: ["aaaaaaaaa","qfqifojqif"],
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
