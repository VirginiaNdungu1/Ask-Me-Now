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
    deleteAnswer(answer) {
      if (confirm("Are you sure you want to discard this answer?")) {
        this.sendAction('removeAnswer', answer);
      }
    },
  }
});
