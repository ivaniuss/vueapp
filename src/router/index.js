import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
