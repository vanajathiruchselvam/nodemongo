var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //Create a collection name "customers":
var vanja = db.db("student")
  vanja.createCollection("studentmarks", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
