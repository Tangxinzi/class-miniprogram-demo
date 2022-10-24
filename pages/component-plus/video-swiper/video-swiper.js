// pages/component-plus/video-swiper/video-swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [
      { id: 0, url: 'https://zaiye.ferer.net/uploads/works/video/2022/10/9WEVPvotkcNzLkjRQCBXwyZGMNwuhKnG.mp4' },
      { id: 1, url: 'https://zaiye.ferer.net/uploads/works/video/2022/10/9WEVPvotkcNzLkjRQCBXwyZGMNwuhKnG.mp4' },
      { id: 2, url: 'https://zaiye.ferer.net/uploads/works/video/2022/10/9WEVPvotkcNzLkjRQCBXwyZGMNwuhKnG.mp4' },
    ]
  },

  // 切换时触发
  change(event) {
    console.log(event)
  },

  // 播放
  play(event) {
    console.log(event)
  },

  // 暂停
  pause(event) {
    console.log(event)
  },

  // 缓冲
  waiting(event) {
    console.log(event)
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