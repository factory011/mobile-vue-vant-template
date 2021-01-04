import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/error.vue'),
    meta: {
      title: '找不到页面'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach(function (to, from, next) {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
