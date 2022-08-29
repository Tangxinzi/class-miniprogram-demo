// pages/api/media/background-audio/background-audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTime: 0,
    duration: 0,
    percent: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  play() {
    // 创建 BackgroundAudioManager 背景音频实例
    this.backgroundAudioManager = wx.getBackgroundAudioManager()

    this.backgroundAudioManager.title = 'New Boy'
    this.backgroundAudioManager.epname = '-'
    this.backgroundAudioManager.singer = '房东的猫 / 陈婧霏'
    this.backgroundAudioManager.coverImgUrl = 'https://p1.music.126.net/KkrcSwKbRsd8GuaOHILlxA==/109951166077317301.jpg?param=130y130'
    this.backgroundAudioManager.src = 'https://m801.music.126.net/20220818104734/be5fe75e5502a036a59cc57e26fabeeb/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096448485/0967/aa06/f782/ecb9753515af65eb7bc424bea870f1f9.m4a'

    const backgroundAudioManager = this.backgroundAudioManager
    backgroundAudioManager.play()

    // 监听进度
    setTimeout(() => {
      backgroundAudioManager.onTimeUpdate(() => {
        // console.log(backgroundAudioManager)
        this.setData({
          currentTime: backgroundAudioManager.currentTime.toFixed(0),
          duration: backgroundAudioManager.duration.toFixed(0),
          percent: (backgroundAudioManager.currentTime / backgroundAudioManager.duration * 100).toFixed(2) + '%'
        })
      })
    }, 500)
  },

  pause() {
    this.backgroundAudioManager.pause()
  },

  stop() {
    this.backgroundAudioManager.stop()
  },

  seek() {
    this.backgroundAudioManager.seek(10)
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