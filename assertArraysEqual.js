
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


//Test Case

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,3,3]);
assertArraysEqual([1,2,3],[1,2,'hallo']);
assertArraysEqual([1,2,3],[1,2]);
assertArraysEqual([],[]);
