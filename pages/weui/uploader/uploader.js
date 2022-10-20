// pages/weui/uploader/uploader.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: []
  },

  // 上传文件
  uploadFile(files) {
    console.log('upload files', files)

    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: 'https://zaiye.ferer.net/api/upload',
        filePath: files.tempFilePaths[0],
        name: 'files',
        success: (response) => {
          console.log(response)
          const urls = []
          urls[0] = files.tempFilePaths[0]

          resolve({
            urls
          })
        }
      })
    })
  },

  // 选择文件
  selectFile(files) {
    console.log('files', files)
  },

  // 删除文件
  uploadDelete(files) {
    console.log('files', files)
  },

  // 上传成功
  uploadSuccess(event) {
    console.log('upload success', event.detail)
  },

  // 上传失败
  uploadFail(event) {
    console.log('upload fail', event.detail)
  },

  // 选择图片
  chooseImage(event) {
    wx.chooseMedia({
      mediaType: ['image'],
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (response) => {
        console.log(response)
        this.setData({
          files: this.data.files.concat(response.tempFilePaths)
        })
      }
    })
  },

  // 预览图片
  previewImage(event) {
    wx.previewImage({
      urls: [({
        current: event.currentTarget.id,
        urls: this.data.files
      })],
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uploadFile: this.uploadFile.bind(this)
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