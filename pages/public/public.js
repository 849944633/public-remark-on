// pages/public/public.js
import { IndexModel } from './../../models/public'
let index = new IndexModel()
const app = getApp()
Page({
  data: {
    public: [],
		trainCity: ''
  },
  clickdetail: function (item) {
    console.log(item.currentTarget.dataset.item)
    let id = item.currentTarget.dataset.item
    wx.navigateTo({
      url: "../merchant/merchant?id=" + id
    })
  },
	clicklocation:function(event){
		wx.navigateTo({
			url:'../location/location'
		})
	},
  onLoad: function (options) {
    index.dataList(1, 10).then(res => {
      console.log(res)
      this.setData({
        public: res.data
      })
    })
  },
	onPullDownRefresh: function () {
	  wx.stopPullDownRefresh();
	},
	bindCityView: function () {
	  wx.navigateTo({
	    url: '../citys/citys',
	  })
	},
	onShow: function () {
	  this.setData({ trainCity: app.globalData.trainCity })
	}
})