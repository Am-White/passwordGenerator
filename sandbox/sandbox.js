/* STRINGS FOR POTENTIAL PASSWORD CHARACTERS */
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const numerics = '0123456789';

const specialCharacters = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

console.log(lowercaseLetters);
console.log(uppercaseLetters);
console.log(numerics);
console.log(specialCharacters);

/* EMPTY STRING THAT POTENTIAL PASSWORDS CHARACTERS WILL BE PUSHED INTO STRING BY STRING */
let charSet = '';

/* EMPTY STRING FOR FINISHED PASSWORD TO END UP IN */

let finishedPassword = '';

/* VARIABLES HOLDING RANDOM INDEXES FROM A CHARACTER SET STRING */
const randomLowercaseLetter = lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)];

const randomUppercaseLetter = uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)];

const randomNumeric = numerics[Math.floor(Math.random()*numerics.length)];

const randomSpecialCharacter = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];


console.log(randomLowercaseLetter);
console.log(randomUppercaseLetter);
console.log(randomNumeric);
console.log(randomSpecialCharacter);

/* FUNCTION COMBINING STRINGS INTO A NEW STRING */

alert('Welcome to password generator.')
let includeLowercase = confirm('Would you like your password to contain lowercase letters?')
let includeUppercase = confirm('Would you like your password to contain uppercase letters?')
let includeNumeric = confirm('Would you like your password to include numeric characters?')
let includeSpecial = confirm('Would you like your password to include special characters?')
let passwordLength = prompt('How long would you like your password to be? Enter a number from 8 to 128.')

console.log(includeLowercase);
console.log(includeUppercase);
console.log(includeNumeric);
console.log(includeSpecial);
console.log(passwordLength);

function getCharSet() {
    if (includeLowercase === true) {
        charSet += lowercaseLetters;
    }
    if (includeUppercase === true) {
        charSet += uppercaseLetters;
    }
    if (includeNumeric === true) {
        charSet += numerics;
    }
    if (includeSpecial === true) {
        charSet+= specialCharacters;
    }
    return charSet;
};

console.log(getCharSet());


for(i = 0; i < passwordLength; i++) {
    let passwordChar = charSet[Math.floor(Math.random()*charSet.length)];
    finishedPassword += passwordChar;
};

console.log(finishedPassword);