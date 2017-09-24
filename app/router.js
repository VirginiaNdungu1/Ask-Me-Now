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
});

export default Router;
