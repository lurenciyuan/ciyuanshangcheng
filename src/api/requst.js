import axios from 'axios'

// 创建 Axios 实例
const instance = axios.create({
  baseURL: '/api', // 基础路径占位符
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 示例：添加 token 占位符
    // config.headers.Authorization = 'Bearer YOUR_TOKEN_HERE'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.error('请求出错：', error)
    return Promise.reject(error)
  }
)

export default instance
