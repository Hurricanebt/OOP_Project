const express = require('express');
const Users = require('../db/Users');
const loginValidation = require('../utils/loginValidation');
const regValidation = require('../utils/regValidation');

const router = express.Router();

router.post('/registration', async (req, res) => {
    try {
        const { firstName, lastName, imageURL, isAdmin, email, password } = req.body;

        const errors = regValidation(firstName, lastName, email, password);
        if (errors.isValidationError) throw errors;

        const user = await Users.find({email: email});
        if (user.length) throw {isValidationError: true, userAlreadyReg: 'Пользователь с такой почтой уже зарегистрирован'};

        Users.create({
            firstName: firstName,
            lastName: lastName,
            isAdmin: isAdmin,
            email: email,
            imageURL: imageURL || 'https://www.animuspilates.hu/_files/velemenyek/profil_image.png',
            password: password})
            .then((user) => res.send(user));

    } catch (error) {
        res.send(error);
    }
});

router.get('/login', async (req, res) => {
    try {
        const { email, password } = req.query;

        const errors = loginValidation(email, password);
        if (errors.isValidationError) throw errors;

        const user = await Users.findOne({ email: email, password: password });
        if (!user) throw {isValidationError: true, userNotFound: 'Пользователь с такой почтой и паролем не найден'};

        res.send(user);

    } catch (error) {
        res.send(error);
    }
});

module.exports = router;