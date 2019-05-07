function validateEmail(email){
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function isRegValid(firstName, lastName, email, password) {
    const errors = {};

    if (firstName.length < 4) errors.invalidFirstName = 'Минимум четыре символа';
    if (lastName.length < 4) errors.invalidLastName = 'Минимум четыре символа';
    if (!validateEmail(email)) errors.invalidEmail = 'Недействительная почта';
    if (password.length < 4) errors.invalidPassword = 'Минимум четыре символа';

    if (Object.values(errors).length !== 0) errors.isValidationError = true;

    return errors;
}

module.exports = isRegValid;