Page({
	data: {
		title: "火星云'第N次产品更新",
		name: '火星君',
		company: '火星人信息科技',
		date: '2018-12-17',
		banner: [
			{
				img: '../../images/article/banner.jpg'
			},
			{
				img: '../../images/article/info.jpg'
			}
		],
		tinfo: [
			{
				text: '漫长的等待，火星云终于迎来了第59次内测。'
			},
			{
				text: '是的你没看错，内测，正式上线日期是2019年1月1日敬请关注参与。'
			},
			{
				text: '本次更新让火星云有了质的飞跃。'
			}
		],
		info: [
			{
				itit: '新增“分享链”功能',
				itext: '互联网的核心是什么？“分享、裂变”！好的文章，好的商品当然要互相分享了，更重要的是可以指定任务分享，并做精准数据跟踪：转发、浏览量、指标、回馈、效能、地域、时间、IP各种细节指标助力引流消费!',
				ipic: '../../images/article/info.jpg'
			},
			{
				itit: '新增“分享链”功能',
				itext: '互联网的核心是什么？“分享、裂变”！好的文章，好的商品当然要互相分享了，更重要的是可以指定任务分享，并做精准数据跟踪：转发、浏览量、指标、回馈、效能、地域、时间、IP各种细节指标助力引流消费!',
				ipic: '../../images/article/info.jpg'
			}
		],
		uinfo: [
			{
				title: '电话:',
				info: '4006118290'
			},
			{
				title: '地址:',
				info: '南宁科园大道东五路南宁软件园'
			},
			{
				title: '官网:',
				info: 'www.mars-it.net'
			},
			{
				title: '邮箱:',
				info: 'info@mars-it.net'
			}
		],
		upic: '../../images/article/footer.jpg'
	},
	load() {
		wx.showLoading({ title: '加载中' })
		return ContentStore.get(name, _id).then(doc => {
			let { title, abstract, content} = doc



			this.setData({ title, abstract, content})
		}).catch(err => {
			let { message } = err
			wx.showToast({ title: message, icon: 'none' })
		}).then(() => {
			wx.hideLoading()
		})
	} ,
	onLoad() {
		wx.showShareMenu({
			withShareTicket: true
		})
	}

})