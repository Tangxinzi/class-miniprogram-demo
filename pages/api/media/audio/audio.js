// pages/api/media/audio/audio.js
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
    this.audio = wx.createInnerAudioContext()
    this.audio.src = '/assets/audio.mp3'
  },

  play() {
    const audio = this.audio
    audio.play()

    // 监听进度
    setTimeout(() => {
      audio.onTimeUpdate(() => {
        // console.log(audio)
        this.setData({
          currentTime: audio.currentTime.toFixed(0),
          duration: audio.duration.toFixed(0),
          percent: (audio.currentTime / audio.duration * 100).toFixed(2) + '%'
        })
      })
    }, 500)
  },

  pause() {
    this.audio.pause()
  },

  stop() {
    this.audio.stop()
  },

  seek() {
    this.audio.seek(10)
  },

  destroy() {
    this.audio.destroy()
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