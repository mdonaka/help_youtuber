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
  
        <v-btn icon href="#/user/chat" >
          <v-icon>mdi-chat</v-icon>
        </v-btn>
  
        <v-btn icon href="#/user/userpage">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn icon href="/#/user/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
				<v-btn icon @click=logout>
					<v-icon>mdi-wifi-off</v-icon>
				</v-btn>
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
		hello: function(){
			console.log("on");
		},
		...mapActions({
			logout:"id/logout",
			login:"id/login"
		}),
	},
	created(){
		const this2 = this;
		this.login().then((res) => {
			console.log(res);
		}).catch(function(){
			this2.$router.push("/sign");
		});
	}
}
</script>

<style scoped>
</style>
