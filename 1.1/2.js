
let validateEmail = function(email){
    let counterAt = 0;
    for (let i of email) {
        if (i === '@') {counterAt++};
    };
    if (counterAt >= 2 || counterAt == 0) {return false};

    return true;
};

let validatePhone = function(phone){
    return false;
};

let validatePassword = function(password){
    return '123';
};


let Validator = new Set();

Validator.add(validateEmail);
Validator.add(validatePhone);
Validator.add(validatePassword);



/*for (let i of Validator) {
    if (i === validateEmail) {
        console.log(`check of email is: ${validateEmail('firstpart@secondpart.end')}`);
    } else if (i === validatePhone){
        console.log(validatePhone(''));
    } else if (i === validatePassword){
        console.log(validatePassword(''));
    }
};*/

console.log(Validator);