// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  const types = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numeric: "0123456789",
    symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }
  const getType = [
    function upperCase() {
      return types.upperCase[Math.floor(Math.random() * types.upperCase.length)];
    },

    function lowerCase() {
      return types.lowerCase[Math.floor(Math.random() * types.lowerCase.length)];
    },

    function numeric() {
      return types.numbers[Math.floor(Math.random() * types.numbers.length)];
    },

    function symbols() {
      return types.symbols[Math.floor(Math.random() * types.symbols.length)];
    }
  ];
  
  function generatePassword() 
  {

    let numeric = document.getElementById("numeric").checked;
    let symbol = document.getElementById("symbols").checked;
    let upper = document.getElementById("upperCase").checked;
    let lower = document.getElementById("lowerCase").checked;

 
    if ( number + symbol + upper + lower === 0) {
        alert("No box chosen. Please select at least one box!");
        return;
      }
  }

}

generateBtn.addEventListener("click", writePassword);
