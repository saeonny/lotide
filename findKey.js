const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  const keys = Object.keys(object);
  let rightKey;
  for (let key of keys) {
    if (callback(object[key])) {
      rightKey = key;
      return rightKey;
    }
  }
  return rightKey;
};

module.exports = findKey;

//Test Case
console.log("Test1.First appeared key that has 2 stars");
const starsCollection = {
  "Blue Hill": { stars: 1 , available: true },
  "Akaleri":   { stars: 3 , available: true },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 , available: false },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const result1 = findKey(starsCollection, x => x.stars === 2);
assertEqual(result1, "noma");

console.log("\n");
console.log("Test2. No satisifed condition");
const result2 = findKey(starsCollection, x => x.stars === 100);
assertEqual(result2, undefined);

console.log("\n");
console.log("Test3. First appeared key that has \"available\" as false");
const result3 = findKey(starsCollection, x => x.available === false);
assertEqual(result3, "elBulli");


