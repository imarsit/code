Page({
	data: {
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
	show() {
		this.setData({
			show: true
		})
	},
	close() {
		this.setData({
			show: false
		})
	}

})