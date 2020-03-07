var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var creatUser = require('./CreateUser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var domain = "http://localhost:4200";

// invoke an instance of express application.
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.post("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });



// // set morgan to log info about our requests for development use.
// app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));




// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
// app.use((req, res, next) => {
//     if (req.cookies.user_sid && !req.session.user) {
//         res.clearCookie('user_sid');        
//     }
//     next();
// });


// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect(domain + '/ask-or-answer');
    } else {
        next();
    }    
};


// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
    res.redirect('/login');
});

app.post('/signup',(req, res) => {
    creatUser.newUser(req.body.name,req.body.password,req.body.email);
    console.log("user created");
})

// route for user signup
app.route('/signup')
    .get(sessionChecker, (req, res) => {
        res.redirect(domain + '/signup')
    })
    // .post((req, res) => {
    //     creatUser.newUser(req.body.name,req.body.password,req.body.email);
    //     console.log("user created");
    // });






// route for user Login
app.route('/login')
    .get(sessionChecker, (req, res) => {
        res.redirect(domain + '/login');
    })
    .post((req, res) => {
        var username = req.body.name,
            password = req.body.password;

            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("ask");
                dbo.collection("personalInformation").find({}, { projection: { userObg: 0 } })
                .toArray(function(err, result) {
                len = result.length;
                userFound = false;
                for(i = 0; i<=len && !userFound; i++){
                    if(result[i].name==username){
                        if(result[i].password==password){
                            userFound = true;
                        }
                    }
                }
                if (!userFound){
                    res.redirect('/login');
                }else{
                    req.session.user = username;
                    req.session.password = password;
                    res.redirect('/dashboard');
                }
                  if (err) throw err;
                  console.log(result);
                  db.close();
                });
              });

        // User.findOne({ where: { username: username } }).then(function (user) {
        //     if (!user) {
        //         res.redirect('/login');
        //     } else if (!user.validPassword(password)) {
        //         res.redirect('/login');
        //     } else {
        //         req.session.user = user.dataValues;
        //         res.redirect('/dashboard');
        //     }
        // });
    });


// route for user's dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.sendFile(domain + '/ask-or-answer');
    } else {
        res.redirect('/login');
    }
});


// route for user logout
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});


// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
   });
