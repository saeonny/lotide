const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //return console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //return console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(string) {
  
  let result = {};

  for (let letter of string) {
    if (/^[a-zA-Z]+$/.test(letter)) {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
    
  }
  return result;
};




//Test Case

const result1 = countLetters("LHL");
assertEqual(result1.L,2);
assertEqual(result1.H,1);

//// string with space and non-letter
const result2 = countLetters("lighthouse, in the house!");
assertEqual(result2[' '], undefined);
assertEqual(result2[','], undefined);
assertEqual(result2['!'], undefined);
assertEqual(result2.l, 1);
assertEqual(result2.e, 3);
assertEqual(result2.n, 1);
assertEqual(result2.h, 4);
assertEqual(result2.Y, undefined);


//// empty string
const result3 = countLetters("");
console.log(result3);

