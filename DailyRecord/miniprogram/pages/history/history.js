//配置数据库
const DB = wx.cloud.database({
  env: 'test-88y73'
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    days: 10,
    startdate: "2020-02-02",
    enddate: "2021-02-02",
    datas: []
  },
  bindStartDateChange: function(e) {
    this.setData({
      startdate: e.detail.value
    })
    let that = this
    that.loadDataFromDB(that)
  },
  bindEndDateChange: function(e) {
    this.setData({
      enddate: e.detail.value
    })
    let that = this
    that.loadDataFromDB(that)
  },
  removeRecord: function(e) {
    let that = this
    DB.collection('daily_record').doc(e.currentTarget.dataset.recordid).remove({
      success: function(res) {
        DB.collection('daily_record').get({
          success: function(res) {
            that.setData({
              datas: res.data
            })
          }
        })
      }
    })
    that.loadDataFromDB(that)
  },
  queryRecordDesc: function (e) {
    wx.showModal({
      title: '备注',
      content: e.currentTarget.dataset.desc + '',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  loadDataFromDB: function(that) {
    const _ = DB.command
    DB.collection('daily_record').where({
      recorddate: _.and(_.gt(
        Date.parse(this.data.startdate)), _.lt(Date.parse(this.data.enddate)))
    }).get({
      success: function (res) {
        that.setData({
          datas: res.data
        })
      }
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
    let that = this
    that.loadDataFromDB(that)
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