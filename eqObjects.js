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
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //return console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //return console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};
//return true if object1 and object2 are same otherwise false 
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //check if two objects have same keys
  if (keys1.length !== keys2.length){
    return false;
  }

  for (let key1 of keys1) {
    for (let key2 of keys2) {
      // if key1 and key2 are same 
      
      if (key1 === key2){
        // check key1 value and key2 value are array 
        if (Array.isArray(object1[key1]) && Array.isArray(object2[key2])){
          // check if key1 array and key2 array are same
          if(!eqArrays(object1[key1],object2[key2])) {
            // if two arrays are not same return false
            return false
          }
        // check key1 value and key2 value are same  
        //console.log(object1[key1] === object2[key2]) 
        } else if(object1[key1] !== object2[key2]) {
          console.log("out else if")
          return false
        }
        
        }
      }
    }
    return true;
  };


//Test Cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,abc),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2),false);