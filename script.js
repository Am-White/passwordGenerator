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

// Function for user prompts-- nested function for getting charSet in userPreference for now
const userPreference = function() {
    alert('Welcome to password generator.');
    includeLowercase = confirm('Click "OK" if you would like your password to contain lowercase letters.');
    includeUppercase = confirm('Click "OK" if you would like your password to contain uppercase letters.');
    includeNumeric = confirm('Click "OK" if you would like your password to include numeric characters.');
    includeSpecial = confirm('Click "OK" if you would like your password to include special characters.');
    passwordLength = prompt('How long would you like your password to be? Enter a number from 8 to 128 and click "OK".');
    getCharSet(includeLowercase, includeUppercase, includeNumeric, includeSpecial);
};

function getCharSet(lower, upper, num, spec) {
    let charSet = '';
    let finishedPassword = '';
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
    
    generatePassword(charSet, finishedPassword);
    console.log(charSet);
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


