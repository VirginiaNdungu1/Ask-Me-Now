import DS from 'ember-data';

export default DS.Model.extend({
  // id: DS.attr(),
  topic: DS.attr(),
  title: DS.attr(),
  author: DS.attr(),
  additionalNotes: DS.attr(),
});
