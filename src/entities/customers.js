import { find } from 'lodash';
import moment from 'moment';
import Customer from 'entities/circleBurger/Customer';

const customers = [
  new Customer({
    indefiniteArticle: 'An old lady',
    definiteArticle: 'the lady',
    shortDescription: ', probably in her nineties, ',
    additionalDescription: "She's tapping her foot impatiently.",
    handle: 'oldLady',
    desiredItem: 'fries',
    dialog: "Old lady: <em>I'd like some fries.</em>",
    acceptDialog: "<em>Humph. About time!</em>",
    leaveTime: moment('2013-01-12 20:00'),
  }),

  new Customer({
    indefiniteArticle: 'A guy',
    definiteArticle: 'the guy',
    shortDescription: 'looking confused',
    additionalDescription: "He's staring at the menu like he has never seen one before.",
    handle: 'alien',
    desiredItem: 'burger',
    dialog: `Guy: Hello. Could I have a ham... burger?`,
    acceptDialog: "Guy: <em>Fasinating&hellip;I will take this back to my home planet&hellip;I mean to go.</em>",
    leaveTime: moment('2013-01-12 21:30'),
  }),

  new Customer({
    indefiniteArticle: 'A man',
    definiteArticle: 'the man',
    shortDescription: 'wearing a tinfoil hat',
    additionalDescription: "He's muttering about a way to start the end times. Something about ringing and mirrors.",
    handle: 'tinfoil',
    desiredItem: 'bacon cheese burger',
    dialog: `Man: I need a bacon cheese burger. Quick! There isn't much time left.`,
    acceptDialog: "Guy: <i>There'd better be no granola in this. It's the devil's food.</i>",
    leaveTime: moment('2013-01-12 21:00'),
  })
];

export function nextCustomer() {
  return find(customers, (customer) => customer.isInLine());
}
