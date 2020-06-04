// Assignment Code
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numerics = '0123456789';
const specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
const randomLowercaseLetter = lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)];
const randomUppercaseLetter = uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)];
const randomNumeric = numerics[Math.floor(Math.random()*numerics.length)];
const randomSpecialCharacter = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

let charSet = '';
let finishedPassword = '';

/* Variables that need defining from user input on DOM elements and button push */
let includeLowercase
let includeUppercase
let includeNumeric
let includeSpecial
let passwordLength

const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = function() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
