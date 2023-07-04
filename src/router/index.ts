import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: () => import("@/views/index.vue")
	},
	{
		path: "/:catchAll(.*)",
		name: "404",
		component: () => import("@/views/404.vue")
	},
];

const router = createRouter({
	history: createWebHistory(),
	linkExactActiveClass: 'active',
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { left: 0, top: 0 };
		}
	},
});
export default router;
