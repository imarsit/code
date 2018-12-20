Page({
	data: {
		// 红包列表
		items: [
			// {
			// 	id: '1',	// 标记
			// 	thumbnail: '/images/hall/demo.png', // 缩略图
			// 	title: '5元红包',	// 名称
			// 	price: '5',			// 红包价格
			// 	condition: '满30元可用'	// 条件
			// }
		],
		// 已领红包列表
		redpacket: [] // ['id',....]
	},
	onLoad() {
		this.load()
	},
	load() {
		let { redpacket } = this.data
		let items = this.data.items

		items = items.map(v => {
			v.type = redpacket.indexOf(v.id) >= 0

			return v
		})

		this.setData({ items })
	},
	gettype(e) {
		let { id } = e.currentTarget.dataset

		wx.navigateTo({
			url: `/pages/redpacket/index?id=${id}`
		})
	}

})