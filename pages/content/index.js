const ContentStore = require('../../store/content')

Page({
	data: {
		name: '',
		nprice: '',
		price: '',
		banner: [
			'../../images/shop/banner/1.jpg',
			'../../images/shop/banner/2.jpg',
			'../../images/shop/banner/3.jpg',
			'../../images/shop/banner/4.jpg'
		],
		goods: [
			'../../images/shop/info/1.jpg',
			'../../images/shop/info/2.jpg',
			'../../images/shop/info/3.jpg',
			'../../images/shop/info/4.jpg',
			'../../images/shop/info/5.jpg',
			'../../images/shop/info/6.jpg'

		],
		show: false

	},
	onLoad(options) {
		let { name, _id } = options

		this.load(name, _id)
	},
	load(name, _id) {
		wx.showLoading({ title: '加载中' })
		return ContentStore.get(name, _id).then(doc => {
			let { name } = doc

			this.setData({ name })
		}).catch(err => {
			let { message } = err
			wx.showToast({ title: message, icon: 'none' })
		}).then(() => {
			wx.hideLoading()
		})
	},
	show() {
		this.setData({ show: true })
	},
	close() {
		this.setData({ show: false })
	}

})