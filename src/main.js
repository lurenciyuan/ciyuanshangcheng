import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia' // 引入 Pinia 

const app = createApp(App)
app.use(router)
app.use(createPinia()) // 挂载 Pinia 状态管理
app.mount('#app')