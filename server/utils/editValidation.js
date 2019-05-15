function isEditValid(lastName, firstName, imageURL) {
    const errors = {};

    if (lastName.length < 4) errors.invalidLastName = 'Минимум четыре символа';
    if (firstName.length < 4) errors.invalidFirstName = 'Минимум четыре символа';
    if (imageURL.length === 0) errors.invalidImageURL = 'Вставьте ссылку на изображение';

    if (Object.values(errors).length !== 0) errors.isValidationError = true;

    return errors;
}

module.exports = isEditValid;