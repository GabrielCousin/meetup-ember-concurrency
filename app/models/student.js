import DS from 'ember-data';

export default DS.Model.extend({
  age: DS.attr('number'),
  avatar: DS.attr('string'),
  name: DS.attr('string')
});
