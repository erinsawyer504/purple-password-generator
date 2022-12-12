// Assignment code here
var nums = "0123456789";
var lower= "abcdefghijklmnopqrstuvwxyz";
var upper= "ABCDEFGHIJKLMNOPQRSTUVWYZY";
var symbols= '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
//var password = "";
var useLC = false;
var useUC = false;
var useNum = false;
var useSym = false;
var numPwLength = 0;

//setting up prompts for user to answer
while (numPwLength < 8 || numPwLength >128 ) {
  pwLengthRaw = prompt ("How long do you want your password to be?, Enter between 8 & 128 characters");
  numPwLength = +pwLengthRaw;  //parseInt(pwLength)  //console.log(typeof pwlength)
}

var askLC = prompt ("Do you want to include lowercase letters?");
var askUC = prompt ("Do you want to include uppercase letters?");
var askNum = prompt ("Do you want to include numeric characters?");
var askSym = prompt ("Do you want to include special characters?");

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

//setting up the password pool to include the different criteria based on if the user selected yes
var pwPool = '';
    
if (useLC == true){
    pwPool += lower;
}
    
if (useUC == true){
    pwPool += upper;
}
    
if (useNum == true){
    pwPool += nums;
}
    
if(useSym == true){
    pwPool += symbols;
 }

function randomChars(numPwLength){
    return Math.floor(Math.random()*(numPwLength) + 1);
}
    
function generatePassword() {
    var password = "";
    for (var i=0; i < numPwLength; i+= 1) {
      password += pwPool[randomChars(pwPool.length -1)]
    }
    return password;

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