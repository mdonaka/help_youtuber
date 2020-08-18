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
  <v-col>
<div class="font-weight-medium">○○さんとの会話
</div>

<div id="your_container">

  <!-- チャットの外側部分 -->
  <div id="ms_messages_container">

  <!-- タイムライン部分 -->
  <div id="ms_messages">
    <!--メッセージ-->
    <div v-for="{text, isMine} in textList" v-bind:key="text.id">
      <div 
				class="ms_message" 
				v-bind:class="{ms_left:!isMine, ms_right:isMine}"
			>
        <div class = "ms_message_box">
          <div class="ms_message_content">
           {{text}}
          </div>
        </div>
      </div>
	<div class="ms_clear"></div>
    </div>
	<br>
</div>
</div>

  <div id="ms_send">
    <textarea id="ms_send_message" v-model="sendText"></textarea>
    <div id="ms_send_btn" @click="sendMessage">送信</div>
  </div>

</div>


</v-col>
</v-row>
</v-container>
  </v-app>
</div>
		<div>
			<h2>userList(今だけ仮指定)</h2>
			<h2>to => {{sendTo}}</h2>
			<div v-for="data in sendToList" v-bind:key="data.id" @click="toSet(data.id)">
				{{data.name}}に送る
			</div>
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
import {mapState, mapGetters} from 'vuex'

const initialData = ()=>{
	return {
		tab: null,
		sendText: "",
		textList: [
		{text:"こんにちは，私です", isMine:true},
		{text:"誰だよ", isMine:false},
		{text:"さんちゃんだお！ｗｗ", isMine:true},
		{text:"あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ", isMine:false}],
		sock: new WebSocket(process.env.VUE_APP_CHAT_URL),
		sendTo: "",
		sendToList: []
	};
}


export default {
	data(){
		return initialData()
	},
	computed: {
		...mapState({
			id:s=>s.id.id,
		}),
	},
	methods:{
		...mapGetters({
			getUsers: "users/getUsers",
		}),
		sendMessage: function(){
			const data = JSON.stringify({"action":"sendMessage", "data":
				{
					text:this.sendText,
					sendId:this.sendTo
				}
			});
			this.sock.send(data);
			this.textList.push({text:this.sendText, isMine:true});
			this.sendText= "";
		},
		toSet(id){
			this.sendTo = id;
		},
	},
	created(){
		if(this.id==="_"){return;}

		const data = this;

		// debug用 ユーザ取得
		this.getUsers().then(function(users){
			data.sendToList = users;
		});

		// 接続
		this.sock.addEventListener('open',function(){
			console.log('Socket 接続成功');
			// ユーザの登録
			const req= JSON.stringify({"action":"addUser", "data":data.id});
			data.sock.send(req);
		});

		// サーバーからデータを受け取る
		this.sock.addEventListener('message',function(e){
			data.textList.push({text:e.data, isMine:false});
		});
	},
}

</script>

<!-- scoped -->
<style>
  #your_container{
      /* 高さや幅など、好きな様に設定
      ms_messages_containerの方で、縦横いっぱいに広がってくれるので、
      ここで充てた高さと横幅がそのままスタイルになる仕組み */

      height:600px;/*ここはご自由に*/
      width: 100%;/*ここはご自由に*/
  }
  /* チャットの外側部分 */
  #ms_messages_container{
      height: 100%;/*your_containerに対して100%になる */
      width: 100%;/*your_containerに対して100%になる */
      background-color: #eee;
  }

	/* タイムライン部分 */
	#ms_messages {
		overflow: auto;
		height:100%;
		border-right: 1px solid #ddd;
		border-left: 1px solid #ddd;
		background-color: #eee;
		box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2) inset;
	}
		.ms_message {
			margin: 0px;
			padding: 0 14px;
			font-size: 16px;
			word-wrap: break-word;/* 自動改行 */
			white-space: normal;/*widthに合わせて、文字を自動的に改行*/
		}
        .ms_message_box{
            margin-top: 20px;/*上下の吹き出し間に隙間を入れる*/
            max-width: 100%;/*タイムラインからのはみ出し防止*/
            font-size: 16px;
        }
            .ms_message_content{
                padding: 3px;/*コンテンツの外側に隙間を入れる*/
            }
			/* メッセージ左側 */
			.ms_left {
				float: left;/*ms_messagesに対して左寄せ*/
				line-height: 1.3em;
			}
				.ms_left .ms_message_box {
						padding: 10px;
						color: #333;/*テキストを黒にする*/
						background: #fff;
						border: 2px solid #CC3300;
						border-radius: 30px 30px 30px 0px;
						margin-right: 50px;/*吹き出し右側に隙間を入れる*/
						display: inline-block;
					}
			/* メッセージ右側 */
			.ms_right {
				float: right;/*ms_messagesに対して右寄せ*/
				line-height: 1.3em;
			}
				.ms_right .ms_message_box {
					padding: 10px;
					color: #fff;/*テキストを白にする*/
					background: #CC3300;
					border: 2px solid #CC3300;
					border-radius: 30px 30px 0px 30px;
					display: inline-block;
				}
			/* 回り込みを解除 */
			.ms_clear {
				clear: both; /* 左メッセージと右メッセージの回り込み(float)の効果の干渉を防ぐために必要（これが無いと、自分より下のメッセージにfloatが影響する） */
			}
			
		/* テキストエリア、送信ボタン④ */
		#ms_send {
			background-color:#eee;/*タイムラインと同色*/
			border-right: 1px solid #ddd;
			border-left: 1px solid #ddd;
			border-bottom: 1px solid #ddd;
			height: 48px;
		}
			#ms_send_message{
				width: calc(100% - 75px);/*送信ボタンの横幅を引く*/
				line-height: 16px;
				height: 48px;
				padding: 14px 6px 0px 6px;/*テキストエリアの中心に入力文字がくるよう調整*/
				border: 1px solid #ccc;
				border-radius: 4px;
				text-align: left;/*文字を左寄せ*/
				box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.2) inset;/*内側に影を入れる*/
				box-sizing: border-box;
			}
			#ms_send_btn {
				width: 72px;
				height: 48px;
				font-size: 16px;
				line-height: 3em;
				float: right;/*ms_sendに対して右寄せ*/
				color: #fff;
				font-weight: bold;
				background: #bcbcbc;
				text-align: center;/*文字中央寄せ*/
				border: 1px solid #bbb;
				border-radius: 4px;
				box-sizing: border-box;
			}
			#ms_send_btn:hover {
				background: #CC3300; /*マウスポインタを当てた場合、色が変化*/
				cursor: pointer;/*マウスポインタを当てた場合、カーソルが変化*/
			}
      /**/
</style>
