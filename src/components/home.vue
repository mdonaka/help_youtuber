<template>
	<div> 
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
export default {
}
</script>

<style scoped>
</style>
