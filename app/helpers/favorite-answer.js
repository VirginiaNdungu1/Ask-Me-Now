import Ember from 'ember';

export function favoriteAnswer(params) {
  var answerVotes = params[0].get('upvotes');

  if (answerVotes >= 50) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  }
}
export default Ember.Helper.helper(favoriteAnswer);
