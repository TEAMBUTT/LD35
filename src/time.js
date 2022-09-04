import state from './state.js';

export function currentTime() {
  return state.currentTime.format('h:mma');
};
