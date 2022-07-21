// pages/shop/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [
      {
        title: 'Apple EarPods 苹果耳机',
        image: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/619937/2020/0806/131/a791e1eb-8b9f-488e-824f-b63f9a31f79b_555x555_90.jpg',
        marketPrice: 132,
        salePrice: 149,
        saleNumber: 1000,
        tags: ['上新', '满200减20'],
        number: 1,
        check: false
      },
      {
        title: 'Apple EarPods 苹果耳机',
        image: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/619937/2020/0806/131/a791e1eb-8b9f-488e-824f-b63f9a31f79b_555x555_90.jpg',
        marketPrice: 132,
        salePrice: 149,
        saleNumber: 1000,
        tags: ['上新', '满200减20'],
        number: 1,
        check: false
      },
      {
        title: 'Apple EarPods 苹果耳机',
        image: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/619937/2020/0806/131/a791e1eb-8b9f-488e-824f-b63f9a31f79b_555x555_90.jpg',
        marketPrice: 132,
        salePrice: 149,
        saleNumber: 1000,
        tags: ['上新', '满200减20'],
        number: 1,
        check: false
      },
      {
        title: 'Apple EarPods 苹果耳机',
        image: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/619937/2020/0806/131/a791e1eb-8b9f-488e-824f-b63f9a31f79b_555x555_90.jpg',
        marketPrice: 132,
        salePrice: 149,
        saleNumber: 1000,
        tags: ['上新', '满200减20'],
        number: 1,
        check: false
      },
      {
        title: 'Apple EarPods 苹果耳机',
        image: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/619937/2020/0806/131/a791e1eb-8b9f-488e-824f-b63f9a31f79b_555x555_90.jpg',
        marketPrice: 132,
        salePrice: 149,
        saleNumber: 1000,
        tags: ['上新', '满200减20'],
        number: 1,
        check: false
      },
    ],
    all: false,
    checkNum: 0,
    checkPrice: 0
  },

  // 设置商品选中状态
  setGoodCheck(event) {
    var goods = this.data.goods
    goods[event.target.dataset.index].check = !goods[event.target.dataset.index].check
    this.setData({ goods })
    this.goods()
  },

  // 设置商品购买数量
  setGoodNumber(event) {
    var goods = this.data.goods
    if (event.target.dataset.text == '-' && goods[event.target.dataset.index].number > 1) {
      goods[event.target.dataset.index].number -= 1
    } else if (event.target.dataset.text == '+') {
      goods[event.target.dataset.index].number += 1
    }
    this.setData({ goods })
    this.goods()
  },

  // 设置商品全选状态
  setAllGoodCheck() {
    var goods = this.data.goods, all = !this.data.all
    for(var i = 0; i < goods.length; i++) {
      goods[i].check = all
    }
    this.setData({ goods, all })
    this.goods()
  },

  // 监听商品数据变化
  goods() {
    var goods = this.data.goods
    var allGoods = 0 // 对比商品数量是否全选
    var checkNum = 0 // 已选商品购买件数量
    var checkPrice = 0 // 已选商品价格

    for(var i = 0; i < goods.length; i++) {
      if(goods[i].check) {
        allGoods ++
        checkNum += goods[i].number
        checkPrice += goods[i].number * goods[i].salePrice
      }
    }

    this.setData({
      all: allGoods == goods.length,
      checkNum,
      checkPrice
    })

    // console.log(allGoods, checkNum, checkPrice)
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