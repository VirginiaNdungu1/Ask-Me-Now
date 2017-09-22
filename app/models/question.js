import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  title: DS.attr(),
  question: DS.attr(),
  additionalNotes: DS.attr()
});
