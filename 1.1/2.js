
let validateEmail = function(email){
    const check = /(^[a-zA-Z]|\d)((\-|\.|\+)|[a-zA-Z]|\d){1,19}@(((\.|\!|\$|\%|\&|\’|\*|\+|\/|\=|\?|\^|\_|\-)|\w|\d){1,15})\.([a-zA-Z]{1,5}$)/gm;
    return check.test(email);
};

let validatePhone = function(phone){
    if (phone.length > 25) {
        return false; 
    };
    const check = /^(\+38|\-+|\s+?)?\s*?\(?\-*?\d\-*?\d\-*?\d\)?\s*?(\d(\-|\s)*?){7}$/;
    return check.test(phone);
};

let validatePassword = function(password){
    const check = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}/gm;
    return check.test(password);
};


let Validator = new Map();


Validator.set(validateEmail, validateEmail('aaa@aa.end'));
Validator.set(validatePhone, validatePhone('+38 0967245128'));
Validator.set(validatePassword, validatePassword('passworD123_'));


console.log(Validator.get(validateEmail));
console.log(Validator.get(validatePhone));
console.log(Validator.get(validatePassword));


