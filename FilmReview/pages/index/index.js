//index.js
//获取应用实例
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
        title: '安家'
      }, {
        id: '111',
        images: {
          large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2587877550.webp'
        },
        rating: {
          average: 5
        },
        title: '安家'
      }, {
        id: '111',
        images: {
          large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2587877550.webp'
        },
        rating: {
          average: 5
        },
        title: '安家'
      }],
    more: true
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