// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for the different questions asked in the prompt windows, the special characters, letters and numbers are present. 

var specialChar = ["#","!","@","$","%","^","&",".","+","*"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var criteria = {
  passLength: 0,
  lowerCase: true,
  upperCase: true, 
  specialChar: true,
  number: true
}

// function is created here for the randomization of the password and pushes out the final password.

// Write password to the #password input
var generatePassword = function(){
  var passArray = [];
  var finalPass = [];
  
  if (criteria.upperCase) {
    passArray = passArray.concat(upperCase);
  }

  if (criteria.lowerCase) {
    passArray = passArray.concat(lowerCase);
  }

  if (criteria.specialChar) {
    passArray = passArray.concat(specialChar);
  }

  if (criteria.number) {
    passArray = passArray.concat(number);
  }

  for (let i = 0; i < criteria.passLength; i++){
    finalPass.push(passArray[Math.floor(Math.random() * passArray.length)]);
  }

  return finalPass.join("");


}

// Function put in place and the prompt windows that show up asking the user for characters contained and which variables from earlier they would like to apply.

function writePassword() {

  var passwordLength = function() {
    var x = window.prompt("How many characters will your password contain?");

   if (x >= 8 && x <= 128){
    criteria.passLength = x;
   } else if (x == null){
    return;
   } else {
    window.alert("Your password must have at least 8 characters and at most 128 characters.");
    passwordLength();
    return;
   }
  }
  passwordLength();

  var passwordUp = function(){
    var upper = window.confirm("Do you want upper case letters?");
    criteria.upperCase = upper;
  }
  passwordUp();

  var passwordDown = function(){
    var lower = window.confirm("Do you want lower case letters?");
    criteria.lowerCase = lower;
  }
  passwordDown();

  var passwordSpecial = function(){
    var special = window.confirm("Do you want special characters?");
    criteria.specialChar = special;
  }
  passwordSpecial();
    
  var passwordNumber = function(){
    var number = window.confirm("Do you want numbers?");
    criteria.number = number;
  }
  passwordNumber();
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

