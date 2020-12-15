<template>
	<div> 
    <v-toolbar color="error" dense>
          <v-img
          alt="YtoE Logo"
          class="shrink mr-2"
          contain
          v-bind:src="require('@/assets/YtoE_logo.png')"
          width="60"
        />
        <v-col cols="12" sm="5">
        <v-text-field
          hide-details
          label="検索"
          solo
          dense
        ></v-text-field>
        </v-col>

        <v-tooltip bottom color="brown" nudge-top="15">
        <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        </template>
        <span>検索</span>
        </v-tooltip>

        <v-spacer></v-spacer>
  
        <v-tooltip bottom color="brown" nudge-top="15">
        <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" href="#/user/chat" >
          <v-icon>mdi-chat</v-icon>
        </v-btn>
        </template>
        <span>チャット</span>
        </v-tooltip>

        <v-tooltip bottom color="brown" nudge-top="15">
        <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" href="#/user/userpage">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        </template>
        <span>マイページ</span>
        </v-tooltip>

        <v-tooltip bottom color="brown" nudge-top="15">
        <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" href="/#/user/home">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        </template>
        <span>ホーム</span>
        </v-tooltip>

        <v-tooltip bottom color="brown" nudge-top="15">
        <template v-slot:activator="{ on }">
				<v-btn icon v-on="on" @click=logout>
					<v-icon>mdi-logout</v-icon>
				</v-btn>
        </template>
        <span>ログアウト</span>
        </v-tooltip>

      </v-toolbar>
		<router-view/>
	</div>
</template>

<script>
/* eslint-disable no-console */
import {mapState, mapActions} from 'vuex'
export default {
	computed: {
		...mapState({
			id:s=>s.id.id
		}),
	},
	methods:{
		...mapActions({
			logout:"id/logout",
			login:"id/login"
		}),
	},
	created(){
		const this2 = this;
		this.login().then((res) => {
			res;//console.log(res);
		}).catch(function(){
			this2.$router.push("/sign");
		});
	}
}
</script>

<style scoped>
</style>
