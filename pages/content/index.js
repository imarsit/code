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
		images: '暂无展示图片',
		show: false,
		thumbnail: null,
		spec: [],
		num: 1,
		id: 0,
		footer: true,
		sfooter: false,
		jfooter: false,
		bfooter: false,
		mask: false,
		sharebox: false,
		poster: false


	},
	onLoad(options) {
		let { name, _id } = options

		this.load(name, _id)

		wx.showShareMenu({
			// 要求小程序返回分享目标信息
			withShareTicket: true
		});
	},
	load(name, _id) {
		wx.showLoading({ title: '加载中' })
		return ContentStore.get(name, _id).then(doc => {
			let { name, abstract, content, thumbnail } = doc
			let { nprice = '暂无价格', price, shipping = '', spec = [], images = [] } = doc.extensions || {}

			price = (parseFloat(price) || 0).toFixed(2)
			nprice = (parseFloat(nprice) || 0).toFixed(2)


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
			num--
			this.setData({ num: num })
		}

	},
	plus() {
		let num = this.data.num;
		num++
		this.setData({ num: num })
	},
	seleted(e) {
		let id = e.currentTarget.dataset.id
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
	},
	share() {
		this.setData({
			mask: true,
			sharebox: true
		})
	},
	closebox() {
		this.setData({
			sharebox: false,
			poster: false,
			mask: false,
			footer: true
		})
	},
	build() {
		this.setData({
			mask: true,
			sharebox: false,
			footer: false,
			poster: true
		})
	},
	//分享
	onShareAppMessage(ops) {
		if (ops.from === 'button') {
		}
		return {
			title: '给您推荐好物~',
			path: `pages/content/index`,
			success(res) {
				// 转发成功
				console.log("转发成功:" + JSON.stringify(res));
				let shareTickets = res.shareTickets;
			},
			fail(res) {
				// 转发失败
				console.log("转发失败:" + JSON.stringify(res));
			}
		}
	},
	// 保存
	savepic() {
		wx.downloadFile({
			url: '',
			success: function (res) {
				// 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
				if (res.statusCode === 200) {
					wx.saveImageToPhotosAlbum({
						filePath: res.tempFilePath,
						success(res) {
							wx.showToast({
								title: '保存图片成功！',
								icon: 'none',
								duration: 1500

							})
						},
						fail(res) {
							wx.showToast({
								title: '保存图片失败！',
								icon: 'none',
								duration: 1500
							})
						}
					})
				}
			}
		})
	}


})