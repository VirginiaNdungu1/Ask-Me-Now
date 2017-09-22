import Ember from 'ember';

export default Ember.Component.extend({
  isNoteShowing: false,
  actions: {
    showNote: function() {
      this.set("isNoteShowing", true)
    },
    hideNote: function() {
      this.set("isNoteShowing", false)
    }
  }
});
