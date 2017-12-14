import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/pages/test'
import Iview from '@/pages/iview'
import mEvt from '@/pages/mineevent'
import IUpload from '@/pages/iviewupload';
import Swiper from '@/pages/swipe';

import Count from '@/pages/count.vue';
import Count2 from '@/pages/count2.vue';
import Cut from '@/pages/cut.vue';
import Copyboard from '@/pages/clipboard.vue'


Vue.use(Router)
const routes = [
    {
        path: '/',
        name: 'Hello',
        component: Hello
    },
	{
		path: '/test',
		name: 'test',
		component: Test
	},
	{
		path: '/iview',
		name: 'iview',
		component: Iview
	},
	{
		path: '/mineevent',
		name: 'myevent',
		component: mEvt
	},
	{
		path: '/iupload',
		name: 'iupload',
		component: IUpload
	},
	{
		path: '/swipe',
		name: 'swipe',
		component: Swiper
	},
	{
		path: '/count',
		name: 'count',
		component: Count
	},
	{
		path: '/count2',
		name: 'count2',
		component: Count2
	},
	{
		path: '/cut',
		name: 'cut',
		component: Cut
	},
	{
		path: '/copy',
		name: 'copy',
		component: Copyboard
	},
]
export default new Router({
    mode: 'history',
    routes
})
