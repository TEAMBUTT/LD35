import state from './state.js';

export default function time() {
  return state.currentTime.format('h:mma');
};
