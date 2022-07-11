// pages/component/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 普通选择器
    // selector: ['中国', '美国', '日本'],
    // picker: 0

    // 时间选择器
    // picker: '09:41'

    // 日期选择器
    // picker: '2022-07-01'

    // 省市区选择器
    picker: ['北京市', '北京市', '海淀区']
  },

  // 监听 Change 事件
  bindChangePicker(event) {
    console.log(event.detail.value)
    this.setData({
      picker: event.detail.value
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