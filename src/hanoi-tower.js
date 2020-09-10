const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNum, turnSpeed) {
  let turns = 7;
  let obj = {};
  if (diskNum < 3) {
    turns = diskNum < 2 ? diskNum : 3;
  }
  else {
    while(diskNum !== 3) {
      turns = (turns * 2) + 1;
      diskNum--;
    }
  }
  obj['turns'] = turns;
  obj['seconds'] = Math.floor(turns * 3600 / turnSpeed);

  return obj;
};

