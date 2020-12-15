<template>
	<div> 
<div class="font-weight-medium">Editor </div>
	<v-card
      class="mx-auto mb-3"
      width="400"
    >
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-row
          align="end"
          class="fill-height"
        >
          <v-col
            align-self="start"
            class="pa-0"
            cols="12"
          >
            <v-avatar
              class="profile"
              color="grey"
              size="164"
              tile
            >
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item
              color="rgba(0, 0, 0, .4)"
              dark
            >
              <v-list-item-content>
                <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
 <v-divider inset></v-divider>
<div class="font-weight-medium">Youtuber希望項目 : {{ bg1 }} {{ bg2 }} {{ bg3 }}</div>
<v-btn-toggle mandatory v-model="bg1">
<v-container
class="mb-n6" >
<v-row>
<v-col>
  <v-btn 
      width="15vw" outlined color="green" value="クオリティ">クオリティ重視
  </v-btn>
</v-col>
<v-col
class="ml-n2">
  <v-btn 
      width="15vw" outlined color="light-blue" value="スピード">スピード重視
  </v-btn>
</v-col>
</v-row>
</v-container>
</v-btn-toggle>
<v-btn-toggle maltiple v-model="bg2">
<v-container
class="mb-n6">
<v-row>
<v-col>
  <v-btn
      width="10vw" outlined color="red" value="24h">24時間以内
  </v-btn>
</v-col>
<v-col
class="ml-n4">
  <v-btn
      width="10vw" outlined color="red accent-3" value="3d">3日以内
  </v-btn>
</v-col>
<v-col
class="ml-n4">
  <v-btn
      width="10vw" outlined color="pink" value="1w">一週間以内
  </v-btn>
</v-col>
</v-row>
</v-container>
</v-btn-toggle>
<v-btn-toggle maltiple v-model="bg3">
<v-container>
<v-row>
<v-col>
  <v-btn
      width="31vw" outlined color="black" value="サムネイル">サムネイル作成
  </v-btn>
</v-col>
</v-row>
</v-container>
</v-btn-toggle>
 <v-divider inset></v-divider>
<div class="font-weight-medium">動画時間目安 : {{offset1}}時間{{offset2}}分</div>
<v-container>
<v-row>
<v-col>
 <v-slider
color="red"
            v-model="offset1"
            min="0"
            max="24"
            label="時"
            thumb-label
          ></v-slider>
 <v-slider
color="red"
            v-model="offset2"
            min="1"
            max="59"
            label="分"
            thumb-label
          ></v-slider>
</v-col>
</v-row>
</v-container>
aaa
	</div>
</template>

<script>
/* eslint-disable no-console */

const initialData = ()=>{
	return {
		bg1: null,
		bg2: null,
		bg3: null,
		offset1: null,
		offset2: null,
	};
}

export default {
	data(){
		return initialData()
	},
}
</script>

<style scoped>
</style>
