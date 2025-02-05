'use strict'
// function game() {
//   let choice;
//   console.log('Welcome to wizard quest!')
//   let gameStart = prompt("Start the game? (0 = no, 1 = yes");
//   if (gameStart == 1) {
//     console.log('You wake up in total darkness. It smells weird and the floor is wet');
//     console.log('1 - Try and walk around in the dark\n2 - Cast a fire spell for light\n2 - Take a nap');
//     choice = prompt('Make your move');
//     if (choice == 1) {
//       console.log('You try walking around in the dark and fall down a hole. Both of your legs are broken and youre bleeding out')
//     } else if (choice == 2) {
//       console.log('You cast fire and notice a peculiar hole in the ground. "good thing I didnt try walking in the dark." You notice the path ahead splits into two paths. Which path do you take?')
//     } else if (choice == 3) {
//       console.log('You go to bed and have strange visions. A gorilla riding a unicycle? Really? Oh my god hes looking at you now. What do you do?')
//     } else {
//       console.log('Bad decision. Your actions have incurred the wrath of the Krondosmodius, god of choose-your-own-adventure games. You have been sent to 1000 years of purgatory');
//     }

//   } else {
//     console.log('Awww. Maybe next time.');
//   }
// }

// function gameOver() {
//   console.log('GAME OVER. REFRESH THE PAGE TO RESTART.');
// }

// function noDecision() {
//   'Bad decision. Your actions have incurred the wrath of the Krondosmodius, god of choose-your-own-adventure games. You have been sent to 1000 years of purgatory';

// }

// const promptContainer = document.querySelector('.prompt-container');
// const textArea = document.querySelector('.text-area');
// const gameArea = document.querySelector('.game-area');
// const selectionArea = document.querySelector('.selection-container');
// let test = document.createElement('p');
// let test2 = document.createElement('button');


const gamePrompt = document.querySelector('#game-prompt');
const selectionArea = document.querySelector('.selection-container');
console.log(selectionArea);
gamePrompt.textContent = 'test';

function game() {
  let playerChoice;
  let choice1 = document.createElement('button');
  choice1.classList.add('1');
  choice1.textContent = 'test';

  let choice2 = document.createElement('button');
  choice2.classList.add('2');
  choice2.textContent = 'test2';

  let choice3 = document.createElement('button');
  choice3.classList.add('3');
  choice3.textContent = 'test3';

  let choice4 = document.createElement('button');
  choice4.classList.add('4');
  choice4.textContent = 'test4';

  gamePrompt.textContent = 'You wake up in total darkness. It smells weird and the floor is wet';
  selectionArea.appendChild(choice1);
  selectionArea.appendChild(choice2);
  selectionArea.appendChild(choice3);
  selectionArea.appendChild(choice4);

}

function path1() {

}

function path2() {

}

function path3() {

}

game();