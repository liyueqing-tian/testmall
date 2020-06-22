// 网络请求
import axios from 'axios'

export function request(config) {

  // 1. 创建实例
  const axiosInstance = axios.create({
    // 公共配置
    baseURL: "http://152.136.185.210:8000",
    timeout: 5000
  })
  // 2. 请求拦截 -发送网络请求 , 参数为两个回调函数（暂时不用）
  axiosInstance.interceptors.request.use(config =>{
    return config

  }, err => {

  })

  // 3. 响应拦截
  axiosInstance.interceptors.response.use(res => {
    return res.data
  }, error => {

  })

  // 4. 发送真正的请求

  return axiosInstance(config)

}


