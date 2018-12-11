const ContentStore = require('../../store/content')

Page({
	data: {
		name: '',
		abstract: '',
		content: '',
		nprice: '',
		price: '',
		shipping: '免邮费',
		type: '',
		images: '',
		show: false,
		thumbnail: null,
		spec: [],
		num: 1,
		typeStatus: false,
		id: 0,


	},
	onLoad(options) {
		let { name, _id } = options

		this.load(name, _id)
	},
	load(name, _id) {
		wx.showLoading({ title: '加载中' })
		return ContentStore.get(name, _id).then(doc => {
			let { name, abstract, content, thumbnail } = doc
			let { nprice = '', price = '', shipping = '', spec = [], images = [] } = doc.extensions || {}

			this.setData({ name, abstract, content, nprice, price, shipping, spec, thumbnail, images })
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
	},
	minus() {
		let num = this.data.num;
		if (num > 1) {
			num--;
			this.setData({ num: num });
		}

	},
	plus() {
		let num = this.data.num;
		num++;
		this.setData({ num: num });
	},
	seleted(e) {
		console.log(e)
		let id = e.currentTarget.dataset.id;
		this.setData({
			id: id
		});




	}
})