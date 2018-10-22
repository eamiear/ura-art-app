import request from '../utils/fetch'
const api_url = 'http://kezai.myutopa.com:1010/ura'

const api = {
  getSignImage (text, style = '901', color = '#000000', decorator = '#ffffff') {
    return request.postForm(api_url + '/api/art/s/alpha', {
      text,
      style,
      color,
      decorator
    })
  }
}
module.exports = api