var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var vanja = { name: "Company Inc", address: "Highway 37" };
var uki=db.db("mydb");
  uki.collection("customers").insertOne(vanja, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
