<template>
	<div>
	<v-container fluid>
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :page="page"
        :search="search"
        hide-default-footer
      >
        <template v-slot:header>
          <v-toolbar
            dark
            color="black"
            class="mb-1"
          >
            <v-text-field
              width="50"
              v-model="Search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="検索"
            ></v-text-field>
          </v-toolbar>
        </template>
  
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <v-row>
                  <v-col>
                    <v-card	elevation="0"
                    width="150"
                    >
                      <v-layout justify-center>
                        <v-avatar
                          class="profile"
                          color="grey"
                          size="100"
                        >
                          <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                        </v-avatar>
                      </v-layout>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-chip
                      class="ml-n3"
                      color="success"
                      outlined
                    >
                      <v-icon left>mdi-alert-circle-outline</v-icon>
                      {{ item.通知 }}
                    </v-chip>
                  </v-col>
                </v-row>
                <v-card-title class="subheading font-weight-bold">
                  {{ item.名前 }} <span class="font-weight-thin ml-3">さん</span>
                </v-card-title>

                <v-divider></v-divider>

                <v-row>
                  <span class="font-black ml-5">希望項目</span>
                </v-row>
                <v-row>
                  <v-chip
                    class="ml-5 ma-2"
                    color="red"
                    dark>
                    {{ item.品質 }}
                  </v-chip>
                  <v-chip
                    class="ml-5 ma-2"
                    color="green"
                    dark>
                    {{ item.納期 }}
                  </v-chip>
                  <v-chip
                    class="ml-5 ma-2"
                    color="blue"
                    dark>
                    {{ item.価格 }}
                  </v-chip>
                </v-row>

                <v-divider></v-divider>

                <span class="font-black ml-2">動画時間目安</span>
                  <v-row justify="center">
                   <h1>{{ item.時間 }}</h1>
                  </v-row>
              </v-card>
            </v-col>
          </v-row>
        </template>
  
        <template v-slot:footer>
          <v-row
            class="ml-2"
            align="center"
            justify="center"
          >
            <span class="grey--text">表示数</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  text
                  color="black"
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
  
            <v-spacer></v-spacer>
  
            <span
              class="mr-4
              grey--text"
            >
             {{ page }} / {{ numberOfPages }} 
            </span>
            <v-btn
              fab
              dark
              height="40"
              width="40"
              color="red"
              class="mr-2"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              height="40"
              width="40"
              color="red"
              class="mr-3"
              @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
	</div>
</template>

<script>
/* eslint-disable no-console */

const initialData = ()=>{
    return {
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      keys: [
      ],
      items: [
        {
          名前: 'さんちゃん',
          品質: 'クオリティ重視' ,
          納期: '10日以内' ,
          価格: '10円' ,
          時間: '１時間' ,
          通知: 'コンタクト受信' ,
        },
        {
          名前: 'さんなか',
          品質: '納期重視' ,
          納期: '3日以内' ,
          価格: '20000円' ,
          時間: '5分' ,
          通知: '納期まであと2日' ,
        },
        {
          名前: 'たつきち',
          品質: 'クオリティ重視' ,
          納期: '一ヶ月以内' ,
          価格: '4000円' ,
          時間: '10分' ,
          通知: '' ,
        },
        {
          名前: '山P',
          品質: '納期重視' ,
          納期: '今日明日中' ,
          価格: '1円' ,
          時間: '5時間' ,
          通知: '納期まであと1日' ,
        },
      ],
    }
}
export default {
	data() {
		return initialData()
	},
	computed: {
		numberOfPages () {
			return Math.ceil(this.items.length / this.itemsPerPage)
		},
		filteredKeys () {
			return this.keys.filter(key => key !== 'Name')
		},
	},
  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    },
	},
}
</script>
<style scoped>
</style>
