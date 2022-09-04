import Scene from 'Scene';

export class DoomFinish extends Scene {
  name(){ return "DoomFinish"; }
  descriptionMessage() {
    const message = `
      Suddenly, the lights go out.
    `;

    return this.insertEntities(message);
  }
}

export default new DoomFinish();
