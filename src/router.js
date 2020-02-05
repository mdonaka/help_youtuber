import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/chat/home'
import Sign from '@/components/sign/home'
import Signin from '@/components/sign/signin'
import Signup from '@/components/sign/signup'
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
		{
			path: '/sign',
			name: 'Sign',
			component: Sign,
			chilfren: [
				{path: '',component: Signin},
				{path: 'signup/',component: Signup},
			]
		},
	]
})
