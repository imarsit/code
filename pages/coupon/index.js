Page({
	data: {
		// 所有优惠券列表
		items: [
			{
				id: '1',
				img: '../../images/coupon/demo.png',
				title: '5元全品类券',
				price: '5',
				condition: '满120可用',
			},
			{
				id: '2',
				img: '../../images/coupon/demo.png',
				title: '15元全品类券',
				price: '15',
				condition: '满120可用',
			},
			{
				id: '3',
				img: '../../images/coupon/demo.png',
				title: '50元全品类券',
				price: '50',
				condition: '满100可用',
			}

		],
		// 已领优惠券列表
		coupon: []
	},

	onLoad() {

		this.load()
	},
	// 获取数据
	load() {
		let { coupon } = this.data

		// 接口请求返回优惠券列表
		let items = this.data.items

		items = items.map(v => {
			// 查询是否已领
			v.type = coupon.indexOf(v.id) >= 0

			return v
		})

		// 设置视图响应数据
		this.setData({ items })
	},
	// 领取优惠券
	get(e) {
		let { items, coupon } = this.data

		// 获取需要领取的优惠券的唯一id
		let { index } = e.currentTarget.dataset

		// 获取所对应的优惠券
		let results = items[index]

		// 领取操作
		coupon.push(results.id)

		// 刷新页面
		this.load()
	}
})