function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: 'http://vipmp4i.vodfile.m1905.com/202003211749/b976026f652c51310c7807299adeba84/movie/2017/10/19/m20171019FDUG9D5ZVFQ8FKEA/CD68AF6BB901C5BD1E9FA7EE0.mp4',
    inputValue: ''
  },
  videoPlay: function() {
    this.videoContext.play()
  },

  videoPause: function() {
    this.videoContext.pause()
  },

  videoPlayBackRate: function() {
    this.videoContext.playbackRate(1.5)
  },
  videoPlayRestRate: function () {
    this.videoContext.playbackRate(1)
  },

  videorequestFullScreen: function() {
    this.videoContext.requestFullScreen()
  },

  videoSeek0: function() {
    this.videoContext.seek(0)
  },

  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },

  bindSendDanmu: function() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.videoContext = wx.createVideoContext('video')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})