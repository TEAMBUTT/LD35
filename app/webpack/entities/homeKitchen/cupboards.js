import Entity, { printMessage, action, time, state } from "Entity";
import granolaBar from "./granolaBar.js"

export class Cupboards extends Entity {
  name() {
    return 'cupboards';
  }

  actions() {
    return [
      action(
        "Open.",
        () => {
          let message = "";

          if (state.cupboardsInventory.length === 0) {
            message += "The cupboards are empty."
            printMessage(message);
          } else {
            message += "You see:"
            message += "<ul>"
            let entities = {};
            if (_.includes(state.cupboardsInventory, "granolaBar")) {
              message += `<li><%= entity("granolaBar", "A single granola bar") %></li>`;
              entities.granolaBar = granolaBar;
            }
            message += "</ul>"
            printMessage(message, entities);
          }
        }
      )
    ];
  }
}

export default new Cupboards();
