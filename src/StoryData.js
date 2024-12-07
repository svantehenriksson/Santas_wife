const StoryData = [
  {
    animation: {
    image: process.env.PUBLIC_URL + '/walking.gif',
    duration: 4000, // Duration in milliseconds
    },
    image: process.env.PUBLIC_URL + '/image1.jpeg',
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
    image: process.env.PUBLIC_URL + '/image1.jpeg',
    sentences: [
      { speaker: 'Myyjä', words: [{ fi: 'Mikä', en: 'Which' }, { fi: 'pizza', en: 'pizza' }, { fi: 'haluat?', en: 'would you like?' }] },
    ],
    choices: [
      { label: 'Kebab-pizza', next: 2 },
      { label: 'Margherita', next: 2 },
    ],
  },
];

export default StoryData;
