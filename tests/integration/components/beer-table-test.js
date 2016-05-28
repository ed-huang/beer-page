import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import beersHelper from '../../../tests/helpers/beers-helper';

moduleForComponent('beer-table', 'Integration | Component | beer table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('model', beersHelper());

  this.render(hbs`{{beer-table beers=model}}`);

  assert.equal(this.$('table tr').length, 2);

  // // Template block usage:"
  // this.render(hbs`
  //   {{#beer-table}}
  //     template block text
  //   {{/beer-table}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
