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
				bg: 'contdraw'
			},
			{
				img: '../../images/coupon/demo.png',
				title: '15元全品类券',
				price: '15',
				condition: '满120可用',
				ctype: '立即领取',
				bg: 'contdraw'

			},
			{
				img: '../../images/coupon/demo.png',
				title: '50元全品类券',
				price: '50',
				condition: '满100可用',
				ctype: '立即领取',
				bg: 'contdraw'
			}

		]
	},
	get(e) {
		let id = e.currentTarget.dataset.id;
		console.log(id)

		let showtype = "items[" + id + "].ctype";
		console.log(showtype)

		let gettype = "items[" + id + "].gettype";
		console.log(gettype)

		let bg = "items[" + id + "].bg";
		console.log(bg)

		this.setData({
			id: id,
			gtype: true,
			[showtype]: '已领取',
			[bg]:'after',
			[gettype]: '../../images/coupon/geted.png'
		})
	}
})