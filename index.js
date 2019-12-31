'use strict';

module.exports = {
  plugins: [
    'stylelint-order'
  ],
  rules: {
		...require('./rules.json'),
		'order/properties-order': require('./sorting.json')
  }
};
