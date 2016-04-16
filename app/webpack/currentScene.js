import bedroom from './scenes/bedroom.js';
import { addMessage } from './messageQueue.js';

let currentScene = bedroom;

export function getCurrentScene() {
  return currentScene;
}

export function changeScene(scene) {
  currentScene = scene;
}
