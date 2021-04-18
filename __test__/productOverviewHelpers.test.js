/* eslint-disable no-undef */
const productOverviewHelpers = require('../server/productOverviewHelpers.js');

test('calculates correct average', () => {
  const ratingsObj = {
    2: '1',
    3: '1',
    4: '2',
    5: '3',
  };

  expect(productOverviewHelpers.calcAvgRating(ratingsObj)).toBe(4);
});
