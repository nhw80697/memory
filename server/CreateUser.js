const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url,  { useUnifiedTopology: true });

exports.newUser = async function newUser(name,pas,email){
    MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = db.db("ask");
        var nameCollection = name + "_personalInformation"
        dbo.createCollection(nameCollection, async function(err, res) {
          if (err) throw err;
          console.log("Collection created!");
          dbo.collection(nameCollection).insertOne({name: name, password: pas, email: email},async function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });
        });
      });
}
