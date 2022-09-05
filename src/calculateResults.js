export default function calculateResults() {
  let results = [];

  function a(score, description) {
    results.push({score, description});
  }

  if (state.mirrorSmashed) {
    a(-77, "You broke a mirror. That's 7 years bad luck.");
  }

  if (state.publicIndency) {
    a(-50, "You were cited for public indecency.");
  }

  if (state.nastyBreath) {
    a(-10, "Your breath reeks. Try brushing your teeth next time.");
  } else {
    a(10, "Your breath was minty fresh. Your speech was an olfactory delight.");
  }

  if (state.alarmRinging) {
    a(-10, "You left your alarm ringing! Your landlord says this is the last straw.");
  }

  if (!state.garbageOutside) {
    a(-10, "You didn't take out the trash. A small flock of seagulls has moved into your kitchen.");
  }

  if (state.wetUniform) {
    a(-10, "Your work uniform is wet. Your boss wasn't too pleased with that");
  }

  if (state.wetPajamas) {
    a(-10, "You got yout pajamas wet.");
  }

  if (state.wearingHat) {
    a(5, "You wore your hat.");
  } else {
    a(-5, "You forgot your hat at home.");
  }

  if (state.lightsOutTime) {
    const diff = state.closingTime.diff(state.lightsOutTime);
    if (state.lightsOutTime.isBefore(state.closingTime.clone().subtract(5, 'minutes'))) {
      a(-10, `You turned the open sign off ${diff} too early.`);
    } else if (state.lightsOutTime.isAfter(state.closingTime.clone().add(5, 'minutes'))) {
      a(-10, `You turned the open sign off ${diff} too late.`);
    } else {
      a(15, "You turned off the open sign on time.");
    }
  } else {
    a(-25, "You left the open sign on.");
  }

  if (!state.fridgeInventory.length) {
    a(-25, "You drank rancid milk and a beer before work. You felt sick all shift.");
  } else {
    if (!state.fridgeInventory.includes('beer')) {
      a(-5, "You had a beer right before work.");
    } else if (!state.fridgeInventory.includes('milk')) {
      a(-10, "You drank rancid milk.");
    }
  }

  if (state.lockedIn) {
    if (state.closedEarly) {
      a(-50, "You locked up early, with you and a few customers still inside.");
    } else if (state.closedLate) {
      a(-25, "You took more than an hour to close up the shop.");
      a(-25, "You locked yourself inside the shop.");
    } else {
      a(-25, "You locked up on time, but you were still in the shop.");
    }
  } else {
    if (state.closedEarly) {
      a(-25, "You locked up early, while customers were still inside.");
    } else if (state.closedLate) {
      a(-25, "You took more than an hour to close up the shop.");
    } else {
      a(5, "You closed up at the right time.");
    }
  }

  if (state.uprightedSign) {
    a(5, "You fixed the sign outside the store.");
  }

  if (!state.showered) {
    a(-10, "You didn't shower before going to work.");
  } else {
    a(10, "You smell nice.");
  }

  if (state.car.running) {
    a(-10, "You left your car running. It was subsequently stolen. Good luck getting home!");
  }

  if (state.car.ruined) {
    a(-50, "You smashed up your car and garage door.");
  }

  if (state.gotRaise) {
    a(100, "You got a raise! Nice.");
  }

  if (state.toiletClean && state.sinkClean && state.floorClean) {
    if(state.toiletVeryClean) {
      a(50, "You cleaned the Circle Burger bathroom to perfection. It's now a popular tourist destination.");
    } else {
      a(20, "You cleaned the Circle Burger bathroom.");
    }
  } else if (!state.toiletClean && !state.sinkClean && !state.floorClean) {
    a(-50, "You left the Circle Burger bathroom filthy.");
  } else {
    if(!state.toiletClean) {
      a(-10, "You forgot to clean the Circle Burger toilet.");
    }
    if(!state.sinkClean) {
      a(-10, "You forgot to clean the Circle Burger sink.");
    }
    if(!state.floorClean) {
      a(-10, "You forgot to clean the Circle Burger floor.");
    }
  }

  // Check state.customers because we were incorrectly storing this information
  // there for a little bit.
  if(state.olderManFed || state.customers.olderManFed) {
    a(10, "You gave an older man your Granola Bar. Aren't you nice.");
  }

  if(!state.foodSafe) {
    a(-30, "You handled food without washing your hands.");
  }

  let servedCustomers = 0;
  let angryCustomers = 0;
  let fedCustomers = 0;
  let unservedCustomers = 0;
  for (const [key, c] of Object.entries(state.customers)) {
    if (c.served) servedCustomers += 1;
    if (c.angry) angryCustomers += 1;
    if (c.fed) fedCustomers += 1;
    if (!c.served) unservedCustomers += 1;
  }

  if(fedCustomers) {
    a(fedCustomers*10, `You fed ${fedCustomers} customers.`);
  }
  if(angryCustomers) {
    a(-angryCustomers*10, `You gave ${angryCustomers} customers the wrong item.`);
  }
  if(!servedCustomers) {
    a(-20 * unservedCustomers, `You didn't serve any customers.`);
  } else if(unservedCustomers) {
    a(-20 * unservedCustomers, `You didn't serve ${unservedCustomers} customers.`);
  }

  if(state.amountStolen > 0.00) {
    a(state.amountStolen*100, `You "found" $${state.amountStolen.toFixed(2)}. Sweet!`);
    a(-state.amountStolen*100, `$${state.amountStolen.toFixed(2)} was missing from the till. That's coming out of your paycheck.`);
  }

  return results;
}
