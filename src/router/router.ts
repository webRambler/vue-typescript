import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/recommend.vue'
import Search from '@/views/Search.vue'
import Toplist from '@/views/Toplist.vue'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
