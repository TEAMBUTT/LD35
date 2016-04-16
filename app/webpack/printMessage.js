import $ from 'jquery';
import { addMessage } from './messageQueue.js';

export default function plainMessage(message) {
  addMessage($(`<div class="message">${message}</div>`));
};
