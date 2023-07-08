import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatOda from '../views/ChatOda.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatOda
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
