// pages/api/media/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 保存图片
  saveImageToPhotosAlbum() {
    wx.saveImageToPhotosAlbum({
      filePath: '/assets/image/banner-01.jpeg',
      success (response) {
        console.log(response)
      }
    })
  },

  // 预览图片
  previewMedia() {
    wx.previewImage({
      urls: ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4YrNz?ver=bb44'],
    })
  },

  // 图片信息
  getImageInfo() {
    wx.getImageInfo({
      src: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4YrNz?ver=bb44',
      success (response) {
        console.log(response)
      }
    })
  },

  // 压缩图片
  compressImage() {
    wx.compressImage({
      src: '/assets/image/banner-01.jpeg',
      quality: 80,
      success (response) {
        console.log(response)
      },
      fail (err) {
        console.log(err)
      }
    })
  },

  // 编辑图片
  editImage() {
    wx.editImage({
      src: '/assets/image/banner-01.jpeg',
      success (response) {
        console.log(response)
      }
    })
  },

  // 选择文件
  chooseMessageFile() {
    wx.chooseMessageFile({
      count: 9,
      type: 'image',
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