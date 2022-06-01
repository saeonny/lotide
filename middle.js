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


// Test Code

////empty array
assertArraysEqual(middle([]),[]);
//// 1 item
assertArraysEqual(middle([1]),[]);
//// 2 items
assertArraysEqual(middle([1,2]),[]);
//// 3 items
assertArraysEqual(middle([1, 2, 3]),[2]);
//// 4 items
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
//// 5 items
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
//// 6 items
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);