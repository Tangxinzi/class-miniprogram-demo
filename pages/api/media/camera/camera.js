// pages/api/media/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 拍摄照片
  takePhoto() {
    this.camera.takePhoto({
      quality: 'normal',
      success: (response) => {
        console.log(response)
      }
    })
  },

  // 缩放级别
  setZoom() {
    this.camera.setZoom({
      zoom: 1
    })
  },

  // 开始录像
  startRecord() {
    this.camera.startRecord({
      success: (response) => {
        console.log(response)
      }
    })
  },

  // 结束录像
  stopRecord() {
    this.camera.stopRecord({
      success: (response) => {
        console.log(response)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.camera = wx.createCameraContext('camera')
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