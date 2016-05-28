import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import beersHelper from '../../../tests/helpers/beers-helper';


moduleForComponent('beer-lookup', 'Integration | Component | beer lookup', {
  integration: true
});

test('Check if it sorts strings correctly', function(assert) {
  this.set('model', beersHelper());
  this.render(hbs`{{beer-lookup beers=model}}`);
  assert.equal(this.$('tr .beer-table--abv:eq(0)').text().trim(), '10.0%');
  assert.equal(this.$('tr .beer-table--abv:eq(1)').text().trim(), '5.0%');
});

test('Check no beer displays correctly', function(assert) {
  this.set('model', beersHelper());
  this.render(hbs`{{beer-lookup beers=model}}`);
  this.$('#beer-lookup').val('aaa');
  this.$('#beer-lookup').trigger('keyup');
  return wait().then(() => {
    assert.equal(this.$('table tr td').text(), 'There\'s no such beer dude!');
  });
});