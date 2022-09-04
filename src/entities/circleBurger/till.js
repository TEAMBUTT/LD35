import Entity, { printMessage, action, time, state } from "Entity";

function formatMoney(amount) {
  return amount.toFixed(2);
}

export class Till extends Entity {
  name() {
    return 'till'
  }

  actions() {
    return [
      action(
        "Look.",
        () => {
          printMessage(`There is $${formatMoney(state.amountInTill)} in the till.`);
          state.currentTime.add(5, 'minutes');
        }
      ),
      action(
        "Take.",
        () => {
          printMessage(`You take $${formatMoney(state.amountInTill)} from the till`);
          state.amountStolen += state.amountInTill;
          state.amountInTill = 0;
          state.currentTime.add(5, 'minutes');
        }
      )
    ];
  }
}

export default new Till();
