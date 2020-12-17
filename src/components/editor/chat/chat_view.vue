<template>
	<div> 
		<div class="font-weight-medium">○○さんとの会話 </div>

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


	</div>
</template>

<script>
/* eslint-disable no-console */
import {mapState, mapActions} from 'vuex'

const initialData = ()=>{
	return {
		sendText: "",
	};
}

export default {
	data(){
		return initialData()
	},
	computed: {
		...mapState({
			textList:s=>s.chatWebhook.textList,
		}),
	},
	methods:{
		...mapActions({
			pushText: "chatWebhook/pushText",
		}),
		sendMessage: function(){
			this.pushText(this.sendText);
			this.sendText= "";
		},
	},
	created(){
	},
}
</script>

<style scoped>
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
