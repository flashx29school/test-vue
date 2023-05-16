import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      props: {
        icon: 'pi-home',
        key: 'app-bar'
      }
    },
    {
      path: '/general-info',
      name: 'General Info',
      component: () => import('../views/GeneralInfo.vue'),
      props: {
        icon: 'pi-info-circle',
        key: 'app-bar'
      }
    },
    {
      path: '/organizers',
      name: 'Organizing Committee',
      component: () => import('../views/Organizerz.vue'),
      props: {
        icon : 'pi-cog',
        key: 'app-bar'
      }
    },
  ]
})

// router.beforeEach((to, from) => {
//   const { isAuth } = useCounterStore()
//   if (!isAuth && to.name !== 'Login') {
//     return { name: "Login" }
//   }
// })

export default router
