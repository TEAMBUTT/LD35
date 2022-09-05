import {describe, expect, test} from '@jest/globals';
import CircleBurgerGameView from 'views/CircleBurgerGameView';

import { scenes, changeScene, renderCurrentScene } from 'currentScene';
import finish from 'finish';

describe('game', () => {
  test('can start', () => {
    (new CircleBurgerGameView()).start()
    expect(document.body).toMatchSnapshot();
  });

  for (const sceneName in scenes) {
    const scene = scenes[sceneName];

    test(`can display scene ${sceneName}`, () => {
      (new CircleBurgerGameView()).start()

      changeScene(scene);
      renderCurrentScene();

      expect(document.body).toMatchSnapshot();
    });
  }

  test('can finish', () => {
    finish();

    expect(document.body).toMatchSnapshot();
  });
});
