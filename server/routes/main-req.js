const express = require('express');
const router = express.Router();
const session = require('express-session')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const creatUser = require('../CreateUser');



router.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });


router.post('/check-sign-in', (req, res) => {
    console.log(req.body);
    if(req.body.name == "יוסי" && req.body.password == "1234"){res.send(true)}
    else {res.send(false)} 
});

router.post('/creat-user', (req, res) => {
    console.log(req.session);
    console.log(req.body);
    creatUser.newUser(req.body.name, req.body.password, req.body.email);
    res.send(true);
});
   
module.exports = router;


  