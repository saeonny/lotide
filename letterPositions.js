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



