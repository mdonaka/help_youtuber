<template>
<div id="app">
  <v-app id="inspire">
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="error"
        grow
        dark
        icons-and-text
      >
        <!-- タブ -->
        <v-tab>
          <v-icon>mdi-human</v-icon>
            Editor情報
        </v-tab>

        <v-tab>
          <v-icon>mdi-chat</v-icon>
          チャット
        </v-tab>

        <!-- 各タブ内のview -->
        <!-- 1つ目 -->
        <v-tab-item>
          <v-card flat>
            <Talker_infomation/>
          </v-card>
        </v-tab-item>

        <!-- 2つ目 -->
        <v-tab-item>
          <v-card flat>
            <div id="app">
            <v-app id="inspire">
            <v-container fluid no-gutter>
            <v-row>
            <v-divider inset vertical></v-divider>
            <v-col cols="10" md="5">
              <Talker_view/>
            </v-col>
            <v-col>
              <Chat_view/>
            </v-col>
            </v-row>
            </v-container>
            </v-app>
            </div>
          </v-card>
        </v-tab-item>

      </v-tabs>     
    </v-card>
  </v-app>
</div>
</template>

<script>
/* eslint-disable no-console */
import Chat_view from "./../../both/chat/chat_view"
import Talker_view from "./talker_view.vue"
import Talker_infomation from "./evaluation.vue"

const initialData = ()=>{
  return {
    tab: null,
  };
}


export default {
  components: {Chat_view, Talker_view, Talker_infomation},
  data(){
    return initialData()
  },
  computed: {
  },
}

</script>

<!-- scoped -->
<style>
</style>
