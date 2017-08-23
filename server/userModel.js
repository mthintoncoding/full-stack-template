const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
	email: {type: String, required: true, unique: true},
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true, unique: true},
	firstName: {type: String, default: ""},
	lastName: {type: String, default: ""},
	role: String
});

UserSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    username: this.username,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    role: this.role
  };
}

UserSchema.methods.validatePassword = function(password) {
	return bcrypt.compare(password, this.password);
}

UserSchema.statics.hashPassword = function(password) {
	return bcrypt.hash(password, 10);
}

const User = mongoose.model('User', UserSchema);

module.exports = {User};
