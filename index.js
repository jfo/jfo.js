const util = require('util');
const fs = require('fs');

module.exports = function (thing, logpath = '/tmp/jfo.log') {
  fs.writeFile(logpath, util.format('%o\n\n', thing));
};
