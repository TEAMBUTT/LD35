import bedroom from './scenes/bedroom.js';

let currentScene = bedroom;

module.exports = {
  getCurrentScene() {
    return currentScene;
  },
  setCurrentScene(scene) {
    currentScene = scene;
  }
}
