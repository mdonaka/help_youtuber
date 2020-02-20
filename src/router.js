import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/chat/home'
import User from '@/components/user/home'
import Sign from '@/components/sign/home'
import Signin from '@/components/sign/signin'
import Signup from '@/components/sign/signup'
import Home from '@/components/home'
 
Vue.use(Router)
 
export default new Router({
	routes: [
		{
			path: '/',
			component: Home, 
			children: [
				{ path: '/chat', component: Chat },
				{ path: '/user', component: User },
			]
		},
		{
			path: '/sign/',
			component: Sign,
			children: [
				{path: '/',component: Signin},
				{path: 'signin/',component: Signin},
				{path: 'signup/',component: Signup},
			]
		},
	]
})
