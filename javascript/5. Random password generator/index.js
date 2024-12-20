function main(){
    const resultField = document.getElementById("resultField");
    const inputField = document.getElementById("inputField").value;

    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    if(inputField <= 0){
        alert(`(password length must be at least 1)`);
    } else if(!(includeLowercase || includeUppercase || includeNumbers || includeSymbols)){
        alert(`(At least 1 set of character needs to be selected)`);
    } else{
        resultField.textContent = generatePassword(inputField, includeLowercase, includeNumbers, includeSymbols, includeUppercase);
    }

    console.log(inputField);
}

function generatePassword(length, includeLowercase, includeNumbers, includeSymbols, includeUppercase){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^*()_+";
      
    let allowedChars = "";
    let password = "";
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;
}
