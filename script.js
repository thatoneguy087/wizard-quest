'use strict'

//Useful functions
function setGamePrompt(p) {
  gamePrompt.textContent = p;
}

function setButtons(...btns) {
  let array = [];
  let x = 0;
  for (let btn of btns) {
    choices[x].textContent = (x+1) + ' - ' + btn;
    array.push(choices[x]);
    x++;
  }
  selectionArea.replaceChildren(...array);
}

//This is all just setup.
const gamePrompt = document.querySelector('#game-prompt');
const selectionArea = document.querySelector('.selection-container');
gamePrompt.textContent = 'test';

let playerChoice;
let choice1 = document.createElement('button');
choice1.classList.add('1', 'choice');
choice1.textContent = 'test';

let choice2 = document.createElement('button');
choice2.classList.add('2', 'choice');
choice2.textContent = 'test2';

let choice3 = document.createElement('button');
choice3.classList.add('3', 'choice');
choice3.textContent = 'test3';

let choice4 = document.createElement('button');
choice4.classList.add('4', 'choice');
choice4.textContent = 'test4';

let choices = [choice1, choice2, choice3, choice4];

//setup and start game
function game() {
  gameStart();

  //choices
  selectionArea.addEventListener('click', (e) => {
    const isBtn = e.target.nodeName === 'BUTTON';
    if (!isBtn) {
      return;
    };
    playerChoice = Number(e.target.classList[0]);
    switch (playerChoice) {
      case 1:
        path1();
        break;
      case 2:
        path2();
        break;
      case 3:
        path3();
        break;
      default:
        alert('Unknown error has occured');
    }
  });
}

function gameStart() {
  setGamePrompt('You wake up in total darkness. It smells weird and the floor is wet');
  setButtons('Take a step forward in the dark', 'Cast lesser-fire for light', 'Take a nap');
}

function path1() {
  setGamePrompt(`You try take a setp forward in the dark and fall down a hole. Both of your legs are broken and you're bleeding out`);
  setButtons('Bite your tongue off', 'Yell out for help', 'Cast a forbidden spell', 'Do nothing');
}

function path2() {
  setGamePrompt(`You cast fire and see a hole in the ground right in front of you. "Good thing I didn't try walking in the dark." You notice the path ahead splits into two paths.`);
  setButtons();
}

function path3() {
  setGamePrompt('You go to bed and have strange visions. A gorilla riding a unicycle? Really? Oh my god hes looking at you now. What do you do?');
  setButtons();
}

game();