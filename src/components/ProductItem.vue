<template>
  <div class="product-item">
    <img :src="product.img" alt="product" class="product-img">
    <div class="product-info">
      <p class="product-name">{{ product.name }}</p>
      <p class="product-price">¥{{ product.price }}</p>
      <button class="add-btn" @click="emit('add-cart', product)">加入购物车</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['add-cart'])
</script>

<style scoped>
.product-item {
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 4px;
}
.product-img {
  width: 100%;
  height: auto;
  margin-bottom: 8px;
}
.product-name {
  font-size: 14px;
  margin-bottom: 4px;
}
.product-price {
  color: red;
  margin-bottom: 8px;
}
.add-btn {
  background: #00bcd4;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>