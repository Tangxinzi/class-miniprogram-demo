// pages/zaiye/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify: [
      {
        title: '视频制作｜影视',
        description: '广告/宣传/绘画/后期',
        src: '/assets/zaiye/logo.png'
      },
      {
        title: '视频制作｜影视',
        description: '广告/宣传/绘画/后期',
        src: '/assets/zaiye/logo.png'
      },
      {
        title: '视频制作｜影视',
        description: '广告/宣传/绘画/后期',
        src: '/assets/zaiye/logo.png'
      },
      {
        title: '视频制作｜影视',
        description: '广告/宣传/绘画/后期',
        src: '/assets/zaiye/logo.png'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '线上交易 远程协作'
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