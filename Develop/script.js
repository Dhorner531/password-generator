// Assignment Code
var generateBtn = document.querySelector("#generate");


    function getPassword() {
    
// Define password variables 
    var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercaseLetter = "abcdefghijklmnopqrstuvwxyz"
    var numeric = "0123456789"
    var symbols = "!@#$%^&*()-=+<>?/|':[]{}"
    var selectedChar = "";
    var randomPW = "";

// run a prompt that will ask the user how many characters the password needs to be
    var pwLength = prompt(
        "Please enter number of desired characters between 8 and 128."
    );
    
    // create logic that will check that the prompt is no more than 128 character or no less than 8 characters
    if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
        alert("Please enter a valid number of characters between 8 and 128.");        
        return;
    }
// create 4 confirm boxes that need to ask the user if they would like uppercase, lowercase, numbers or special characters in their password
   else {
    var upperOptions = confirm("Do you want upper case letters? OK for yes, Cancel for no.");
    var lowerOptions = confirm("Do you want lower case letters? OK for yes, Cancel for no.");
    var numericOptions = confirm("Do you want numbers? OK for yes, Cancel for no.");
    var symbolOptions = confirm("Do you want special characters? OK for yes, Cancel for no.");
    }

    if (upperOptions) {selectedChar += uppercaseLetter;}
    if (lowerOptions) {selectedChar += lowercaseLetter;}
    if (numericOptions) {selectedChar += numeric;}
    if (symbolOptions) {selectedChar += symbols;}

// 1. we will need a available character string 'if the user select the character type'
    for (i = 0; i < pwLength; i++) {

// generate a randomized password: 
        randomPW += selectedChar[Math.floor(Math.random() * selectedChar.length)]
    }
    return(randomPW);
}

// Write password to the #password input
    var passwordText = document.querySelector("#password");
    function writePassword(randomPW) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = randomPW;
}

// Add event listener to generate button.
    generateBtn.addEventListener("click", function () { writePassword(getPassword()) });

    