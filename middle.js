const eqArrays = require('./eqArrays');

const assertArraysEqual = function(a1,a2) {
  if (!eqArrays(a1,a2)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${a1}] !== [${a2}]`);
  } else if (eqArrays(a1,a2)) {
    console.log(`✅✅✅ Assertion Passed: [${a1}] === [${a2}]`);
  }

};

const middle = function(array) {
  let midIndex;
  let result = [];
  const arrayLength = array.length;

  //empty array and 1 item and 2 item array check
  if (arrayLength === 0 || arrayLength === 1 || arrayLength === 2) {
    return result;
  }

  // if 1 middle exists : length %2 === 0
  if (arrayLength % 2 === 1) {
    midIndex = Math.floor(arrayLength / 2);
    result.push(array[midIndex]);
    return result;
  } else if (arrayLength % 2 === 0) {
    midIndex = (arrayLength / 2) - 1;
    result.push(array[midIndex]);
    result.push(array[midIndex + 1]);
    return result;
  }
};
module.exports = middle;


