function validateEmail(email){
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function isLoginValid(email, password) {
    const errors = {};

    if (!validateEmail(email)) errors.invalidEmail = 'Недействительная почта';
    if (password.length < 4) errors.invalidPassword = 'Минимум четыре символа';

    if (Object.values(errors).length !== 0) errors.isValidationError = true;

    return errors;
}

module.exports = isLoginValid;