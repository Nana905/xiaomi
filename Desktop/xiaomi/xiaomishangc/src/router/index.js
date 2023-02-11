import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../pages/home.vue"
import Index from "../pages/index.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:Home,
    redirect:"/index",
    children:[]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
