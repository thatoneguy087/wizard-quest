'use strict'
const allOptions = [];

const gameStart = [
  '0',
  'You wake up in total darkness. It smells weird and the floor is wet.',
  '1',
  'Take a step forward',
  '2',
  'Cast greater-fire',
  '3',
  'Take a nap',
  '4',
  'Cast greater-portal'
];
allOptions.push(gameStart);

//root
const gm1 = [
  '1',
  `You take a step forward and fall down a hole. Both of your legs are broken and you're bleeding out.`,
  '1a',
  'End it. Bite your tongue off',
  '1b',
  'Yell out for help',
  '1c',
  'Cast greater-telportation spell',
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
  `You try to cast greater-teleportation, but you're too weak. You start blacking out. You do not wake up.`,
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
  `You try to cast greater-teleportation, but you're too weak. You start blacking out. You do not wake up.`,
  '0',
  'Start Over'
]
allOptions.push(gm1c);

//ending
const gm1d = [
  '1d',
  'You muster up all of your strength and push yourself forward. Unfortunately you fall down another hole and instantly die.',
  '0',
  'Start Over'
]
allOptions.push(gm1d);

//root 
const gm2 = [
  '2',
  'You cast greater-fire and now have light. You notice a peculiar hole in the ground right in front of you. You also see a path to your left.',
  '2a',
  'Jump down the hole',
  '2b',
  'Follow the left-path',
]
allOptions.push(gm2);

const gm2a = [
  '2a',
  `You jump down the hole. It's way deeper than you thought. You fall to the bottom and break your legs. You're heavily bleeding out.`,
  '1a',
  'End it. Bite your tongue off',
  '1b',
  'Yell out for help',
  '1c',
  'Cast greater-telportation spell',
  '1d',
  'Try and crawl around'
]
allOptions.push(gm2a);

const gm2b = [
  '2b',
  `You go through the path to your left. Still nothing in sight.`,
  '2ba',
  'Continue through the path',
  '2bb',
  'Go back',
]
allOptions.push(gm2b);

const gm2bb = [
  '2bb',
  `You go back. Nothing has changed.`,
  '2a',
  'Jump down the hole',
  '2b',
  'Follow the left-path',
  '3',
  'Take a nap',
  '4z',
  'Cast greater-portal',
]
allOptions.push(gm2bb);

const gm4z = [
  '4z',
  `You can only cast one spell at a time. You instantly die from attempting to cast 2 spells at once.`,
  '0',
  'Start Over'
]
allOptions.push(gm4z);

const gm2c = [
  '2c',
  `You're shrouded in darkness once again.`,
  '1',
  'Take a step forward',
  '2',
  'Cast greater-fire',
  '3',
  'Take a nap',
  '4',
  'Cast greater-portal'
]
allOptions.push(gm2c);

const gm2ba = [
  '2ba',
  `You see light in the distance. An exit!`,
  '2baa',
  'Go to the exit',
  '2bb',
  'Go back',
]
allOptions.push(gm2ba);

const gm2baa = [
  '2baa',
  `You finally made it outside! Finally you can start killing again! (you were thrown in the cave for your heinous crimes against humanity) The end.`,
  '0',
  'Start Over',

]
allOptions.push(gm2baa);

//root
const gm3 = [
  '3',
  'You close your eyes and start taking a nap. You have strange visions or wizard-related things',
  '3a',
  'Dream harder',
  '3b',
  'Wake up'
]
allOptions.push(gm3);

const gm3a = [
  '3a',
  'You start dreaming about a cave. The cave contains horrors beyond your comprehension.',
  '3aa',
  'Dream even harder',
  '3b',
  'Wake up'
]
allOptions.push(gm3a);

//back to start
const gm3b = [
  '3b',
  'You wake up. Nothing has changed.',
  '1',
  'Take a step forward',
  '2',
  'Cast lesser-fire for light',
  '3',
  'Take a nap',
  '4',
  'Cast greater-portal'
]
allOptions.push(gm3b);

const gm3aa = [
  '3aa',
  'You see youself, floating through space.',
  '3aaa',
  'Inspect yourself closer',
  '3b',
  'Wake up'
]
allOptions.push(gm3aa);

const gm3aaa = [
  '3aaa',
  `You inspect your face. Good god you're ugly.`,
  '3aaaa',
  'Inspect yourself even closer',
  '3b',
  'Wake up'
]
allOptions.push(gm3aaa);

const gm3aaaa = [
  '3aaaa',
  `You've inspected yourself WAY too close and wake youself up. For some reason, you're in a big open field.`,
  '3aaaaa',
  'Relax',
  '3aaaab',
  'Wander around'
]
allOptions.push(gm3aaaa);

const gm3aaaab = [
  '3aaaab',
  'You start wandering around. This field seems endless.',
  '3aaaaa',
  'Relax',
  '3aaaaba',
  'Continue wandering'
];
allOptions.push(gm3aaaab);

const gm3aaaaba = [
  '3aaaaba',
  'You continue wandering around. This field seems endless.',
  '3aaaaa',
  'Relax',
  '3aaaabaa',
  'Continue wandering'
];
allOptions.push(gm3aaaaba);

const gm3aaaabaa = [
  '3aaaabaa',
  `You're still wandering around. This field seems endless.`,
  '3aaaaa',
  'Relax',
  '3aaaaba',
  'Continue wandering'
];
allOptions.push(gm3aaaabaa);

//ending
const gm3aaaaa = [
  '3aaaaa',
  `You lay back down and relax. This is what it's all about. You are one with relaxation. The end.`,
  '0',
  'Start Over'
]
allOptions.push(gm3aaaaa);

//root
const gm4 = [
  '4',
  `You cast greater-portal in front of you. From the small amount of emitted light, you can see that you portal is directly above a very peculiar hole in the ground.`,
  '4a',
  'Try and jump through the portal',
  '4b',
  'Uncast greater-portal'
]
allOptions.push(gm4);

const gm4a = [
  '4a',
  `You miss your jump and fall down the hole. Both of your legs are broken and you're bleeding out`,
  '1a',
  'End it. Bite your tongue off',
  '1b',
  'Yell out for help',
  '1c',
  'Cast teleportation spell',
  '1d',
  'Try and crawl around'
]
allOptions.push(gm4a);

const gm4b = [
  '4b',
  `Back to darkness.`,
  '1',
  'Take a step forward',
  '2',
  'Cast lesser-fire for light',
  '3',
  'Take a nap',
  '4',
  'Cast greater-portal'
]
allOptions.push(gm4b);

