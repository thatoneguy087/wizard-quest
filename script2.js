'use strict'

const gameContainer = document.querySelector('.game-container');
const gameOverText = document.getElementById('game-over');
const gamePrompt = document.querySelector('#prompt');
const choiceSelection = document.querySelector('.button-container');
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

function setBackground(img) {
  gameContainer.style.backgroundImage = `url('./images/${img}.jpeg')`;
}

//GAME SETUP
setGamePrompt(gameStart[1]);
setButtons(gameStart);
setBackground(gameStart[0]);


choiceSelection.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  };
  playerChoice = e.target.classList[0];
  let gameChange = allOptions.find((match) => match[0] === playerChoice);
  setGamePrompt(gameChange[1]);
  setBackground(gameChange[0]);
  setButtons(gameChange);
});