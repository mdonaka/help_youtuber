<template>
	<div>
		<h2>sign in</h2>
		<div @click="login('k')">no bug</div>
	</div>
</template>

<script>
/* eslint-disable no-console */
import {mapMutations} from 'vuex'

export default {
	methods:{
		...mapMutations({
			login: "id/login"
		}),
	}
}
</script>

<style scoped>
</style>
