const StoryData = [
  {
    image: process.env.PUBLIC_URL + '/mousie.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Mikä', en: 'Which' }, { fi: 'eläin', en: 'animal' }, { fi: 'tämä', en: 'this '}, { fi: 'on?', en: 'is?' }] },
    ],
    choices: [
      { label: 'Hiiri', next: 2 },
      { label: 'Koira', next: 1 },
    ],
  },

  {
    image: process.env.PUBLIC_URL + '/gameover.webp',
    sentences: [
      { speaker: 'Peli ohi - Game over', words: [{ fi: 'Vastasit', en: 'You answered' }, { fi: 'väärin.', en: 'wrong.' }, { fi: 'Paina', en: 'Click '}, { fi: 'linkkejä', en: 'the links' }, { fi:'alla.', en:'below.'}] },
    ],
    choices: [
      { label: 'Alkuun - To the beninging', next: 0 },
    ],
  },

  {
    image: process.env.PUBLIC_URL + '/mousie.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Oikein!', en: 'Correct!' }] },
      { speaker: 'Kysymys', words: [{ fi: 'Paljonko', en: 'How much' }, { fi: 'hiiri', en: 'mouse' }, { fi: 'painaa?', en: 'weighs?' }] }
    ],
    choices: [
      { label: '20 grammaa', next: 3 },
      { label: '20 kilogrammaa', next: 1 }
    ]
  },


  {
    image: process.env.PUBLIC_URL + '/mousie.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Oikein!', en: 'Correct!' }, { fi: 'Hiiri', en: 'A mouse' }, { fi: 'on', en: 'is' }, { fi: 'tosi', en: 'really' }, { fi: 'pieni', en: 'small' }] },
      { speaker: 'Kysymys', words: [{ fi: 'Nukkuuko', en: 'Does it sleep?' }, { fi: 'hiiri', en: 'mouse' }, { fi: 'talviunta?', en: 'hibernate?' }] }
    ],
    choices: [
      { label: 'Kyllä', next: 1 },
      { label: 'Ei', next: 4 }
    ]
  },


  {
    image: process.env.PUBLIC_URL + '/owl.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Oikein!', en: 'Correct!' }] },
      { speaker: 'Kysymys', words: [{ fi: 'Mikä', en: 'Which' }, { fi: 'eläin', en: 'animal' }, { fi: 'tämä', en: 'this' }, { fi: 'on?', en: 'is?' }] }
    ],
    choices: [
      { label: 'Varis', next: 1 },
      { label: 'Pöllö', next: 5 }
    ]
  },

  {
    image: process.env.PUBLIC_URL + '/owl.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Oikein!', en: 'Correct!' }] },
      { speaker: 'Kysymys', words: [{ fi: 'Mitä', en: 'What' }, { fi: 'pöllö', en: 'owl' }, { fi: 'syö?', en: 'eats?' }] }
    ],
    choices: [
      { label: 'Hiiriä', next: 6 },
      { label: 'Tomaattia', next: 1 }
    ]
  },

  {
    image: process.env.PUBLIC_URL + '/owl.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Oikein!', en: 'Correct!' }, { fi: 'Pöllö', en: 'An owl' }, { fi: 'on', en: 'is' }, { fi: 'peto', en: 'a predator' }] }
    ],
    choices: [
      { label: '→', next: 7 }
    ]
  },

  {
    image: process.env.PUBLIC_URL + '/cat.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Mikä', en: 'What' }, { fi: 'eläin', en: 'animal' }, { fi: 'tämä', en: 'this' }, { fi: 'on?', en: 'is?' }] }
    ],
    choices: [
      { label: 'Koira', next: 1 },
      { label: 'Kissa', next: 8 }
    ]
  },

  {
    image: process.env.PUBLIC_URL + '/cat.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Oikein!', en: 'Correct!' }] },
      { speaker: 'Kysymys', words: [{ fi: 'Mitä', en: 'What' }, { fi: 'kissa', en: 'cat' }, { fi: 'syö?', en: 'eats?' }] }
    ],
    choices: [
      { label: 'Hiiriä', next: 9 },
      { label: 'Tomaattia', next: 1 }
    ]
  },

  {
    image: process.env.PUBLIC_URL + '/cat.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Oikein!', en: 'Correct!' }, { fi: 'Kissakin', en: 'A cat too' }, { fi: 'on', en: 'is' }, { fi: 'peto', en: 'a predator' }] }
    ],
    choices: [
      { label: '→', next: 10 }
    ]
  },

  {
    image: process.env.PUBLIC_URL + '/swan.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Mikä', en: 'What' }, { fi: 'eläin', en: 'animal' }, { fi: 'tämä', en: 'this' }, { fi: 'on?', en: 'is?' }] }
    ],
    choices: [
      { label: 'Joutsen', next: 11 },
      { label: 'Strutsi', next: 1 }
    ]
  },

  {
    image: process.env.PUBLIC_URL + '/swan.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Oikein!', en: 'Correct!' }] },
      { speaker: 'Kysymys', words: [{ fi: 'Mihin', en: 'To which' }, { fi: 'maihin', en: 'countries' }, { fi: 'joutsen', en: 'a swan' }, { fi: 'yleensä', en: 'usually' }, { fi: 'muuttaa?', en: 'migrates?' }] }
    ],
    choices: [
      { label: 'Saksaan ja Hollantiin', next: 12 },
      { label: 'Espanjaan ja Marokkoon', next: 1 }
    ]
  },

  {
    image: process.env.PUBLIC_URL + '/win.webp',
    sentences: [
      { speaker: 'Kysymys', words: [{ fi: 'Onneksi', en: 'Congratulations' }, { fi: 'olkoon!', en: '!' }, { fi: 'Pääsit', en: 'You reached' }, { fi: 'pelin', en: 'the game' }, { fi: 'loppuun.', en: 'end.' }, { fi: 'Tiedät', en: 'You know' }, { fi: 'paljon', en: 'a lot' }, { fi: 'eläimistä!', en: 'about animals!' }] }
    ],
    choices: []
  },


];

export default StoryData;
