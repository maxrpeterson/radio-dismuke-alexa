const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

console.log(path.resolve(__dirname, 'app.zip'));

const appZip = fs.createWriteStream(path.resolve(__dirname, 'app.zip'));

const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

archive.pipe(appZip);

const fileNames = fs.readdirSync(__dirname);

fileNames
  .filter(name => name !== 'app.zip')
  .forEach(name => {
    const stats = fs.statSync(name);
    if (stats.isFile()) {
      console.log(`adding file ${name}`);
      archive.file(name, { name });
    } else if (stats.isDirectory()) {
      console.log(`adding directory ${name}`);
      archive.directory(name, name);
    }
  });

archive.finalize();
