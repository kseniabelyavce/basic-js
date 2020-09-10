const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformed = [];
  if (!Array.isArray(arr)) {
    throw 'Error';
  }
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char === '--discard-next') {
      if (arr[i+1] !== undefined) {
        i++;
      }
      else {
        continue
      }
    } 
    else if (char === '--discard-prev') {
      if (transformed[i-1] !== undefined) {
        transformed.pop();
      }
      else {
        continue
      }
    }
    else if (char === '--double-next') {
      if (arr[i+1] !== undefined) {
        transformed.push(arr[i+1]);
      }
      else {
        continue;
      }
    } 
    else if (char === '--double-prev') {
      if (transformed[i-1] !== undefined) {
        transformed.push(transformed[i-1]);
      }
      else {
        continue;
      }
    } 
    else {
      transformed.push(char);
    }
  }
  return transformed;
  }

// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))

