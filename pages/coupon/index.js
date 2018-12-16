Page({
	data: {
		gtype: false,
		items: [
			{
				img: '../../images/coupon/demo.png',
				title: '5元全品类券',
				price: '5',
				condition: '满120可用',
				ctype: '立即领取',
				gettype: ''
			},
			{
				img: '../../images/coupon/demo.png',
				title: '5元全品类券',
				price: '5',
				condition: '满120可用',
				ctype: '立即领取'

			},
			{
				img: '../../images/coupon/demo.png',
				title: '5元全品类券',
				price: '5',
				condition: '满120可用',
				ctype: '立即领取'
			}

		]
	},
	get(e) {
		let id = e.currentTarget.dataset.id;
		console.log(id)
		let showtype = "items[" + id + "].ctype";
		let gettype = "items[" + id + "].gettype";

		console.log(gettype)
		this.setData({
			gtype: true,
			[showtype]: '已领取',
			[gettype]: '../../images/coupon/geted.png'
		})
	}
})