import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  isNoteShowing: false,
  actions: {
    addToFavoriteQuestions(item) {
      this.get('favoriteQuestions').add(item);

    },
    showNote: function() {
      this.set("isNoteShowing", true)
    },
    hideNote: function() {
      this.set("isNoteShowing", false)
    }
  }
});
