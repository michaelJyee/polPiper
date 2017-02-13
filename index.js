var express = require('express');
var app = express();

app.use(require("connect-assets")());
app.set('view engine','pug');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/app', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(9000, function () {
  console.log('Example app listening on port 9000!')
})