<template>
	<div>
	<v-container fluid>
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :page="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <template v-slot:header>
          <v-toolbar
            dark
            color="black"
            class="mb-1"
          >
            <v-text-field
              v-model="Search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="検索"
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="keys"
                prepend-inner-icon="mdi-magnify"
                label="絞り込み"
              ></v-select>
              <v-spacer></v-spacer>
              <v-btn-toggle
                v-model="sortDesc"
                mandatory
              >
                <v-btn
                  large
                  depressed
                  color="red"
                  :value="false"
                >
                  <v-icon>mdi-arrow-up</v-icon>
                </v-btn>
                <v-btn
                  large
                  depressed
                  color="red"
                  :value="true"
                >
                  <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>
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
						<v-card	elevation="3">
							<v-avatar
							class="profile"
							color="grey"
							size="100"
							>
							<v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
							</v-avatar>
						</v-card>
                <v-card-title class="subheading font-weight-bold">
                  {{ item.名前 }} <span class="font-weight-thin ml-3">さん</span>
                </v-card-title>
  
                <v-divider></v-divider>
  
                <v-list dense>
				<span class="font-weight-black red--text">希望項目</span>
                  <v-list-item
                    v-for="(key, index) in filteredKeys"
                    :key="index"
                  >
                    <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                      {{ key }}:
                    </v-list-item-content>
                    <v-list-item-content
                      class="align-end"
                      :class="{ 'blue--text': sortBy === key }"
                    >
                      {{ item[key.toLowerCase()] }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <v-divider></v-divider>

				<span class="font-weight-black red--text">動画時間目安</span>
                  <v-row justify="center">
                   <h1>sanchan</h1>
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
              color="red"
              class="mr-3"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
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
      sortBy: '名前',
      keys: [
        'デフォルト',
        '納期',
        '名前',
        '動画時間目安',
      ],
      items: [
        {
          名前: 'さんちゃん',
          品質: 1,
          納期: 1,
        },
        {
          名前: 'さんなか',
          品質: 1,
          納期: 1,
        },
        {
          名前: 'たつきち',
          品質: 1,
          納期: 1,
        },
        {
          名前: '山中',
          品質: 1,
          納期: 1,
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
