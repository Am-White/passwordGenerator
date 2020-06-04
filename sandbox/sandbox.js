/* STRINGS FOR POTENTIAL PASSWORD CHARACTERS */
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const numerics = '0123456789';

const specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

console.log(lowercaseLetters);
console.log(uppercaseLetters);
console.log(numerics);
console.log(specialCharacters);

/* EMPTY STRING THAT POTENTIAL PASSWORDS CHARACTERS WILL BE PUSHED INTO STRING BY STRING */
let charSet = '';

/* EMPTY STRING FOR FINISHED PASSWORD TO END UP IN */

let finishedPassword = '';

/* VARIABLES HOLDING RANDOM INDICES FROM A CHARACTER SET STRING */
const randomLowercaseLetter = lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)];
const randomUppercaseLetter = uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)];
const randomNumeric = numerics[Math.floor(Math.random()*numerics.length)];
const randomSpecialCharacter = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];


console.log(randomLowercaseLetter);
console.log(randomUppercaseLetter);
console.log(randomNumeric);
console.log(randomSpecialCharacter);

/* FUNCTION COMBINING STRINGS INTO A NEW STRING */
const userChoices = function() {
    alert('Welcome to password generator.');
    let lower = confirm('Click "OK" if you would like your password to contain lowercase letters. Otherwise, select "Cancel"'); 
    let upper = confirm('Click "OK" if you would like your password to contain uppercase letters. Otherwise, select "Cancel"');
    let num = confirm('Click "OK" if you would like your password to include numeric characters. Otherwise, select "Cancel"');
    let spec = confirm('Click "OK" if you would like your password to include special characters. Otherwise, select "Cancel"');
    let passwordLength = prompt('How long would you like your password to be? Enter a number from 8 to 128 and click "OK".');
};
const createPassword = function() {
    for(i = 0; i < passwordLength; i++) {
        let passwordChar = charSet[Math.floor(Math.random()*charSet.length)];
        finishedPassword += passwordChar;
    };
    return finishedPassword;
    alert(finishedPassword);
};

getCharSet();

console.log(includeLowercase);
console.log(includeUppercase);
console.log(includeNumeric);
console.log(includeSpecial);
console.log(passwordLength);

function getCharSet(userChoices) {
    if (lower === true) {
        finishedPassword += randomLowercaseLetter;
        charSet += lowercaseLetters;
        passwordLength -= 1;
    }
    if (upper === true) {
        finishedPassword += randomUppercaseLetter;
        charSet += uppercaseLetters;
        passwordLength -= 1;
    }
    if (num === true) {
        finishedPassword += randomNumeric;
        charSet += numerics;
        passwordLength -= 1;
    }
    if (spec === true) {
        finishedPassword += randomSpecialCharacter;
        charSet+= specialCharacters;
        passwordLength -= 1;
    }
    createPassword();
    
};

console.log(getCharSet());

/* 
const createPassword = function() {
    for(i = 0; i < passwordLength; i++) {
        let passwordChar = charSet[Math.floor(Math.random()*charSet.length)];
        finishedPassword += passwordChar;
    };
    return finishedPassword;
    alert(finishedPassword);
};

alert(finishedPassword); */