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
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
  
        <v-btn icon href="#/chat" >
          <v-icon>mdi-chat</v-icon>
        </v-btn>
  
        <v-btn icon href="#/user">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn icon href="/#/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-toolbar>
		<!-- debug用 -->
		<v-btn icon @click=logout>
			<v-icon>mdi-wifi-off</v-icon>
		</v-btn>
		(debug用)ユーザID:{{id}}
		<!-- ------- -->

		<router-view/>
		<ul>
			<li><router-link to="/">HOME</router-link></li>
			<li><router-link to="/chat">TALK</router-link></li>
			<li><router-link to="/user">User page</router-link></li>
		</ul>
		ここ以下はデバグ用
		<li><router-link to="/sign">signin</router-link></li>
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
		hello: function(){
			console.log("on");
		},
		...mapActions({
			logout:"id/logout",
			login:"id/login"
		}),
	},
	created(){
		this.login().then((res) => {console.log(res);});
	}
}
</script>

<style scoped>
</style>
