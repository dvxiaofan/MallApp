
Page({
	data:{
		product: {
			id: 1,
			image: 'https://product-1256088332.cos.ap-guangzhou.myqcloud.com/product2.jpg',
			name: '这是一个牛逼的产品',
			price: 480.5,
			comments: [
				{
					icon: '../../images/xiaofan.png', 
					uName: 'xiaofan', 
					time: '2018-06-22', 
					text: '非常好， 棒极了，下次还买'
				}
			]
		},
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