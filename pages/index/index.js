// index.js
// 获取应用实例
const app = getApp()

// 导入 helper 模块代码
import helper from '../../common/helper'

Page({
  data: {
    
  },
  bindtapView(event) {
    console.log(event)
  },
  onLoad() {
    console.log('页面加载')
  },
  onShow() {
    console.log('页面显示')
  },
  onHide() {
    console.log('页面隐藏')
  },
  onUnload() {
    console.log('页面卸载')
  },
  onReady() {
    console.log('页面首次渲染')
  }
})
