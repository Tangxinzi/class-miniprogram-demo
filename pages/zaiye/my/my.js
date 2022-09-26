// pages/zaiye/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'job',
    user: {},
    dataset: []
  },

  switchStatus(event) {
    this.setData({ type: event.target.dataset.type })
    this.request(event.target.dataset.type)
  },

  // 请求
  request(type) {
    wx.request({
      url: 'https://zaiye.ferer.net/api/user/visit/1371748820?type=' + (type || 'job'),
      success: (response) => {
        console.log(response.data)
        this.setData({
          dataset: response.data.dataset,
          user: response.data.user
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.request()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})