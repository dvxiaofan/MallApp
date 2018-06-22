
const DB = require('../utils/db');

// 打包导出， 供外界调用
module.exports = {
	list: async ctx => {
		// 使用数据库查询数据
		ctx.state.data = await DB.query('select * from product;')
	},

	detail: async ctx => {
		// + 将字符型的值转成数值型的值
		let productID = + ctx.params.id;
		let product;

		// 对传入参数进行验证
		if (!isNaN(productID)) {
			product = (await DB.query('select * from product where product.id = ?', [productID]))[0];
		} else {
			product = {};
		}
		
		ctx.state.data = product;
	}
}