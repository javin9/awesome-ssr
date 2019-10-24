import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home// () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: About// () => import('../views/About.vue')
  }
]

export const createRouter = () => {
  return new VueRouter({
    mode: 'history',
    routes
  })
}
