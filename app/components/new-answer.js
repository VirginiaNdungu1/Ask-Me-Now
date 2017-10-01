import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author') ? this.get('author') : '',
        content: this.get('content') ? this.get('content') : '',
        upvotes: parseInt(this.get('upvotes')) ? parseInt(this.get('upvotes')) : null,
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
