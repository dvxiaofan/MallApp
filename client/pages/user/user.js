const qcloud = require('../../vendor/wafer2-client-sdk/index.js')
const config = require('../../config.js')


Page({
	data: {
		userInfo: null,
	},

	onTapAddress() {
		wx.showToast({
			icon: 'none',
			title: 'notitle'
		})
	},

	onTapKf() {
		wx.showToast({
			icon: 'none',
			title: 'notitle'
		})
	},

	onTapLogin: function(e) {
		this.doQcloudLogin({
			
			success: ({ userInfo }) => {
				this.setState({
					userInfo
				})				
				console.log(this.userInfo);
			}
		})
	},

	doQcloudLogin({ success, error }) {
		qcloud.login({
			success: result => {
				console.log('doQcloudLogin');
				if (result) {
					let userInfo = result
					success && success({
						userInfo
					})
					console.log('doQcloudLogin success');
					
				} else {
					// 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
					this.getUserInfo({ success, error })	
					console.log('doQcloudLogin fail')				
				}
			},
			fail: () => {
				error && error()
			}
		})
	},

	getUserInfo({ success, error }) {
		console.log('getUserInfo');
		
    qcloud.request({
      url: config.service.requestUrl,
      login: true,
      success: result => {
        let data = result.data
         if (!data.code) {
          let userInfo = data.data
           success && success({
            userInfo
          })
        } else {
          error && error()
        }
      },
      fail: () => {
        error && error()
      }
    })
  },

	onLoad:function(options){
		// 生命周期函数--监听页面加载
	},
	onReady:function(){
		// 生命周期函数--监听页面初次渲染完成
	},
	onShow:function(){
		// 生命周期函数--监听页面显示
	},
	onHide:function(){
		// 生命周期函数--监听页面隐藏
	},
	onUnload:function(){
		// 生命周期函数--监听页面卸载
	},
	onPullDownRefresh: function() {
		// 页面相关事件处理函数--监听用户下拉动作
	},
	onReachBottom: function() {
		// 页面上拉触底事件的处理函数
	},
	onShareAppMessage: function() {
		// 用户点击右上角分享
		return {
			title: 'title', // 分享标题
			desc: 'desc', // 分享描述
			path: 'path' // 分享路径
		}
	}
})