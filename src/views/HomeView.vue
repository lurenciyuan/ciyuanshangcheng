<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="banner">
      <div class="carousel-wrapper">
        <img 
          v-for="(item, index) in bannerList" 
          :key="index" 
          :src="item.img" 
          :alt="'banner ' + (index + 1)"
          class="carousel-item"
        >
      </div>
      <!-- 轮播指示器 -->
      <div class="carousel-indicators">
        <span 
          v-for="(item, index) in bannerList" 
          :key="index" 
          class="indicator"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
      <!-- 左右切换按钮 -->
      <button class="carousel-btn prev" @click="prevSlide">❮</button>
      <button class="carousel-btn next" @click="nextSlide">❯</button>
    </div>
    
    <!-- 商品列表 -->
    <div class="product-list">
      <ProductItem 
        v-for="product in productList" 
        :key="product.id" 
        :product="product" 
        @add-cart="handleAddCart"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ProductItem from '../components/ProductItem.vue'
import { useCartStore } from '../stores/cartStore.js'

// 轮播图相关状态
const currentIndex = ref(0)
const transitionDuration = ref('0.5s') 
const intervalId = ref(null)
const autoplayInterval = 3000 

// 轮播图数据
const bannerList = ref([
  { img: 'https://ts2.tc.mm.bing.net/th/id/OIF-C.6hebiCeCGBy6zjk82iYRzA?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3'},
  { img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.hHNXHnnsHp2VkwOTvGwnVgHaEK?w=303&h=180&c=7&r=0&o=7&cb=thfvnext&pid=1.7&rm=3'},
  { img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f7cJE-HNqXBfvgL_q69wXgHaEM?w=300&h=180&c=7&r=0&o=7&cb=thfvnext&pid=1.7&rm=3'}
])

// 商品数据
const productList = ref([
  {
    id: 1,
    name: '二次元动漫手办',
    price: 129.99,
    img: 'https://ts4.tc.mm.bing.net/th/id/OIP-C.VhBMSOZTs1MKXfwxtOmGWwHaH5?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: '手办'
  },
  {
    id: 2,
    name: '动漫周边钥匙扣',
    price: 29.99,
    img: 'https://cbu01.alicdn.com/img/ibank/2020/935/875/22635578539_920193006.jpg',
    category: '周边'
  },
  {
    id: 3,
    name: '动漫主题T恤',
    price: 59.99,
    img: 'https://img.alicdn.com/bao/uploaded/i3/2211513821/O1CN012aHm1x1e64BJNSEM0_!!2211513821.jpg',
    category: '服饰'
  },
  {
    id: 4,
    name: '动漫角色海报',
    price: 19.99,
    img: 'https://ts4.tc.mm.bing.net/th/id/OIP-C.KsBDArl47MqdPPq57QzgwgHaNK?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: '海报'
  }
])

// 轮播图方法
const goToSlide = (index) => {
  currentIndex.value = index
}

const nextSlide = () => {
  transitionDuration.value = '0.5s'
  currentIndex.value = (currentIndex.value + 1) % bannerList.value.length
}

const prevSlide = () => {
  transitionDuration.value = '0.5s'
  currentIndex.value = (currentIndex.value - 1 + bannerList.value.length) % bannerList.value.length
}

// 自动播放
const startAutoplay = () => {
  intervalId.value = setInterval(nextSlide, autoplayInterval)
}

// 暂停自动播放
const stopAutoplay = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})

// 购物车相关
const cartStore = useCartStore()

const handleAddCart = (product) => {
  cartStore.addToCart(product)
}
</script>

<style scoped>
.home {
  padding: 20px;
}

/* 轮播图样式 */
.banner {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}

.carousel-wrapper {
  display: flex;
  width: 100%;
}

.carousel-item {
  width: 50%;
  height: auto;
  flex-shrink: 0;
  display: block;
}

/* 指示器样式 */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: background-color 0.3s;
}

.indicator.active {
  background-color: white;
  width: 30px;
  border-radius: 6px;
}

/* 切换按钮样式 */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s;
}

.banner:hover .carousel-btn {
  opacity: 1;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

/* 商品列表样式 */
.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;
}
</style>