// pages/public/public.js
import { IndexModel } from './../../models/public'
let index = new IndexModel()

Page({
  data: {
    public: []
  },
  clickdetail: function (item) {
    console.log(item.currentTarget.dataset.item)
    let id = item.currentTarget.dataset.item
    wx.navigateTo({
      url: "../merchant/merchant?id=" + id
    })
  },
  onLoad: function (options) {
    index.dataList(1, 10).then(res => {
      console.log(res)
      this.setData({
        public: res.data
      })
    })
  }
})