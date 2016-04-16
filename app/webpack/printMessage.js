import $ from 'jquery';
import { addMessage } from './messageQueue.js';
import formatMessage from './formatMessage.js';

export default function printMessage(message, entities) {
  entities = entities || [];
  addMessage(formatMessage(message, entities));
};
