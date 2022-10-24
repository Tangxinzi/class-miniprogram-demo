const wxml = `
  <view class="container">
    <view class="item red"></view>
    <view class="item green">
      <text class="text">hello world</text>
    </view>
    <view class="item blue">
      <image class="image" src="https://zaiye.ferer.net/uploads/profile/avatar/2022/09/27/Edq1Yu2R0LMdYGbH0I9iaFdACfwiBEvB.JPG" />
    </view>
  </view>
`

const style = {
  container: {
    width: 300,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItem: 'center',
    backgroundColor: 'gray'
  },
  item: {
    width: 80,
    height: 60
  },
  red: {
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: 'blue'
  },
  text: {
    fontSize: 14,
    width: 80,
    height: 60,
    color: '#FFF',
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  image: {
    width: 80,
    height: 60
  }
}

module.exports = { wxml, style }