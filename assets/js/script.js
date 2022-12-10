// Assignment code here
let numsOnly = "0123456789";
let lcOnly= "abcdefghijklmnopqrstuvwxyz";
let ucOnly= "ABCDEFGHIJKLMNOPQRSTUVWYZY";
let symOnly= '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
let genpassword = "";

console.log(symOnly);
//setting up prompts for user to answer
let pwLength = prompt ("How long do you want your password to be?, Enter between 8 & 128 characters"); 
let pwLC = prompt ("Do you want to include lowercase letters?");
let pwUP = prompt ("Do you want to include uppercase letters?");
let pwNum = prompt ("Do you want to include numeric characters?");
let pwSym = prompt ("Do you want to include special characters?");

//turns the pwLength from a string to a number
let numPwLength = parseInt(pwLength);

//setting answers to prompts to all lower case
pwLC = pwLC.toLowerCase();
pwUP = pwUP.toLowerCase();
pwNum = pwNum.toLowerCase();
pwSym = pwSym.toLowerCase();

//setting the answers to the prompt to boolean values


if (numPwLength >7 && numPwLength <129) {
  for (var i=0; i <= numPwLength; i++) {
    var randomNumber = Math.floor(Math.random() * numsOnly);
    password += numsOnly.substring(randomNumber, randomNumber +1);
  };
  console.log(randomNumber);


} else {
  
  console.log ("Please enter a number between 8 and 128");
  
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
