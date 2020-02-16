<template>
	<div> 
		<h2>HOME画面</h2>
		<router-view/>
		<ul>
			<li><router-link to="/">HOME</router-link></li>
			<li><router-link to="/chat">TALK</router-link></li>
		</ul>
		<li><router-link to="/sign">signin</router-link></li>
	</div>
</template>

<script>
/* eslint-disable no-console */
export default {
}
</script>

<style scoped>
</style>
