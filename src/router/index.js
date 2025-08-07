import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import CartView from '../views/CartView.vue'
import MyView from '../views/MyView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/my',
    name: 'my',
    component: MyView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router