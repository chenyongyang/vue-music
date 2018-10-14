import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'pages/recommend'
import Singer from 'pages/singer'
import Search from 'pages/search'
import Rank from 'pages/rank'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/rank',
    component: Rank
  }
  ]
})
