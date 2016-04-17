import moment from 'moment';

let state = window.state = {
  // Times
  shiftStartTime: moment('2013-01-12 16:00'),
  closingTime: moment('2013-01-12 22:00'),
  currentTime: moment('2013-01-12 16:30'),

  // Closing
  afterClosingTime: false,

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

  // Work kitchen items
  prepInventory: [
    "knife",
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
    progress: 0,
  },
};

export function results() {
  let results = [];

  function a(score, description) { results.push([score, description]); }

  if (state.nastyBreath) {
    a(-10, "Your breath reeks. Try brushing your teeth next time.");
  } else {
    a(10, "Your breath was minty fresh. Your speech was an olfactory delight.");
  }

  if (state.alarmRinging) {
    a(-10, "You left your alarm ringing! Your landlord says this is the last straw.");
  }

  if (!state.garbageOutside) {
    a(-10, "You didn't take out the trash. A small flock of seagulls has moved into your kitchen.");
  }

  if (state.wetUniform) {
    a(-10, "Your work uniform is wet. Your boss wasn't too pleased with that");
  }

  if (state.wetPajamas) {
    a(-10, "You got yout pajamas wet.");
  }

  if (!state.showered) {
    a(-10, "You didn't shower before going to work.");
  } else {
    a(10, "You smell nice.");
  }

  if (state.car.running) {
    a(-10, "You left your car running. It was subsequently stolen. Good luck getting home!");
  }

  return results;
}

export default state;
