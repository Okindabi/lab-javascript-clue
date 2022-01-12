// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Dwight',
    lastName: 'Schrute',
    occupation: 'Assistant to the regional manager',
    age: 51,
    description: 'Top salesman and beet farmer. Weapons specialist.',
    image: 'Dorky',
    color: 'brown'
  },
  {
    firstName: 'Darryl',
    lastName: 'Philbin',
    occupation: 'Warehouse Foreman',
    age: 50,
    description: 'Musician, relaxed and competent, underappreciated.',
    image: 'professional',
    color: 'orange'
  },
  {
    firstName: 'Michael',
    lastName: 'Scott',
    occupation: 'Manager',
    age: 56,
    description: 'Goofy boss that gets into various hijinks',
    image: 'clean',
    color: 'red'
  },
  {
    firstName: 'Jim',
    lastName: 'Halpert',
    occupation: 'Salesman',
    age: 43,
    description: 'Prankster and rival of Dwight',
    image: 'messy',
    color: 'orange'
  },
  {
    firstName: 'Pam',
    lastName: 'Beesly',
    occupation: 'Office Administrator',
    age: 42,
    description: 'Artist and mother, peacekeeper of the office.',
    image: 'neat',
    color: 'green'
  },
  {
    firstName: 'Creed',
    lastName: 'Bratton',
    occupation: 'Quality Assurance',
    age: 96,
    description:
      'Deviant, former hippie and homeless man, little is known about his past.',
    image: 'dirty',
    color: 'black'
  }
];

// Rooms Array

const roomsArray = [
  { name: 'Parking Lot' },
  { name: 'Warehouse' },
  { name: 'Darryls Office' },
  { name: 'Michaels Office' },
  { name: 'Conference Room' },
  { name: 'The Annex' },
  { name: 'Vance Refrigeration' },
  { name: 'The roof' },
  { name: 'Poor Richards Pub' },
  { name: 'Cafe Disco' },
  { name: 'Schrute Farms' },
  { name: 'Sid and Dexters Bar' },
  { name: 'Chilis' },
  { name: 'Regional Office' },
  { name: 'Alfredos Pizza Cafe' }
];

// Weapons Array

const weapon1 = {
  name: 'Nunchucks',
  weight: 3
};
const weapon2 = {
  name: 'Shurikens',
  weight: 0
};
const weapon3 = {
  name: 'Bear Spray',
  weight: 1
};
const weapon4 = {
  name: 'Revolver',
  weight: 4
};
const weapon5 = {
  name: 'Pitchfork',
  weight: 6
};
const weapon6 = {
  name: 'Stapler',
  weight: 1
};
const weapon7 = {
  name: 'Pencil',
  weight: 1
};
const weapon8 = {
  name: 'Deskweight',
  weight: 3
};
const weapon9 = {
  name: 'Bowieknife',
  weight: 4
};

const weaponsArray = [
  weapon1,
  weapon2,
  weapon3,
  weapon4,
  weapon5,
  weapon6,
  weapon7,
  weapon8,
  weapon9
];

// ITERATION 2

function selectRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  };
}

// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
