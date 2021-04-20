import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

import authRoutes from '@/router/auth'

Vue.use(VueRouter)

const ROUTES = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Index'),
    meta: {
      requiresAuth: true
    }
  }
]
  .concat(authRoutes)

// 404 Not Found page
ROUTES.push({
  path: '*',
  redirect: { name: 'home' }
})

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: ROUTES
})

// Requires Authentication
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['oauth/isAuthenticated']) {
      next()
      return
    }
    next('/auth/login')
  } else {
    next()
  }
})

export default router
