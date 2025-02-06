'use strict'
const allOptions = [];

const gameStart = [
  '0',
  'wakeup',
  '1a',
  'stepforward',
  '1b',
  'light',
  '1c',
  'nap'
];
allOptions.push(gameStart);

const gm1 = [
  '1a',
  'fallintohole',
  '1a1',
  'bitetongue',
  '1a2',
  'yell',
  '1a3',
  'spell'
];
allOptions.push(gm1);

const gm2 = [
  '1a1',
  'You died',
  'reset',
  'Start Over'
]
allOptions.push(gm2);

const gameContainer = document.querySelector('.game-container');
const gameOverText = document.getElementById('game-over');
const gamePrompt = document.querySelector('#prompt');
const choiceSelection = document.querySelector('.choice-selection');
gameOverText.style.visibility = 'hidden';

let playerChoice;

function getGame(playerChoice) {
  for (let game of allOptions) {
    if (playerChoice == game[0]) {
      return game;
    }
    //note for later, this might be an issue but we'll see.
  }
}

function setButtons(game) {
  let btns = [];
  let btnOptions = [];
  for (let i = 3; i < game.length; i+=2) {
    let btn = document.createElement('button');
    btn.textContent = game[i];
    let btnClass = game[i-1];
    btn.classList.add(btnClass);
    btnOptions.push(btnClass);
    // choiceSelection.appendChild(btn);
    btns.push(btn);
  }
  choiceSelection.replaceChildren(...btns);
  choiceSelection.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    };
  
    playerChoice = e.target.classList[0];
    switch (playerChoice) {
      case btnOptions[0]:
        setGame(getGame(playerChoice));
        break;
      case btnOptions[1]:
        console.log('btn2');
        break;
      case btnOptions[2]:
        console.log('btn3');
        break;
      case btnOptions[3]:
        console.log('btn4');
        break;
      default:
        alert('Unknown error has occured');
    }
  });

}

function setGamePrompt(text) {
  gamePrompt.textContent = text;
}

function setGame(game) {
  setGamePrompt(game[1]);
  setButtons(game);
}


function playGame() {
  setGame(gameStart);
}

playGame();