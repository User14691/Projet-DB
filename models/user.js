const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    token: { type: String, required: true },
    salt: { type: String, required: true },
    hash: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
});

const User = new mongoose.model('User', UserSchema);

module.exports = User;