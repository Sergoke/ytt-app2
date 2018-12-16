const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
	videoId: {type: String},
	timeKeys: [{type: Number}],
	subts: [[{type: String}]]
});

module.exports = mongoose.model('subt', VideoSchema);