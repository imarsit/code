Page({
	scode() {
		//扫码
		wx.scanCode({
			scanType: 'qrCode',
			success: res => {
				let { path } = res

				if (path && /^\/pages\/[a-z]+\/[a-z]+\?/.test(path)) {
					wx.navigateTo({ url: path })
				} else {
					this.fail()
				}
			},
			fail: this.fail
		})
	},
	fail() {
		wx.showToast({ title: '无效小程序码', icon: 'none' })
	}
})