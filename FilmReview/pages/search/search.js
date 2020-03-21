// pages/search/search.js 搜索/热门搜索
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchload: false,
    searchpage: true,
    hotKeyword: ['我仍然相信', '喋血战士', '隐形人', '狩猎', '刺猬索尼克', '回归之路', '野性的呼唤', '爱玛'],
    hotTag: ['豆瓣高分', '冷门佳片', '华语', '欧美', '韩国', '日本', '动作'],
    searchresult:[]
  },
  search: function(e) {
    this.setData({
      searchload: true
    })
    this.setData({
      searchpage: false
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