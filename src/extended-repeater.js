const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str.toString();
  options.addition = options.addition.toString();
  let modifiedStr = str + options.addition;
  
  let repeatTime = options.repeatTime ? options.repeatTime || 0;
  for (let i = 0; i < repeatTime; i++) {

  }
// options is an object of options, that contains properties:
//    repeatTimes: sets the number of repetitions of the str;
//    separator: is a string separating repetitions of the str;
//    addition: is an additional string that will be added to each repetition of the str;
//    additionRepeatTimes: sets the number of repetitions of the addition;
//    additionSeparator: is a string separating repetitions of the addition.
}
  