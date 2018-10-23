/* eslint-disable */
import axios from 'axios'
import QS from 'qs'

const service = axios.create({
  baseURL: 'http://kezai.myutopa.com:1010/ura',
  withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json; charset=utf-8'
  // },
  timeout: 16000
})

service.interceptors.response.use(({data}) => {
  return data
}, error => {
  return Promise.reject(error)
})
const request = {
  get (url, params) {
    return service({
      method: 'get',
      url,
      params
    })
  },
  _post (url, params = {}, contentType = 'json') {
    let config = {
      method: 'post',
      url: url,
      data: params
    }
    if (contentType === 'json') {
      config.headers = {
        "Content-Type": "application/json"
      }
      config.transformRequest = [function (data) {
        return JSON.stringify(data)
      }]
    } else {
      config.transformRequest = [function (data) {
        return QS.stringify(data)
      }]
    }
    return service(config)
  },
  postJson (url, params) {
    return this._post(url, params, 'json')
  },
  postForm (url, params) {
    return this._post(url, params, 'form')
  }
}

// fetch
// const request = {
//   get (url) {
//     return fetch(url)
//   },
//   _post (url, params = {}, method = 'POST', contentType = 'json', options = {}) {
//     let headers = {}
//     if (contentType === 'json') {
//       headers = {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       }
//       params = JSON.stringify(params)
//     } else {
//       headers = {
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//       params = QS.stringify(params)
//     }
//     return fetch(url, {...options, ...{method, headers, body: params}}).then(response => response.json())
//   },
//   postJson (url, params, optoins) {
//     return this._post(url, params, 'POST', 'json', optoins)
//   },
//   postForm (url, params, optoins) {
//     return this._post(url, params, 'POST', 'form', optoins)
//   }
// }
export default request
