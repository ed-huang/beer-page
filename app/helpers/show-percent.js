import Ember from 'ember';

export function showPercent([number]/*, hash*/) {
  if(typeof(number) === 'number') {
    return (number !== -1) ? (number / 100).toFixed(1) + '%' : '?';  
  } else {
    return '?';
  }
}

export default Ember.Helper.helper(showPercent);
