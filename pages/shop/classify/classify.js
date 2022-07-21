// pages/shop/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      '热门推荐', '手机数码', '百货超市', '家用电器', '电脑办公', '玩具乐器', '家居厨具'
    ],
    categoryActive: '热门推荐',
    goods: [
      {
        image: '/assets/image/category-01.jpeg',
        title: '空调'
      },
      {
        image: '/assets/image/category-02.png',
        title: '电脑'
      },
      {
        image: '/assets/image/category-03.png',
        title: '手机'
      },
      {
        image: '/assets/image/category-04.jpeg',
        title: '零食'
      },
      {
        image: '/assets/image/category-05.jpeg',
        title: '口红'
      },
      {
        image: '/assets/image/category-06.jpeg',
        title: '鲜花'
      },
      {
        image: '/assets/image/category-07.jpeg',
        title: '电器'
      },
      {
        image: '/assets/image/category-08.jpeg',
        title: '护理'
      },
      {
        image: '/assets/image/category-01.jpeg',
        title: '空调'
      },
      {
        image: '/assets/image/category-02.png',
        title: '电脑'
      },
      {
        image: '/assets/image/category-03.png',
        title: '手机'
      },
      {
        image: '/assets/image/category-04.jpeg',
        title: '零食'
      },
      {
        image: '/assets/image/category-05.jpeg',
        title: '口红'
      },
      {
        image: '/assets/image/category-06.jpeg',
        title: '鲜花'
      },
      {
        image: '/assets/image/category-07.jpeg',
        title: '电器'
      },
      {
        image: '/assets/image/category-08.jpeg',
        title: '护理'
      },{
        image: '/assets/image/category-01.jpeg',
        title: '空调'
      },
      {
        image: '/assets/image/category-02.png',
        title: '电脑'
      },
      {
        image: '/assets/image/category-03.png',
        title: '手机'
      },
      {
        image: '/assets/image/category-04.jpeg',
        title: '零食'
      },
      {
        image: '/assets/image/category-05.jpeg',
        title: '口红'
      },
      {
        image: '/assets/image/category-06.jpeg',
        title: '鲜花'
      },
      {
        image: '/assets/image/category-07.jpeg',
        title: '电器'
      },
      {
        image: '/assets/image/category-08.jpeg',
        title: '护理'
      },
    ]
  },

  // 点击切换选中 Category
  setCategory(event) {
    this.setData({
      categoryActive: event.target.dataset.category
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