function isNewsValid(title, text) {
    const errors = {};

    if (title.length < 4) errors.invalidTitle = 'Минимум четыре символа';
    if (text.length === 0) errors.invalidText = 'Недопустимая длина';

    if (Object.values(errors).length !== 0) errors.isValidationError = true;

    return errors;
}

module.exports = isNewsValid;