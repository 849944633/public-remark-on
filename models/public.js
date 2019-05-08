import { HTTP } from '../utils/util.js'
const _http = new HTTP()

class IndexModel {
  dataList(page, rows) {
    return _http.request({
      method: 'POST',
      url: 'article/shoplist',
      data: {
        page,
        rows
      },
      success: res => {
        console.log(res)
      }
    })
  }
  dataDetail(id) {
    return _http.request({
      method: 'GET',
      url: 'article/detail',
      data: {
        id
      },
      success: res => {
        console.log(res)
      }
    })
  }
}

export { IndexModel }