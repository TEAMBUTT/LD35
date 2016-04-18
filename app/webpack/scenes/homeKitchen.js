import $ from 'jquery';

import Scene from 'Scene';
import bedroom from 'scenes/bedroom';
import homeHallway from 'scenes/homeHallway';

import Door from 'entities/Door';
import cellPhone from 'entities/cellPhone';
import garbage from 'entities/homeKitchen/garbage';
import fridge from 'entities/homeKitchen/fridge';
import cupboards from 'entities/homeKitchen/cupboards';

export class HomeKitchen extends Scene {
  name(){ return "HomeKitchen"; }
  descriptionMessage() {
    const hallwayDoor = new Door(homeHallway);
    const message = `
      You are in the kitchen. It smells
      <% if (state.garbageOutside) { %>
        okay.
      <% } else { %>
        awful, because you haven't taken your <%= entity("garbage") %> out
        since before last week's crazy bender.
      <% } %>
      The <%= entity("fridge") %> is to your right, surrounded by some
      <%= entity("cupboards") %>.
      <br>
      The <%= entity("hallwayDoor", "door back to the hallway") %> is behind you.
      <% if (!isInInventory("cellphone")) { %>
        <%= entity("cellPhone", "Your cellphone") %>
        <% if (state.mirrorSmashed && state.alarmRinging && isInInventory("granolaBar") && !state.doom.started) { %>
          glows an eerie red.
        <% } else { %>
          is on the counter.
        <% } %>
      <% } %>
    `;

    return this.insertEntities(message, {garbage, fridge, cupboards, hallwayDoor, cellPhone});
  }
}

export default new HomeKitchen();
