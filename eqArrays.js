const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //return console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //return console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(a1,a2) {
  // length check, list check

  if (!Array.isArray(a1) && !Array.isArray(a2)) {
    return false;
  }

  if (a1.length !== a2.length) {
    return false;
  }

  for (let i = 0; i < a1.length; i++) {
  
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;


};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), false);
assertEqual(eqArrays([1, 2, 3], [1]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1,2,3], ['1',2,3]), false);
assertEqual(eqArrays([1,2], "hello"), false);