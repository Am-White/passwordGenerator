/* STRINGS FOR POTENTIAL PASSWORD CHARACTERS */
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const integers = '0123456789';

const specialCharacters = '`~!@#$%^&*()_+-=[]\{}|;\':",./<>?"';

/* EMPTY ARRAY THAT POTENTIAL PASSWORDS CHARACTERS WILL BE PUSHED INTO STRING BY STRING */
let charSet = '';

console.log(lowercaseLetters);
console.log(uppercaseLetters);
console.log(integers);
console.log(specialCharacters);

/* VARIABLES HOLDING RANDOM INDEXES FROM A CHARACTER SET STRING */
const randomLowercaseLetter = lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)];

const randomUppercaseLetter = uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)];

const randomInteger = integers[Math.floor(Math.random()*integers.length)];

const randomSpecialCharacter = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];


console.log(randomLowercaseLetter);
console.log(randomUppercaseLetter);
console.log(randomInteger);
console.log(randomSpecialCharacter);

/* FUNCTION COMBINING STRINGS INTO A NEW ARRAY */

/* const potentialPasswordCharacters = function() {
    for (i = 0; i < )
} */