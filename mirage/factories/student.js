import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  age() {
    return Math.floor(Math.random() * 6) + 10;
  },
  avatar() {
    return faker.image.avatar();
  },
  name() {
    return faker.name.findName();
  }
});
