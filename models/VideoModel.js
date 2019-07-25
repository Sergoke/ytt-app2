const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
	id: {type: String, required: true},
	isDemo: {type: Boolean, default: false},
	timeKeys: [{type: Number, required: true}],
	subts: {
		en: {type: [String], default: undefined},
		ru: {type: [String], default: undefined},
		ua: {type: [String], default: undefined}
	}
});

module.exports = mongoose.model('subt', VideoSchema);
