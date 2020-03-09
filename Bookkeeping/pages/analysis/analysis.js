var wxCharts = require('../../component/wx-echars/wxcharts.js'); //引入wxChart文件
var windowW = 0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: "2020-02",
    income: 10000.0.toFixed(2),
    expense: 2000.0.toFixed(2)
  },
  pieShow: function(data) {
    var option = {
      animation: true, //是否有动画
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '成交量1',
        data: 15,
      }, {
        name: '成交量2',
        data: 35,
      }, {
        name: '成交量3',
        data: 78,
      }],
      width: 300,
      height: 300,
      dataLabel: true,
    }
    new wxCharts(option)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 屏幕宽度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth
    });
    console.log(this.data.imageWidth);

    //计算屏幕宽度比列
    windowW = this.data.imageWidth / 375;
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
    /* 收入饼状图*/
    new wxCharts({
      animation: true, //是否有动画
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '工资',
        data: 5000,
      }, {
        name: '红包',
        data: 35,
      }],
      width: (375 * windowW),
      height: (250 * windowW),
      dataLabel: true,
    })
    /* 支出饼状图*/
    var option = {
      animation: true, //是否有动画
      canvasId: 'pieCanvas1',
      type: 'pie',
      series: [{
        name: '京东',
        data: 15,
      }, {
        name: '超市',
        data: 35,
      }, {
        name: '淘宝',
        data: 78,
      }],
      width: (375 * windowW),
      height: (250 * windowW),
      dataLabel: true,
    }
    new wxCharts(option)
    /**支出折线图 */
    new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06'],
      animation: true,
      background: '#f5f5f5',
      series: [{
        name: '支出金额',
        data: [100, 200, 125, 2, 15, 22],
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '支出金额 (元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: (375 * windowW),
      height: (250 * windowW),
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
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