const eqArrays = require("./eqArrays");

const assertArraysEqual = function(a1,a2) {
  if (!eqArrays(a1,a2)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${a1}] !== [${a2}]`);
  } else if (eqArrays(a1,a2)) {
    console.log(`✅✅✅ Assertion Passed: [${a1}] === [${a2}]`);
  }
};

module.exports = assertArraysEqual;

//Test Case

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,3,3]);
assertArraysEqual([1,2,3],[1,2,'hallo']);
assertArraysEqual([1,2,3],[1,2]);
assertArraysEqual([],[]);
