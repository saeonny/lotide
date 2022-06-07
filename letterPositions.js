const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];

    if (/^[a-zA-Z]+$/.test(letter)) {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

//TestCase
////Simple Case
assertArraysEqual(letterPositions("hello").e, [1]);

const result1 = letterPositions("lighthouse in the house");
assertArraysEqual(result1.e, [9, 16, 22]);
assertArraysEqual(result1.l, [0]);
assertArraysEqual(result1.s, [8, 21]);
assertArraysEqual(result1.n, [12]);

////make sure there is no key for special cases : space, ! , etc
const result2 = letterPositions(" !,^&h");
const key2 = Object.keys(result2);
assertArraysEqual(key2,['h']);



