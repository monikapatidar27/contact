
const isValidMobileNumber = (number) => {
    const mobileNumberPattern = /^\+?\d{1,4}[-.\s]?\d{10}$/;
    return mobileNumberPattern.test(number);
}

const isValidEmail = (mail) => {
    const EmailPattern = /\S+@\S+\.\S+/;
    return EmailPattern.test(mail);
}

module.exports = {isValidMobileNumber , isValidEmail};