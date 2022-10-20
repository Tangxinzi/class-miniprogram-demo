// pages/weui/cells/cells.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    slideButtons: [
      {
        text: '普通',
        type: 'default',
        src: '', // icon 路径
        extClass: '', // 拓展样式
        data: 'default'
      },
      {
        text: '警告',
        type: 'warn'
      }
    ]
  },

  slideButtonTap(event) {
    console.log('slide button tap', e.detail)
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