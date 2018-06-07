import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../view/login/index.vue'

const Login = () => import('../view/login/login.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
export default router
