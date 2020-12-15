<template>
	<div> 
		<h1>工事中</h1>
		<!-- -->
		<div v-for="{name, id} in users" v-bind:key="id">
			<div @click="updateTarget(id)">{{name}}</div>
		</div>
		<!-- -->
	</div>
</template>

<script>
/* eslint-disable no-console */
import {mapGetters } from 'vuex'

const initialData = ()=>{
	return {
		users: []
	};
}

export default {
	data(){
		return initialData()
	},
	methods:{
		...mapGetters({
			getUsers: "users/getUsers"
		}),
	},
	created(){
		const data = this;
		this.users = this.getUsers().then(res=>{
			data.users = res;
		});
	},
}
</script>

<style scoped>
</style>
