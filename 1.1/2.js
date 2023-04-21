
let validateEmail = function(email){
    const check = 1;
    return true;
};

let validatePhone = function(phone){
    const check = 1;
    return false;
};

let validatePassword = function(password){
    const check = /[]/;
    return '123';
};


let Validator = new Map();


Validator.set(validateEmail, validateEmail('aaa@a.end'));
Validator.set(validatePhone, validatePhone('+380967245128'));
Validator.set(validatePassword, validatePassword('password123_'));


console.log(Validator.get(validateEmail));
console.log(Validator.get(validatePhone));
console.log(Validator.get(validatePassword));


