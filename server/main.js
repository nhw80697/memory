const express = require('express');
const app = express();

app.listen(3000, () => {
 console.log('Example app listening on port 3000!');
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/moshe', (req, res) => {
    res.send('Hello Moshe!');
});

myJson = [{"name": "יוסי", "password": "1234"}];
app.all('/CheckSignIn', (req, res) => {
    res.cookie('cookieName', 'cookieValue');
    res.send(myJson);
});
   