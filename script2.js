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
  '0',
  'Start Over'
]
allOptions.push(gm2);

const gameContainer = document.querySelector('.game-container');
const gameOverText = document.getElementById('game-over');
const gamePrompt = document.querySelector('#prompt');
const choiceSelection = document.querySelector('.choice-selection');
gameOverText.style.visibility = 'hidden';

let playerChoice;

function setButtons(game) {
  let btns = [];
  let btnOptions = [];
  for (let i = 3; i < game.length; i+=2) {
    let btn = document.createElement('button');
    btn.textContent = game[i];
    let btnClass = game[i-1];
    btn.classList.add(btnClass);
    btnOptions.push(btnClass);
    btns.push(btn);
  }
  choiceSelection.replaceChildren(...btns);
}

function setGamePrompt(text) {
  gamePrompt.textContent = text;
}

//GAME SETUP
setGamePrompt(gameStart[1]);
setButtons(gameStart);


choiceSelection.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  };
  playerChoice = e.target.classList[0];
  let gameChange = allOptions.find((match) => match[0] === playerChoice);
  setGamePrompt(gameChange[1]);
  setButtons(gameChange);
});