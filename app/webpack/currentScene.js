import bedroom from './scenes/bedroom.js';
import { addMessage } from './messageQueue.js';
import $ from 'jquery';

let currentScene = bedroom;

export function getCurrentScene() {
  return currentScene;
}

export function changeScene(scene) {
  currentScene = scene;
}

export function renderCurrentScene() {
  addMessage(getCurrentScene().descriptionMessage());

  /* I'm sorry. I blame jared */
  $('.message-box :not(.disabled)').addClass('to-hide')
}
