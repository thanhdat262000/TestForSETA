// Provide an array of strings, eg: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def, ‘gh’].
// Write a function to find the strings’ length that appear most in this array.
// Writing the unit test function and provide some test-cases.
// The result for example array is [‘ab’, ‘cd’, ‘gh’]
function maxStringLength(array) {
  const stringLength = array.map((string) => string.length);
  stringLength.sort((a, b) => a - b);
  let count = 1;
  let maxCountlength;
  let maxCount = 0;
  for (let i = 0; i < stringLength.length; i++) {
    if (stringLength[i] === stringLength[i + 1]) count += 1;
    else {
      if (count > maxCount) {
        maxCount = count;
        maxCountlength = stringLength[i];
      }
      count = 1;
    }
  }
  return array.filter((string) => string.length === maxCountlength);
}
module.exports = maxStringLength;
