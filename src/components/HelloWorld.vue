<template>
  <div class="hello">
    <h1 @click="hello">{{ msg }}</h1>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
	methods:{
		hello: function(e){
			alert("clicked");
			console.log(e);
		}
	}
}
</script>

<style scoped>
</style>
