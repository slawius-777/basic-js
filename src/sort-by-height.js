const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Step 1: Extract all the non -1 values from the array
  const sortedArray = arr.filter(val => val !== -1).sort((a, b) => a - b);

  // Step 2: Rebuild the array, inserting the sorted values in place of non -1 values
  return arr.map(val => val === -1 ? val : sortedArray.shift());
}

module.exports = {
  sortByHeight
};
