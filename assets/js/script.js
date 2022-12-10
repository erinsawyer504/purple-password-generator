// Assignment code here
let nums = "0123456789";
let lower= "abcdefghijklmnopqrstuvwxyz";
let upper= "ABCDEFGHIJKLMNOPQRSTUVWYZY";
let symbols= '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
let genpassword = "";
let useLC = false;
let useUC = false;
let useNum = false;
let useSym = false;


//setting up prompts for user to answer
let pwLength = window.prompt ("How long do you want your password to be?, Enter between 8 & 128 characters"); 
let askLC = prompt ("Do you want to include lowercase letters?");
let askUC = prompt ("Do you want to include uppercase letters?");
let askNum = prompt ("Do you want to include numeric characters?");
let askSym = prompt ("Do you want to include special characters?");

//Ends function if user presses cancel
/*if (pwLength === null) {
  return;
};*/

//turns the pwLength from a string to a number
let numPwLength = parseInt(pwLength);

//setting answers to prompts to all lower case
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

//Setting up functions
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
console.log(genRandomLC());
console.log(genRandomUC());
console.log(genRandomNumber());
console.log(genRandomSymbol());


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
