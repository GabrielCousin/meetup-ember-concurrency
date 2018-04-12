import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  address() {
    return faker.internet.email();
  },
  content() {
    return `${faker.lorem.paragraph().slice(0, 40)}…`;
  },
  dateTime() {
    return faker.date.recent();
  }
});
