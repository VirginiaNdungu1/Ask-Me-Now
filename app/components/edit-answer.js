import Ember from 'ember';

export default Ember.Component.extend({
  isEditAnswer: false,
  actions: {
    isEditAnswer() {
      this.set('isEditAnswer', true);
    },
    editAnswer(answer) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.set('author', ''),
        this.set('content', ''),
        this.set("isEditAnswer", true);
      this.sendAction("editAnswer", answer, params);
    }
  }
});
