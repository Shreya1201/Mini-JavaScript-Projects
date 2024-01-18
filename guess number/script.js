const random=parseInt(Math.random()*100+1)
console.log(random)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess))
    {
        alert('Please enter a valid number')
    }
    else if(guess>0 && guess<=100)
    {
        if(guess==random)
        {
            displayMessage(`You Won`)
            endGame()
        }
        else if(numGuess<11){
            prevGuess.push(guess)
            guessSlot.innerHTML=`${prevGuess}`
            numGuess=numGuess+1
            if (guess < random) {
                displayMessage(`Number is TOOO low`);
            } 
            else if (guess > random) {
                displayMessage(`Number is TOOO High`);
            }
        }
        else if(numGuess==11)
        {
            displayMessage(`Gsme Over, Random Number was ${random}`)
            endGame()
        }
    }
    else{
        alert('Enter valid number')
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
}

function endGame(){
    userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

