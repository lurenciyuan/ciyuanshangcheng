<template>
  <div class="cart-page">
    <!-- 页面标题 -->
    <div class="page-title">我的购物车</div>
    
    <!-- 购物车为空状态 -->
    <div class="empty-cart" v-if="cartList.length === 0">
      <img src="https://picsum.photos/200/200?random=2" alt="购物车为空" class="empty-img">
      <p>购物车还是空的哦~</p>
      <button class="go-shopping" @click="$router.push('/')">
        去逛逛
      </button>
    </div>
    
    <!-- 购物车列表 -->
    <div class="cart-list" v-else>
      <CartItem 
        v-for="item in cartList" 
        :key="item.id" 
        :item="item"
        @increase="handleIncrease"
        @decrease="handleDecrease"
        @remove="handleRemove"
      />
      
      <!-- 结算区域 -->
      <div class="cart-footer">
        <div class="total-price">
          <span>合计:</span>
          <span class="price">¥{{ totalPrice.toFixed(2) }}</span>
          <span class="desc">不含运费</span>
        </div>
        <button class="checkout-btn" @click="handleCheckout">
          结算 ({{ totalCount }})
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import CartItem from '../components/CartItem.vue'
import { useCartStore } from '../stores/cartStore.js'

// 购物车状态
const cartStore = useCartStore()
const router = useRouter()

// 购物车列表
const cartList = computed(() => cartStore.cartList)

// 计算总价
const totalPrice = computed(() => {
  return cartList.value.reduce((sum, item) => {
    return sum + (item.price * item.count)
  }, 0)
})

// 计算总数量
const totalCount = computed(() => {
  return cartList.value.reduce((sum, item) => sum + item.count, 0)
})

// 增加数量
const handleIncrease = (item) => {
  cartStore.addToCart(item) // 复用addToCart方法，已存在则增加数量
}

// 减少数量
const handleDecrease = (productId) => {
  cartStore.decreaseCount(productId)
}

// 移除商品
const handleRemove = (productId) => {
  if (confirm('确定要从购物车中移除该商品吗？')) {
    cartStore.removeFromCart(productId)
  }
}

// 结算
const handleCheckout = () => {
  // 实际项目中这里应该跳转到结算页面
  alert(`共${totalCount.value}件商品，合计¥${totalPrice.value.toFixed(2)}，准备结算！`)
  router.push('/my') 
}
</script>

<style scoped>
.cart-page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.page-title {
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  background-color: white;
  border-bottom: 1px solid #eee;
}

.empty-cart {
  text-align: center;
  padding: 60px 20px;
  background-color: white;
  margin: 12px;
  border-radius: 8px;
}

.empty-img {
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-cart p {
  color: #999;
  margin-bottom: 24px;
  font-size: 16px;
}

.go-shopping {
  background-color: #ff4d6a;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
}

.cart-list {
  margin-bottom: 60px;
}

.cart-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: white;
  border-top: 1px solid #eee;
}

.total-price {
  display: flex;
  align-items: center;
}

.total-price .price {
  color: #ff4d6a;
  font-size: 18px;
  font-weight: bold;
  margin: 0 8px;
}

.total-price .desc {
  color: #999;
  font-size: 12px;
}

.checkout-btn {
  background-color: #ff4d6a;
  color: white;
  border: none;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}
</style>
