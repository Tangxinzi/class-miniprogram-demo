// pages/weui/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogButtons: [
      { text: '取消' },
      { text: '确定' }
    ],
    showDialog: false,
    infoShow: false,
    groups: [
      { text: '普通菜单', value: 0 },
      { text: '负向菜单', value: 1, type: 'warn' }
    ],
    showActionSheet: false,
    hsdButtons: [
      { type: 'default', text: '辅助操作', value: 0 },
      { type: 'primary', text: '主操作', value: 1 }
    ],
    showHSD: false
  },

  // 点击 Dialog 触发 tapDialogButton
  tapDialogButton(event) {
    console.log(event)
    this.setData({
      showDialog: false
    })
  },

  // 弹出 Dialog
  openDialog() {
    this.setData({
      showDialog: true
    })
  },

  // 弹出 Toptips
  infoToptips() {
    this.setData({ infoShow: true })
  },

  hide() {
    this.setData({ infoShow: false })
  },

  // 弹出 ActionSheet
  openActionSheet() {
    this.setData({ showActionSheet: true })
  },

  close() {
    console.log('close')
  },

  action(event) {
    console.log(event.detail)
    this.setData({ showActionSheet: false })
  },

  // 弹出 HSD
  openHSD() {
    this.setData({ showHSD: true })
  },

  hsdButtonTap(event) {
    console.log(event)
    this.setData({ showHSD: false })
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