Page({
	data: {
		title: "火星云'第N次产品更新",
		author: '火星君',
		company: '火星人信息科技',
		date: '2018-12-17',
		content: ''
	},
	onLoad(options) {
		let { name, _id } = options

		// this.load(name, _id)

		wx.showShareMenu({
			// 要求小程序返回分享目标信息
			withShareTicket: true
		});
	},
	load() {
		wx.showLoading({ title: '加载中' })

		return ContentStore.get(name, _id).then(doc => {
			let { title, abstract, content } = doc

			this.setData({ title, abstract, content })
		}).catch(err => {
			let { message } = err
			wx.showToast({ title: message, icon: 'none' })
		}).then(() => {
			wx.hideLoading()
		})
	}

})