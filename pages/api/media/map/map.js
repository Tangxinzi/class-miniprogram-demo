// pages/api/meida/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [
      {
        id: 1,
        longitude: 116.397128,
        latitude: 39.916527
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.map = wx.createMapContext('map')
  },

  // 经纬度
  getCenterLocation() {
    this.map.getCenterLocation({
      success: (response) => {
        console.log(response)
      }
    })
  },

  // 缩放级别
  getScale() {
    this.map.getScale({
      success: (response) => {
        console.log(response)
      }
    })
  },

  // 移动定位点
  moveToLocation() {
    this.map.moveToLocation()
  },

  // 视野范围
  getRegion() {
    this.map.getRegion({
      success: (response) => {
        console.log(response)
      }
    })
  },

  // 旋转角
  getRotate() {
    this.map.getRotate({
      success: (response) => {
        console.log(response)
      }
    })
  },

  // 倾斜角
  getSkew() {
    this.map.getSkew({
      success: (response) => {
        console.log(response)
      }
    })
  },

  // 移动标注
  translateMarker() {
    this.map.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211
      },
      animationEnd() {
        console.log('animation end')
      }
    })
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