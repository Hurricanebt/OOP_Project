const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: String,
    text: String,
    publicationTime: { type: Date, default: Date.now },
    comments: [{
        text: String,
        author: String
    }]
});

module.exports = mongoose.model('News', newsSchema);