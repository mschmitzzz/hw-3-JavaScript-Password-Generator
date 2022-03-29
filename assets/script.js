var passwordLength = 0;
var chosenCharsArr = [];

var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "/", ">", "<"];
var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Assignment Code
// DOM elements
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
    var newPassword = generatePassword();
    passwordText.value = newPassword;
}

function generatePassword() {
  var password = "";
  chosenCharsArr = [];
  passwordLength = (window.prompt("How many characters do you want your password to be (choose between 8 and 128)?"));
  console.log(passwordLength);
  console.log(typeof passwordLength);
  if (isNaN(passwordLength) ) {
    alert("Please enter a number between 8 and 128");
    return;
  }
  var expression1 = (passwordLength < 8);
  var expression2 = (passwordLength > 128);
  console.log(expression1);
  console.log(expression2);
  if (expression1 || expression2) {
    alert("Please enter a number between 8 and 128");
    return;
  }
  var useNumbers = window.confirm("Do you want to use numbers in your password?");
  console.log(useNumbers);
  if (useNumbers) {
    chosenCharsArr = chosenCharsArr.concat(numArr);
  }
  var useLowercase = window.confirm("Do you want to use lowercase letters in your password?");
  console.log(useLowercase);
  if (useLowercase) {
    chosenCharsArr = chosenCharsArr.concat(lowercaseArr);
  }
  var useUppercase = window.confirm("Do you want to use uppercase letters in your password?");
  console.log(useUppercase);
  if (useUppercase) {
    chosenCharsArr = chosenCharsArr.concat(uppercaseArr);
  }
  var useSpecialChars = window.confirm("Do you want to use special characters in your password?");
  console.log(useSpecialChars);
  if (useSpecialChars) {
    chosenCharsArr = chosenCharsArr.concat(specialCharArr);
  }
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * chosenCharsArr.length);
    password = password + chosenCharsArr[randomIndex];
  }
  return password;
}
 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);