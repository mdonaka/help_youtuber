import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/chat/home'
 
Vue.use(Router)
 
export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Chat //TODO: Home画面を作る
		},
		{
			path: '/chat',
			name: 'Chat',
			component: Chat
		},
	]
})
