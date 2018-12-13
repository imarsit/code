const ContentStore = require('../../store/content')

Page({
	data: {
		name: '',
		abstract: '',
		content: '',
		nprice: '1',
		price: '',
		shipping: '免邮费',
		type: '',
		images: '暂无展示图片',
		show: false,
		thumbnail: null,
		spec: [],
		num: 1,
		id: 0,
		sfooter: false,
		jfooter: false,
		bfooter: false,


	},
	onLoad(options) {
		let { name, _id } = options

		this.load(name, _id)
	},
	load(name, _id) {
		wx.showLoading({ title: '加载中' })
		return ContentStore.get(name, _id).then(doc => {
			let { name, abstract, content, thumbnail } = doc
			let { nprice = '暂无价格', price = '', shipping = '', spec = [], images = [] } = doc.extensions || {}

			this.setData({ name, abstract, content, nprice, price, shipping, spec, thumbnail, images })
		}).catch(err => {
			let { message } = err
			wx.showToast({ title: message, icon: 'none' })
		}).then(() => {
			wx.hideLoading()
		})
	},
	show() {
		this.setData({
			show: true,
			sfooter: true
		})
	},
	close() {
		this.setData({
			show: false,
			sfooter: false,
			jfooter: false,
			bfooter: false
		})
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
	},
	jshow() {
		this.setData({
			show: true,
			jfooter: true
		})
	},
	bshow() {
		this.setData({
			show: true,
			bfooter: true
		})
	},
	join() {
		wx.showToast({
			title: '已成功添加到购物车',
			icon: 'none',
			duration: 1500,
		})
		this.setData({
			show: false,
			jfooter: false
		})
		
	},
	next() {
		wx.showToast({
			title: '请先完善个人信息噢',
			icon: 'none',
			duration: 1500
		})
		this.setData({
			show: false,
			bfooter: false
		})
	},
	tjoin() {
		wx.showToast({
			title: '已成功添加到购物车',
			icon: 'none',
			duration: 1500,
		})
		this.setData({
			show: false,
			sfooter: false
		})
	},
	tnext() {
		wx.showToast({
			title: '请先完善个人信息噢',
			icon: 'none',
			duration: 1500
		})
		this.setData({
			show: false,
			sfooter: false
		})
	}


})