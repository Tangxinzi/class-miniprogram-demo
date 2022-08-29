// pages/api/network/network.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    request: ''
  },

  // 请求
  request() {
    wx.request({
      url: 'https://9a5zkidp.dnat.tech/database/labels.json',
      // data: {
      //   x: '1',
      //   y: '2'
      // },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: (response) => {
        console.log(response.data)
        this.setData({
          request: response.data
        })
      },
      fail (err) {
        console.log(err)
      }
    })
  },

  // 下载
  download() {
    wx.downloadFile({
      url: 'https://9a5zkidp.dnat.tech/database/labels.json',
      success: (response) => {
        console.log(response)
        if(response.statusCode == 200) {
          console.log('下载成功')
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },

  // 上传
  upload() {
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 示例地址，非真实接口数据地址
      filePath: 'https://9a5zkidp.dnat.tech/database/labels.json',
      name: 'file',
      formData: {
        'user': 'test',
      },
      header: {
        'context-type': 'multipart/form-data'
      },
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