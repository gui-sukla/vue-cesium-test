import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Show from '@/components/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/show/:id',
      name: 'show',
      component: Show
    }
  ]
})
