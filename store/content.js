const Store = require('./index')

exports.get = function (name, _id) {
	return Store.get(`/api/app/review/${name}/${_id}`).then(({ data }) => data.mixed)
}