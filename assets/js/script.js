// define character Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = [" ", "!", "#", "\"", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "^", "_", "`", "{", "|", "}", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = alphaLower.map(function(x){return x.toUpperCase();})
var charList = []; // declaring here so all functions can access
var randomPass = [];

function generatePassword() {
  charList = []; // this clears the array if you want to rerun 
  randomPass = [];
  var passLength = window.prompt("Choose password length. It must be 8 to 128 characters long.");

  // conditional recursive to validate password length
  if (passLength < 8 || passLength > 128) {
    window.alert("You need to provide a number between 8 and 128.");
    return generatePassword();
  }
  
  // call function to select character arrays to use
  selectCharacters();

  //generate random password
  for (var i = 0; i < passLength; i++) {
    index = (Math.floor(Math.random() * charList.length));
    randomPass = randomPass.concat(charList[index]);
  }

  return randomPass.join(""); //join "" removes commas from array
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// select characters to include in password
function selectCharacters() {
  var includeNums = window.confirm("Choose OK if you want the password to include numbers.");
  var includeUpper = window.confirm("Choose OK if you want the password to include uppercase characters.");
  var includeLower = window.confirm("Choose OK if you want the password to include lowercase characters.");
  var includeSpecial = window.confirm("Choose OK if you want the password to include special characters.");
  // validate input
  if (!includeNums && !includeLower && !includeUpper && !includeSpecial) {
      window.alert("You must select OK for at least one option.");
      return selectCharacters();
    }
  
  // build array of characters selected
  if (includeNums) {
    charList = charList.concat(number);
  }
  if (includeLower) {
    charList = charList.concat(alphaLower);
  }
  if (includeUpper) {
    charList = charList.concat(alphaUpper);
  }
  if (includeSpecial) {
    charList = charList.concat(specialCharacter);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
