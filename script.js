// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numerics = '0123456789';
const specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
const randomLowercaseLetter = lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)];
const randomUppercaseLetter = uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)];
const randomNumeric = numerics[Math.floor(Math.random()*numerics.length)];
const randomSpecialCharacter = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];


// Initializing empty strings to use later


// Variables that need defining from user input on DOM elements and button push
/* let includeLowercase
let includeUppercase
let includeNumeric
let includeSpecial
let passwordLength
console.log(includeLowercase);
console.log(includeUppercase);
console.log(includeNumeric);
console.log(includeSpecial); */

// Write password to the #password input
/* const writePassword = function() {
    let password = generatePassword();
    const passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}
*/
/* Nested this function in userPreference for now

function getCharSet() {
    if (includeLowercase === true) {
        finishedPassword += randomLowercaseLetter;
        charSet += lowercaseLetters;
        passwordLength -= 1;
    }
    if (includeUppercase === true) {
        finishedPassword += randomUppercaseLetter;
        charSet += uppercaseLetters;
        passwordLength -= 1;
    }
    if (includeNumeric === true) {
        finishedPassword += randomNumeric;
        charSet += numerics;
        passwordLength -= 1;
    }
    if (includeSpecial === true) {
        finishedPassword += randomSpecialCharacter;
        charSet+= specialCharacters;
        passwordLength -= 1;
    }
    
    return charSet;
    console.log(charSet);
}; */

// Function for user prompts-- nested function for getting charSet in userPreference for now
const userPreference = function() {
    alert('Welcome to password generator.');
    includeLowercase = confirm('Would you like your password to contain lowercase letters?');
    includeUppercase = confirm('Would you like your password to contain uppercase letters?');
    includeNumeric = confirm('Would you like your password to include numeric characters?');
    includeSpecial = confirm('Would you like your password to include special characters?');
    passwordLength = prompt('How long would you like your password to be? Enter a number from 8 to 128.');
    let charSet = '';
    let finishedPassword = '';
    if (includeLowercase === true) {
        finishedPassword += randomLowercaseLetter;
        charSet += lowercaseLetters;
        passwordLength -= 1;
    }
    if (includeUppercase === true) {
        finishedPassword += randomUppercaseLetter;
        charSet += uppercaseLetters;
        passwordLength -= 1;
    }
    if (includeNumeric === true) {
        finishedPassword += randomNumeric;
        charSet += numerics;
        passwordLength -= 1;
    }
    if (includeSpecial === true) {
        finishedPassword += randomSpecialCharacter;
        charSet+= specialCharacters;
        passwordLength -= 1;
    }
    console.log(includeLowercase);
    console.log(includeUppercase);
    console.log(includeNumeric);
    console.log(includeSpecial);
    // Callback to generatePassword function defined below
    console.log(charSet);
    generatePassword(charSet, finishedPassword);
};

// Event listener on "Generate Password" button that initiates process of user selecting preferences for password
generateBtn.addEventListener("click", userPreference);

// Function for looping through possible
generatePassword = (x, y) => {
    for(i = 0; i < passwordLength; i++) {
        let passwordChar = x[Math.floor(Math.random()*x.length)];
        y += passwordChar;
    };
    passwordText.innerHTML = y;
};


