// pages/component/navigator/navigator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigator: [
      {
        url: '/pages/component/navigator/navigator?id=1',
        openType: 'navigate',
        hoverClass: 'hover',
        text: '跳转 navigate'
      },
      {
        url: '/pages/component/view/view',
        openType: 'redirect',
        hoverClass: 'hover',
        text: '跳转 redirect'
      },
      {
        url: '/pages/index/index',
        openType: 'switchTab',
        hoverClass: 'hover',
        text: '跳转 switchTab'
      },
      {
        url: '/pages/index/index',
        openType: 'reLaunch',
        hoverClass: 'hover',
        text: '跳转 reLaunch'
      },
      {
        url: '/pages/index/index',
        openType: 'navigateBack',
        hoverClass: 'hover',
        text: '跳转 navigateBack'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
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