import request from '../utils/fetch'
// const api_url = 'http://kezai.myutopa.com:1010/ura'

const api = {
  getSignImage (text, style = '901', color = '#000000', decorator = '#ffffff') {
    return request.postForm('/api/art/s/create', {
      text,
      style,
      color,
      decorator
    })
  }
}
module.exports = api