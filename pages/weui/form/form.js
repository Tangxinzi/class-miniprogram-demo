// pages/weui/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    error: '',
    formData: {},
    rules: [
      {
        name: 'radio',
        rules: { required: false, message: '单选列表不是必选项' }
      },
      {
        name: 'checkbox',
        rules: { required: true, message: '复选列表是必选项' }
      },
      {
        name: 'name',
        rules: { required: true, message: '请输入姓名' }
      },
      {
        name: 'qq',
        rules: { required: true, message: '请输入 QQ' }
      },
      {
        name: 'mobile',
        rules: { validator: function (rule, value, param, modeels) {
          if (!value || value.length !== 11) {
            return '手机号格式有误'
          }
        } }
      },
    ],
    radioItems: [
      { name: '男', value: 1, checked: false },
      { name: '女', value: 0, checked: false }
    ],
    checkboxItems: [
      { name: '🍎', value: 0, checked: false },
      { name: '🍓', value: 1, checked: false },
      { name: '🍍', value: 2, checked: false },
      { name: '🍌', value: 3, checked: false }
    ]
  },

  // 表单提交
  submitForm() {
    this.selectComponent('#form').validate((valid, errors) => {
      console.log('valid', valid, errors)

      if(!valid) {
        const firstError = Object.keys(errors)
        if(firstError.length) {
          this.setData({ error: errors[firstError[0]].message })
        }
      } else {
        wx.showToast({ title: '校验通过' })
      }
    })
  },

  // 单选列表
  radioChange(event) {
    console.log('radio value', event.detail.value)

    var radioItems = this.data.radioItems
    for(var i = 0; i < radioItems.length; i ++) {
      if(radioItems[i].value == event.detail.value) {
        radioItems[i].checked = true
      } else {
        radioItems[i].checked = false
      }
    }

    this.setData({
      radioItems,
      [`formData.radio`]: event.detail.value
    })
  },

  // 复选列表
  checkboxChange(event) {
    console.log('checkbox value', event.detail.value)

    var checkboxItems = this.data.checkboxItems
    for(var i = 0; i < checkboxItems.length; i ++) {
      checkboxItems[i].checked = false

      for(var j = 0; j < event.detail.value.length; j ++) {
        if(checkboxItems[i].value == event.detail.value[j]) {
          checkboxItems[i].checked = true
        }
      }
    }

    this.setData({
      checkboxItems,
      [`formData.check`]: event.detail.value
    })
  },

  // 输入表单
  formInputChange(event) {
    const { field } = event.currentTarget.dataset
    this.setData({ [`formData.${ field }`]: event.detail.value })
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