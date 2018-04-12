import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  author() {
    return faker.name.findName();
  },
  releaseDate() {
    return faker.date.past();
  },
  title() {
    return faker.lorem.words().capitalize();
  }
});
