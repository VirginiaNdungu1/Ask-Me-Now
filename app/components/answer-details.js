import Ember from 'ember';

export default Ember.Component.extend({
  isEditAnswer: false,
  actions: {
    isEditAnswer() {
      this.set('isEditAnswer', true);
    },
    editAnswer(answer, params) {
      this.sendAction('editAnswer', answer, params);
    },

  }
});
