const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    isAdmin: Boolean,
    regDate: { type: Date, default: Date.now },
    imageURL: String,
    email: String,
    password: String,
    about: {
        type: String,
        default: 'Расскажите нам о себе. Нажмите кнопку \"Редактировать\" для обновления информации о профиле'
    }
});

module.exports = mongoose.model('Users', usersSchema);