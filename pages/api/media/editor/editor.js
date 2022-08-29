// pages/api/media/editor/editor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 分割线
  insertDivider() {
    this.editor.context((response) => {
      response.context.insertDivider()
    })
    .exec()
  },

  // 撤销
  undo() {
    this.editor.context((response) => {
      response.context.undo()
    })
    .exec()
  },

  // 恢复
  redo() {
    this.editor.context((response) => {
      response.context.redo()
    })
    .exec()
  },

  // 获取内容
  getContents() {
    this.editor.context((response) => {
      response.context.getContents({
        success (response) {
          console.log(response)
        }
      })
    })
    .exec()
  },

  // 样式
  format(event) {
    this.editor.context((response) => {
      response.context.format(event.target.dataset.name, event.target.dataset.value)
    })
    .exec()
  },

  // 清空
  clear() {
    this.editor.context((response) => {
      response.context.clear()
    })
    .exec()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.editor = wx.createSelectorQuery().select('#editor')

    // 默认 Editor 内容
    // this.editor.context((response) => {
    //   response.context.setContents({
    //     html: '<i>内容...</i>'
    //   })
    // })
    // .exec()
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