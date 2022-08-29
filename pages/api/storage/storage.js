// pages/api/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 设置本地缓存
  setStorage() {
    wx.setStorage({
      key: 'text',
      data: 'hello world ~',
      encrypt: true
    })

    // wx.setStorageSync({
    //   key: 'text',
    //   data: 'hello world ~'
    // })

    wx.setStorage({
      key: 'people',
      data: JSON.stringify({
        name: 'Lina',
        age: 18
      })
    })
  },

  // 获取本地缓存
  getStorage() {
    wx.getStorage({
      key: 'people',
      encrypt: false,
      success(response) {
        console.log(JSON.parse(response.data))
      }
    })
  },

  // 移除本地缓存
  removeStorage() {
    wx.removeStorage('text')
  },

  // 获取缓存信息
  getStorageInfo() {
    wx.getStorageInfo({
      success (response) {
        console.log(response)
      }
    })
  },

  // 清空本地缓存
  clearStorage() {
    wx.clearStorage()
  },

  // 批量设置缓存
  batchSetStorage() {
    wx.batchSetStorage({
      kvList: {
        key: 'text',
        value: 'hello world ~'
      }
    })
  },

  // 批量获取缓存
  batchGetStorage() {
    wx.batchGetStorage({
      keyList: ['text'],
      success (response) {
        console.log(response)
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