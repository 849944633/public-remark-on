const app = getApp()
 
Page({
  data: {
    trainCity: ''
  },
  onLoad: function (options) {
 
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
