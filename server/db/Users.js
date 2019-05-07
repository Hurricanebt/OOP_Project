const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    isAdmin: Boolean,
    regDate: { type: Date, default: Date.now },
    imageURL: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('Users', usersSchema);