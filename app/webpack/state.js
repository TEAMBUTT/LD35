import moment from 'moment';

let state = window.state = {
  // Times
  shiftStartTime: moment('2013-01-12 16:00'),
  closingTime: moment('2013-01-12 22:00'),
  currentTime: moment('2013-01-12 16:30'),

  // Closing
  afterClosingTime: false,
  lockedIn: false,

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

  // Till
  amountInTill: 15.75,

  // Work kitchen items
  prepInventory: [
    "knife",
  ],

  // Garage items
  garageDoorOpen: false,

  // Work entrance
  uprightedSign: false,
  managerBailed: false,
  doorLocked: false,

  // Work bathroom
  sinkClean: false,
  floorClean: false,
  toiletClean: false,
  toiletVeryClean: false,
  cleanHands: false,

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
    oldLady: {
      served: false,
      fed: false,
      angry: false
    },
    alien: {
      served: false,
      fed: false,
      angry: false
    },
    tinfoil: {
      served: false,
      fed: false,
      angry: false
    }
  },

  // Doom
  doom: {
    started: false,
    progress: 0,
  },
};

export function results() {
  let results = [];

  function a(score, description) {
    results.push({score, description});
  }

  if (state.mirrorSmashed) {
    a(-77, "You broke a mirror. That's 7 years bad luck.");
  }

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

  if (state.wearingHat) {
    a(5, "You wore your hat.");
  } else {
    a(-5, "You forgot your hat at home.");
  }

  if (state.uprightedSign) {
    a(5, "You fixed the sign outside the store.");
  }

  if (!state.showered) {
    a(-10, "You didn't shower before going to work.");
  } else {
    a(10, "You smell nice.");
  }

  if (state.car.running) {
    a(-10, "You left your car running. It was subsequently stolen. Good luck getting home!");
  }

  if (state.car.ruined) {
    a(-50, "You smashed up your car and garage door.");
  }

  if (state.toiletClean && state.sinkClean && state.floorClean) {
    if(state.toiletVeryClean) {
      a(50, "You cleaned the Circle Burger bathroom to perfection. It's now a popular tourist destination.");
    } else {
      a(20, "You cleaned the Circle Burger bathroom.");
    }
  } else if (!state.toiletClean && !state.sinkClean && !state.floorClean) {
    a(-50, "You left the Circle Burger bathroom filthy.");
  } else {
    if(!state.toiletClean) {
      a(-10, "You forgot to clean the Circle Burger toilet.");
    }
    if(!state.sinkClean) {
      a(-10, "You forgot to clean the Circle Burger sink.");
    }
    if(!state.floorClean) {
      a(-10, "You forgot to clean the Circle Burger floor.");
    }
  }

  return results;
}

export default state;
