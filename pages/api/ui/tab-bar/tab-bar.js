// pages/api/ui/tab-bar/tab-bar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 隐藏 tabBar
  hideTabBar() {
    wx.hideTabBar({
      animation: true,
    })
  },

  // 显示 tabBar
  showTabBar() {
    wx.showTabBar({
      animation: true,
    })
  },

  // 右上角红点
  showTabBarRedDot() {
    wx.showTabBarRedDot({
      index: 0,
    })
  },

  // 隐藏红点
  hideTabBarRedDot() {
    wx.hideTabBarRedDot({
      index: 0,
    })
  },

  // 右上角角标
  setTabBarBadge() {
    wx.setTabBarBadge({
      index: 1,
      text: 'hot',
    })
  },

  // 移除角标
  removeTabBarBadge() {
    wx.removeTabBarBadge({
      index: 1
    })
  },

  // 整体设置 tabBar
  setTabBarStyle() {
    wx.setTabBarStyle({
      backgroundColor: '#cccccc',
      color: '#ffffff',
      selectedColor: '#333333',
      borderStyle: 'black'
    })
  },

  // 单个设置 tabBar
  setTabBarItem() {
    wx.setTabBarItem({
      index: 2,
      text: 'tab-bar',
      // iconPath: '',
      // selectedIconPath: ''
    })
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