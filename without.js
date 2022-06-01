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


//Test Case

assertArraysEqual(without([1, 2, 3], [1]),[2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]);
assertArraysEqual(without([1, 2, 1, 3], [1]),[2,3]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
