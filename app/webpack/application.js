import Intro from './views/Intro.js';

const intro = new Intro();
intro
  .start()
  .done(() => {
    console.log("Do other things.");
  });
