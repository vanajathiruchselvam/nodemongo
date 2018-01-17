var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var myquery = { name: "lucky" };
  var newvalues = { $set: {sciencemarks:75} };
  dbo.collection("studentmarks").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
