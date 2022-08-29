// pages/api/media/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
  },

  play() {
    this.video.play()
  },

  pause() {
    this.video.pause()
  },

  stop() {
    this.video.stop()
  },

  seek() {
    this.video.seek(10)
  },

  // 弹幕
  sendDanmu() {
    this.video.sendDanmu({
      text: 'hello ~',
      color: '#ff0000'
    })
  },

  // 倍率
  playbackRate() {
    this.video.playbackRate(1) // 倍率，支持 0.5/0.8/1.0/1.25/1.5，2.6.3 起支持 2.0 倍速
  },

  // 全屏
  requestFullScreen() {
    this.video.requestFullScreen()
  },

  // 退出全屏
  exitFullScreen() {
    this.video.exitFullScreen()
  },

  // 保存视频
  saveVideoToPhotosAlbum() {
    wx.saveVideoToPhotosAlbum({
      filePath: this.data.src,
      success (response) {
        console.log(response)
      }
    })
  },

  // 视频信息
  getVideoInfo() {
    wx.getVideoInfo({
      src: this.data.src,
      success (response) {
        console.log(response)
      },
      fail (err) {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.video = wx.createVideoContext('video')
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