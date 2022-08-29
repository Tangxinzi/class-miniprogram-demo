// pages/api/ui/navigation-bar/navigation-bar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 导航条加载
  showNavigationBarLoading () {
    wx.showNavigationBarLoading()
  },

  // 隐藏导航条加载
  hideNavigationBarLoading () {
    wx.hideNavigationBarLoading()
  },

  // 设置导航条标题
  setNavigationBarTitle () {
    wx.setNavigationBarTitle({
      title: '导航'
    })
  },

  // 设置导航条颜色
  setNavigationBarColor () {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },

  // 隐藏返回首页
  hideHomeButton () {
    wx.hideHomeButton()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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