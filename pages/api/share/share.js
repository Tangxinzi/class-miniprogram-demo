// pages/api/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  // 分享图片弹窗
  showShareImageMenu() {
    wx.downloadFile({
      url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/demo.ef5c5bef.jpg',
      success: (response) => {
        wx.showShareImageMenu({
          path: response.tempFilePath
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 分享到好友、朋友圈
    wx.showShareMenu({
      menus: ['shareAppMessage', 'shareTimeline'],
      withShareTicket: true
    })

    // wx.hideShareMenu({
    //   menus: ['shareAppMessage', 'shareTimeLine']
    // })

    // 短链接
    // #小程序://wxid_gkx8nopawh7c21的接口测试号/TCOURqNAVv0dbGn
    // wx.onCopyUrl((result) => {
    //   query: 'a=1'
    // })
    // wx.offCopyUrl()
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