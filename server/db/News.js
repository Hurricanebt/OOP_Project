const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: String,
    text: String,
    authorID: String,
    publicationTime: { type: Date, default: Date.now },
    comments: [{
        text: String,
        userID: String,
        publicationTime: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('News', newsSchema);