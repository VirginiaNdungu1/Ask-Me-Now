import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['upvotes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  actions: {
    delete(question) {
      if (confirm("Are you sure you want to delete this question?")) {
        this.sendAction('removeQuestion', question);
      }
    },
    update(question, params) {
      this.sendAction('update', question, params)
    },
    isUpVote(answer) {
      this.sendAction('isUpVote', answer);
    },
    isDownVote(answer) {
      this.sendAction('isDownVote', answer);
    }
  }
});
