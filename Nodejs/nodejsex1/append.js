var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('ukinode.txt', 'i love ukivery much!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
