import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '@/views/recommend.vue'
// @ts-ignore
import Search from '@/views/Search.vue'
// @ts-ignore
import Toplist from '@/views/Toplist.vue'
// @ts-ignore
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/recom'
    },
    {
      path: '/recom',
      component: Home
    },
    {
      path: '/toplist',
      component: Toplist
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/notFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched && to.matched.length === 0) next('/notFound')
  else next()
})

export default router
