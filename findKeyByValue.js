const assertEqual = require('./assertEqual');

const findKeyByValue = function(object,value) {
  const keys = Object.keys(object);
  let realKey;
  for (let key of keys) {
    if (object[key] === value) {
      realKey = key;
      return realKey;
    }
  }
  return realKey;
};

module.exports = findKeyByValue;

//Test cases
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const test = {
  first : 1,
  second: "2",
  third: undefined,
  fourth: null,
  1 : "one"
};

assertEqual(findKeyByValue(test, 2), undefined);
assertEqual(findKeyByValue(test, "2"), "second");
assertEqual(findKeyByValue(test, "one"), "1");
assertEqual(findKeyByValue(test, undefined), "third");
assertEqual(findKeyByValue(test, null), "fourth");
