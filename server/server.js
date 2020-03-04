const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const creatUser = require('./CreateUser');
const mainReq = require('./routes/main-req');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use(cookieParser())
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));


app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });

app.post('/signup', (req, res) => {
    console.log(req.session);
    console.log(req.body);
    creatUser.newUser(req.body.name, req.body.password, req.body.email);
    res.send(true);
});


app.post('/login',(req, res) => {
    let username = req.body.name;
    let password = req.body.password;
    console.log(username + " " + password)

    MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("ask");
                dbo.collection("personalInformation").find({}, { projection: {_id: 0, userObg: 1 } })
                .toArray(function(err, result) {
                len = result.length;
                userFound = false;
                for(i = 0; i<len && !userFound; i++){
                    if(result[i].userObg.name==username){
                        if(result[i].userObg.password==password){
                            userFound = true;
                        }
                    }
                }
                if (!userFound){
                    console.log("ניסיון כניסה כושל");
                    resJson = {'mess': "לא נמצא שם משתמש", BOOL: false};
                    res.send(resJson);
                    // res.redirect('/login');
                }else{
                    // req.session.user = username;
                    // req.session.password = password;
                    console.log("ניסיון כניסה מוצלח");
                    resJson = {'mess': "נמצא!", BOOL: true, 'userName':username};
                    res.send(resJson);
                }
                })
            })
        })

app.post('/save',(req,res) => {

})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});