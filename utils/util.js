import { config } from '../config.js'

class HTTP {
  request(params) {
    console.log(params)
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.api_base_url + params.url,
        method: params.method || 'GET',
        data: params.data || null,
        header: {
          'content-type': 'application/json',
          'appkey': config.appkey
        },
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  }
}

export { HTTP }
