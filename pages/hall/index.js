const ContentStore = require('../../store/content')

Page({
	data: {
		// 红包列表
		redpackets: [],
		// 已领红包列表
		uncollected: []
	},
	onLoad() {
		let { name, _id } = options

		this.load(name, _id)
	},
	load(name, _id) {
		wx.showLoading({ title: '加载中' })

		return ContentStore.get(name, _id).then(redpackets => {
			this.setData({ redpackets })
		}).catch(err => {
			let { message } = err

			wx.showToast({ title: message, icon: 'none' })
		}).then(() => {
			wx.hideLoading()
		})
	},
	go(e) {
		let { id } = e.currentTarget.dataset

		wx.navigateTo({ url: `/pages/redpacket/index?_id=${id}` })
	}

})