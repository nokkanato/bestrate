import Vue from 'vue'
import Router from 'vue-router'
import Controller from '@/components/Controller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Controller',
      component: Controller
    }
  ]
})
