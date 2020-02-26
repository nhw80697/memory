const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const creatUser = require('./CreateUser');
const mainReq = require('./routes/main-req');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use(cookieParser())
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));

app.post("/דדד*", function(req,res,next){
    if (!req.session.password){
        res.render('http://localhost:4200/newUser');
    };
    next();
    console.log(req.session.name)
})

app.use('/main', mainReq);



// app.all("/*", function(req, res, next){
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     next();
//   });


// app.post('/check-sign-in', (req, res) => {

//     console.log(req.body);
//     if(req.body.name == "יוסי" && req.body.password == "1234"){res.send(true)}
//     else {res.send(false)} 
// });

// app.post('/creat-user', (req, res) => {
//     console.log(req.session);
//     console.log(req.body);
//     creatUser.newUser(req.body.name, req.body.password, req.body.email);
//     res.send(true);
// });
   
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
   });


  