const CustomError = require("../extensions/custom-error");

module.exports = 
class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? Math.max(...arr.map(el => {return this.calculateDepth(el)})) + 1 : 0;
  }
}


