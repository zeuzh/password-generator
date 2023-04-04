// Assignment Code
var generateBtn = document.querySelector("#generate");
// "ABC" => [ "A", "B", "C"]
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
var symbols = "~!@#$%^&*()_+".split('')
var numbers = "1234567890".split('')

function generatePassword() {
  
  var passwordOptions = [];
  var ans = ""
  
  var passwordLength = prompt("How long would you like your password to be? 8-128")
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8-128 characters. Please retry.")
    generatePassword()
  }
  var includeUpper = confirm("Do you want to include Uppercase in your password");
  var includeLower = confirm("Do you want to include Lowercase in your password");
  var includeSymbols = confirm("Do you want to include Symbols in your password");
  var includeNumbers = confirm("Do you want to include Numbers in your password");
  
  if (includeUpper){
    passwordOptions = passwordOptions.concat(upperCase)
  }
  if (includeLower){
    passwordOptions = passwordOptions.concat(lowerCase)
  }
  if (includeSymbols){
    passwordOptions = passwordOptions.concat(symbols)
  }
  if (includeNumbers){
    passwordOptions = passwordOptions.concat(numbers)
  }
  if(passwordOptions.length == 0) {
    alert("You must choose atleast one type of character, to generate a password. Please retry.")
    generatePassword()
  } else {
    for(let i = 0; i < passwordLength; i++) {
      var rdm = Math.floor(Math.random() * passwordOptions.length)
      ans += passwordOptions[rdm]
    }
  }
  return ans

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
