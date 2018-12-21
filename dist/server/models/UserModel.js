const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {type: String, required: true},
	surname: {type: String, required: true},
	email: {type: String, required: true},
	role: {type: String, default: 'user'},
	login: {type: String, unique: true, required: true},
	password_hash: {type: String, required: true}
});

UserSchema.virtual('password')
	.set(function(password){
		this.salt = Math.random + 'salt';
		this.password_hash = this.encryptPassword(password);
	});

UserSchema.methods = {
	encryptPassword(password){
		return crypto.createHmac('sha256', 'salt').update(password).digest('hex');//salt should be random
	},

	checkPassword(password){
		return this.encryptPassword(password) === this.password_hash;
	}
}

module.exports = mongoose.model('user', UserSchema);