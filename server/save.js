const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url,  { useUnifiedTopology: true });

exports.saveResponsa = async function saveResponsa(name,pas,email){
    MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = db.db("ask");
          userObg = {name: name, password: pas, email: email};
          dbo.collection('personalInformation').insertOne({userObg}, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });
        });
}
