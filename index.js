const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",
    ")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".",
    "?"];

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let passwordLength = 10;
let tooltip1 = document.getElementById("tooltip")
let tooltip2 = document.getElementById("tooltip2")
let inputLength = document.getElementById("input")

function generatePassword() {
    passwordLength = inputLength.value
    if(passwordLength < 1){
        passwordLength = 1;
        inputLength.value = 1;
    }
    if(passwordLength > 100){
        passwordLength = 100;
        inputLength.value = 100;
    }
    tooltip1.textContent = "Click to copy!"
    tooltip2.textContent = "Click to copy!"
    password1El.textContent = getRandomPassword();
    password2El.textContent = getRandomPassword();
}

function getRandomPassword() {
    let newPassword = "";
    for(let i = 0; i < passwordLength; i++){
        newPassword += getRandomCharacter();
    }
    return newPassword;
}

function getRandomCharacter(){
    let randomNum = Math.floor(Math.random() * characters.length);
    return characters[randomNum]
}

function copyPassword1() {
    navigator.clipboard.writeText(password1El.innerText);
    tooltip1.textContent = "Copied!"
    tooltip2.textContent = "Click to copy!"
}

function copyPassword2() {
    navigator.clipboard.writeText(password2El.innerText);
    tooltip2.textContent = "Copied!"
    tooltip1.textContent = "Click to copy!"
}


