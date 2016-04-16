import $ from 'jquery';
import { onMessage, addMessage } from '../messageQueue.js';

module.exports = class {
  constructor() {
    this.$frame = $('#game');
  }
  start() {
    this.messageBox = $('<div class="message-box">');
    this.$frame.append(this.messageBox);
    onMessage((message) => this.displayMessage(message));
    addMessage($('<h1>Wake up! You\'re late for your shift!</h1>'));
  }
  displayMessage(message) {
    this.messageBox.append(message);
  }
}
