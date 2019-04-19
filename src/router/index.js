import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/user_mgr/login'
import Test from '@/components/user_mgr/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      // redirect:'/login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      // redirect:'/login',
      component: Test
    }
  ]
})
