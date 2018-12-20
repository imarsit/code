const ContentStore = require('../../store/content')

Page({
	name: '',
	_id: '',
	data: {
		uncollected: true,
		price: 88.88,
		show: false,
		poster: false
	},
	onLoad(options) {
		let { name, _id } = options

		this.name = name
		this._id = _id

		// 要求小程序返回分享目标信息
		wx.showShareMenu({ withShareTicket: true })
	},
	open() {
		wx.showLoading({ title: '加载中' })

		return ContentStore.get(this.name, this._id).then(price => {
			price = price || 0
			price = parseFloat(price.toFixed(2))

			this.setData({ price, uncollected: false })
		}).catch(err => {
			let { message } = err

			wx.showToast({ title: message, icon: 'none' })
		}).then(() => {
			wx.hideLoading()
		})
	},
	back() {
		wx.reLaunch({ url: '/pages/hall/index' })
	},
	share() {
		this.setData({ show: true })
	},
	close() {
		this.setData({ show: false })
	},
	build() {
		this.setData({ show: false, poster: true })
	},
	closep() {
		this.setData({ show: false, poster: false })
	},

	//分享
	onShareAppMessage(ops) {
		return {
			title: '发红包啦',
			path: `pages/redpacket/index`,
			success(res) {
			}

		}
	},
	// 保存
	savepic() {
		wx.downloadFile({
			url: '',
			success(res) {
				// 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
				if (res.statusCode === 200) {
					wx.saveImageToPhotosAlbum({
						filePath: res.tempFilePath,
						success(res) {
							wx.showToast({ title: '保存图片成功！', icon: 'none', duration: 1500 })
						},
						fail(res) {
							wx.showToast({ title: '保存图片失败！', icon: 'none', duration: 1500 })
						}
					})
				}
			}
		})
	}
})