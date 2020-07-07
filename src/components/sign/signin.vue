<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="mdi-account-circle" label="ユーザ名" v-model="mail"/>
          <v-text-field v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" append-icon="mdi-eye-off" label="パスワード" @click:append="showPassword = !showPassword" v-model="password" />
          <v-card-actions>
            <v-btn class="info" color="error" @click="signin">ログイン</v-btn>
          </v-card-actions>
          <p>※アカウントをお持ちでない方は<a href="/#/sign/signup">こちら</a></p>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
/* eslint-disable no-console */
import {mapActions} from 'vuex'

const initialData = ()=>{
	return {
		mail: "nickname",
		password: "1234**KKoop",
		showPassword:false
	};
};

export default {
	name: 'App',
	data(){
		return initialData()
	},
	methods:{
		...mapActions({
			login: "id/login_new",
		}),
		signin:function(){
			// 認証データの作成
			const authenticationData = {
				Username: this.mail,
				Password: this.password
			};
			const ok =  this.login(authenticationData);
			ok.then((v)=>{
				console.log(v);
			});
		},
	}
}

</script>

<style scoped>
</style>
