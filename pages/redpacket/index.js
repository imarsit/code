Page({
	data: {
		open: true,
		after: false,
		price:'8.88'
	},
	open() {
		this.setData({
			open: false,
			after: true
		})
		
	}

})