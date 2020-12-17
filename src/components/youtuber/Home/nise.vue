<template>
<div id="app">
  <v-container>
  <v-col>
    <v-card>
    <v-card-title class="headline">おすすめエディタ</v-card-title>
    <v-list-item-group 
      v-model="selected"
      active-class="pink--text"
    >
        <v-list-item 
          v-for="item in items"
          :key="item.title"
          :href="item.url"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-action-text>名前</v-list-item-action-text>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-action-text>得意ジャンル</v-list-item-action-text>
            <v-list-item-title v-text="item.Genre"></v-list-item-title>
          </v-list-item-content>


          <v-list-item-content>
            <v-list-item-action-text>編集スピード</v-list-item-action-text>
            <v-list-item-title v-text="item.speed"></v-list-item-title>
          </v-list-item-content>


          <v-list-item-content>
            <v-list-item-action-text>編集クォリティ</v-list-item-action-text>
            <v-list-item-title v-text="item.quality"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-action-text>評価</v-list-item-action-text>
            <v-rating 
            small dense
            background-color="pink lighten-3"
            color="pink" 
            :value="item.rating" 
            half-increments 
            length="5"
            readonly
            ></v-rating>
          </v-list-item-action>

        </v-list-item>
        <v-divider
        v-if="index + 1 < items.length"
        :key="index"
        ></v-divider>
      </v-list-item-group>

    </v-card>
    </v-col>

    </v-container>
</div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'App',
  data: () => ({
    items: [
      { title: 'さんちゃん', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',Genre:'ゲーム実況',quality:'プロ',speed:'4/5',rating: 4.5, url:"#/user/userpage"},
      { title: '三太郎', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',Genre:'商品紹介',quality:'アマチュア',speed:'2/5',rating: 2.5, url:"#/user/userpage"},
      { title: 'さんさんさん', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',Genre:'アニメーション',quality:'セミプロ',speed:'3/5',rating: 3.0, url:"#/user/userpage"},
      { title: 'やまなかたつき', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',Genre:'楽曲PV',quality:'ビギナー',speed:'1/5',rating: 4.0, url:"#/user/userpage"},
    ],
  })
};
</script>

<!-- scoped -->
<style>
  
</style>
