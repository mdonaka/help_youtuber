<template>
  <div id="app">
    <h1 @click="hello">Help Youtuber</h1>
		<router-view/>
			userid:{{id}}
		<button @click="logout">logout</button>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
  name: 'app',
	computed: {
		...mapState({
			id:s=>s.id.id
		}),
	},
	methods:{
		hello: function(){
			this.$router.push("/sign");
		},
		...mapMutations({
			logout:"id/logout"
		}),
	}
}
</script>

<style>
</style>
