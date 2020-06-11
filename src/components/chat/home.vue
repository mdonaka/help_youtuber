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
  <v-container no-gutter>
  <v-row>
  <v-col>
    <v-card
      height="800"
      width="40vw"
      class="mx-8 my-3" 
      elevation="3"
      color="blue lighten-5"
    >
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
</v-col>
 <v-divider :inset="inset" vertical></v-divider>
	<v-col>
	<h1>Editor</h1>
	<v-card
      class="mx-auto"
      width="30vw"
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
                <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
 <v-divider :inset="inset"></v-divider>
<v-subheader>希望項目 : {{ bg1 }} {{ bg2 }} {{ bg3 }}</v-subheader>
<v-btn-toggle mandatory v-model="bg1" color="light-blue">
<v-container>
<v-row>
<v-col>
  <v-btn 
      width="15vw" value="クオリティ">クオリティ重視
          <v-icon>mdi-star</v-icon>
  </v-btn>
</v-col>
<v-col>
  <v-btn 
      width="15vw" value="スピード">スピード重視
          <v-icon>mdi-run</v-icon>
  </v-btn>
</v-col>
</v-row>
</v-container>
</v-btn-toggle>
<v-btn-toggle maltiple v-model="bg2" color="light-blue">
<v-container>
<v-row>
<v-col>
  <v-btn
      width="10vw" value="24h">24時間以内
  </v-btn>
</v-col>
<v-col>
  <v-btn
      width="10vw" value="3d">3日以内
  </v-btn>
</v-col>
<v-col>
  <v-btn
      width="10vw" value="1w">一週間以内
  </v-btn>
</v-col>
</v-row>
</v-container>
</v-btn-toggle>
<v-btn-toggle maltiple v-model="bg3" color="light-blue">
<v-container>
<v-row>
<v-col>
  <v-btn
      width="5vw" value="サムネイル">サムネイル
  </v-btn>
</v-col>
</v-row>
</v-container>
</v-btn-toggle>
</v-col>
</v-row>
</v-container>
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
