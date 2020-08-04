<template>
  <v-app>
		<vue-confirm-dialog></vue-confirm-dialog>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable no-console */

export default {
	name: 'app',
};
</script>
