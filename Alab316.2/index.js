// const app = document.getElementById("app");
// const gameBox = document.createElement('')

const randNum = Math.trunc(Math.random() * 100); //+1 so that we get a number between 1 instead of 0

// console.log(Math.trunc(-1.7))

// console.log(Math.floor(-1.7))

console.log(randNum)
// window.alert("Guess a number between 1 and 100")
let guess;

// console.log(randNum);
// do {
//     guess = parseInt(prompt("guess a number "))
//   if (randNum === guess) {

//     output = "you are such a smart cookie";
//   } else {
//     output = `Sorry the number was ${randNum}`;
//   }
//   window.alert(output);
// } while (randNum !== guess);

//function version

// window.alert(guessNumber)
// function guessNumber(randNum) {
    guess = parseInt(window.prompt('please guess a number between 1-100'))
    console.log(guess);
    let attemptRemaining = 9;
    let returnMessage;
    if (! isNaN(guess)) {
        while(guess !== isNaN && guess !== randNum && attemptRemaining >0) {
            if(guess < randNum) {
                returnMessage = `number is higher than your guess, try again, ${attemptRemaining} attempts left`
            } else {
                returnMessage = `number is lower than your guess, try again, ${attemptRemaining} attempts left`
            }
            attemptRemaining--
            guess = parseInt(window.prompt(`${returnMessage}, please pick a number `))

        }
        if (guess === randNum) {
            window.alert(`you win!! that was ${10-attemptRemaining} guesses`)
        } else {
        returnMessage = `game over, the number was ${randNum}`
        }
        window.alert(returnMessage);
    } else {
        returnMessage= "Please enter a valid number, restart the game"
    }
