import { each } from 'lodash';

const callbacks = [];

module.exports = {
  onMessage(callback) {
    callbacks.push(callback);
  },
  addMessage(message) {
    each(callbacks, (callback) => callback(message));
  }
};
