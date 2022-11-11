// Assignment code here

var passNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var passUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var passLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var passSymbols = ['!', "'", '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];


//gives random integer using min and max values
function randomInteger(min, max) {
    if (!max){
        max = min;
        min = 0;
    }
    var random = Math.random();
    return Math.floor(min*(1 - random) + random * max)
}

// Using random integer above to grab a random item
function randomItem(list) {
    return list[randomInteger(list.length)];
}

//Stared when user hits "Generate Password" button
function generatePassword(){
    var userInput = prompt("How many characters do you want your password to be?");
    var passwordLength = parseInt(userInput); //using parseInt to turn string into and integer

    //Throws an error if user tries to enter something that is not a number(NaN)
    if(isNaN(passwordLength)) {
        alert("Length of password must be a number!");
        return; //exits the program
    }

    //Throws error if user tries to enter number below 8, or greater than 9
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Length of password must be between 8 and 128!");
        return; //exits the program
    }

    //Storing what type of characters are used in the Users Password
    var passHasNumbers = confirm("Click OK to add Numbers to your password!");
    var passHasUpper = confirm("Click OK to add Uppercase letters to your password!");
    var passHasLower = confirm("Click OK to add Lowercase letters to your password!");
    var passHasSymbols = confirm("Click OK to add Symbols to your password!");


    //Checks for no options given during confirmations above
    if (passHasNumbers === false || passHasUpper === false || passHasLower === false || passHasSymbols === false){
      alert("You must choose at least one option!")
      return;
    }

    //Blank array to hold chosen types of characters later in code
    var userOptions = [];

    //If user confirms(makes statement true), will push Numbers to userOptions variable
    if (passHasNumbers === true){
        userOptions.push(passNumber)
    }

        //If user confirms(makes statement true), will push Uppercase letters to userOptions variable
    if (passHasUpper === true){
        userOptions.push(passUpper)
    }

        //If user confirms(makes statement true), will push Lowercase letters to userOptions variable
    if (passHasLower === true){
        userOptions.push(passLower)
    }

        //If user confirms(makes statement true), will push Symbols to userOptions variable
    if (passHasSymbols === true){
        userOptions.push(passSymbols)
    }

    //Blank string to hold password being created by users options
    var userPassword = "";

    //Iterating through randomItem function created earlier to generate a set of randomCharacters based on the number provided by user.
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