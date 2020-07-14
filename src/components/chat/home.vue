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
  <v-container fluid no-gutter>
  <v-row>
  <v-col>
<div class="font-weight-medium">○○さんとの会話
</div>
    <v-card
      height="800"
      class="ml-5 mr-4" 
      elevation="3"
color="red lighten-5"
    >
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
</v-card>
</v-col>
 <v-divider :inset="inset" vertical></v-divider>
	<v-col
cols="10"
md="5">
<div class="font-weight-medium">Editor
</div>
	<v-card
      class="mx-auto mb-3"
      width="400"
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
<div class="font-weight-medium">Youtuber希望項目 : {{ bg1 }} {{ bg2 }} {{ bg3 }}</div>
<v-btn-toggle mandatory v-model="bg1">
<v-container>
<v-row>
<v-col>
  <v-btn 
      width="15vw" outlined color="green" value="クオリティ">クオリティ重視
  </v-btn>
</v-col>
<v-col>
  <v-btn 
      width="15vw" outlined color="light-blue" value="スピード">スピード重視
  </v-btn>
</v-col>
</v-row>
</v-container>
</v-btn-toggle>
<v-btn-toggle maltiple v-model="bg2">
<v-container>
<v-row>
<v-col>
  <v-btn
      width="10vw" outlined color="red" value="24h">24時間以内
  </v-btn>
</v-col>
<v-col>
  <v-btn
      width="10vw" outlined color="red accent-3" value="3d">3日以内
  </v-btn>
</v-col>
<v-col>
  <v-btn
      width="10vw" outlined color="pink" value="1w">一週間以内
  </v-btn>
</v-col>
</v-row>
</v-container>
</v-btn-toggle>
<v-btn-toggle maltiple v-model="bg3">
<v-container>
<v-row>
<v-col>
  <v-btn
      width="30vw" outlined color="black" value="サムネイル">サムネイル作成
  </v-btn>
</v-col>
</v-row>
</v-container>
</v-btn-toggle>
 <v-divider :inset="inset"></v-divider>
<div class="font-weight-medium">動画時間目安 : {{offset1}}時間{{offset2}}分</div>
<v-container>
<v-row>
<v-col>
 <v-slider
color="red"
            v-model="offset1"
            min="0"
            max="24"
            label="時"
            thumb-label
          ></v-slider>
 <v-slider
color="red"
            v-model="offset2"
            min="1"
            max="59"
            label="分"
            thumb-label
          ></v-slider>
</v-col>
</v-row>
</v-container>
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
