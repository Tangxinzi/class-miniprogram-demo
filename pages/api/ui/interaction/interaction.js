// pages/api/ui/interaction/interaction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 消息提示框
  showToast() {
    wx.showToast({
      title: '加载中...',
      icon: "loading",
      duration: 2000
    })
  },

  // 模态对话框
  showModal() {
    wx.showModal({
      title: '提示',
      content: '模态弹窗',
      success(response) {
        if (response.confirm) {
          console.log('用户点击确认')
        } else if (response.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  // 加载提示框
  showLoading() {
    wx.showLoading({
      title: '加载中...',
    })

    setTimeout(() => {
      wx.hideLoading()
    }, 2000)
  },

  // 操作菜单
  showActionSheet() {
    const itemValue = ['A', 'B', 'C']
    wx.showActionSheet({
      itemList: itemValue,
      success (response) {
        console.log(itemValue[response.tapIndex])
        console.log(response.tapIndex)
      },
      fail (err) {
        console.log(err.errMsg)
      }
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