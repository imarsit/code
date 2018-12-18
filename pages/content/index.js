const ContentStore = require('../../store/content')

Page({
	data: {
		name: '',
		abstract: '',
		content: "<p class=\"MsoNormal\" style=\"margin-left:21.0000pt;mso-para-margin-left:0.0000gd;text-indent:-21.0000pt;mso-char-indent-count:0.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;mso-list:l0 level1 lfo1;\"><!--[if !supportLists]--><span style=\"font-family:Wingdings;mso-fareast-font-family:微软雅黑;mso-bidi-font-family:微软雅黑;font-weight:bold;font-size:16.0000pt;mso-font-kerning:1.0000pt;\">l&nbsp;</span><!--[endif]--><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\"><font face=\"微软雅黑\">益天然</font></span></b><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\"><font face=\"微软雅黑\">水牛奶</font>——奶中贵族</span></b><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\"></span></b></p><p class=\"MsoNormal\" style=\"text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">来自吃甘蔗和菠萝的水牛奶，具有浓香醇厚的口感，无可比拟的天然搭配的营养，</font>1.5<font face=\"宋体\">倍的蛋白质，</font><font face=\"Times New Roman\">1.3</font><font face=\"宋体\">倍的钙，</font><font face=\"Times New Roman\">3</font><font face=\"宋体\">倍的氨基酸，数十倍的微量元素、维生素。这些都让增强体魄变动更加简单，让健康变动更加享受。</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">益天然</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">水牛奶，它曾为世界最好的奶酪而生，安全、香醇、高钙、低胆固醇、高蛋白质，让您享受到的不仅是更多的营养。</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"></span></p><p class=\"MsoNormal\" style=\"text-indent:24.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">&nbsp;</o:p></span></p><p class=\"MsoNormal\" style=\"margin-left:21.0000pt;mso-para-margin-left:0.0000gd;text-indent:-21.0000pt;mso-char-indent-count:0.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;mso-list:l0 level1 lfo1;\"><!--[if !supportLists]--><span style=\"font-family:Wingdings;mso-fareast-font-family:微软雅黑;mso-bidi-font-family:微软雅黑;font-weight:bold;font-size:16.0000pt;mso-font-kerning:1.0000pt;\">l&nbsp;</span><!--[endif]--><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\"><font face=\"微软雅黑\">益天然</font></span></b><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\">——奶中贵族·水牛奶</span></b><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\"></span></b></p><p class=\"MsoNormal\" style=\"text-indent:21.7500pt;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">水牛奶属世界稀缺奶源，据国家有关科研部门测定，奶质十分优良，水牛奶的综合营养价值是黑白花牛奶的近</font>2<font face=\"宋体\">倍，被誉为奶中贵族。</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"></span></p><p class=\"MsoNormal\" style=\"text-indent:21.7500pt;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">水牛奶源于意大利、印度和巴基斯坦，在这些国家以及美国、英国等正积极发展水牛奶的地方，人人都知道它的三个有点和一个缺点。水牛的年奶量只有普通奶牛的四分之一。在中国，年总产量更是仅有不到两万吨，</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">水牛奶更显得稀有珍贵。</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"></span></p><p class=\"MsoNormal\" style=\"text-indent:21.7500pt;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">水牛奶营养比黑白花奶更多的营养，更充足的微量元素</font></span></p><table style=\"border-spacing: 0px; border-collapse: collapse; width: 100%; max-width: 100%; margin-bottom: 0px; border: 1px solid rgb(221, 221, 221); line-height: 20px; background-color: transparent;\"><tbody><tr><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;<font face=\"宋体\" style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">干物质</font><span style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">%</span></td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;<font face=\"宋体\" style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">乳脂</font><span style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">%</span></td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;<font face=\"宋体\" style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">蛋白质</font><span style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">%</span></td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;<font face=\"宋体\" style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">氨基酸</font><span style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">%</span></td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;<font face=\"宋体\" style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">铁</font><span style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">mg/100g</span></td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;<font face=\"宋体\" style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">钙</font><span style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">mg/100g</span></td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;<font face=\"宋体\" style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">锌</font><span style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">mg/100g</span></td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;<font face=\"宋体\" style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">维生素</font><span style=\"font-family: 宋体; font-size: 9pt; background-color: transparent;\">mg/ml</span></td></tr><tr><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;水牛奶</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;18.4</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;7.9</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;4.5</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;4.2</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;24.5</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;138.7</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;27.0</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;0.76</td></tr><tr><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;黑白花奶</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;13.0</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;3.2</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;3.1</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;1.4</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;0.3</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;107.1</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;2.2</td><td style=\"padding: 8px; line-height: 1.42857; vertical-align: top; border: 1px solid rgb(221, 221, 221);\">&nbsp;0.76</td></tr></tbody></table><div align=\"center\"><br></div><p class=\"MsoNormal\"><span style=\"mso-spacerun:'yes';font-family:宋体;font-size:10.5000pt;mso-font-kerning:1.0000pt;\">&nbsp;</o:p></span></p><p class=\"MsoNormal\" style=\"mso-para-margin-left:0.0000gd;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 14pt;\">&nbsp;</o:p></span></b></p><p class=\"MsoNormal\" style=\"margin-left:21.0000pt;mso-para-margin-left:0.0000gd;text-indent:-21.0000pt;mso-char-indent-count:0.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;mso-list:l0 level1 lfo1;\"><!--[if !supportLists]--><span style=\"font-family:Wingdings;mso-fareast-font-family:微软雅黑;mso-bidi-font-family:微软雅黑;font-weight:bold;font-size:16.0000pt;mso-font-kerning:1.0000pt;\">l&nbsp;</span><!--[endif]--><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\"><font face=\"微软雅黑\">世界奶水牛的分布</font></span></b><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\"></span></b></p><p class=\"MsoNormal\" style=\"text-indent:21.7500pt;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">全球奶水牛主产地主要分布在意大利、印度、巴基斯坦、美国、英国和中国，其中印度的摩拉水牛和巴基斯坦的尼里拉菲水牛是世界上著名的最优秀的河流型乳用水牛品种。</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"></span></p><p class=\"MsoNormal\" style=\"text-indent:21.7500pt;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">&nbsp;</o:p></span></p><p class=\"MsoNormal\" style=\"margin-left:21.0000pt;mso-para-margin-left:0.0000gd;text-indent:-21.0000pt;mso-char-indent-count:0.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;mso-list:l0 level1 lfo1;\"><!--[if !supportLists]--><span style=\"font-family:Wingdings;mso-fareast-font-family:微软雅黑;mso-bidi-font-family:微软雅黑;font-weight:bold;font-size:16.0000pt;mso-font-kerning:1.0000pt;\">l&nbsp;</span><!--[endif]--><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\"><font face=\"微软雅黑\">中国奶水牛的分布</font></span></b><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\"></span></b></p><p class=\"MsoNormal\" style=\"text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">全国只有广西、广东、江西等五个省份有奶水牛，目前全国养殖奶水牛数量最多的是广西，而广西养殖奶水牛数量最多的是灵山县。灵山</font>“中国奶水牛之乡”由此而得名</span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">，</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">益天然养殖基地：</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"></span></p><p class=\"MsoNormal\" style=\"text-indent:28.1000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><b><span style=\"font-family: 宋体; line-height: 150%; font-size: 14pt;\">45100<font face=\"宋体\">头奶水牛供奶：</font></span></b><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">头均产奶年均</font>1800kg<font face=\"宋体\">以上。</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"></span></p><p class=\"MsoNormal\" style=\"text-indent:28.1000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><b><span style=\"font-family: 宋体; line-height: 150%; font-size: 14pt;\">10<font face=\"宋体\">万公顷天然优质牧草：</font></span></b><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">灵山拥有天然草地面积近</font>10<font face=\"宋体\">万公顷，是奶水牛优养的天然牧场。</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"></span></p><p class=\"MsoNormal\" style=\"text-indent:28.1000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><b><span style=\"font-family: 宋体; line-height: 150%; font-size: 14pt;\"><font face=\"宋体\">适宜的地理条件和气候：</font></span></b><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">灵山属南亚热带季风气候，全年气候温和，夏长冬短，雨量充沛，光照充足，特别适合河流型乳用奶水牛的养殖。</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"></span></p><p class=\"MsoNormal\" style=\"text-indent:21.7500pt;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">&nbsp;</o:p></span></p><p class=\"MsoNormal\" style=\"margin-left:21.0000pt;mso-para-margin-left:0.0000gd;text-indent:-21.0000pt;mso-char-indent-count:0.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;mso-list:l0 level1 lfo1;\"><!--[if !supportLists]--><span style=\"font-family:Wingdings;mso-fareast-font-family:微软雅黑;mso-bidi-font-family:微软雅黑;font-weight:bold;font-size:16.0000pt;mso-font-kerning:1.0000pt;\">l&nbsp;</span><!--[endif]--><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\"><font face=\"微软雅黑\">周恩来与奶水牛</font></span></b><b><span style=\"font-family: 微软雅黑; line-height: 150%; font-size: 16pt;\"></span></b></p><p class=\"MsoNormal\" style=\"text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">印度的摩拉水牛和巴基斯坦的尼里拉菲水牛</font>——均属于世界上著名的最优秀的河流型乳用水牛品种。<font face=\"Times New Roman\">1957</font><font face=\"宋体\">年周恩来总理出访印度回国时，将印度总理赠送的印度摩拉水牛送给广西</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">，</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"><font face=\"宋体\">广西的灵山逐渐成为了中国水牛奶之乡。</font></span><span style=\"mso-spacerun:'yes';font-family:宋体;line-height:150%;font-size:14.0000pt;mso-font-kerning:1.0000pt;\"></span></p><div></div><div></div><div></div>",
		nprice: '',
		price: '',
		shipping: '免邮费',
		type: '',
		images: '暂无展示图片',
		show: false,
		thumbnail: null,
		spec: [],
		num: 1,
		id: 0,
		footer: true,
		sfooter: false,
		jfooter: false,
		bfooter: false,
		mask: false,
		sharebox: false,
		poster: false


	},
	onLoad(options) {
		let { name, _id } = options

		this.load(name, _id)

		wx.showShareMenu({
			// 要求小程序返回分享目标信息
			withShareTicket: true
		});
	},
	load(name, _id) {
		wx.showLoading({ title: '加载中' })
		return ContentStore.get(name, _id).then(doc => {
			let { name, abstract, content, thumbnail } = doc
			let { nprice = '暂无价格', price, shipping = '', spec = [], images = [] } = doc.extensions || {}

			price = (parseFloat(price) || 0).toFixed(2)
			nprice = (parseFloat(nprice) || 0).toFixed(2)


			this.setData({ name, abstract, content, nprice, price, shipping, spec, thumbnail, images })
		}).catch(err => {
			let { message } = err
			wx.showToast({ title: message, icon: 'none' })
		}).then(() => {
			wx.hideLoading()
		})
	},
	show() {
		this.setData({
			show: true,
			sfooter: true
		})
	},
	close() {
		this.setData({
			show: false,
			sfooter: false,
			jfooter: false,
			bfooter: false
		})
	},
	minus() {
		let num = this.data.num;
		if (num > 1) {
			num--;
			this.setData({ num: num });
		}

	},
	plus() {
		let num = this.data.num;
		num++;
		this.setData({ num: num });
	},
	seleted(e) {
		console.log(e)
		let id = e.currentTarget.dataset.id;
		this.setData({
			id: id
		});
	},
	jshow() {
		this.setData({
			show: true,
			jfooter: true
		})
	},
	bshow() {
		this.setData({
			show: true,
			bfooter: true
		})
	},
	join() {
		wx.showToast({
			title: '已成功添加到购物车',
			icon: 'none',
			duration: 1500,
		})
		this.setData({
			show: false,
			jfooter: false
		})

	},
	next() {
		wx.showToast({
			title: '请先完善个人信息噢',
			icon: 'none',
			duration: 1500
		})
		this.setData({
			show: false,
			bfooter: false
		})
	},
	tjoin() {
		wx.showToast({
			title: '已成功添加到购物车',
			icon: 'none',
			duration: 1500,
		})
		this.setData({
			show: false,
			sfooter: false
		})
	},
	tnext() {
		wx.showToast({
			title: '请先完善个人信息噢',
			icon: 'none',
			duration: 1500
		})
		this.setData({
			show: false,
			sfooter: false
		})
	},
	share() {
		this.setData({
			mask: true,
			sharebox: true
		})
	},
	closebox() {
		this.setData({
			sharebox: false,
			poster: false,
			mask: false,
			footer: true
		})
	},
	build() {
		this.setData({
			mask: true,
			sharebox: false,
			footer: false,
			poster: true
		})
	},
	//分享
	onShareAppMessage(ops) {
		if (ops.from === 'button') {
			// 来自页面内转发按钮
			console.log(ops.target)
		}
		return {
			title: '给您推荐好物~',
			path: `pages/content/index`,
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
								icon: 'none',
								duration: 1500

							})
						},
						fail(res) {
							wx.showToast({
								title: '保存图片失败！',
								icon: 'none',
								duration: 1500
							})
						}
					})
				}
			}
		})
	}


})