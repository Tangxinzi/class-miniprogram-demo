// pages/shop/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: [
      '全部', '待付款', '待发货', '评价', '售后'
    ],
    statusText: '全部',
    good: {
      images: [
        '/assets/image/AppleEarPods01.jpeg',
        '/assets/image/AppleEarPods02.jpeg',
        '/assets/image/AppleEarPods03.jpeg',
        '/assets/image/AppleEarPods04.jpeg'
      ],
      info: {
        title: 'Apple EarPods 苹果耳机',
        marketPrice: 132,
        salePrice: 149,
        saleNumber: 1000,
        tags: ['上新', '满200减20']
      },
      detail: '<div style="font-size: 0"> <img style="width: 100%;" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/619937/2020/0813/24/5ac31e6c-af8e-4ed5-bfb1-a35c7e352204.jpg"><img style="width: 100%;" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/619937/2020/0813/139/97a400f0-8faf-4d69-8664-34e542e4a537.jpg"> <img style="width: 100%;" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/619937/2020/0814/10/d27fedbe-6980-4657-907e-97053f965c1b.jpg"> <img style="width: 100%;" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/619937/2020/0813/100/d7ebeb48-3f98-4043-8026-20b4c2a35979.jpg"> <img style="width: 100%;" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/619937/2020/0813/105/54d5ec19-5c30-4aa7-9831-172efe400da8.jpg"> <img style="width: 100%;" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/619937/2022/0602/44/cf44b171-e5ed-4e75-b9c9-e941f50a221e.jpg"> </div>'
    }
  },

  switchStatus(event) {
    this.setData({
      statusText: event.target.dataset.text
    })
  },

  // 切换状态
  switchStatus(event) {
    this.setData({
      statusText: event.target.dataset.text
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