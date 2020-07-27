<template>
	<div> 
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
		...mapActions({
			login:"id/login"
		}),
	},
	created(){
		this.login().then((res) => {
			this.$router.push("user", ()=>{});
			console.log(res);
		}).catch((res)=>{
			this.$router.push("sign", ()=>{});
			console.log(res);
		});
	}
}
</script>

<style scoped>

</style>
