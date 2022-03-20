// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = "0123456789"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var specialChars = "!@#$%^&*()"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

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
