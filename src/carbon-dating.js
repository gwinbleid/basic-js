const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const SAMPLE_ACTIVITY = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || isNaN(SAMPLE_ACTIVITY)) return false;
  if( SAMPLE_ACTIVITY <= 0 || SAMPLE_ACTIVITY > 15 ) return false;
  return Math.ceil(Math.log( MODERN_ACTIVITY / SAMPLE_ACTIVITY) * HALF_LIFE_PERIOD / 0.693);
};
