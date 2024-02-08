function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function guessTheNumber() {
    const randomNumber = generateRandomNumber();
    let userGuess;
    do {
        userGuess = parseInt(prompt("Hay doan so tu 1 den 10"));
        if (userGuess === randomNumber) {
            alert("Ban da nhap dung so");
        } else {
            alert("So ban nhap khong dung, thu lai");
        }
    } while (userGuess !== randomNumber);
}
guessTheNumber();