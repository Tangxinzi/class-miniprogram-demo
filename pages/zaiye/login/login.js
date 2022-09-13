// pages/zaiye/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: [
      {
        title: '',
        class: 'logo',
        image: '/assets/zaiye/logo.png',
        mode: 'aspectFit'
      },
      {
        title: '数字游民\n的接单平台',
        class: 'theme',
        image: '/assets/zaiye/images/theme-login-01.png',
        mode: 'aspectFill'
      },
      {
        title: '艺术青年\n的个展橱窗',
        class: 'theme',
        image: '/assets/zaiye/images/theme-login-02.png',
        mode: 'aspectFill'
      },
      {
        title: '斜杠青年\n的兴趣社区',
        class: 'theme',
        image: '/assets/zaiye/images/theme-login-03.png',
        mode: 'aspectFill'
      },
      {
        title: '自由职业者\n的理想联盟圈',
        class: 'theme',
        image: '/assets/zaiye/images/theme-login-04.png',
        mode: 'aspectFill'
      },
    ],
    type: 1,
    checked: false, // 未选中
    login: {
      number: '',
      code: ''
    }
  },

  input(event) {
    console.log(event)
    if(event.currentTarget.dataset.type == 'number') {
      this.setData({
        ['login.number']: event.detail.value
      })
    }

    if(event.currentTarget.dataset.type == 'code') {
      this.setData({
        ['login.code']: event.detail.value
      })
    }
  },

  // form 表单登录
  bindUserLogin() {
    if(this.data.login.number.length == 11 && this.data.login.code.length == 6 && this.data.checked) {
      wx.showToast({
        title: '登录成功...',
        icon: 'success'
      })
    } else {
      wx.showToast({
        title: '登录失败，请检查您输入的表单是否正确...',
        icon: 'error'
      })
    }
  },

  // 设置选中状态
  bindCheck() {
    this.setData({
      checked: !this.data.checked
    })
  },

  getUserInfo() {
    wx.getUserInfo({
      lang: 'zh_CN',
      success: function (response) {
        console.log(response)
      }
    })
  },

  bindUserPhone() {
    this.setData({
      type: 1, // 登录
    })
  },

  bindUserWechat() {
    this.setData({
      type: 0, // 登录
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