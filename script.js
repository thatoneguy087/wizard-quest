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

//Useful functions
function setGamePrompt(p) {
  gamePrompt.textContent = p;
}

function setButtons(...btns) {
  let array = [];
  let x = 0;
  for (let btn of btns) {
    choices[x].textContent = btn;
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
  //setup prompts and whatnot
  gamePrompt.textContent = 'You wake up in total darkness. It smells weird and the floor is wet';

  choice1.textContent = "1 - Try and walk around in the dark";
  choice2.textContent = "2 - Cast a fire spell for light";
  choice3.textContent = "3 - Take a nap";

  selectionArea.appendChild(choice1);
  selectionArea.appendChild(choice2);
  selectionArea.appendChild(choice3);

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

function path1() {
  setGamePrompt('You try walking around in the dark and fall down a hole. Both of your legs are broken and youre bleeding out');
  setButtons('1 - Bite your tongue off', '2 - Yell out for help', '3 - Cast a forbidden spell', '4 - Do nothing');
}

function path2() {
  console.log('2nd');
}

function path3() {
  console.log('bababooey');
}

game();