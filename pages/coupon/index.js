Page({
	data: {

		items: [
			{
				id: '1',
				img: '../../images/coupon/demo.png',
				title: '5元全品类券',
				price: '5',
				condition: '满120可用',
				type: false
			},
			{
				id: '2',
				img: '../../images/coupon/demo.png',
				title: '15元全品类券',
				price: '15',
				condition: '满120可用',
				type: false

			},
			{
				id: '3',
				img: '../../images/coupon/demo.png',
				title: '50元全品类券',
				price: '50',
				condition: '满100可用',
				type: false
			}

		],
		coupon: []


	},
	get(e) {
		// 1.获取唯一标记
		// 2.找到要循环的变量
		// 3.循环变量
		// 4.比较唯一标记，查找指定项
		// 5.指定项赋值
		// 6.判断是否找到指定项
		// 7.如果有
		// 7.1 赋值
		// 7.2 反向赋值
		// 8.如果没有

		let index = e.currentTarget.dataset.index
		let items = this.data.items
		let results = items[index]

		if (results) {

			results.type = !results.type ? true : results.type

			items[index] = results

			this.setData({items})
		}



	}
})