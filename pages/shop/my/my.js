// pages/shop/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: [
      {
        text: '全部',
        image: '/assets/icon/all.png'
      },
      {
        text: '待付款',
        image: '/assets/icon/wallet.png'
      },
      {
        text: '待发货',
        image: '/assets/icon/packaging.png'
      },
      {
        text: '待收货',
        image: '/assets/icon/land-transportation.png'
      },
      {
        text: '售后',
        image: '/assets/icon/new-user-zone.png'
      },
    ],
    services: [
      '浏览记录', '收藏商品', '商城反馈', '我的地址', '联系我们'
    ]
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