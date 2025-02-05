'use strict'
function game() {
  let choice;
  console.log('Welcome to wizard quest!')
  let gameStart = prompt("Start the game? (0 = no, 1 = yes");
  if (gameStart == 1) {
    console.log('You wake up in total darkness. It smells weird and the floor is wet');
    console.log('1 - Try and walk around in the dark\n2 - Cast a fire spell for light\n2 - Take a nap');
    choice = prompt('Make your move');
    if (choice == 1) {
      console.log('You try walking around in the dark and fall down a hole. Both of your legs are broken and youre bleeding out')
    } else if (choice == 2) {
      console.log('You cast fire and notice a peculiar hole in the ground. "good thing I didnt try walking in the dark." You notice the path ahead splits into two paths. Which path do you take?')
    } else if (choice == 3) {
      console.log('You go to bed and have strange visions. A gorilla riding a unicycle? Really? Oh my god hes looking at you now. What do you do?')
    } else {
      console.log('Bad decision. Your actions have incurred the wrath of the Krondosmodius, god of choose-your-own-adventure games. You have been sent to 1000 years of purgatory');
    }

  } else {
    console.log('Awww. Maybe next time.');
  }
}

function gameOver() {
  console.log('GAME OVER. REFRESH THE PAGE TO RESTART.');
}

console.log(game());

let gameArea = document.querySelector('.game-area');
let test = document.createElement('p');
let textContent = document.createTextNode('This is a test!')
test.appendChild (textContent);
gameArea.appendChild(test);
console.log(gameArea);


  