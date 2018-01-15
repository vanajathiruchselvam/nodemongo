var fs = require('fs');

fs.rename('demo1.html', 'hello.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
