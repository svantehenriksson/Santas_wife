// src/StoryData.js

const StoryData = [
  {
    image: '/image1.jpeg', // Ensure this file is in the public folder
    sentences: [
      { speaker: 'Myyjä', words: [{ fi: 'Moi', en: 'Hi' }] },
      { speaker: 'Sinä', words: [{ fi: 'Moi', en: 'Hi' }] },
      { speaker: 'Myyjä', words: [{ fi: 'Mitä', en: 'What' }, { fi: 'saisi', en: 'would' }, { fi: 'olla?', en: 'you like?' }] },
    ],
    choices: [
      { label: 'Pizza', next: 1 },
      { label: 'Kebab', next: 2 },
    ],
  },
  {
    image: '/image1.jpeg',
    sentences: [
      { speaker: 'Myyjä', words: [{ fi: 'Mikä', en: 'Which' }, { fi: 'pizza', en: 'pizza' }, { fi: 'haluat?', en: 'would you like?' }] },
    ],
    choices: [
      { label: 'Kebab-pizza', next: 3 },
      { label: 'Margherita', next: 3 },
    ],
  },
  {
    image: '/image1.jpeg',
    sentences: [
      { speaker: 'Myyjä', words: [{ fi: 'Hyvä', en: 'Good' }, { fi: 'valinta!', en: 'choice!' }] },
    ],
    next: 0, // Return to the first scene for looping purposes
  },
];

export default StoryData;
