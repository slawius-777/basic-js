const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;

  // Convert s2 to an array for easy manipulation
  let s2Array = s2.split('');

  // Iterate through each character in s1
  for (let char of s1) {
    const index = s2Array.indexOf(char);
    if (index !== -1) {
      count++;
      // Remove the character from s2Array to avoid counting it again
      s2Array.splice(index, 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
