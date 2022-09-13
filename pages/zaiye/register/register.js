// pages/zaiye/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    steps: [0, 0, 0, 0, 0, 0],
    birthday: "2022-10-01",
    professions: ['导演/编导', '剪辑师', '摄影师', '摄像剪辑', '互联网运营', '产品经理', 'UI设计', '设计师', '文案策划', 'IT工程师', '前端开发'],
    skills: ['导演/编导', '剪辑师', '摄影师', '摄像剪辑', '互联网运营', '产品经理', 'UI设计', '设计师', '文案策划', 'IT工程师', '前端开发'],
    user: {
      nickname: '',
      sex: 1,
      birthday: '',
      address: '',
      school: '',
      professionText: '',
      skillText: '',
      featureText: '',
      checked: false
    }
  },

  // 下一步
  next() {
    var current = this.data.current + 1
    var steps = [0, 0, 0, 0, 0, 0]
    steps[current] = 1
    this.setData({
      current,
      steps
    })
  },

  // 上一步
  prev() {
    var current = this.data.current - 1
    var steps = [0, 0, 0, 0, 0, 0]
    steps[current] = 1
    this.setData({
      current,
      steps
    })
  },

  // 完成
  done() {
    wx.showToast({
      title: '完成',
      icon: 'success'
    })
  },

  // swiper 改变时触发
  bindSwiperChange(event) {
    const steps = [0, 0, 0, 0, 0, 0]
    steps[event.detail.current] = 1
    this.setData({
      steps,
      current: event.detail.current
    })
  },

  // bindinput 表单
  bindChange(event) {
    // 昵称
    if(event.target.dataset.type == 'nickname') {
      this.setData({
        "user.nickname": event.detail.value
      })
    }

    // 我的生日
    if(event.target.dataset.type == 'birthday') {
      this.setData({
        "user.birthday": event.detail.value
      })
    }

    // 常驻地
    if(event.target.dataset.type == 'address') {
      this.setData({
        "user.address": event.detail.value
      })
    }

    // 教育经历
    if(event.target.dataset.type == 'school') {
      this.setData({
        "user.school": event.detail.value
      })
    }

    // 职业身份
    if(event.target.dataset.type == 'profession') {
      this.setData({
        "user.profession": event.detail.value
      })
    }
  },

  // 性别
  bindSetSex(event) {
    console.log(event)
    this.setData({
      "user.sex": event.target.dataset.sex
    })
  },

  // 身份 Label：职业、专业技能
  bindSetLabels(event) {
    console.log(event.target.dataset)
    // 职业
    if(event.target.dataset.type == 'profession') {
      var professionText = this.data.user.professionText
      professionText += " " + event.target.dataset.text
      this.setData({
        "user.professionText": professionText
      })
    }
    
    // 专业技能
    if(event.target.dataset.type == 'skill') {
      var skillText = this.data.user.skillText
      skillText += " " + event.target.dataset.text
      this.setData({
        "user.skillText": skillText
      })
    }

    // 个人标签
    if(event.target.dataset.type == 'feature') {
      var featureText = this.data.user.featureText
      featureText += " " + event.target.dataset.text
      this.setData({
        "user.featureText": featureText
      })
    }
  },

  // 我是斜杠
  bindRadioChecked() {
    this.setData({
      "user.checked": !this.data.user.checked
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