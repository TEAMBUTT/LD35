import moment from 'moment';

let state = window.state = {
  // Times
  shiftStartTime: moment('2013-01-12 16:00'),
  closingTime: moment('2013-01-12 22:00'),
  currentTime: moment('2013-01-12 16:30'),

  // Bedroom items
  alarmRinging: true,
  mirrorSmashed: false,

  // Home bathroom items
  bathroomTowel: "clean",

  // Home kitchen items
  garbageOutside: false,
  fridgeInventory: [
    "beer",
    "milk",
  ],
  cupboardsInventory: [
    "granolaBar",
  ],

  // Garage items
  garageDoorOpen: false,

  // Work entrance
  uprightedSign: false,
  managerBailed: false,

  // Personal items
  inventory: [],
  wearing: "pajamas",
  wearingHat: false,
  wetUniform: false,
  wetPajamas: false,
  nastyBreath: true,
  showered: false,
  wet: false,
  luck: 10,
  confidence: 10,

  // Car state
  car: {
    running: false,
    atWork: false,
    ruined: false,
  },

  // Phone state
  unreadTexts: 3,

  // Customers
  customers: {
    olderManFed: false,
  },

  // Doom
  doom: {
    started: false,
  },
};

export function demerits() {
  let demerits = [];

  function a(string) { demerits.push(string); }

  if (state.nastyBreath) {
    a("Your breath reeks. Try brushing your teeth next time.");
  }

  if (state.alarmRinging) {
    a("You left your alarm ringing! Your landlord says this is the last straw.");
  }

  if (!state.garbageOutside) {
    a("You didn't take out the trash. A small flock of seagulls has moved into your kitchen.");
  }

  if (state.wetUniform) {
    a("Your work uniform is wet. Your boss wasn't too pleased with that");
  }

  if (!state.showered) {
    a("You didn't shower before going to work.");
  }

  if (state.car.running) {
    a("You left your car running. It was subsequently stolen. Good luck getting home!");
  }

  return demerits;
}

export default state;
