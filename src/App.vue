<template>
  <v-app>
    <v-toolbar color="error" dense>
		{{id}}
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
				{{id}}
        <v-btn icon @click=logout>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable no-console */
import {mapState, mapActions} from 'vuex'

export default {
	name: 'app',
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
			update:"id/update"
		}),
	},
	created(){
		// this.update();
	}
};
</script>
