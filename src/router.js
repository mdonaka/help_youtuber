import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/chat/home'
import Home from '@/components/home'
 
Vue.use(Router)
 
export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home 
		},
		{
			path: '/chat',
			name: 'Chat',
			component: Chat
		},
	]
})
