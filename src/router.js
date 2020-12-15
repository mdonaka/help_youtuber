import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/both/frame'
import Branch from '@/components/both/id_check'
import Sign from '@/components/both/sign/home'
import Signin from '@/components/both/sign/signin'
import Signup from '@/components/both/sign/signup'

import Chat from '@/components/editor/chat/home'
import UserPage from '@/components/editor/user/home'
import Home from '@/components/editor/Home/home'
/*
import Chat from '@/components/youtuber/chat/home'
import UserPage from '@/components/youtuber/user/home'
import Home from '@/components/youtuber/Home/home'
 */
Vue.use(Router)
 
export default new Router({
	routes: [
		{
			path: '/',
			component: Branch, 
		},
		{
			path: '/user/',
			component: Frame,
			children: [
				{ path: '/', component: UserPage},
				{ path: 'userpage/', component: UserPage},
				{ path: 'chat/', component: Chat },
				{ path: 'Home/', component: Home },
			],
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
