var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var vanja = [
    { name: 'mala',mathsmarks:45,englishmarks:53, sciencemarks:72},
    { name: 'vanu',mathsmarks:80, englishmarks:75, sciencemarks:85},
    { name: 'kala',mathsmarks:32, englishmarks:46, sciencemarks:53},
    { name: 'aruli',mathsmarks:78, englishmarks:85, sciencemarks:80},
    { name: 'shayu',mathsmarks:80, englishmarks:76, sciencemarks:65},
    { name: 'kumaran',mathsmarks:32, englishmarks:73, sciencemarks:84},
    { name: 'lucky',mathsmarks:66, englishmarks:90, sciencemarks:45},
    { name: 'gva',mathsmarks:71, englishmarks:75, sciencemarks:56},
    { name: 'raam',mathsmarks:41, englishmarks:65, sciencemarks:88},



  ];
  var uki=db.db("student");


  uki.collection("studentmarks").insertMany(vanja, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
