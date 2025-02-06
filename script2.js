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