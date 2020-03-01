const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(req.cookies)
    if(!req.cookies['session-cookie']) {
        res.cookie('session-cookie', getRandomString(50))
    }
    res.send('hello')
})
app.listen(4000)
console.log("open http://localhost:4000/")

function getRandomString(count) {
    var randomStringChars = "abcdefghijklmnopqrstuvwxyz0123456789";

    var out = '';

    while(count-- > 0){
        out += randomStringChars[Math.floor(randomStringChars.length*Math.random())];
    }
    return out;
}
