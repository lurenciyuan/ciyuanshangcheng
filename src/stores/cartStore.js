import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义购物车 Store
export const useCartStore = defineStore('cart', () => {
  // 购物车商品列表，假设结构：{ id, name, price, count }
  const cartList = ref([])

  // 添加商品到购物车
  const addToCart = (product) => {
    const existItem = cartList.value.find(item => item.id === product.id)
    if (existItem) {
      existItem.count++
    } else {
      cartList.value.push({ ...product, count: 1 })
    }
  }

  // 减少商品数量
  const decreaseCount = (productId) => {
    const item = cartList.value.find(item => item.id === productId)
    if (item && item.count > 1) {
      item.count--
    }
  }

  // 移除商品
  const removeFromCart = (productId) => {
    cartList.value = cartList.value.filter(item => item.id !== productId)
  }

  return { cartList, addToCart, decreaseCount, removeFromCart }
})