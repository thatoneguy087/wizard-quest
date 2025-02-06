'use strict'
const allOptions = [];

const gameStart = [
  '0',
  'You wake up in total darkness. It smells weird and the floor is wet.',
  '1',
  'Take a step forward in the dark',
  '2',
  'Cast lesser-fire for light',
  '3',
  'Take a nap'
];
allOptions.push(gameStart);

const gm1 = [
  '1',
  `You try take a step forward in the dark and fall down a hole. Both of your legs are broken and you're bleeding out.`,
  '1a',
  'Bite your tongue off',
  '1b',
  'Yell out for help',
  '1c',
  'Cast a forbidden spell',
  '1d',
  'Try and crawl around'
];
allOptions.push(gm1);

const gm1a = [
  '1a',
  'You bite your tongue off and start bleeding out even more. You die a very slow and painful death.',
  '0',
  'Start Over'
]
allOptions.push(gm1a);

const gm1b = [
  '1b',
  `You yell out in pain but alas, nothing happens.`,
  '1ba',
  'Try yelling out again',
  '1bb',
  'Accept your fate'
];
allOptions.push(gm1b);

const gm1bb = [
  '1bb',
  'You manage to doze off through the pain. You do not wake up again.',
  '0',
  'Start Over'
]
allOptions.push(gm1bb);

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