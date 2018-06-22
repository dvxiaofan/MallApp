
const qcloud = require('../../vendor/wafer2-client-sdk/index');
const config = require('../../config');
const _ = require('../../utils/util')

Page({
	data:{
		product: {},
	},
	getProduct(id) {
		wx.showLoading({
			title: '商品详情加载中。。。'
		})
		
		qcloud.request({
			url: config.service.productDetailUrl + id,
			success: result => {
				wx.hideLoading();

				let data = result.data;

				if (!data.code) {
					this.setData({
						product: data.data
					})
				} else {
					setTimeout(() => {
						wx.navigateBack();
					}, 2000);
				}
			},
			fail: () => {
				wx.hideLoading();

				setTimeout(() => {
					wx.navigateBack();
				}, 2000);
			}
		})
		
	},
	onLoad:function(options){
		// 生命周期函数--监听页面加载
		this.getProduct(options.id);
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