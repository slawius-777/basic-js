const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // If the current element is not an array, return depth as 1
    if (!Array.isArray(arr)) {
      return 0;
    }
    
    // Otherwise, calculate depth for each item in the array
    let depth = 1; // Start at depth 1 because this level counts as well
    for (let item of arr) {
      // Recursively calculate the depth for each nested array
      depth = Math.max(depth, 1 + this.calculateDepth(item));
    }
    
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
