var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  //Find all documents in the customers collection:
  dbo.collection("studentmarks").find({mathsmarks:{$lt :50},englishmarks:{$gt :50}},{name:true, _id:false}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
