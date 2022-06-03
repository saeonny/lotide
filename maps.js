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

const assertArraysEqual = function(a1,a2) {
  if (!eqArrays(a1,a2)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${a1}] !== [${a2}]`);
  } else if (eqArrays(a1,a2)) {
    console.log(`✅✅✅ Assertion Passed: [${a1}] === [${a2}]`);
  }

};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


//Test Case

//1. return a first letter of each item in an array
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,["g","c",'t','m','t']);

//2. return a length of each item in an array
const results2 = map(words, word => word.length);
assertArraysEqual(results2,[6,7,2,5,3]);

//3. add  ✅  at the end of the string of each item in an array
const results3 = map(words, word => word + "✅ ");
assertArraysEqual(results3, ["ground✅ ", "control✅ ", "to✅ ", "major✅ ", "tom✅ "]);


