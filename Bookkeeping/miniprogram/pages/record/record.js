// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordtypes: [{
        name: 'salary',
        value: '工资'
      },
      {
        name: 'redpackets',
        value: '红包收入'
      },
      {
        name: 'clothes',
        value: '服饰'
      },
      {
        name: 'restaurant',
        value: '餐饮',
        checked: 'true'
      },
      {
        name: 'phonebill',
        value: '话费'
      },
      {
        name: 'taobao',
        value: '淘宝'
      },
      {
        name: 'jingdong',
        value: '京东'
      }
    ],
    recordtype: 0,
    date: "2020-02-02",
    loading: false,
    recordable: false
  },
  bindRecordtypeChange: function(e) {
    this.setData({
      recordtype: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  addRecord: function() {
    let that = this
    this.setData({
      loading: !that.data.loading
    })
    this.setData({
      recordable: !that.data.recordable
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