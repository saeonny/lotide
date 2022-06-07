
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let result = [];

  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else if (callback(item)) {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;

console.log("Test1. Push item until negative num appears");
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('\n');
console.log("Test2. Push item until comma(,) appears");
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

