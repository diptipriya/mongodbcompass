var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //Exclude "address" field in the result:var
   dbo = db.db("mydb")

  dbo.collection("customers").find({}, { projection: { name: 1, address: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
