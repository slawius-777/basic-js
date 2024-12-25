const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str); // Convert to string in case the input is not a string
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  // Handle addition repeat
  const additionStr = Array(additionRepeatTimes)
    .fill(String(addition))
    .join(additionSeparator);

  // Handle main string repeat
  const resultStr = Array(repeatTimes)
    .fill(str + additionStr)
    .join(separator);

  return resultStr;
}

module.exports = {
  repeater
};
