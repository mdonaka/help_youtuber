<template>
  <div>
  <!-- タイムライン部分③ -->
            <div id="ms_messages">
			<br>
                <!--メッセージ左側-->
                <div class="ms_message ms_left">
						<!--<div v-for="text in textList" v-bind:key="text.id">
							{{text}}
                        </div>-->
                </div>

                <!--メッセージ右側-->
                <div class="ms_message ms_right">
						<div v-for="text in textList" v-bind:key="text.id">
							{{text}}
                        </div>
                </div>
            </div>

		<input v-model="sendText">
		<button @click="sendMessage">send</button>
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

<style scoped>
	/* タイムライン部分 */
	#ms_messages {
		overflow: auto;/* メッセージがタイムラインの外に出ないようにする */
		height:100%;/*テキストエリアが下に張り付く様にする*/
		border-right: 1px solid #ddd;
		border-left: 1px solid #ddd;
		background-color: #eee;
		box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2) inset;/*ヘッダーの下の影*/
	}
		.ms_message {
			margin: 0px;
			padding: 0 14px;
			font-size: 16px;
			word-wrap: break-word;/* 自動改行 */
			white-space: normal;/*widthに合わせて、文字を自動的に改行*/
		}

			/* メッセージ左側 */
			.ms_left {
				float: left;/*ms_messagesに対して左寄せ*/
				line-height: 1.3em;
			}
			/* メッセージ右側 */
			.ms_right {
				float: right;/*ms_messagesに対して右寄せ*/
				line-height: 1.3em;
			}

</style>
