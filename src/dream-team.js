const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let name = '';

  if (!Array.isArray(arr)) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      name += arr[i].trim()[0].toUpperCase();
    }
  }

  return name.split('').sort().join('');
};
