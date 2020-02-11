<template>
  <div id="app">
    <h1 @click="hello">Help Youtuber</h1>
		<router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
	methods:{
		hello: function(){
			this.$router.push("/sign");
		}
	}
}
</script>

<style>
</style>
