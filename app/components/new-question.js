import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    // return questions;
    return this.store.findAll('question');
  },
  isAddQuestion: true,
  actions: {
    cancel() {
      this.set('isAddQuestion', false);
    },
    addQuestion: function() {
      var params = {
        topic: this.get('topic'),
        title: this.get('title'),
        author: this.get('author'),
        additionalNotes: this.get('additionalNotes')
      };
      this.set('isAddQuestion', true);
      this.sendAction('submitQuestion', params);
    }
  }
});
