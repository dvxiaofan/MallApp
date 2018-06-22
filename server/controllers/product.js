
const DB = require('../utils/db');

// 打包导出， 供外界调用
module.exports = {
	list: async ctx => {
		// 使用数据库查询数据
		ctx.state.data = await DB.query('SELECT * FROM product;')
	}
}