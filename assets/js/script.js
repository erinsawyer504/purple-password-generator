// Assignment code here
var nums = "0123456789";
var lower= "abcdefghijklmnopqrstuvwxyz";
var upper= "ABCDEFGHIJKLMNOPQRSTUVWYZY";
var symbols= '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
var genPassword = "";
var useLC = false;
var useUC = false;
var useNum = false;
var useSym = false;


//setting up prompts for user to answer
var pwLength = window.prompt ("How long do you want your password to be?, Enter between 8 & 128 characters"); 
var askLC = prompt ("Do you want to include lowercase letters?");
var askUC = prompt ("Do you want to include uppercase letters?");
var askNum = prompt ("Do you want to include numeric characters?");
var askSym = prompt ("Do you want to include special characters?");

//turns the pwLength from a string to a number
var numPwLength = parseInt(pwLength);

//Ends function if user presses cancel
/*if (numPwLength < 7 || numPwLength > 129 ) {
  alert ('Please enter a number between 8 and 128');
};*/

//setting answers from prompts to all lower case
askLC = askLC.toLowerCase();
askUC = askUC.toLowerCase();
askNum = askNum.toLowerCase();
askSym = askSym.toLowerCase();

//setting the answers to the prompt to boolean values
if (askLC === "y" || askLC === "yes") {
  useLC = true;
};

if (askUC === "y" || askUC === "yes") {
  useUC = true;
};

if (askNum === "y" || askNum === "yes") {
  useNum = true;
};

if (askSym === "y" || askSym === "yes") {
  useSym = true;
};

//setting the random functions into an object
var randomFunctionGen = {
  lowerf: genRandomLC,
  upperf: genRandomUC,
  numberf: genRandomNumber,
  symbolf: genRandomSymbol,
}

//Setting up the generate Password Function
function generatePassword(useLC, useUC, useNum, useSym, numPwLength) {
  var typesCount = useLC + useUC + useNum + useSym;
  var typesArr = [{useLC}, {useUC}, {useNum}, {useSym}]. filter
  (item => Object.values(item)[0]);

 for (var i = 0; i < numPwLength; i += typesCount) {
    typesArr.forEach(type => {
        var randomFunctionName = Object.keys(type)[0];
        genPassword += randomFunctionGen[randomFunctionName]();
    });
  }


}

//Setting up functions to generate random numbers/letters/symbols
function genRandomLC () {
  return lower[Math.floor(Math.random() * lower.length)];
}

function genRandomUC () {
  return upper[Math.floor(Math.random() * upper.length)];
}

function genRandomNumber() {
  return nums[Math.floor(Math.random() * nums.length)];
}

function genRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(useLC, useUC, useNum, useSym, numPwLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
