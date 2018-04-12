import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr('string'),
  content: DS.attr('string'),
  dateTime: DS.attr('string')
});
