import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from "@/components/Main";
import Blank from "@/components/Blank";

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Blank',
    component: Blank,
    path: '/',
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          guest: true
        }
      },
    ]
  },
  {
    name: 'Main',
    component: Main,
    path: '/',
    children: [
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          auth: true
        }
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  let user = store.getters['auth/user']

  if (to.meta.auth && !user) {
    return router.push('/')
  }

  if (to.meta.guest && user) {
    return router.push('/about')
  }

  next()
})

export default router
