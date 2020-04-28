import Vue from 'vue'
import Router from 'vue-router'
import Timer from './views/Timer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Timer',
      component: Timer
    }
  ]
})
