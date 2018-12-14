Page({
	data: {
		open: true,
		price: '88.88',
		show: false,
		poster: false,

	},
	open() {
		this.setData({ open: false })

	},

	share() {
		this.setData({ show: true })
	},
	close() {
		this.setData({ show: false })
	},
	sharef() {

	},
	build() {
		this.setData({
			show: false,
			poster: true
		})
	},
	closep() {
		this.setData({
			show: false,
			poster: false
		})
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
	},
	onLoad() {
		wx.showShareMenu({
			// 要求小程序返回分享目标信息
			withShareTicket: true
		});
	},
	//分享
	onShareAppMessage(ops) {
		if (ops.from === 'button') {
			// 来自页面内转发按钮
			console.log(ops.target)
		}
		return {
			title: '发红包啦',
			path: `pages/redpacket/index`,
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
			url: 'http://pic1.win4000.com/wallpaper/2018-11-10/5be64dce9952e.jpg',
			success: function (res) {
				// 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
				if (res.statusCode === 200) {
					wx.saveImageToPhotosAlbum({
						filePath: res.tempFilePath,
						success(res) {
							wx.showToast({
								title: '保存图片成功！',
							
							})
						},
						fail(res) {
							wx.showToast({
								title: '保存图片失败！',
							})
						}
					})
				}
			}
		})
	}
})