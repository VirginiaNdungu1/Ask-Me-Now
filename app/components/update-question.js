import Ember from 'ember';

export default Ember.Component.extend({
  isEditQuestion: false,
  actions: {
    isEditQuestion() {
      this.set("isEditQuestion", true);
    },
    update(question) {
      var params = {
        topic: this.get('topic'),
        title: this.get('title'),
        author: this.get('author'),
        additionalNotes: this.get('additionalNotes')
      };
      this.set("isEditQuestion", false);
      this.sendAction("saveQuestions", question, params);
    }
  }
});
