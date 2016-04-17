import moment from 'moment';

export default window.state = {
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
};
