import {Time} from 'time';

let state = window.state = {
  finished: false,

  // Times
  shiftStartTime: new Time(16, 0),
  closingTime: new Time(22, 0),
  currentTime: new Time(16, 60),
  lightsOutTime: false,
  familyLeavesTime: new Time(20, 30),
  teensLeaveTime: new Time(21, 15),

  // Closing
  afterClosingTime: false,
  lockedIn: false,
  closedEarly: false,
  closedLate: false,
  openSignOn: true,

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
  amountStolen: 0.00,

  // Work kitchen items
  foodSafe: true,
  prepInventory: [
    "knife",
  ],

  // Garage items
  garageDoorOpen: false,

  // Work entrance
  uprightedSign: false,
  manager: {
    bailed: false,
    progress: 0,
  },
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
  publicIndecency: false,
  gotRaise: false,
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
  olderManFed: false,
  customers: {
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

export default state;
