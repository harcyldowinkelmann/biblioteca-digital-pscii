import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/Home.vue'),
		meta: { requiresAuth: false }
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})

export default router
