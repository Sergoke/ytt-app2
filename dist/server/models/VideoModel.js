const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
	videoId: {type: String},
	isDemo: {type: Boolean},
	timeKeys: [{type: Number}],
	subts: {'en': [[{type: String}]]}
});

module.exports = mongoose.model('subt', VideoSchema);