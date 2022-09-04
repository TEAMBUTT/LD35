import state from './state.js';

export class Time {
  constructor(hours, minutes) {
    this.total_minutes = hours * 60 + minutes;
  }

  get hours() {
    return Math.floor(this.total_minutes / 60);
  }

  get minutes() {
    return this.total_minutes - this.hours * 60;
  }

  clone() {
    return (new Time(this.hours, this.minutes));
  }

  add(amount, unit) {
    const unitMultiplier = {
      "minutes": 1,
      "minute": 1,
      "hours": 60,
      "hour": 60
    };

    this.total_minutes += amount * unitMultiplier[unit];
    return this;
  }

  subtract(amount, unit) {
    return this.add(-amount, unit);
  }

  isBefore(other) {
    return this.total_minutes < other.total_minutes;
  }

  isAfter(other) {
    return this.total_minutes > other.total_minutes;
  }

  isSameOrAfter(other) {
    return this.total_minutes >= other.total_minutes;
  }

  format(spec) {
    let seconds = this.total_minutes * 60;
    let date = new Date(seconds * 1000);
    let format = new Intl.DateTimeFormat('en-US', { timeStyle: 'short' });
    return format.format(date);
  }
}

export class TimeDelta extends Time {
  constructor(total_minutes) {
    super(0, total_minutes);
  }

  toString() {
    if (this.total_minutes < 60) {
      return `${this.minutes} minutes`;
    } else if (this.hours == 1) {
      return "an hour";
    } else if (this.minutes == 0) {
      return `${this.hours} hours`;
    } else {
      return `${this.hours} hours and ${this.minutes} minutes`;
    }
  }
}

Time.prototype.diff = function(other) {
  let delta = this.total_minutes - other.total_minutes;
  return new TimeDelta(Math.abs(delta));
};

export function currentTime() {
  return state.currentTime.format('h:mma');
};
