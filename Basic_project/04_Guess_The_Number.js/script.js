let RandomNumber = parseInt(Math.random() * 100 + 1)
// console.log(RandomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const GuessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultparas");

const p = document.createElement('p');

let prevGuess = [];
let CountGuess = 1;

let playGame = true;

if (playGame) {
     submit.addEventListener('click', function (e) {
          e.preventDefault;

          const guess = parseInt(userInput.value);

          // console.log(guess);

          ValidityGuess(guess);

     })
}

function ValidityGuess(guess) {
     if (isNaN(guess)) {
          alert('Please enter a valid Number')
     } else if (guess < 1) {
          alert('please enter a number more then 1')
     }else if (guess > 100) {
     alert('please enter a number less then 100')
     }else{
          prevGuess.push(guess);
          if(CountGuess === 11)
          {
               displayGuess(guess);
               displayMessage(`Game was over and random number was ${RandomNumber}`);
               endGame();
          }else{
               displayGuess(guess);
               checkGuess(guess);
          }
     }
}

function checkGuess(guess)
{
     if(guess === RandomNumber)
     {
          displayMessage(`you win`);
          endGame();

     }else if(guess < RandomNumber)
     {
          displayMessage(`you guess is too low`);

     }else if(guess > RandomNumber)
     {
          displayMessage(`you guess is too high`);

     }
}

function displayGuess(guess)
{
     userInput = "";
     GuessSlot.innerHTML += `${guess} ,`;
     CountGuess++;
     remaining.innerHTML = `${11 - CountGuess}`
}

function displayMessage(message) {
     lowOrHi.innerHTML = `<h2>${message} </h2>`
     
}

function endGame() {
     userInput.value = '';
     userInput.setAttribute('disabled' ,'')
     p.classList.add('button');
     p.innerHTML = `<h2 id="newgame>Start New Game</h2>`
     startOver.appendChild(p);
     playGame = false;
     newGame();

}

function newGame() {
     
     const newgame = document.querySelector("#newgame")
     newgame.addEventListener('click', function(e){
         RandomNumber = parseInt(Math.random() * 100 + 1)
          prevGuess = [];
          CountGuess =1;
          GuessSlot.innerHTML ='';
          remaining.innerHTML = `${11 - CountGuess}`;
          userInput.removeAttribute('disabled');
          startOver.removeChild(p);
          playGame = true;
     })
}

