// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

return generatePassword();
{

  var includeUpper =confirm("Do you want to include Uppercase in your password");
  var includeLower =confirm("Do you want to include Lowercase in your password");
  var includeSymbols =confirm("Do you want to include Symbols in your password");
  var includeNumbers =confirm("Do you want to include Numbers in your password");

  var passwordOptions ="";

  if (includeUpper){
    passwordOptions +=upperCase
}

if (includeLower){
  passwordOptions += lowerCase
  
}









}