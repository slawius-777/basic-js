const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // Initialize the result matrix with all values as 0
  let result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Directions for 8 neighboring cells
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1],   // up, down, left, right
    [-1, -1], [-1, 1], [1, -1], [1, 1]   // diagonals
  ];

  // Iterate through each cell in the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // If the current cell is a mine, set the result to -1 (or 1)
      if (matrix[i][j]) {
        result[i][j] = 1;
      } else {
        // Check surrounding cells
        let mineCount = 0;
        for (let [dx, dy] of directions) {
          let x = i + dx;
          let y = j + dy;

          // Check if the neighbor is within bounds and if it's a mine
          if (x >= 0 && x < rows && y >= 0 && y < cols && matrix[x][y]) {
            mineCount++;
          }
        }
        result[i][j] = mineCount;
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
