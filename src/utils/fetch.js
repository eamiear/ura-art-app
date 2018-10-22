/* eslint-disable */
import QS from 'qs'

const request = {
  get (url) {
    return fetch(url)
  },
  _post (url, params = {}, method = 'POST', contentType = 'json', options = {}) {
    let headers = {}
    if (contentType === 'json') {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
      params = JSON.stringify(params)
    } else {
      headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      }
      params = QS.stringify(params)
    }
    return fetch(url, {...options, ...{method, headers, body: params}}).then(response => response.json())
  },
  postJson (url, params, optoins) {
    return this._post(url, params, 'POST', 'json', optoins)
  },
  postForm (url, params, optoins) {
    return this._post(url, params, 'POST', 'form', optoins)
  }
}
export default request
