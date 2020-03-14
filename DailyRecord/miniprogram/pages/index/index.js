//配置数据库
const DB = wx.cloud.database({
  env: 'test-88y73'
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordtypes: [{
        name: 'study',
        value: '学习'
      },
      {
        name: 'entertainment',
        value: '娱乐'
      },
      {
        name: 'work',
        value: '上班'
      }
    ],
    recordtypeindex: 0,
    recorddate: "2020-02-02",
    datetypes: [{
        name: 'morning',
        value: '上午'
      },
      {
        name: 'afternoon',
        value: '下午'
      },
      {
        name: 'evening',
        value: '晚上'
      }
    ],
    datetypeindex: 0,
    loading: false,
    recordable: false
  },
  bindRecordtypeChange: function(e) {
    this.setData({
      recordtypeindex: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      recorddate: e.detail.value
    })
  },
  bindRecordDateDetainChange: function(e) {
    this.setData({
      datetypeindex: e.detail.value
    })
  },
  addRecord: function() {
    let that = this
    that.resetRecordBtn(that)
    var recordtype = this.data.recordtypes[this.data.datetypeindex]
    var datetype = this.data.datetypes[this.data.datetypeindex]
    var recorddate = Date.parse(this.data.recorddate)
    var recordtime = Date.parse(new Date())
    //新增打卡记录
    DB.collection('daily_record').add({
      data: {
        recordtype: recordtype,
        recorddate: recorddate,
        datetype: datetype,
        recordtime: recordtime
      }
    }).then(res => {
      console.log("新增成功")
      console.log(res)
      that.resetRecordBtn(that)
    }).catch(e => {
      that.resetRecordBtn(that)
      console.error
    })
  },
  resetRecordBtn: function(that) {
    that.setData({
      loading: !that.data.loading
    })
    that.setData({
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