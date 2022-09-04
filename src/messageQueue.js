import { each } from 'lodash';

const callbacks = [];

export function onMessage(callback) {
  callbacks.push(callback);
}

export function addMessage(message) {
  each(callbacks, (callback) => callback(message));
}
