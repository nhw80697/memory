var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var domain = "http://localhost:4200";



app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });

  app.get("/add-post", function(req, res, next){
      res.send("test");
  });
  app.post("/add-post",  (req, res) =>{
      console.log(req.body)
    MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = db.db("testtodesktop");
        addPost = {question: req.body.question, answer: req.body.answer, cat: req.body.cat, sub: req.body.sub};
        dbo.collection('postes').insertOne({addPost}, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
      });
    });
});

 app.post("/view-posts", (req, res) =>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("testtodesktop");
        // var query = { } ;
        console.log(req.body);
        dbo.collection("postes").find( { $and: [ {"addPost.cat":req.body.cat} , {"addPost.sub":req.body.sub} ] } )
        .toArray(function(err, result) {
          if (err) throw err;
          console.log(result.length);
          res.send(result);
          db.close();
        });
      });
 })




app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
   });
