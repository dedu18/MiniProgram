// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      nickName: '未登陆',
      avatarUrl: '../../images/head.jpg'
    },
    login: false,
    meuns: ['我的收藏', '我的历史', '联系客服', '关于我们']
  },
  wechatlogin: function(data) {
    // 判断用户点击是否允许
    if (data.detail.rawData) {
      // 用户点击的是允许
      this.getUserInfo()
    }
  },
  getUserInfo: function() {
    let that = this
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          that.setData({
            login: true
          })
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        } else {}
      },
      fail(error) {}
    })
  },
  loginout: function(data) {
    this.setData({
      userInfo: {
        nickName: '未登陆',
        avatarUrl: '../../images/head.jpg'
      },
      login: false
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getUserInfo()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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