const assertArraysEqual = require('./assertArraysEqual');

const without = function(origin, remove) {
  let result = [];
  for (let o of origin) {
    for (let r of remove) {
      if (o !== r) {
        if (result.indexOf(o) === -1) {
          result.push(o);
        }
      } else if (o === r) {
        if (result.indexOf(o) !== -1) {
          result.splice(result.indexOf(o),1);
        }
      }
    }
  }
  return result;

};

module.exports = without;


//Test Case

assertArraysEqual(without([1, 2, 3], [1]),[2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]);
assertArraysEqual(without([1, 2, 1, 3], [1]),[2,3]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
