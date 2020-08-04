import Vue from 'vue'
import Branch from '@/components/id_check'
import Router from 'vue-router'
import Chat from '@/components/chat/home'
import UserPage from '@/components/user/home'
import Sign from '@/components/sign/home'
import Signin from '@/components/sign/signin'
import Signup from '@/components/sign/signup'
import Frame from '@/components/frame'
 
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
