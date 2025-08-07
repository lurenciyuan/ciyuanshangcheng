<template>
  <div class="category-page">
    <div class="filter-bar">
      <select v-model="selectedCategory" @change="filterProducts">
        <option value="all">全部分类</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
      
      <select v-model="sortType" @change="sortProducts">
        <option value="default">默认排序</option>
        <option value="priceAsc">价格从低到高</option>
        <option value="priceDesc">价格从高到低</option>
      </select>
    </div>
    
    <div class="product-list">
      <ProductItem 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product" 
        @add-cart="handleAddCart"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductItem from '../components/ProductItem.vue'
import { useCartStore } from '../stores/cartStore.js'

// 模拟分类数据
const categories = ref([
  { id: 'figure', name: '手办' },
  { id: 'peripheral', name: '周边' },
  { id: 'clothing', name: '服饰' },
  { id: 'poster', name: '海报' }
])

// 模拟商品数据
const productList = ref([
  {
    id: 1,
    name: '二次元动漫手办',
    price: 129.99,
    img: 'https://ts4.tc.mm.bing.net/th/id/OIP-C.VhBMSOZTs1MKXfwxtOmGWwHaH5?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'figure'
  },
  {
    id: 2,
    name: '动漫周边钥匙扣',
    price: 29.99,
    img: 'https://cbu01.alicdn.com/img/ibank/2020/935/875/22635578539_920193006.jpg',
    category: 'peripheral'
  },
  {
    id: 3,
    name: '动漫主题T恤',
    price: 59.99,
    img: 'https://img.alicdn.com/bao/uploaded/i3/2211513821/O1CN012aHm1x1e64BJNSEM0_!!2211513821.jpg',
    category: 'clothing'
  },
  {
    id: 4,
    name: '动漫角色海报',
    price: 19.99,
    img: 'https://ts4.tc.mm.bing.net/th/id/OIP-C.KsBDArl47MqdPPq57QzgwgHaNK?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'poster'
  },
  {
    id: 5,
    name: '限量版动漫手办',
    price: 249.99,
    img: 'https://ts4.tc.mm.bing.net/th/id/OIP-C.VhBMSOZTs1MKXfwxtOmGWwHaH5?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'figure'
  },
  {
    id: 6,
    name: '动漫主题背包',
    price: 89.99,
    img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.hVjyyy8iyT9nzJ1UJ1pPfwHaHa?w=203&h=203&c=7&r=0&o=7&cb=thfvnext&pid=1.7&rm=3',
    category: 'clothing'
  }
])

const selectedCategory = ref('all')
const sortType = ref('default')
const cartStore = useCartStore()

// 筛选商品
const filteredProducts = computed(() => {
  let result = [...productList.value]
  
  // 按分类筛选
  if (selectedCategory.value!== 'all') {
    result = result.filter(product => product.category === selectedCategory.value)
  }
  
  // 排序
  if (sortType.value === 'priceAsc') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortType.value === 'priceDesc') {
    result.sort((a, b) => b.price - a.price)
  }
  
  return result
})

const filterProducts = () => {
  // 由计算属性自动处理
}

const sortProducts = () => {
  // 由计算属性自动处理
}

const handleAddCart = (product) => {
  cartStore.addToCart(product)
}
</script>

<style scoped>
.category-page {
  padding: 10px;
  padding-bottom: 60px;
}

.filter-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 5px;
}

.filter-bar select {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
    