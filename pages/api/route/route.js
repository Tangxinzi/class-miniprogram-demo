// pages/api/route/route.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
  switchTab() {
    wx.switchTab({
      url: '/pages/shop/index/index',
    })
  },

  // 关闭所有页面，打开到应用内的某个页面
  reLaunch() {
    wx.reLaunch({
      url: '/pages/shop/index/index',
    })
  },

  // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
  redirectTo() {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
  navigateTo() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  // 关闭当前页面，返回上一页面或多级页面。
  navigateBack() {
    wx.navigateBack()
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