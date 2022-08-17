import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
// 响应结果的数据类型
import { IResponse } from './types'

class LHttp {
  // axios 实例
  private instance
  constructor (config:AxiosRequestConfig) {
    this.instance = axios.create(config)
    // 触发请求拦截器和响应拦截器
    this.interceptors()
  }

  public request<T> (config:AxiosRequestConfig):Promise<IResponse<T>> {
    return new Promise((resolve, reject) => {
      try {
        this.instance.request<IResponse<T>>(config).then((res:AxiosResponse) => {
          resolve(res.data)
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  //   拦截器
  private interceptors () {
    this.interceptorsRequest()
    this.interceptorsResponce()
  }

  //   请求拦截器
  private interceptorsRequest () {
    this.instance.interceptors.request.use(
      (config) => {
        // 在发送请求之前做些什么
        return config
      }, (error) => {
      // 对请求错误做些什么
        return Promise.reject(error)
      })
  }

  //   响应拦截器
  private interceptorsResponce () {
    this.instance.interceptors.response.use(
      (response) => {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
        return response
      }, (error) => {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
        return Promise.reject(error)
      })
  }
}

export default LHttp
