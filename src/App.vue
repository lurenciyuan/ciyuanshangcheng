<template>
  <div id="app">
    <!-- 商城标题栏 -->
    <div class="mall-header">
      <h1 class="mall-title">次元商城</h1>
    </div>
    <router-view />
    <NavBar />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f5f5f5;
}

#app {
  width: 1200px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 商城标题样式 - 彩色渐变效果 */
.mall-header {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 20px;
  text-align: center;
}

.mall-title {
  font-size: 36px;
  font-weight: bold;
  
  font-family: "Comic Sans MS", "Marker Felt", "Microsoft YaHei", sans-serif;
  
  /* 彩色渐变效果 */
  background: linear-gradient(
    90deg, 
    #ff6b6b, 
    #ffd166, 
    #06d6a0, 
    #118ab2, 
    #9b5de5
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  /* 添加文字阴影增强立体感 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  /* 添加动画效果 */
  animation: gradientAnimation 8s ease infinite;
}

/* 渐变 */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
