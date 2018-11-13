import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: '/404',
      component: () => import('./views/NotFound.vue')
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue')
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('./views/Life.vue')
    },
    {
      path: '/file',
      name: 'file',
      component: () => import('./views/File.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('./views/Cv.vue')
    }
  ]
})
