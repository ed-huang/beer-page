import Ember from 'ember';

export default Ember.Component.extend({
  beerSearch: [],
  classNames: ['col-md-12'],
  findBeer: '',

  didReceiveAttrs() {
    this.send('filterBeers');
  },

  substringMatcher(lookup) {
    var matches = [];

    this.get('beers').map(function(str) {
      let current = Ember.ObjectProxy.create({
        content: str,
        abvNumber: (str.Abv !== '?') ? parseInt((str.Abv.substr(0, str.Abv.length - 1)) * 100) : -1
      });

      //This is an O(str.length * lookup.length)
      //This search isn't bad since we know our first lookup is only one letter so this is really just O(n).
      if (current.get('Name').substr(0, lookup.length).toLowerCase() === lookup || lookup === '') {
        matches.push(current);
      }
    });

    return matches.sortBy('abvNumber').reverse();
  },

  actions: {
    filterBeers() {
      let matches = this.substringMatcher(this.get('findBeer'));
      this.set('beerSearch', matches);
    }
  }
});
