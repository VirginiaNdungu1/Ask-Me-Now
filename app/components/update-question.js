import Ember from 'ember';

export default Ember.Component.extend({
  isEditQuestion: false,
  actions: {
    isEditQuestion() {
      this.set("isEditQuestion", true);
    },
    discardChanges() {
      this.set("isEditQuestion", false);
    },
    update(question, params) {
      var params = {
        topic: this.get('topic'),
        title: this.get('title'),
        author: this.get('author'),
        additionalNotes: this.get('additionalNotes')
      };
      this.set('topic', '');
      this.set('title', '');
      this.set('author', '');
      this.set('additionalNotes', '');
      this.set("isEditQuestion", false);
      this.sendAction("update", question, params);
    }
  }
});
