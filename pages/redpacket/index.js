Page({
	data: {
		open: true,
		price: '88.88'
	},
	open() {
		this.setData({ open: false })

	},
	load() {
		wx.showLoading({ title: '加载中' })
		return ContentStore.get(name, _id).then(doc => {
			let { price } = doc


			price = (parseFloat(price) || 0).toFixed(2)

			this.setData({ price })
		}).catch(err => {
			let { message } = err
			wx.showToast({ title: message, icon: 'none' })
		}).then(() => {
			wx.hideLoading()
		})
	}

})