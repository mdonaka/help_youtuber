<template>
  <div id="app">
    <h1 @click="hello">Help Youtuber</h1>
		<router-view/>
		<ul>
			<li><router-link to="/">HOME</router-link></li>
			<li><router-link to="/chat">TALK</router-link></li>
			<li><router-link to="/sign">SIGNUP, SINGIN</router-link></li>
		</ul>
  </div>
</template>

<script>

export default {
  name: 'app',
	methods:{
		hello: function(){
			alert("clicked");
		}
	}
}
</script>

<style>
</style>
