// pages/weui/navigation/navigation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { text: '首页', iconPath: '/assets/icon/store.png', selectedIconPath: '/assets/icon/store-fill.png', badge: 'new' },
      { text: '购物车', iconPath: '/assets/icon/cart-full.png', selectedIconPath: '/assets/icon/cart-full-fill.png' },
    ]
  },

  // tabbar change 切换
  change(event) {
    console.log(event)
  },

  // search 搜索
  search(event) {
    console.log(event)
    return new Promise((resolve, reject) => {
      resolve([
        { text: '搜索结果1', value: 1 },
        { text: '搜索结果2', value: 2 },
      ])
    })
  },

  // 选择搜索结果触发操作
  selectResult(event) {
    console.log(event)
  },

  focus(event) {
    console.log('focus', event)
  },

  blur(event) {
    console.log('blur', event)
  },

  clear(event) {
    console.log('clear', event)
  },

  input(event) {
    console.log('input', event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      search: this.search.bind(this)
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