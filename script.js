// Assignment code here

var passNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var passUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var passLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var passSymbols = ['!', "'", '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

function randomInteger(min, max) {
    if (!max){
        max = min;
        min = 0;
    }
    var random = Math.random();
    return Math.floor(min*(1 - random) + random * max)
}

function randomItem(list) {
    return list[randomInteger(list.length)];
}

function generatePassword(){
    var userInput = prompt("How many characters do you want your password to be?");
    var passwordLength = parseInt(userInput); 

    if(isNaN(passwordLength)) {
        alert("Length of password must be a number!");
        return;
    }

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Length of password must be between 8 and 128!");
        return;
    }

    var passHasNumbers = confirm("Click OK to add Numbers to your password!");
    var passHasUpper = confirm("Click OK to add Uppercase letters to your password!");
    var passHasLower = confirm("Click OK to add Lowercase letters to your password!");
    var passHasSymbols = confirm("Click OK to add Symbols to your password!");

    if (passHasNumbers === false && passHasUpper && false && passHasLower === false && passHasSymbols === false){
      alert("You must choose at least one option!")
      return;
    }

    var userOptions = [];

    if (passHasNumbers === true){
        userOptions.push(passNumber)
    }

    if (passHasUpper === true){
        userOptions.push(passUpper)
    }

    if (passHasLower === true){
        userOptions.push(passLower)
    }

    if (passHasSymbols === true){
        userOptions.push(passSymbols)
    }

    var userPassword = "";

    for (var i = 0; i < passwordLength; i++){
        var randomList = randomItem(userOptions);
        var randomCharacter = randomItem(randomList);
        userPassword += randomCharacter;
    }

    return userPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);