<template>
  <div class="my-page">
    <div class="page-header">
    
    </div>
    <div class="user-info">
      <img 
        src="https://tse4-mm.cn.bing.net/th/id/OIP-C.HjyMogEmtyrnLMZQ8tXtHAHaF4?w=224&h=180&c=7&r=0&o=5&cb=thfvnext&pid=1.7" 
        alt="用户头像" 
        class="avatar"
      >
      <div class="user-details">
        <p class="username">次元爱好者</p>
        <p class="user-id">ID: 12345678</p>
      </div>
    </div>
    <div class="menu-list">
      <div class="menu-item" @click="goTo('orders')">
        <i class="icon">📦</i>
        <span>我的订单</span>
        <i class="arrow">→</i>
      </div>
      <div class="menu-item" @click="goTo('favorites')">
        <i class="icon">❤️</i>
        <span>我的收藏</span>
        <i class="arrow">→</i>
      </div>
      <div class="menu-item" @click="goTo('address')">
        <i class="icon">🏠</i>
        <span>收货地址</span>
        <i class="arrow">→</i>
      </div>
      <div class="menu-item" @click="goTo('settings')">
        <i class="icon">⚙️</i>
        <span>设置</span>
        <i class="arrow">→</i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (path) => {
 
  router.push(`/my/${path}`) 
}
</script>

<style scoped>
.my-page {
  padding: 20px;
  padding-bottom: 80px; 
}

.page-header {
  text-align: center;
  margin-bottom: 20px;
}

.mall-title {
  font-size: 24px;
  color: #673ab7;
  font-weight: bold;
}

.user-info {
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #673ab7, #9c27b0);
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  margin-right: 15px;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.username {
  font-size: 18px;
  margin-bottom: 5px;
}

.user-id {
  font-size: 14px;
  opacity: 0.8;
}

.menu-list {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 16px;
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: #f8f8f8;
}

.icon {
  margin-right: 12px;
  font-size: 18px;
  color: #673ab7;
}

.arrow {
  color: #ccc;
}
</style>