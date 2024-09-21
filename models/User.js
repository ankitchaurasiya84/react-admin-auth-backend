const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
console.log();

const User = mongoose.model('User', UserSchema);

module.exports = User;
