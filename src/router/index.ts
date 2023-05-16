import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      props: {
        key: 'navbar'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
      props: {
        key: 'navbar'
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
