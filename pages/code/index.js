Page({
	scode() {
		//扫码
		wx.scanCode({
			success(res) {
				console.log(res)
			}
		})
	}

})