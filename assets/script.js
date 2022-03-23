// Assignment Code
// DOM elements
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelectoy("#password");

var numbers = "0123456789"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var specialChars = "!@#$%^&*()"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


// Object containing all the random character generating functions
var randomFunc = {
  lower: randomLowercase,
  upper: randomUppercase,
  number: randomNumber,
  symbol: randomSymbol
}

// Generator functions using character codes
function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97)
}

function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65)
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) +48)
}

function randomSymbol() {
  var symbols = "!@#$%^&*()"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var numChars = window.prompt("How many characters (choose between 8 and 128)?");
  console.log(numChars);
  var expression1 = (numChars < 8);
  var expression2 = (numChars > 128);
  console.log(expression1);
  console.log(expression2);
  if (expression1 || expression2) {
    return;
  }
  var useNumbers = window.confirm("Include numbers?");
  console.log(useNumbers);
  var useLowercase = window.confirm("Include lowercase?");
  console.log(useLowercase);
  var useUppercase = window.confirm("Include uppercase?");
  console.log(useUppercase);
  var useSpecialChars = window.confirm("Include special characters?");
  console.log(useSpecialChars);

  return "temporaryPassword";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
