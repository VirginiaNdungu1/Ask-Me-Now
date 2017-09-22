import Ember from 'ember';
//add hard-coded data for our model
var questions = [{
  id: 1,
  title: 'Technology',
  question: 'What does asynchronous loading of data mean?',
  additionalNotes: 'In relation to controllers in ember'
}, {
  id: 2,
  title: 'Technology',
  question: 'What problem does the concept of routable components solve?',
  additionalNotes: 'In relation to controllers in ember'
}, {
  id: 3,
  title: 'Technology',
  question: 'What are transpilers? ',
  additionalNotes: 'Please give examples and their importance'
}];
export default Ember.Route.extend({
  //add a model hook
  model() {
    return questions;
  }
});
