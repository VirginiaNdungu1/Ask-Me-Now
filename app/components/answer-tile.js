import Ember from 'ember';

export default Ember.Component.extend({
  isEditAnswer: false,
  actions: {
    isEditAnswer() {
      this.set("isEditAnswer", true);
    },
  }
});
