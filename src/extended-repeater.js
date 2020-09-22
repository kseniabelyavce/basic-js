const CustomError = require("../extensions/custom-error");

module.exports = 
function repeater(str, options) {
  let modified = []; // храним все добавляемые эелементы
  let repeat = options.repeatTimes ? options.repeatTimes : 1;
  const newStr = String(str); // убедились, что строка является строкой
  const separator = options.separator ? options.separator : '+';
  const addition = (options.addition === undefined) ? '' : String(options.addition); //???
  const additionSep = options.additionSeparator ? options.additionSeparator : '|';

  while (repeat > 0) {
    modified.push(newStr);

    let i = options.additionRepeatTimes ? options.additionRepeatTimes : 1;

    while (i > 0) {
      modified.push(addition);
      if (i > 1) {
        modified.push(additionSep);
      }
      i--;
    }

    if (repeat > 1) {
      modified.push(separator);
    }

    repeat--
  }

  return modified.filter(elem => elem !== '').join('')
  
}
