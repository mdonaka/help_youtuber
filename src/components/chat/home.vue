<template>
  <div>
  <v-app id="inspire">
   <v-card>
      <v-tabs
        v-model="tab"
        background-color="deep-purple accent-4"
        centered
        dark
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>
  
        <v-tab href="#tab-1">
          プロフィール
          <v-icon>mdi-phone</v-icon>
        </v-tab>
  
        <v-tab href="#tab-2">
          チャット
          <v-icon>mdi-heart</v-icon>
        </v-tab>
  
        <v-tab href="#tab-3">
          Nearby
          <v-icon>mdi-account-box</v-icon>
        </v-tab>
      </v-tabs>
  
    <v-tabs-items v-model="tab">
        <v-tab-item :key="1" :value="'tab-' + 1">
          <v-card flat>
            <v-card-text>工事中</v-card-text>
          </v-card>

        </v-tab-item>
        <v-tab-item :key="2" :value="'tab-' + 2">
          <v-card flat>
<div>
<v-app>
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
</v-app>
 </div>
            <v-card-text>さんさん</v-card-text>
          </v-card>

        </v-tab-item>
        <v-tab-item :key="3" :value="'tab-' + 3">
          <v-card flat>
            <v-card-text>お産</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
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
