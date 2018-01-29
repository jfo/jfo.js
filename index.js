const util = require('util');
const fs = require('fs');

module.exports = function (thing, append = false) {
  if (append) {
    fs.appendFile('/tmp/jfo.log', util.format('%o\n', thing));
  } else {
    fs.writeFile('/tmp/jfo.log', util.format('%o\n', thing));
  }
};
