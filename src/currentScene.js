import { addMessage } from './messageQueue.js';
import printMessage from 'printMessage';
import $ from 'jquery';

import state from 'state';
import bedroom from './scenes/bedroom.js';
import car from './scenes/car.js';
import garage from './scenes/garage.js';
import homeBathroom from './scenes/homeBathroom.js';
import homeHallway from './scenes/homeHallway.js';
import homeKitchen from './scenes/homeKitchen.js';
import parkingLot from './scenes/circleBurger/parkingLot.js';
import entrance from './scenes/circleBurger/entrance.js';
import diningArea from './scenes/circleBurger/diningArea.js';
import bathroom from './scenes/circleBurger/bathroom.js';
import counter from './scenes/circleBurger/counter.js';
import kitchen from './scenes/circleBurger/kitchen.js';
import managerLeaving from './scenes/circleBurger/managerLeaving.js';
import outBack from './scenes/circleBurger/outBack.js';
import van from './scenes/circleBurger/van.js';

import queryString from 'query-string';

export const scenes = {
  bedroom,
  car,
  garage,
  homeBathroom,
  homeHallway,
  homeKitchen,
  parkingLot,
  entrance,
  diningArea,
  bathroom,
  counter,
  kitchen,
  managerLeaving,
  outBack,
  van
};

let customScene = queryString.parse(location.search)['scene'];
let currentScene = scenes[customScene] || bedroom;

export function getCurrentScene() {
  return currentScene;
}

export function changeScene(scene) {
  currentScene = scene;
  scene.onEnter();
}

export function renderCurrentScene() {
  if(!state.finished) {
    if (!state.afterClosingTime && state.currentTime.isSameOrAfter(state.closingTime.clone().subtract(5, 'minutes'))) {
      printMessage("You realize that it must be time to close up shop by now.");
      state.afterClosingTime = true;
    }

    addMessage(getCurrentScene().descriptionMessage());
  }

  /* I'm sorry. I blame Jared. */
  $('.message-box .message:not(.disabled)').addClass('to-hide')
}
