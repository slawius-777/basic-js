const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15; // modern activity level
  const HALF_LIFE_PERIOD = 5730; // half-life period in years

  // Ensure input is a string and can be converted to a positive number
  if (typeof sampleActivity !== 'string') return false;

  const activity = parseFloat(sampleActivity);

  // Validate the parsed activity value
  if (isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) return false;

  // Calculate the age using the formula: t = (ln(MODERN_ACTIVITY / sampleActivity)) / k
  const decayConstant = Math.LN2 / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / activity) / decayConstant;

  // Return the age rounded up to the nearest integer
  return Math.ceil(age);
}

module.exports = {
  dateSample
};
