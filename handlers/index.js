const fs = require('fs');

const fileNames = fs.readdirSync(__dirname);

module.exports = Object.assign(
  {},
  ...fileNames.map(name => require(`./${name}`))
);
