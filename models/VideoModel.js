const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
	videoId: {type: String, required: true},
	isDemo: {type: Boolean, default: false},
	timeKeys: [{type: Number, required: true}],
	subts: {
		en: [{type: String, required: true}],
		ru: [{type: String}]
	}
});

module.exports = mongoose.model('subt', VideoSchema);