import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/both/frame'
import Branch from '@/components/both/id_check'
import Sign from '@/components/both/sign/home'
import Signin from '@/components/both/sign/signin'
import Signup from '@/components/both/sign/signup'

import Chat_E from '@/components/editor/chat/home'
import UserPage_E from '@/components/editor/user/home'
import Home_E from '@/components/editor/Home/home'

import Chat_Y from '@/components/youtuber/chat/home'
import UserPage_Y from '@/components/youtuber/user/home'
import Home_Y from '@/components/youtuber/Home/home'
/**/
Vue.use(Router)
 
export default new Router({
	routes: [
		{
			path: '/',
			component: Branch, 
		},
		{
			path: '/user_y/',
			component: Frame,
			children: [
				{ path: '/', component: Branch},
				{ path: 'userpage/', component: UserPage_Y},
				{ path: 'chat/', component: Chat_Y},
				{ path: 'Home/', component: Home_Y},
			],
		},
		{
			path: '/user_e/',
			component: Frame,
			children: [
				{ path: '/', component: Branch},
				{ path: 'userpage/', component: UserPage_E},
				{ path: 'chat/', component: Chat_E},
				{ path: 'Home/', component: Home_E},
			],
		},
		{
			path: '/sign/',
			component: Sign,
			children: [
				{path: '/',component: Branch},
				{path: 'signin/',component: Signin},
				{path: 'signup/',component: Signup},
			]
		},
	]
})
