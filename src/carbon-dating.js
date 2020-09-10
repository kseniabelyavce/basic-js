const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
 if (typeof sample !== 'string' || !Number(sample) || Number(sample) <= 0 || Number(sample) > 15) {
   return false;
 }
 
 let num = Number(sample);

 return Math.ceil(Math.abs((Math.log(MODERN_ACTIVITY / num) / 0.693) * HALF_LIFE_PERIOD));

};
