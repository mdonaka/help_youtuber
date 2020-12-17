<template>
<div id="app">
  <v-app id="inspire">
  <v-card>
      <v-tabs
				background-color="error"
				grow
				dark
				icons-and-text
			>
        <v-tab>
          <v-icon>mdi-home</v-icon>
          ホーム
        </v-tab>
      </v-tabs>
    </v-card>

		<Action/>
		<Oyama/>
    </v-app>
</div>
</template>

<script>

import Action from "../../both/action"
import Oyama from "./nise.vue"

/* eslint-disable no-console */
export default {
	components: {Action, Oyama}
};
</script>

<!-- scoped -->
<style>
  
</style>
