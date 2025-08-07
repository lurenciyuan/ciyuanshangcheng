<template>
  <div class="nav-bar">
    <div 
      class="nav-item" 
      :class="{ active: isActive('/') }" 
      @click="toPage('/')"
    >
      <i class="icon">🏠</i>
      <span>首页</span>
    </div>
    <div 
      class="nav-item" 
      :class="{ active: isActive('/category') }" 
      @click="toPage('/category')"
    >
      <i class="icon">📦</i>
      <span>分类</span>
    </div>
    <div 
      class="nav-item" 
      :class="{ active: isActive('/cart') }" 
      @click="toPage('/cart')"
    >
      <i class="icon">🛒</i>
      <span>购物车</span>
    </div>
    <div 
      class="nav-item" 
      :class="{ active: isActive('/my') }" 
      @click="toPage('/my')"
    >
      <i class="icon">👤</i>
      <span>我的</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const toPage = (path) => {
  router.push(path)
}

const isActive = (path) => {
  return router.currentRoute.value.path === path
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #eee;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.05);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: #666;
  transition: color 0.3s;
  padding: 5px 0;
}

.nav-item.active {
  color: #673ab7; 
}

.icon {
  font-size: 20px;
  margin-bottom: 4px;
}
</style>