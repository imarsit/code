const _default = require('./default')

exports.get = function (key, $default) {
	return key.split('.').reduce((a, b) => a ? a[b] : undefined, _default) || $default
}