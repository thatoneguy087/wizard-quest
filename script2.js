'use strict'

const gameContainer = document.querySelector('.game-container');
const gameOverText = document.getElementById('game-over');
const gamePrompt = document.querySelector('#prompt');
const choiceSelection = document.querySelector('.choice-selection');
gameOverText.style.visibility = 'hidden';

let playerChoice;

const gameStart = [
  '0',
  'wakeup',
  'stepforward',
  '1a',
  'light',
  '1b',
  'nap',
  '1c'
]

function setButtonOptions(game) {
  for (let i = 2; i < game.length; i+=2) {
    let btn = document.createElement('button');
    btn.textContent = game[i];
    let btnClass = game[i+1];
    btn.classList.add(btnClass);
    choiceSelection.appendChild(btn);
  }
}

function setGamePrompt(text) {
  gamePrompt.textContent = text;
}

function setGame(game) {
  setGamePrompt(game[1]);
  setButtonOptions(game);
}


function playGame() {
  setGame(gameStart);
}

choiceSelection.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  };

  playerChoice = Number(e.target.classList[0]);
  switch (playerChoice) {
    case 1:
      console.log('btn1');
      break;
    case 2:
      console.log('btn2');
      break;
    case 3:
      console.log('btn3');
      break;
    case 4:
      console.log('btn4');
      break;
    default:
      alert('Unknown error has occured');
  }
});

playGame();