import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    isUpVote(answer) {
      this.sendAction('isUpVote', answer);
    },
    isDownVote(answer) {
      this.sendAction('isDownVote', answer);
    }
  }
});
