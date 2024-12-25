const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // Initialize a counter for cats
  let catCount = 0;

  // Loop through each row of the matrix
  for (let row of matrix) {
    // Loop through each element of the row
    for (let element of row) {
      // Check if the element is "^^"
      if (element === '^^') {
        catCount++;
      }
    }
  }

  // Return the total count of cats
  return catCount;
}

module.exports = {
  countCats
};
