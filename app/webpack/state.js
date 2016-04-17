import moment from 'moment';

let state = window.state = {
  currentTime: moment('2013-01-12 16:30'),
  alarmRinging: true,
  bathroomTowel: "clean",
  garbageOutside: false,
  garageDoorOpen: false,
  inventory: [],
  wearing: "pajamas",
  luck: 10,
  confidence: 10,
  car: {
    running: false,
    atWork: false
  },
  wet: false,
  showered: false,
  wetUniform: false,
  wetPajamas: false,
  nastyBreath: true,
  unreadTexts: 3,
  fridgeInventory: [
    "beer",
    "milk",
  ],
  cupboardsInventory: [
    "granolaBar",
  ]
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
