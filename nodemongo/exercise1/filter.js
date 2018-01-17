var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  /*Return only the documents with the address "Park Lane 38":*/
  var query = { musicdirector:'a.r.rahman' };
  var uki = db.db("music")
  uki.collection("songdetails").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
