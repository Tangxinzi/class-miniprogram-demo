// pages/zaiye/talent/talent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'skills',
    modal: false,
    skills: [],
    keywords: [],
    professions: []
  },

  setModal(event) {
    if(event.target.dataset.type == 'skills') {
      this.request('skills')
    }

    if(event.target.dataset.type == 'keywords') {
      this.request('keywords')
    }

    if(event.target.dataset.type == 'professions') {
      this.request('professions')
    }

    this.setData({
      modal: true,
      type: event.target.dataset.type
    })
  },

  submit() {
    this.setData({
      modal: false
    })
  },

  // label 选中状态
  setLabelActive(event) {
    // 专业技能
    if(event.target.dataset.type == 'skills') {
      var skills = this.data.skills
      for(var i = 0; i < skills.length; i++) {
        if(event.target.dataset.id == skills[i].id) {
          skills[i].active = !skills[i].active
        }
      }
      this.setData({ skills })
    }

    // 技能关键词
    if(event.target.dataset.type == 'keywords') {
      var keywords = this.data.keywords
      for(var i = 0; i < keywords.length; i++) {
        if(event.target.dataset.id == keywords[i].id) {
          keywords[i].active = !keywords[i].active
        }
      }
      this.setData({ keywords })
    }

    // 职业
    if(event.target.dataset.type == 'professions') {
      var professions = this.data.professions
      for(var i = 0; i < professions.length; i++) {
        if(event.target.dataset.id == professions[i].id) {
          professions[i].active = !professions[i].active
        }
      }
      this.setData({ professions })
    }
  },

  // 请求
  request(type) {
    wx.request({
      url: `https://zaiye.ferer.net/api/data/${ type }/random`,
      header: {
        'content-type': 'application/json'
      },
      success: (response) => {
        if(type == 'skills') {
          this.setData({ skills: response.data })
        }
        if(type == 'keywords') {
          this.setData({ keywords: response.data })
        }
        if(type == 'professions') {
          this.setData({ professions: response.data })
        }
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