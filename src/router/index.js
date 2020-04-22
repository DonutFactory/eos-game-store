import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history', // to remove `#` on URL query
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
