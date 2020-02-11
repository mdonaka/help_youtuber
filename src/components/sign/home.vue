<template>
	<div>
		<h2>sign up, sign in</h2>
		<router-view/>
		<ul>
			<li><router-link to="sign/signin/">Signin</router-link></li>
			<li><router-link to="sign/signup">Sign upはこちらから</router-link></li>
		</ul>
	</div>
</template>

<script>
/* eslint-disable no-console */
export default {
}
</script>

<style scoped>
</style>
