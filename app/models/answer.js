import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  upvotes: DS.attr(),
  question: DS.belongsTo('question', {
    async: true
  }),
});
