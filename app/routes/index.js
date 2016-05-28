import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    Ember.$('.loading').show();
    return Ember.$.get('http://localhost:3000/beers').then(function(result) {
      
        Ember.$('.loading').addClass('move');
      
      
      return {
        brewery: result
      };
    });
  }
});
