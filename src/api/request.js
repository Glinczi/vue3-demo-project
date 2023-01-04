/*
 * ==================================================================
 *                网络组建封装
 * ==================================================================
 */

import axios from 'axios'

// TIPS 我的会议Axios二次封装

export default Request = axios.create({
  baseURL: 'https://api.apiopen.top/api',
  timeout: 15000
})
// HTTP Request
Request.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// HTTP Response
Request.interceptors.response.use(
  response => {
    if (response.data.code === 401) {
      return Promise.reject(response.data)
    } else if (response.data.code === 200) {
      return Promise.resolve(response)
    } else {
      Message.error(response.data.message)
      return Promise.reject(response.data)
    }
  },
  error => {
    if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1)
      Message.error('请求超时')
    return Promise.reject(error)
  }
)

