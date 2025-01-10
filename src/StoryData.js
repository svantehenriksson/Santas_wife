const StoryData = [

  {
    image: process.env.PUBLIC_URL + '/detective_office.webp',
    sentences: [
      { speaker: 'Tarina', words: [{ fi: 'Olet', en: 'You are' }, { fi: 'yksityisetsivä.', en: 'a private detective.' }] },
      { speaker: 'Tarina', words: [{ fi: 'On', en: 'It is' }, { fi: 'talvi.', en: 'winter.' }] },
      { speaker: 'Tarina', words: [{ fi: 'Olet', en: 'You are' }, { fi: 'toimistollasi', en: 'in your office' }, { fi: 'Helsingin', en: 'in Helsinki’s' }, { fi: 'Kalliossa.', en: 'Kallio.' }] },
      { speaker: 'Tarina', words: [{ fi: 'Kuulet', en: 'You hear' }, { fi: 'jonkun', en: 'someone' }, { fi: 'koputtavan.', en: 'knocking.' }] },
    ],
    choices: [
      { label: 'Avaa ovi', next: '1' },
    ],
  },

  {
    image: process.env.PUBLIC_URL + '/Santa_in_office.webp',
    sentences: [
      { speaker: 'Joulupukki', words: [{ fi: 'Minulla', en: 'I have' }, { fi: 'on', en: 'a' }, { fi: 'sinulle', en: 'for you' }, { fi: 'työ.', en: 'job.' }] },
      { speaker: 'Joulupukki', words: [{ fi: 'Vaimoni', en: 'My wife' }, { fi: 'on', en: 'is' }, { fi: 'kadonnut.', en: 'missing.' }] },
      { speaker: 'Joulupukki', words: [{ fi: 'Huomasin', en: 'I noticed' }, { fi: 'hänellä', en: 'she had' }, { fi: 'kultahippuja', en: 'gold nuggets' }, { fi: 'viime', en: 'last' }, { fi: 'viikolla.', en: 'week.' }] },
      { speaker: 'Joulupukki', words: [{ fi: 'Hänet', en: 'She' }, { fi: 'nähtiin', en: 'was seen' }, { fi: 'viimeksi', en: 'last' }, { fi: 'Helsingin', en: 'at Helsinki’s' }, { fi: 'rautatieasemalla.', en: 'railway station.' }] },
      { speaker: 'Joulupukki', words: [{ fi: 'Voitko', en: 'Can you' }, { fi: 'etsiä', en: 'find' }, { fi: 'hänet?', en: 'her?' }] },
    ],
    choices: [
      { label: 'Kyllä', next: 3 },
      { label: 'Ei', next: 2 },
    ],
  },
  
  
  
  {
    image: process.env.PUBLIC_URL + '/gameover.webp',
    sentences: [
      { speaker: 'Peli ohi - Game over', words: [{ fi: 'Et', en: 'You did not' }, { fi: 'löytänyt', en: 'find' }, { fi: 'joulupukin', en: 'Santas' }, { fi: 'vaimoa.', en: 'wife.' }, { fi: 'Paina', en: 'Click' }, { fi: 'linkkejä', en: 'the links' }, { fi: 'alla.', en: 'below.' }] },
    ],
    choices: [
      { label: 'Alkuun - To the beginning', next: 0 }
    ]
  },
  
  {
    image: process.env.PUBLIC_URL + '/railway.webp',
    sentences: [
      { speaker: 'Tarina', words: [{ fi: 'Olet', en: 'You are' }, { fi: 'rautatieasemalla.', en: 'at the railway station.' }] },
      { speaker: 'Tarina', words: [{ fi: 'Mitä', en: 'What' }, { fi: 'teet?', en: 'do you do?' }] },
    ],
    choices: [
      { label: 'Mene R-kioskille', next: 4 },
      { label: 'Katso roskakoriin', next: 6 },
    ],
  },

  {
    image: process.env.PUBLIC_URL + '/rkioski.webp',
    sentences: [
      { speaker: 'Myyjä', words: [{ fi: 'Moi', en: 'Hi' }] },
      { speaker: 'Myyjä', words: [{ fi: 'Mitä', en: 'What' }, { fi: 'saisi', en: 'would you like' }, { fi: 'olla?', en: 'to have?' }] },
    ],
    choices: [
      { label: 'Tupakkaa, kiitos', next: '2' },
      { label: 'Oletko nähnyt joulupukin vaimoa?', next: '5' },
    ],
  },

  {
    image: process.env.PUBLIC_URL + '/rkioski.webp',
    sentences: [
      { speaker: 'Myyjä', words: [{ fi: 'Näin', en: 'I saw' }, { fi: 'hänet', en: 'her' }, { fi: 'roskakorin', en: 'the trash bin' }, { fi: 'luona.', en: 'by it.' }] },
    ],
    choices: [
      { label: 'Mene roskakorille', next: 6 },
    ],
  },

  {
    image: process.env.PUBLIC_URL + '/bin.webp',
    sentences: [
      { speaker: 'Tarina', words: [{ fi: 'Roskakorissa', en: 'In the trash bin' }, { fi: 'on', en: 'is' }, { fi: 'joulupukin', en: 'Santa\'s' }, { fi: 'vaimon', en: 'wife\'s' }, { fi: 'lakki.', en: 'hat.' }] },
      { speaker: 'Tarina', words: [{ fi: 'Huomaat', en: 'You notice' }, { fi: 'vanhan', en: 'an old' }, { fi: 'kartan.', en: 'map.' }] },
    ],
    choices: [
      { label: 'Lue kartta', next: 7 },
      { label: 'Mene R-kioskille', next: 4 },
    ],
  },
  
  {
    image: process.env.PUBLIC_URL + '/bin2.webp',
    sentences: [
      { speaker: 'Tarina', words: [{ fi: 'Vanha', en: 'The old' }, { fi: 'kartta', en: 'map' }, { fi: 'kuvaa', en: 'depicts' }, { fi: 'Haltin', en: 'the Halti' }, { fi: 'aluetta.', en: 'area.' }] },
      { speaker: 'Tarina', words: [{ fi: 'Halti', en: 'Halti' }, { fi: 'on', en: 'is' }, { fi: 'Suomen', en: 'Finland\'s' }, { fi: 'korkein', en: 'highest' }, { fi: 'vuori.', en: 'mountain.' }] },
    ],
    choices: [
      { label: 'Osta junalippu', next: 8 },
      { label: 'Mene R-kioskille', next: 4 },
    ],
  },

  {
    image: process.env.PUBLIC_URL + '/train.webp',
    sentences: [
      { speaker: 'Tarina', words: [{ fi: 'Matkustat', en: 'You are traveling' }, { fi: 'yöjunalla', en: 'on a night train' }, { fi: 'Rovaniemelle.', en: 'to Rovaniemi.' }] },
      { speaker: 'Tarina', words: [{ fi: 'Viski', en: 'Whiskey' }, { fi: 'auttaa', en: 'helps' }, { fi: 'sinua', en: 'you' }, { fi: 'ajattelemaan.', en: 'think.' }] },
      { speaker: 'Tarina', words: [{ fi: 'Mistä', en: 'What' }, { fi: 'joulupukki', en: 'Santa Claus' }, { fi: 'puhui?', en: 'talk about?' }] },
    ],
    choices: [
      { label: 'Poroista', next: 2 },
      { label: 'Kullasta', next: 9 },
    ],
  },
  
  {
    image: process.env.PUBLIC_URL + '/train2.webp',
    sentences: [
      { speaker: 'Tarina', words: [{ fi: 'Muistat', en: 'You remember' }, { fi: 'kultakaivoksen.', en: 'a gold mine.' }] },
      { speaker: 'Tarina', words: [{ fi: 'Haltin', en: 'Halti,' }, { fi: 'pohjoispuolella', en: 'north side' }, { fi: 'on', en: 'is' }, { fi: 'tarujen', en: 'legend' }, { fi: 'mukaan', en: 'according' }, { fi: 'pieni', en: 'small' }, { fi: 'hylätty', en: 'abandoned' }, { fi: 'kultakaivos.', en: 'gold mine.' }] },
      { speaker: 'Tarina', words: [{ fi: 'Joulupukin', en: 'Santa Claus\'s' }, { fi: 'vaimon', en: 'wife\'s' }, { fi: 'kartta', en: 'map' }, { fi: 'näyttää', en: 'shows' }, { fi: 'varmasti', en: 'surely' }, { fi: 'kultakaivoksen', en: 'the gold mine.' }] },
    ],
    choices: [
      { label: 'Mene hyttiin nukkumaan', next: 10 },
    ],
  },
  
  {
    image: process.env.PUBLIC_URL + '/bus.webp',
    sentences: [
      { speaker: 'Tarina', words: [{ fi: 'Matka', en: 'The journey' }, { fi: 'Rovaniemeltä', en: 'from Rovaniemi' }, { fi: 'Haltille', en: 'to Halti' }, { fi: 'jatkuu', en: 'continues' }, { fi: 'bussilla.', en: 'by bus.' }] },
    ],
    choices: [
      { label: '→', next: 11 },
    ],
  },
  
  {
    image: process.env.PUBLIC_URL + '/halti.webp',
    sentences: [
      { speaker: 'Tarina', words: [{ fi: 'Jatkuu.', en: 'To be continued.' }] },
      { speaker: 'Tarina', words: [{ fi: 'Odota', en: 'Wait for' }, { fi: 'tarinan', en: 'the story\'s' }, { fi: 'jatkon', en: 'continuation' }, { fi: 'ilmestymistä.', en: 'to come out.' }] },
      { speaker: 'Tarina', words: [{ fi: 'Liity', en: 'Join' }, { fi: 'Fluenzon', en: 'Fluenzo\'s' }, { fi: 'sähköpostilistalle!', en: 'mailing list!' }] },
    ],
    choices: [
      { label: 'Ok', next: 11 },
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
