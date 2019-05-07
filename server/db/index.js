const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cirin', { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));