'use strict'

const gameContainer = document.querySelector('.game-container');
const gameOverText = document.getElementById('game-over');
const gamePrompt = document.querySelector('#prompt');
const choiceSelection = document.querySelector('.choice-selection');
gameOverText.style.visibility = 'hidden';

const gameStart = [
  0,
  0,
  'wakeup',
  'stepforward',
  'light',
  'nap'
]

function setButtonOptions(options) {
  for (let i = 3; i < options.length; i++) {
    let button = document.createElement('button');
    button.textContent = options[i];
    choiceSelection.appendChild(button);
  }
}

function setGamePrompt(text) {
  gamePrompt.textContent = text;
}

function setGame(game) {
  setGamePrompt(game[2]);
  setButtonOptions(game);
}


function playGame() {
  setGame(gameStart);
}

playGame();