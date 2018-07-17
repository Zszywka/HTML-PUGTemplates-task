var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/store', function(req, res, next){
  console.log('jestes w middleware');
  next();
});

app.get('/', function(req, res) {
  res.send('Welcome to our application');
});

app.get('/dynamic-app', function(req, res){
  res.render('dynamic-app', {
    name: "Sign In",
    url: "http://www.google.com",
    url2: "/auth/google"
  });
});

app.get('/auth/google', function(req, res) {
  res.render('auth/google');
});

app.listen(3000);
app.use(function(req, res, next){
  res.status(400).send('error 404.Check your adress');
});
