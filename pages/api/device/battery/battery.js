// pages/api/device/battery/battery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: ''
  },

  batteryInfo() {
    wx.getBatteryInfo({
      success: (response) => {
        console.log(response)
        this.setData({
          info: ('当前电量：' + response.level) + '，是否正在充电：' + (response.isCharging ? '是' : '否')
        })
      }
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