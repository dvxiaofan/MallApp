
const qcloud = require('../../vendor/wafer2-client-sdk/index');
const config = require('../../config.js');

Page({
	data:{
		productList: [],
	},
	onLoad:function(options){
		// 生命周期函数--监听页面加载
		this.getProductList();
	},
	// 获取商品列表数据
	getProductList() {
		wx.showLoading({
			title: '商品数据加载中。。。'
		})
		qcloud.request({
			url: config.service.productListUrl,
			success: result => {
				wx.hideLoading();
				let data = result.data;
				if (!data.code) {
					this.setData({
						productList: data.data
					})
				} else {
					wx.showToast({
						title: '商品数据加载失败！'
					})
				}
			},
			fail: result => {
				wx.hideLoading();
				wx.showToast({
					title: '商品数据加载失败！'
				})
			}
		})
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