// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [{
      time: "2020年2月29日",
      listdata: [{
        "label": "餐饮",
        "image": "/images/type/chifan.jpg",
        "number": 60
      }, {
        "label": "服饰",
        "image": "/images/type/yifu.jpg",
        "number": 70
      }]
    }, {
        time: "2020年2月29日",
        listdata: [{
          "label": "餐饮",
          "image": "/images/type/chifan.jpg",
          "number": 60
        }, {
          "label": "服饰",
            "image": "/images/type/yifu.jpg",
          "number": 70
        }]
      }],
    date: "2020-02-02"
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

  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
})