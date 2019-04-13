import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'


const TIMEOUT: number = 15000
const http = axios.create({
  withCredentials: true,
  timeout: TIMEOUT,
  headers: {

  }
})

interface httpPendingObj {
  u: string,
  f: Function
}

let httpPending: httpPendingObj[] = []
const Cancel = axios.CancelToken

function removeHttpPending(config: AxiosRequestConfig): any {
  httpPending.map((item, index, arr) => {
    if (item.u === config.url + '&' + config.method) {
      console.warn(`${config.url}: 短时间内重复请求`)
      item.f()
      arr.splice(index, 1)
    }
    return config
  })
}

http.interceptors.request.use((config: AxiosRequestConfig) => {
  removeHttpPending(config)
  config.cancelToken = new Cancel(c => {
    httpPending.push({ u: config.url + '&' + config.method, f: c })
  })
  return config
}, (err: AxiosError) => {
  return Promise.reject(err)
})

http.interceptors.response.use((res: AxiosResponse) => {
  removeHttpPending(res.config)
  return res.data
}, (err: AxiosError) => {
  console.error(err)
  return Promise.reject(err)
})

export default http
