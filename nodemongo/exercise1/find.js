var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
var uki= db.db("music");
  uki.collection("songdetails").find({singer:'hariharan', film:'dheena'}, { _id: true, name: true, adress: true }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
