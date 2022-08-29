// pages/api/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 窗口信息
  windowInfo() {
    const windowInfo = wx.getWindowInfo()
    console.log(windowInfo)
  },

  // 设备信息
  deviceInfo() {
    const deviceInfo = wx.getDeviceInfo()
    console.log(deviceInfo)
  },

  // 系统信息
  systemInfo() {
    wx.getSystemInfo({
      success: (response) => {
        console.log(response)
      }
    })
  },

  // 微信基础信息
  appBaseInfo() {
    const appBaseInfo = wx.getAppBaseInfo()
    console.log(appBaseInfo)
  },

  // 设备设置
  systemSetting() {
    const systemSetting = wx.getSystemSetting()
    console.log(systemSetting)
  },

  // 微信授权
  appAuthorizeSetting() {
    const appAuthorizeSetting = wx.getAppAuthorizeSetting()
    console.log(appAuthorizeSetting)
  },

  // 打开授权页
  openAppAuthorizeSetting() {
    wx.openAppAuthorizeSetting({
      success: (response) => {
        console.log(response)
      }
    })
  },

  // 打开安卓蓝牙设置
  openSystemBlueToothSetting() {
    wx.openSystemBlueToothSetting({
      success: (response) => {
        console.log(response)
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(wx.env)
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