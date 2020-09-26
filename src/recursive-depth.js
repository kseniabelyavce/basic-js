const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1
    }

    return Array.isArray(arr) ? Math.max(...arr.map(arr => this.calculateDepth(arr))) + 1 : 0;
  }
}



