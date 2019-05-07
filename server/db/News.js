const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: String,
    text: String,
    author: String
});

module.exports = mongoose.model('News', newsSchema);