const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth(); // Get the month (0-based index)

  if (month === 11 || month <= 1) {
    return 'winter'; // December, January, February
  } else if (month >= 2 && month <= 4) {
    return 'spring'; // March, April, May
  } else if (month >= 5 && month <= 7) {
    return 'summer'; // June, July, August
  } else if (month >= 8 && month <= 10) {
    return 'autumn'; // September, October, November
  }
}

module.exports = {
  getSeason
};
