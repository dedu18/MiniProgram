//index.js  推荐页面： 根据用户搜索等推荐/经典热门推荐/最受欢迎的影评
const app = getApp()

Page({
  data: {
    showLoading: false,
    windowHeight: 1000,
    films: [{
      id: '111',
      images: {
        large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2587877550.webp'
      },
      rating: {
        average: 5
      },
      title:'安家',
      genres:["剧情","爱情"]
    }, {
        id: '111',
        images: {
          large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2587877550.webp'
        },
        rating: {
          average: 5
        },
        title: '安家',
        genres: ["剧情", "爱情"]
      }, {
        id: '111',
        images: {
          large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2587877550.webp'
        },
        rating: {
          average: 5
        },
        title: '安家',
        genres: ["剧情", "爱情"]
      }],
    more: false
  },
  scroll: function (e) {
    console.log(e)
  },
  //跳转详情页
  toFilmDetail: function (e) {
    var data = e.currentTarget.dataset;
    console.log(data)
    wx.navigateTo({
      url: "../detail/detail?id=" + data.id
    })
  },
  scrolltolower: function () {
    var that = this
    console.log("到低了")
    // douban.fetchFilms.call(that, url, config.city, that.data.start, config.count)
  },
  searchFilmWithTag: function (e) {
    var data = e.currentTarget.dataset
    console.log(data)
    // var keyword = data.tag
    // wx.navigateTo({
    //   url: '../searchResult/searchResult?url=' + encodeURIComponent(searchByTagUrl) + '&keyword=' + keyword
    // })
  },
  onLoad: function() {},
  onShow: function() {
    let that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowHeight: res.windowHeight * 2
        })
      }
    })
  },
})