// Initializing global variables; the first two allow me to write JavaScript that interacts with those DOM elements; the next 4 are strings that will be used to define the potential characters used in the randomly generated password
const startButton = document.querySelector("#generate");
const pwText = document.querySelector("#password");

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numerics = '0123456789';
const specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

// Function for user prompts with conditionals ensuring the user selects options within the guidelines; upon valid selection, function calls on the getCharSet function next
const userPreference = function() {
    alert('Welcome to password generator.');
    includeLowercase = confirm('Click "OK" if you would like your password to contain lowercase letters.');
    includeUppercase = confirm('Click "OK" if you would like your password to contain uppercase letters.');
    includeNumeric = confirm('Click "OK" if you would like your password to include numeric characters.');
    includeSpecial = confirm('Click "OK" if you would like your password to include special characters.');
    if ((includeLowercase !== true && includeUppercase !== true && includeNumeric !== true && includeSpecial !== true)) {
        alert('You must select at least 1 character type. Please start over.');
        userPreference();
    }
    else {
        passwordLength = prompt('How long would you like your password to be? Enter a number from 8 to 128 and click "OK".');
        if (passwordLength < 8 || passwordLength > 128) {
            alert('Invalid password length. Please start over and enter a number from 8 to 128.');
            userPreference();
        }
        else if (!Number.isInteger(Number(passwordLength))) {
            alert('Invalid password length. Please start over and enter a number from 8 to 128.');
            userPreference();
        }
        else {
            getCharSet(includeLowercase, includeUppercase, includeNumeric, includeSpecial);
        }
    }
};

// This function evaluates the user responses and combines the selected character types into one string that will be used in the next function; it also adds a random index of each character type string to the finished password and subtracts 1 from the passwordLength if true, so the final password is guaranteed to contain at least one of each selected character type; it then calls on the last function in the program-- generatePassword
function getCharSet(lower, upper, num, spec) {
    let charSet = '';
    let finishedPassword = '';
    let randomLowercaseLetter = lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)];
    let randomUppercaseLetter = uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)];
    let randomNumeric = numerics[Math.floor(Math.random()*numerics.length)];
    let randomSpecialCharacter = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
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
};

// Function that chooses a random index from the completed charSet string that was formulated in the getCharSet function and adds it to the finishedPassword-- it then iterates through until the passwordLength reaches desired length and displays the finishedPassword to the DOM for the user to see
generatePassword = (x, y) => {
    let i = 0;
    while(i < passwordLength) {
        let passwordChar = x[Math.floor(Math.random()*x.length)];
        y += passwordChar;
        i++
    };
    pwText.innerHTML = y;
};

// Event listener on "Generate Password" button that initiates process of user selecting preferences for password when button is clicked; must be after userPreference function so that function is defined when the event listener calls on it
startButton.addEventListener("click", userPreference);