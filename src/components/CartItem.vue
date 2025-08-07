<template>
  <div class="cart-item">
    <img :src="item.img" alt="商品图片" class="product-img">
    <div class="product-info">
      <div class="product-name">{{ item.name }}</div>
      <div class="product-price">¥{{ item.price }}</div>
      <div class="quantity-control">
        <button class="btn minus" @click="$emit('decrease', item.id)">-</button>
        <span class="quantity">{{ item.count }}</span>
        <button class="btn plus" @click="$emit('increase', item)">+</button>
      </div>
    </div>
    <button class="remove-btn" @click="$emit('remove', item.id)">
      删除
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// 接收商品数据
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      name: '',
      price: 0,
      img: '',
      count: 1
    })
  }
})

// 定义事件
const emit = defineEmits(['increase', 'decrease', 'remove'])
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: white;
  margin-bottom: 12px;
  border-radius: 8px;
}

.product-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.product-info {
  flex: 1;
  margin: 0 12px;
}

.product-name {
  font-size: 14px;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price {
  color: #ff4d6a;
  margin-bottom: 8px;
  font-weight: bold;
}

.quantity-control {
  display: flex;
  align-items: center;
  width: 100px;
}

.quantity-control .btn {
  width: 24px;
  height: 24px;
  border: 1px solid #eee;
  background-color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.quantity-control .minus:disabled {
  background-color: #f5f5f5;
  color: #ccc;
}

.quantity-control .quantity {
  width: 30px;
  text-align: center;
  font-size: 14px;
}

.remove-btn {
  color: #999;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
}

.remove-btn:hover {
  color: #ff4d6a;
}
</style>
