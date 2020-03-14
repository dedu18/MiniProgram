//配置数据库
const DB = wx.cloud.database({
  env: 'test-88y73'
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    startdate: "2005-02-02",
    enddate: "2021-02-02",
    datas: []
  },
  bindStartDateChange: function(e) {
    this.setData({
      startdate: e.detail.value
    })
  },
  bindEndDateChange: function(e) {
    this.setData({
      enddate: e.detail.value
    })
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
    const _ = DB.command
    DB.collection('daily_record').where({
      recorddate: _.and(_.gt(
        Date.parse(this.data.startdate)), _.lt(Date.parse(this.data.enddate)))
    }).get({
      success: function(res) {
        that.setData({
          datas: res.data
        })
      }
    })
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