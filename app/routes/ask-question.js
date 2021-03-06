import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    askQuestionNow(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    cancel() {
      this.transitionTo('index');
    },
  }
});
