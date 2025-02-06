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

//root
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

//ending
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

const gm1ba = [
  '1ba',
  'You try yelling again. In the distance you hear frantic footsteps rapidly approaching.',
  '1baa',
  'Try and cast a spell',
  '1bab',
  'Take a nap and forget about it'
]
allOptions.push(gm1ba);

//ending
const gm1baa = [
  '1baa',
  `You try and cast a spell, but you're too weak. You start blacking out. You do not wake up.`,
  '0',
  'Start Over'
]
allOptions.push(gm1baa);

//ending
const gm1bab = [
  '1bab',
  'You manage to doze off through the pain. You do not wake up.',
  '0',
  'Start Over'
]
allOptions.push(gm1bab);

//ending
const gm1bb = [
  '1bb',
  'You manage to doze off through the pain. You do not wake up again.',
  '0',
  'Start Over'
]
allOptions.push(gm1bb);

//ending
const gm1c = [
  '1c',
  `You try and cast a spell, but you're too weak. You start blacking out. You do not wake up.`,
  '0',
  'Start Over'
]
allOptions.push(gm1c);

//ending
const gm1d = [
  '1d',
  'You must up all of your strength and push yourself forward. Unfortunately you fall down another hole and instantly die.',
  '0',
  'Start Over'
]
allOptions.push(gm1d);
