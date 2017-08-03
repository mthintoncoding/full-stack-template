const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ClientSchema = mongoose.Schema({
	email: {type: String, required: true, unique: true},
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true, unique: true},
	firstName: {type: String, default: ""},
	lastName: {type: String, default: ""}
});

ClientSchema.methods.validatePassword = function(password) {
	return bcrypt.compare(password, this.password);
}

ClientSchema.statics.hashPassword = function(password) {
	return bcrypt.hash(password, 10);
}

const Client = mongoose.model('Client', ClientSchema);

module.exports = {Client};
