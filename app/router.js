import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ask-question');
  this.route('view-question', {
    path: '/view-question/:question_id'
  });
  this.route('view-questions');
  this.route('view-answer', {
    path: '/view-answer/:answer_id'
  });
  this.route('favorite-store');
});

export default Router;
