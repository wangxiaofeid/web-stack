import * as Controller from './controller'

/**
	接口返回格式统一
	{
		state: 200->成功   0->失败
		msg:   返回内容
		data:  1.xxxxxxx单条信息   2.{xx:xx}某条记录   3.[{},..]列表
		page: 分页信息{currentPage: 4-->当前多少页, pageSize: 10-->每页多少条, totalCount: 1393-->总共多少个, totalPage: 140-->总共多少页}
	}
*/
export default function createServer(app){
		for(var key in Controller){
			Controller[key](app);
		}
}