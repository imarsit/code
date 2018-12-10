const config = require('../config/index')

let hostname = config.get('hostname')

if (hostname[hostname.length - 1] === '/') hostname = hostname.slice(0, -1)

exports.token = null

exports.resolve = function (url) {
	if (!url) throw new TypeError('url is not string')

	if (url[0] === '/') {
		return `${hostname}${url}`
	} else {
		let [protocol] = url.split('://')

		if (['http', 'https'].indexOf(protocol) < 0) {
			let _url = url.split('/')

			if (['.', '..'].indexOf(_url[0]) < 0) {
				_url.unshift('')
			} else {
				_url[0] = ''
			}

			return `${hostname}${_url.join('/')}`
		} else {
			return url
		}

	}

}

exports.request = function (url, method, data, header = {}) {
	let { token, resolve } = exports

	header = Object.assign({}, header)
	url = resolve(url)

	if (token) header.token = token
	return new Promise((resolve, reject) => {
		wx.request({
			url, data, method, header,
			success: (res) => {
				return res.statusCode === 200 ? resolve(res) : reject(new Error(res.data.message))
			},
			fail: err => reject(err)
		})
	})
}

exports.get = function (url, data) {
	return exports.request(url, 'GET', data)
}

exports.post = function (url, data) {
	return exports.request(url, 'POST', data)
}

exports.put = function (url, data) {
	return exports.request(url, 'PUT', data)
}

exports.delete = function (url, data) {
	return exports.request(url, 'DELETE', data)
}
