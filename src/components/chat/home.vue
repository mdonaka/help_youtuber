<template>
  <div>
  
  <!-- タイムライン部分③ -->
            <div id="ms_messages">
			<br>

                <!--メッセージ左側-->
				<div v-for="text in textList" v-bind:key="text.id">
					<div class="ms_message ms_left">
						<div class = ms_message_box>
							{{text}}
						</div>
                    </div>
                </div>
				<div class="ms_clear"></div>

                <!--メッセージ右側-->
				<div v-for="text in textList" v-bind:key="text.id">
					<div class="ms_message ms_right">
						<div class = ms_message_box>
							{{text}}
						</div>
                    </div>
                </div>
				<div class="ms_clear"></div>

            </div>
		
		<div id="ms_send">
			<textarea id="ms_send_message" v-model="sendText"></textarea>
			<div id="ms_send_btn" @click="sendMessage">送信</div>
		</div>
  </div>
</template>

<script>
/* eslint-disable no-console */

const initialData = ()=>{
	return {
		sendText: "",
		textList: ["あああああああああああ",
		"あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"],
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
                padding: 20px;/*コンテンツの外側に隙間を入れる*/
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
						border: 2px solid #13178E;
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
					background: #13178E;
					border: 2px solid #13178E;
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
			padding: 4px;
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
				background: #13178E; /*マウスポインタを当てた場合、色が変化*/
				cursor: pointer;/*マウスポインタを当てた場合、カーソルが変化*/
			}
</style>
